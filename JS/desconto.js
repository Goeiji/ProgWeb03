function desconto() {
    var preco = Number(document.getElementById('preco').value);
    var qtd = Number(document.getElementById('quant').value);
    var total = preco * qtd;

    if (qtd == 3) {
        total = (total - (preco/2));
        alert("Promoção APLICADA!!\nTotal a pagar: " + total.toFixed(2));
    } else {
        alert("Total a pagar: " + total.toFixed(2));
    }
}