var categoria = document.getElementById("categoria");
var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var valorDeEntrada = document.getElementById("valorDeEntrada");

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

function converteComprimento() {
  if (entrada.value == "metros" && saida.value === "centimetros") {
    return (valorDeEntrada.value * 100);
  } else if (entrada.value == "centimetros" && saida.value === "metros") {
    return (valorDeEntrada.value / 100);
  } else if (entrada.value == "centimetros" && saida.value === "polegadas") {
    return (valorDeEntrada.value / 2, 54);
  } else if (entrada.value == "polegadas" && saida.value === "centimetros") {
    return (valorDeEntrada.value * 2, 54);
  } else if (entrada.value == "polegadas" && saida.value === "metros") {
    return (valorDeEntrada.value / 39, 37);
  } else if (entrada.value == "metros" && saida.value === "polegadas") {
    return (valorDeEntrada.value * 39, 37);
  }
}

function converteTemperatura() {
  if (entrada.value == "celsius" && saida.value === "fahrenheit") {
    return (valorDeEntrada.value * 9) / 5 + 32;
  } else if (entrada.value == "fahrenheit" && saida.value === "celsius") {
    return (valorDeEntrada.value - 32) * 5 / 9;
  } else if (entrada.value == "celsius" && saida.value === "kelvin") {
    return (valorDeEntrada.value + 273, 15);
  } else if (entrada.value == "kelvin" && saida.value === "celsius") {
    return (valorDeEntrada.value - 273, 15);
  } else if (entrada.value == "fahrenheit" && saida.value === "kelvin") {
    return (valorDeEntrada.value - 32) * 5 / 9 + 273, 15;
  } else if (entrada.value == "kelvin" && saida.value === "fahrenheit") {
    return (valorDeEntrada.value - 273, 15) * 9 / 5 + 32;
  }
}

function convertePeso() {
  if (entrada.value == "quilograma" && saida.value === "gramas") {
    return (valorDeEntrada.value * 1000);
  } else if (entrada.value == "gramas" && saida.value === "quilograma") {
    return (valorDeEntrada.value / 1000);
  } else if (entrada.value == "gramas" && saida.value === "libras") {
    return (valorDeEntrada.value / 453,6);
  } else if (entrada.value == "libras" && saida.value === "gramas") {
    return (valorDeEntrada.value * 453,6);
  } else if (entrada.value == "libras" && saida.value === "quilograma") {
    return (valorDeEntrada.value / 2,205);
  } else if (entrada.value == "quilograma" && saida.value === "libras") {
    return (valorDeEntrada.value *2,205);
  }
}

