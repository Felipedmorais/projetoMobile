import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { cores } from '../tema';

// Botão reutilizável. variante: 'cheio' (preenchido) ou 'borda' (só contorno).
export default function Botao({ titulo, onPress, variante = 'cheio' }) {
  const cheio = variante === 'cheio';

  return (
    <Pressable onPress={onPress} style={[styles.botao, cheio ? styles.cheio : styles.borda]}>
      <Text style={[styles.texto, { color: cheio ? '#FFF' : cores.primaria }]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 52,
    borderRadius: 999,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cheio: { backgroundColor: cores.primaria, borderColor: cores.primaria },
  borda: { borderColor: cores.cinza },
  texto: { fontSize: 17, fontWeight: '500' },
});
