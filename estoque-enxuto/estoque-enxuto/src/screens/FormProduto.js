import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import Campo from '../components/Campo';
import { useEstoque } from '../EstoqueContext';
import { formatarReal, lerPreco, lerQtd } from '../utils/formatar';
import { cores } from '../tema';

// Tela 3: cadastra um produto novo ou edita um existente (quando recebe o id).
export default function FormProduto({ navigation, route }) {
  const { produtos, addProduto, editarProduto } = useEstoque();
  const produto = produtos.find((p) => p.id === route.params?.id);

  const [nome, setNome] = useState(produto?.nome ?? '');
  const [preco, setPreco] = useState(produto ? produto.preco.toFixed(2).replace('.', ',') : '');
  const [qtd, setQtd] = useState(produto ? String(produto.qtd) : '');
  const [erros, setErros] = useState({});

  const precoNum = lerPreco(preco);
  const qtdNum = lerQtd(qtd);
  const valorProduto = precoNum > 0 && qtdNum >= 0 ? precoNum * qtdNum : 0;

  function handleSalvar() {
    const novosErros = {};
    if (!nome.trim()) novosErros.nome = 'Digite o nome do produto.';
    if (!(precoNum > 0)) novosErros.preco = 'Informe um preço maior que zero, como 5,99.';
    if (isNaN(qtdNum)) novosErros.qtd = 'Informe um número inteiro, como 25. Pode ser 0.';
    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    const dados = { nome: nome.trim(), preco: precoNum, qtd: qtdNum };
    if (produto) editarProduto(produto.id, dados);
    else addProduto(dados);
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
      <Campo label="Nome do produto" value={nome} onChangeText={setNome} placeholder="Ex.: Arroz Branco 5kg" erro={erros.nome} />
      <Campo label="Preço (R$)" value={preco} onChangeText={setPreco} placeholder="Ex.: 5,99" keyboardType="decimal-pad" erro={erros.preco} />
      <Campo label="Quantidade em estoque" value={qtd} onChangeText={setQtd} placeholder="Ex.: 25" keyboardType="number-pad" erro={erros.qtd} />

      <View style={styles.total}>
        <Text style={styles.totalLabel}>Valor deste produto no estoque</Text>
        <Text style={styles.totalValor}>{formatarReal(valorProduto)}</Text>
      </View>

      <Botao titulo={produto ? 'Salvar alterações' : 'Salvar produto'} onPress={handleSalvar} />
      <View style={{ height: 10 }} />
      <Botao titulo="Cancelar" variante="borda" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { padding: 16, paddingBottom: 32 },
  total: {
    backgroundColor: '#EEEBF8',
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalLabel: { flex: 1, fontSize: 14, color: cores.cinza, marginRight: 12 },
  totalValor: { fontSize: 20, fontWeight: '700', color: cores.texto },
});
