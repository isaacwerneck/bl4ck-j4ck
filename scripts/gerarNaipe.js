const Naipe = ["ouro", "copas", "paus", "espadas"]
const Valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

function randomizar() {
const numeroNaipe = Math.floor(Math.random() * Naipe.length)
const numeroValor = Math.floor(Math.random() * Valor.length)


if (numeroNaipe === 0 ) {realNaipe = "♥"}
if (numeroNaipe === 1 ) {realNaipe = "♦"}
if (numeroNaipe === 2 ) {realNaipe = "♣"}
if (numeroNaipe === 3 ) {realNaipe = "♠"}
if (numeroValor === 0 ) {realValor = "A"}
if (numeroValor === 1 ) {realValor = "2"}   
if (numeroValor === 2 ) {realValor = "3"}
if (numeroValor === 3 ) {realValor = "4"}
if (numeroValor === 4 ) {realValor = "5"}
if (numeroValor === 5 ) {realValor = "6"}
if (numeroValor === 6 ) {realValor = "7"}
if (numeroValor === 7 ) {realValor = "8"}
if (numeroValor === 8 ) {realValor = "9"}
if (numeroValor === 9 ) {realValor = "10"}
if (numeroValor === 10 ) {realValor = "J"}
if (numeroValor === 11 ) {realValor = "Q"}
if (numeroValor === 12 ) {realValor = "K"}
}