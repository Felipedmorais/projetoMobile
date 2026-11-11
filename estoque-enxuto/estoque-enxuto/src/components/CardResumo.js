import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cores } from '../tema';

// Card de resumo da tela inicial (ícone, título e valor).
export default function CardResumo({ icone, titulo, valor }) {
  return (
    <View style={styles.card}>
      <Ionicons name={icone} size={26} color={cores.primaria} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.valor} numberOfLines={1} adjustsFontSizeToFit>
        {valor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: cores.card,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 20,
    padding: 16,
  },
  titulo: { color: cores.cinza, fontSize: 14, marginTop: 10 },
  valor: { color: cores.texto, fontSize: 24, fontWeight: '700', marginTop: 4 },
});
