// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
var nomeHeroi = "Henrique";
var xpHeroi = 6000;

// Variável para armazenar o nível do herói
var nivelHeroi;

// Utilizando switch case para classificar o nível do herói com base na XP
switch(true) {
    case (xpHeroi < 1000):
        nivelHeroi = "Ferro";
        break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
        nivelHeroi = "Bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
        nivelHeroi = "Prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
        nivelHeroi = "Ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
        nivelHeroi = "Platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
        nivelHeroi = "Ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
        nivelHeroi = "Imortal";
        break;
    case (xpHeroi >= 10001):
        nivelHeroi = "Radiante";
        break;
    default:
        nivelHeroi = "Indefinido";
        break;
}

// Exibir mensagem com o nível do herói
console.log("O Herói de " + nomeHeroi + " está no nível de " + nivelHeroi);
