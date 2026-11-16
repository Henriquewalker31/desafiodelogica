# Classificador de Nível de Herói

Desafio de lógica de programação em **JavaScript**: a partir do nome e da quantidade de experiência (XP) de um herói, o programa calcula e exibe o nível correspondente.

## Regras

| XP | Nível |
|---|---|
| até 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| 10.001 ou mais | Radiante |

## Como rodar

Pré-requisito: **Node.js 18+**.

```bash
git clone https://github.com/Henriquewalker31/desafiodelogica.git
cd desafiodelogica
node index.js
```

Saída esperada com os valores padrão do arquivo (`xpHeroi = 6000`):

```
O Herói de Henrique está no nível de Ouro
```

## Como testar outros valores

As variáveis ficam no topo de `index.js`:

```js
var nomeHeroi = "Henrique";
var xpHeroi = 6000;
```

Altere `xpHeroi` para qualquer valor e execute `node index.js` novamente.

## Estrutura

```
desafiodelogica/
└── index.js    # classificação por switch e exibição no console
```

## Conceitos praticados

- Variáveis e tipos.
- Estruturas condicionais com `switch`.
- Comparação de intervalos numéricos.
- Saída no console.

## Autor

Feito por [Henrique Walker](https://github.com/Henriquewalker31).
