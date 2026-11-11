# Estoque do Mercado

Protótipo em React Native + Expo para controlar o estoque de um mercado.

## Como rodar

1. `npm install`
2. `npx expo start`
3. Abra no celular com o **Expo Go** (QR code) ou aperte `a` para o emulador Android.

## Telas

| Tela | Arquivo | O que faz |
| --- | --- | --- |
| Início | `src/screens/Inicio.js` | Mostra quantos produtos existem e o total em estoque (preço × quantidade). |
| Produtos | `src/screens/Produtos.js` | Lista os produtos, com **-** e **+** para ajustar o estoque e lápis para editar. |
| Novo / Editar | `src/screens/FormProduto.js` | Formulário de nome, preço e quantidade (serve para cadastrar e editar). |

## Estrutura

```
App.js                    navegação
src/tema.js               cores
src/EstoqueContext.js     state dos produtos (useState + Context)
src/utils/formatar.js     formatarReal, lerPreco, lerQtd
src/components/           Botao, Campo, CardResumo, CardProduto
src/screens/              Inicio, Produtos, FormProduto
```
