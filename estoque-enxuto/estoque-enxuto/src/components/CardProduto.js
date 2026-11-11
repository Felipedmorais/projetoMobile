import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatarReal } from '../utils/formatar';
import { cores } from '../tema';

// Card de um produto: nome, preço, botão de editar e controle de estoque (- e +).
export default function CardProduto({ produto, onEditar, onMais, onMenos }) {
  const zerado = produto.qtd <= 0;

  return (
    <View style={styles.card}>
      <View style={styles.topo}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nome}>{produto.nome}</Text>
          <Text style={styles.preco}>{formatarReal(produto.preco)}</Text>
        </View>
        <Pressable onPress={onEditar} hitSlop={10}>
          <Ionicons name="create-outline" size={24} color={cores.primaria} />
        </Pressable>
      </View>

      <View style={styles.estoque}>
        <Text style={styles.label}>Em estoque</Text>
        <View style={styles.controle}>
          <Pressable onPress={onMenos} disabled={zerado} style={[styles.btn, zerado && { opacity: 0.4 }]}>
            <Ionicons name="remove" size={22} color={cores.texto} />
          </Pressable>
          <Text style={styles.qtd}>{produto.qtd}</Text>
          <Pressable onPress={onMais} style={[styles.btn, styles.btnMais]}>
            <Ionicons name="add" size={22} color="#FFF" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  topo: { flexDirection: 'row', alignItems: 'flex-start' },
  nome: { fontSize: 18, color: cores.texto },
  preco: { fontSize: 17, fontWeight: '700', color: cores.primaria, marginTop: 2 },
  estoque: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
  },
  label: { fontSize: 14, color: cores.cinza },
  controle: { flexDirection: 'row', alignItems: 'center' },
  btn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: cores.borda,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMais: { backgroundColor: cores.primaria, borderColor: cores.primaria },
  qtd: { minWidth: 56, textAlign: 'center', fontSize: 22, fontWeight: '700', color: cores.texto },
});
