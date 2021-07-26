alert("Preencha os campos obrigatórios");



/* Função Validar */
function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var cep = document.getElementById("cep");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var telefoneCelular = document.getElementById("telefoneCelular").check_form;



}

function check_form() {
    var inputs = document.getElementsByClassName('required');
    var len = inputs.length;
    var valid = true;
    for (var i = 0; i < len; i++) {
        if (!inputs[i].value) { valid = false; }
    }
    if (!valid) {
        for (var i = 0; i < 5; i++) {}
        alert('Você ainda não preencheu todos os campos obrigatórios.');
        return false;
    } else { return true; }
}