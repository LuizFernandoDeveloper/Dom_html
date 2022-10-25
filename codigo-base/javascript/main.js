// desativando o comportamento de atualização da pagina ai clicar no submit 
// Cancela ação padrão do submit
const form = document.getElementById('form-deposito');
form.addEventListener('submit', function(e){
    let formValido = false;

    e.preventDefault();
    //validando nome
    

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-da-conta');
    const valorDeposito = document.getElementById('valor-do-deposito');
    const descricaoDeposito = document.getElementById('descricao');
    const mensagemSucesso =  `Montante  de: ${valorDeposito.value}, foi depositado para o cliente ${nomeBeneficiario.value} que possui a conta com o numero de: ${numeroContaBeneficiario.value}`;

    formValido = ValidaNome(nomeBeneficiario.value);

    if(formValido){
        alert(mensagemSucesso);

        nomeBeneficiario.value = ' ';
        numeroContaBeneficiario.value = ' ';
        valorDeposito.value = ' ';
        descricaoDeposito.value = ' ';
        location.reload();

    }

    else{
        alert("Nome digitado não está completo");
    }


} );


//Criando uma função para validar nome completo
function ValidaNome(nomeCompleto){

    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;

}



