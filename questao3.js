  function calculaVetores(){
    var numeros = []
  
    // Geração de números aleatórios até 100 e preenchimento do vetor
    for (var i = 0; i < 100; i++) {
      numeros.push(Math.floor(Math.random() * 100))
    }
    var impares = []
    var restoDivisaoPorCinco = []
    
    for (var i = 0; i < numeros.length; i++) {
      var numero = numeros[i]
    
      if (numero % 2 !== 0) {
        impares.push(numero)
      } else {
        restoDivisaoPorCinco.push(numero % 5);
      }
    }
    // Exibir os valores de cada um dos vetores
    document.getElementById("result").innerHTML = `Números ímpares: ${impares}`   
    document.getElementById("result").innerHTML += `<br>Resto da divisão por 5 dos números pares: ${restoDivisaoPorCinco}`
    
  }
  
  