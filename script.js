
// ------------------------------------------------------------chamando as variaveis---//

var categoria = document.getElementById("categoria");
var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var valorDeEntrada = document.getElementById("valorDeEntrada");
var botao= document.getElementById("botao")

// ------------------------------------------------------------Criando as opções para selecionar --//

categoria.addEventListener("change", function () {
  if (categoria.value == "temperatura") {
    entrada.innerHTML = `
    <option value="celsius">celsius</option>
    <option value="Fahrenheit">Fahrenheit</option>
    <option value="kelvin">kelvin</option>`;
    saida.innerHTML = ` 
    <option value="celsius">celsius</option>
    <option value="fahrenheit">Fahrenheit</option>
    <option value="kelvin">kelvin</option>`;
  } else if (categoria.value == "peso") {
    entrada.innerHTML = `
    <option value="quilograma">quilograma</option>
    <option value="gramas">gramas</option>
    <option value="libras">libras</option>`;
    saida.innerHTML = ` 
    <option value="quilograma">quilograma</option>
    <option value="gramas">gramas</option>
    <option value="libras">libras</option>`;
  } else if (categoria.value == "comprimento") {
    entrada.innerHTML = `
    <option value="metros">metros</option>
    <option value="centimetros">centimentros</option>
    <option value="polegadas">polegadas</option>`;
    saida.innerHTML = ` 
    <option value="metros">metros</option>
    <option value="centimetros">centimetros</option>
    <option value="polegadas">polegadas</option>`;
  }
});

// ------------------------------------------------------------

botao.addEventListener("click",function(){
  if (entrada.value == "metros" && saida.value === "centimetros") {
    return (valorDeEntrada.value * 100);
  } else if (entrada.value == "centimetros" && saida.value === "metros") {
    return (valorDeEntrada.value / 100);
  } else if (entrada.value == "centimetros" && saida.value === "polegadas") {
    return (valorDeEntrada.value / 2.54);
  } else if (entrada.value == "polegadas" && saida.value === "centimetros") {
    return (valorDeEntrada.value * 2.54);
  } else if (entrada.value == "polegadas" && saida.value === "metros") {
    return (valorDeEntrada.value / 39.37);
  } else if (entrada.value == "metros" && saida.value === "polegadas") {
    return (valorDeEntrada.value * 39.37);
  }

})

// -----------------------------------------------unidade de medida comprimento---//

function metrosCentimetros(metros){
var centimentros= (metros *100);
return centimentros;
}
function centimentrosMetros(centimentros){
  var metros= (centimentros / 100);
  return metros;
}
function centimentrosPolegadas(centimetros){
var polegadas= (centimetros / 2.54);
}
function polegadasCentimetros(polegadas){
  var centimetros=(polegadas * 2.54);
  return centimetros;
}
function polegadasMetros(polegadas){
  var metros=(polegadas / 39.37);
  return metros;
}
function metrosPolegadas(metros){
  var polegadas=(metros * 39.37);
  return polegadas;
}

// ---------------------------------------------------------unidade de medidade temperatura---//

function celsiusFahrenheit(celsius){
  var fahrenheit=(celsius * 9 / 5) + 32;
  return fahrenheit;
}
function fahrenheitCelsius(fahrenheit){
  var celsius=(fahrenheit - 32) * 5 / 9;
  return celsius;
}
function celsiusKelvin(celsius){
  var kelvin=(celsius + 273.15);
  return kelvin;
}
function kelvinCelsius(kelvin){
  var celsius=(kelvin - 273.15);
  return celsius;
}
function fahrenheitKelvin(fahrenheit){
  var kelvin=(fahrenheit - 32)* 5 / 9 + 273.15;
  return kelvin;
}
function kelvinfahrenheit(kelvin){
  var fahrenheit=( kelvin - 273.15)* 9 / 5 + 32;
  return fahrenheit;
}

// --------------------------------------------------------- unidade de medida peso ----//

function quilogramaGramas(quilograma){
  var gramas=(quilograma * 1000);
  return gramas;
}
function gramasQuilograma(gramas){
  var quilograma=(gramas / 1000);
  return quilograma;
}
function gramasLibras(gramas){
  var libras=(gramas / 453.6);
  return libras;
}
function librasGramas(libras){
  var gramas=(libras *453.6);
  return gramas;
}
function librasQuilograma(libras){
  var quilograma=(libras / 2.205);
  return quilograma;
}
function quilogramaLibras(quilograma){
  var libras=(quilograma *2.205);
  return libras;
}

// function converteComprimento() {
//   if (entrada.value == "metros" && saida.value === "centimetros") {
//     return (valorDeEntrada.value * 100);
//   } else if (entrada.value == "centimetros" && saida.value === "metros") {
//     return (valorDeEntrada.value / 100);
//   } else if (entrada.value == "centimetros" && saida.value === "polegadas") {
//     return (valorDeEntrada.value / 2.54);
//   } else if (entrada.value == "polegadas" && saida.value === "centimetros") {
//     return (valorDeEntrada.value * 2.54);
//   } else if (entrada.value == "polegadas" && saida.value === "metros") {
//     return (valorDeEntrada.value / 39.37);
//   } else if (entrada.value == "metros" && saida.value === "polegadas") {
//     return (valorDeEntrada.value * 39.37);
//   }
// }

// function converteTemperatura() {
//   if (entrada.value == "celsius" && saida.value === "fahrenheit") {
//     return (valorDeEntrada.value * 9) / 5 + 32;
//   } else if (entrada.value == "fahrenheit" && saida.value === "celsius") {
//     return (valorDeEntrada.value - 32) * 5 / 9;
//   } else if (entrada.value == "celsius" && saida.value === "kelvin") {
//     return (valorDeEntrada.value + 273.15);
//   } else if (entrada.value == "kelvin" && saida.value === "celsius") {
//     return (valorDeEntrada.value - 273.15);
//   } else if (entrada.value == "fahrenheit" && saida.value === "kelvin") {
//     return (valorDeEntrada.value - 32) * 5 / 9 + 273.15;
//   } else if (entrada.value == "kelvin" && saida.value === "fahrenheit") {
//     return (valorDeEntrada.value - 273.15) * 9 / 5 + 32;
//   }
// }

// function convertePeso() {
  // if (entrada.value == "quilograma" && saida.value === "gramas") {
  //   return (valorDeEntrada.value * 1000);
  // } else if (entrada.value == "gramas" && saida.value === "quilograma") {
  //   return (valorDeEntrada.value / 1000);
  // } else if (entrada.value == "gramas" && saida.value === "libras") {
  //   return (valorDeEntrada.value / 453.6);
  // } else if (entrada.value == "libras" && saida.value === "gramas") {
  //   return (valorDeEntrada.value * 453.6);
  // } else if (entrada.value == "libras" && saida.value === "quilograma") {
  //   return (valorDeEntrada.value / 2.205);
//   } else if (entrada.value == "quilograma" && saida.value === "libras") {
//     return (valorDeEntrada.value *2.205);
//   }
// }

