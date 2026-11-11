import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardProduto from '../components/CardProduto';
import { useEstoque } from '../EstoqueContext';
import { cores } from '../tema';

// Tela 2: lista de produtos com botões - e + e ícone de editar.
export default function Produtos({ navigation }) {
  const { produtos, mudarQtd } = useEstoque();

  return (
    <View style={styles.tela}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum produto ainda. Toque no + para cadastrar.</Text>}
        renderItem={({ item }) => (
          <CardProduto
            produto={item}
            onEditar={() => navigation.navigate('FormProduto', { id: item.id })}
            onMais={() => mudarQtd(item.id, 1)}
            onMenos={() => mudarQtd(item.id, -1)}
          />
        )}
      />

      <Pressable style={styles.fab} onPress={() => navigation.navigate('FormProduto')}>
        <Ionicons name="add" size={30} color="#FFF" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo },
  lista: { padding: 16, paddingBottom: 100 },
  vazio: { fontSize: 16, color: cores.cinza, textAlign: 'center', marginTop: 40 },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});
