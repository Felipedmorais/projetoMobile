import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { EstoqueProvider } from './src/EstoqueContext';
import Inicio from './src/screens/Inicio';
import Produtos from './src/screens/Produtos';
import FormProduto from './src/screens/FormProduto';
import { cores } from './src/tema';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <EstoqueProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: cores.fundo },
              headerTintColor: cores.texto,
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Início' }} />
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen
              name="FormProduto"
              component={FormProduto}
              options={({ route }) => ({
                title: route.params?.id ? 'Editar produto' : 'Novo produto',
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </EstoqueProvider>
    </SafeAreaProvider>
  );
}
