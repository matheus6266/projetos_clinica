// Função que calcula o tempo considerando a velocidade média de 60km/h

function calculaTempoDeslocamento (distanciaPercorrida) {
    var tempoDeslocamento = distanciaPercorrida/60;
    return tempoDeslocamento
}

//Função que calcula o custo total considerando um consumo de 10km/l
function calculaCombustivel (distanciaPercorrida, custoCombustivel){

    //Declaração do consumo do carro em 10km/l
    var consumoCarro = 10;
    var consumoCombustivel = distanciaPercorrida/consumoCarro;
    var custoTotalCombustivel = consumoCombustivel *  custoCombustivel;

    return custoTotalCombustivel
}

// Função que calcula o custo da hora

function calculaCustoHora (custoHora, distanciaPercorrida){

    var tempoDeslocamento = calculaTempoDeslocamento(distanciaPercorrida);
    var custoTotalHora = custoHora*tempoDeslocamento;

    return custoTotalHora
}

// função que calcula a depreciação do carro considerando
// um valor fixo de 5
function calculaDepreciacao(distanciaPercorrida, depreciacao){

    var custoDepreciacaoTotal;

// condicao para evitar a divisao por 0
    if(depreciacao == 0){
        return custoDepreciacaoTotal
    } else {

        var valorDepreciacao = 5;
        custoDepreciacaoTotal = distanciaPercorrida/(depreciacao * valorDepreciacao);
        return custoDepreciacaoTotal
    
    }  
}

// Função principal
function calculaCustoTotal (){
    var distanciaPercorrida = document.getElementById('distancia').value;
    var custoCombustivel = document.getElementById('custoCombustivel').value;
    var custoHora = document.getElementById('custoHora').value;
    var depreciacao = document.getElementById('depreciacao').value;

    var custoTotalCombustivel = calculaCombustivel(distanciaPercorrida, custoCombustivel);
    var custoTotalHora = calculaCustoHora(custoHora, distanciaPercorrida);
    var custoDepreciacaoTotal = calculaDepreciacao(distanciaPercorrida, depreciacao);

    var custoTotal = custoTotalCombustivel + custoTotalHora + custoDepreciacaoTotal;

// Função para printar na tela o valor total

    alert("O valor total do atendimento será R$ " + custoTotal.toFixed(2) + " ." + "Recarregue a página para realizar um novo cálculo" );

    }


// Quando eu enviar as respostas eu devo chamar a função calculaCustoTotal 


