import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { cores } from '../tema';

// Campo de texto com rótulo e mensagem de erro.
export default function Campo({ label, erro, ...props }) {
  return (
    <View style={styles.campo}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, erro && { borderColor: cores.erro }]}
        placeholderTextColor={cores.cinza}
        {...props}
      />
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  campo: { marginBottom: 16 },
  label: { fontSize: 14, color: cores.cinza, marginBottom: 6 },
  input: {
    minHeight: 52,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: cores.borda,
    borderRadius: 14,
    backgroundColor: cores.card,
    fontSize: 17,
    color: cores.texto,
  },
  erro: { color: cores.erro, fontSize: 14, marginTop: 6 },
});
