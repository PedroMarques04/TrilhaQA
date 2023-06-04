function contarLetraAMinuscula() {
    var palavra = document.getElementById("palavra").value
    var contador = 0    
    
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === "a") {
        contador++
      }
    }    
  document.getElementById("result").innerHTML = `Quantidade de letras 'a' minúscula: ${contador}`
  }
    
  