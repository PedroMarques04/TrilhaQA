function calculaValorRefeicao() {
    var valorQuilo = parseFloat(document.getElementById("valorQuilo").value)
    var taraPrato = parseFloat(document.getElementById("valorTara").value)
    var pesoPrato = parseFloat(document.getElementById("pesoPrato").value)
  
    var pesoLiquido = pesoPrato - taraPrato
    var refeicao = pesoLiquido * valorQuilo/1000
    //divisão por 1000 pois o valor em reais é calculado por quilo e os pesos recebidos estão em gramas
    var mensagem = ""
    if(valorQuilo <=0 || taraPrato <=0 || pesoPrato <=0){
        mensagem += "Os valores devem ser positivos <br>"
        document.getElementById("result").innerHTML = mensagem    
    } 
    if(pesoPrato <= taraPrato) {
        mensagem += "O peso do prato deve ser maior que a tara<br>"
        document.getElementById("result").innerHTML = mensagem
    }
    if (mensagem === "" && refeicao > 0 ){
        mensagem = `O prato de ${pesoPrato} gramas custa: R$ ${refeicao.toFixed(2)}`
        document.getElementById("result").innerHTML = mensagem
    } else{
        mensagem += `Insira os valores corretamente`
        document.getElementById("result").innerHTML = mensagem
    }

  }