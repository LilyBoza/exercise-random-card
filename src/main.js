/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // se crea un arreglo con los valores que va a cambiar el numero de la carta
  var arr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  // a element se le asigna un numero randon del cero a la longitud del arreglo-1
  let element = Math.floor(Math.random() * arr.length);
  // a la variable number se le asiga el nuevo numero que contendra la carta según el arreglo definido anteriormente
  let number = arr[element];
  // se crea un arreglo con los valores que va a cambiar el simbolo de la carta
  var symbol = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  // a symbolNumber se le asigna un numero randon del cero a la longitud del arreglo-1
  // a la variable NewSymbol se le asiga el nuevo simbolo que contendra la carta según el arreglo symbol
  let symbolNumber = Math.floor(Math.random() * symbol.length);
  let NewSymbol = symbol[symbolNumber];

  //   se coloca el nuevo valor del numero y el sombolo en el HTML con innerHTML
  let changeNumber = document.getElementById("sizeNumber");
  changeNumber.innerHTML = number;
  let changeSymbol_top = document.getElementById("symbol-top");
  let changeSymbol_botton = document.getElementById("symbol-botton");
  // Se realiza un condicional de manera que si el random da spades o clubs los coloque de color negro y al HTML
  if (NewSymbol == "&spades;" || NewSymbol == "&clubs;") {
    changeSymbol_botton.style.color = "black";
    changeSymbol_top.style.color = "black";

    changeSymbol_botton.innerHTML = NewSymbol;
    changeSymbol_top.innerHTML = NewSymbol;
    // este else if permite que si el random de los simbolos me da hearts o diams entonces el simbolo sea rojo y se asigne al HTML
  } else if (NewSymbol == "&hearts;" || NewSymbol == "&diams;") {
    changeSymbol_botton.style.color = "red";
    changeSymbol_top.style.color = "red";

    changeSymbol_botton.innerHTML = NewSymbol;
    changeSymbol_top.innerHTML = NewSymbol;
  }
};
