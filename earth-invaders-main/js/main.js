const C_ALTURA = 600; // Default = 600
const C_LARGURA = 400; // Default = 400

const TECLA_ESQUERDA = 37; // Default = 37
const TECLA_DIREITA = 39; // Default = 39
const TECLA_ACIMA = 38; // Default = 38

var INTERVALO_MOVER_ALIENS = 40; // Default = 17
const INTERVALO_ALIEN_ATINGIDO = 6; // Default = 6
const VELOCIDADE_ALIEN = 1; // Default = 1
const ALIEN_COLUNAS = [55, 85, 115, 145, 175]; // Default = [55, 85, 115, 145, 175]
const ALIEN_LINHAS = [10, 38, 66, 94, 122, 150, 178, 206, 234, 262, 290]; // Default = [10, 38, 66, 94, 122, 150, 178, 206, 234, 262, 290]

const INTERVALO_MISSIL = 40; // Default = 40
const VELOCIDADE_MISSIL = 10; // Default = 10

const INTERVALO_CHANCE_APARECER_NAVE = 5000;  // Default = 5000
const INTERVALO_MOVER_NAVE = 18; // Default = 18
const VELOCIDADE_NAVE = 3; // Default = 3
const CHANCE_APARECER_NAVE = 0.8; // Default = 0.2

const CANHAO_Y_ORIGINAL = 529; // Default = 529
const CANHAO_X_ORIGINAL = 180; // Default = 180;
const VELOCIDADE_CANHAO = 8; // Default = 8

const LASER_Y_ORIGINAL = 520; // Default = 520
const INTERVALO_LASER_MOVENDO = 15; // Default = 10
const VELOCIDADE_LASER = 20; // Default = 20

const PONTUACAO_ALIEN_3 = 40; // Default = 40
const PONTUACAO_ALIEN_2 = 20; // Default = 20
const PONTUACAO_ALIEN = 10; // Default = 10

const VIDAS_INICIAL = 3;
// debugger na tela

// const t_canhaoX = document.querySelector('.canhaoX');
// const t_canhaoY = document.querySelector('.canhaoY');
// const t_missilX = document.querySelector('.missilX');
// const t_missilY = document.querySelector('.missilY');
// const t_alienX = document.querySelector('.alienX');
// const t_alienY = document.querySelector('.alienY');
// const t_alienAtirador = document.querySelector('.alienAtirador');
const t_mouseX = document.querySelector('.mouseX');
const t_mouseY = document.querySelector('.mouseY');
const t_naveX = document.querySelector('.naveX');
const t_naveY = document.querySelector('.naveY');
const t_laserX = document.querySelector('.laserX');
const t_laserY = document.querySelector('.laserY');
const t_naveApareceu = document.querySelector('.naveApareceu');
const e_vidas = document.querySelector('.vidas');
const vidaUm = document.querySelector('.vida-um');
const vidaDois = document.querySelector('.vida-dois');
const vidaTres = document.querySelector('.vida-tres');
const e_pontuacao = document.querySelector('.pontuacao');
const e_pontuacaoGanha = document.querySelector('.pontuacao-ganha');
const e_pontoNave = document.querySelector('.ponto-nave');
const e_backgroundWinGame = document.querySelector('.background-win-game');
const e_finalScoreWin = document.querySelector('.score-p-win');
const e_playAgainWin = document.querySelector('.you-win-footer .play-again');
const e_backgroundLoseGame = document.querySelector('.background-lose-game');
const e_finalScoreLose = document.querySelector('.score-p-lose');
const e_playAgainLose = document.querySelector('.you-lose-footer .play-again');
const e_bonus = document.querySelector('.bonus-p');
const e_initialGameScreen = document.querySelector('.initial-game-screen');
const e_playGame = document.querySelector('.play-game');
const e_rankingMenu = document.querySelector('.game-menu .ranking');
const e_rankingWin = document.querySelector('.you-win-footer .ranking');
const e_rankingLose = document.querySelector('.you-lose-footer .ranking');

var tela;
var c;
var bc;

var canhao;
var laser;
var alien;
var background; 
var backgroundImage;
var laserMovendo;
var alienHit;
var canonHit;
var backgroundMusic;
var spaceShipMoving;
var spaceShipHit;
var gameOver;
var gameWin;
var scoreCounter;

var canhaoX = CANHAO_X_ORIGINAL;
var canhaoY = CANHAO_Y_ORIGINAL;
var laserX = 193;
var laserY = LASER_Y_ORIGINAL
var missilX = 0;
var missilY = 0;
var alienX = 0;
var alienY = 0;
var naveY = 15;
var naveX = 0;
var metadeDoAlienX = 5;
var aliensAbatido = 0;

var inicioLaser = false;
var missilFoiDisparado = false;
var naveComecou = false
var naveComecouEsquerda = false;
var naveComecouDireita = false;
var jogoAcabou = false;
var jogoComecou = false;
var jogoRodando = false;
var acertouNaveEspecial = false;


var vidas = VIDAS_INICIAL;
var intervaloMoverNave = 0;
var apagaPontoGanhoIdTimeOut = 0;
var posicao = 0;
var pontuacao = 0;
var intervaloAparecerNave = 0;
var laserMovendo;
var missilMovendo;
var impactoLaserX;
var somador = 0;
var intervaloContadorDePontos = 0;
var intervaloSomAlienSeMexendo = 0;

const menuNavigate = new Audio('sounds/menu-navigate2.mp3');
menuNavigate.volume = 0.1;

var aliensRestantes = [];

e_playGame.addEventListener('click', comecaJogo);
e_playGame.addEventListener('mouseover', function(){
    menuNavigate.play();
})

e_rankingMenu.addEventListener('mouseover', function(){
    menuNavigate.play();
})

function comecaJogo() {
    jogoComecou = true;
    preIniciar();
}


