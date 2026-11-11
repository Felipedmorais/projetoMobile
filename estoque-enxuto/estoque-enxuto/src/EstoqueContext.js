import React, { createContext, useContext, useState } from 'react';

// Dados de exemplo para o app já abrir com produtos.
const PRODUTOS_INICIAIS = [
  { id: 1, nome: 'Chocolate Lacta ao Leite 90g', preco: 5.96, qtd: 60 },
  { id: 2, nome: 'Coca-Cola Lata 350ml', preco: 3.0, qtd: 120 },
  { id: 3, nome: 'Detergente Ypê 500ml', preco: 1.99, qtd: 100 },
  { id: 4, nome: 'Pão de Forma Tradicional', preco: 5.99, qtd: 40 },
];

const EstoqueContext = createContext(null);

// Guarda a lista de produtos (useState) e compartilha com todas as telas.
export function EstoqueProvider({ children }) {
  const [produtos, setProdutos] = useState(PRODUTOS_INICIAIS);

  const addProduto = (dados) => setProdutos((lista) => [{ id: Date.now(), ...dados }, ...lista]);

  const editarProduto = (id, dados) =>
    setProdutos((lista) => lista.map((p) => (p.id === id ? { ...p, ...dados } : p)));

  const mudarQtd = (id, delta) =>
    setProdutos((lista) =>
      lista.map((p) => (p.id === id ? { ...p, qtd: Math.max(0, p.qtd + delta) } : p))
    );

  // Total do estoque = soma de preço x quantidade.
  const totalEstoque = produtos.reduce((soma, p) => soma + p.preco * p.qtd, 0);

  return (
    <EstoqueContext.Provider value={{ produtos, totalEstoque, addProduto, editarProduto, mudarQtd }}>
      {children}
    </EstoqueContext.Provider>
  );
}

export const useEstoque = () => useContext(EstoqueContext);
