function promocao(){
    var medicamento = document.getElementById('medicamento').value;
    var preco = Number(document.getElementById('preco').value);
    var unidade = Number(document.getElementById("qtd").value);
    var total = unidade * preco;

    if (unidade >= 2) {
        preco = preco - (total % 1); 
        alert("Nome do medicamento: " + medicamento + "\nTotal a pagar: " + preco.toFixed(2));       
    } else {
        alert("Nome do medicamento: " + medicamento + "\nTotal a pagar: " + preco.toFixed(2));
    }
}