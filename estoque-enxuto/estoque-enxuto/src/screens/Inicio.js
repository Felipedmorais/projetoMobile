import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import CardResumo from '../components/CardResumo';
import { useEstoque } from '../EstoqueContext';
import { formatarReal } from '../utils/formatar';
import { cores } from '../tema';

// Tela 1: resumo do estoque e atalhos.
export default function Inicio({ navigation }) {
  const { produtos, totalEstoque } = useEstoque();

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.subtitulo}>Controle os produtos e o estoque do seu mercado.</Text>

      <View style={styles.linha}>
        <CardResumo icone="cube-outline" titulo="Produtos" valor={String(produtos.length)} />
        <CardResumo icone="cash-outline" titulo="Total em estoque" valor={formatarReal(totalEstoque)} />
      </View>

      <Botao titulo="Adicionar produto" onPress={() => navigation.navigate('FormProduto')} />
      <View style={{ height: 12 }} />
      <Botao titulo="Ver produtos" variante="borda" onPress={() => navigation.navigate('Produtos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo, padding: 16 },
  titulo: { fontSize: 26, fontWeight: '700', color: cores.texto },
  subtitulo: { fontSize: 17, color: cores.cinza, marginTop: 4, marginBottom: 20 },
  linha: { flexDirection: 'row', gap: 12, marginBottom: 24 },
});
