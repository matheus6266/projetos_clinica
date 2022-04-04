// Função que calcula o tempo considerando a velocidade média de 60km/h

function calculaTempoDeslocamento (distanciaPercorrida) {
// A multiplicação por 2 é para considerar a idade e volta
    var tempoDeslocamento = 2*(distanciaPercorrida/60);
    return tempoDeslocamento
}

//Função que calcula o custo total considerando um consumo de 10km/l
function calculaCombustivel (distanciaPercorrida, custoCombustivel, tipoCombustivel){

    //Declaração do consumo do carro em gasolina e alcool
    var consumoGasolina = 10;
    var consumoAlcool = 7;

    if (tipoCombustivel == 'gasolina'){
        var consumoCombustivel = 2 * ((distanciaPercorrida/consumoGasolina)*custoCombustivel);
        return consumoCombustivel
    } if (tipoCombustivel == 'álcool'){
        var consumoCombustivel = 2 * ((distanciaPercorrida/consumoAlcool)*custoCombustivel);
        return consumoCombustivel
    } else {
        alert("Valor do tipo de combstível esta incorreto, recarregue a página");
    }

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
        return custoDepreciacaoTotal = 0
    } else {

        var valorDepreciacao = 5;
        custoDepreciacaoTotal = 2*(distanciaPercorrida/(depreciacao * valorDepreciacao));
        return custoDepreciacaoTotal
    
    }  
}

// Função principal
function calculaCustoTotal (){
    var distanciaPercorrida = document.getElementById('distancia').value;
    var custoCombustivel = document.getElementById('custoCombustivel').value;
    var custoHora = document.getElementById('custoHora').value;
    var depreciacao = document.getElementById('depreciacao').value;
    var tipoCombustivel = document.getElementById('tipoCombustivel').value;

    var custoTotalCombustivel = calculaCombustivel(distanciaPercorrida, custoCombustivel, tipoCombustivel);
    var custoTotalHora = calculaCustoHora(custoHora, distanciaPercorrida);
    var custoDepreciacaoTotal = calculaDepreciacao(distanciaPercorrida, depreciacao);

    var custoTotal = custoTotalCombustivel + custoTotalHora + custoDepreciacaoTotal;

// Condição de verificação de valores NaN
    if (isNaN(custoTotal)){
        alert("Algo deu errado. Revise os valores inseridos");
    } else {
        alert("O valor total do atendimento será R$ " + custoTotal.toFixed(2) + " ." + "Recarregue a página para realizar um novo cálculo" );

    }
    
    }


// Quando eu enviar as respostas eu devo chamar a função calculaCustoTotal 


