function pagar() {
    var valor = Number(document.getElementById('valor').value)/15;
    var tempo = Number(document.getElementById('tempo').value);
    
    var total = valor * tempo;
    alert('Valor a ser pago: ' + total.toFixed(2));
}