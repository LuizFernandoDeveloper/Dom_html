// desativando o comportamento de atualização da pagina ai clicar no submit 
// Cancela ação padrão do submit
const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formValido = false;

form.addEventListener('submit', function(e){
    

    e.preventDefault();
    //validando nome
    

    
    const numeroContaBeneficiario = document.getElementById('numero-da-conta');
    const valorDeposito = document.getElementById('valor-do-deposito');
    const descricaoDeposito = document.getElementById('descricao');
    const mensagemSucesso =  `Montante  de: <b>${valorDeposito.value}</b>, foi depositado para o cliente <b> ${nomeBeneficiario.value}</b> que possui a conta com o numero de: <b> ${numeroContaBeneficiario.value}</b>`;

    formValido = ValidaNome(nomeBeneficiario.value);

    if(formValido){

        const  containerMensagemSecesso = document.querySelector('.success-message');
        containerMensagemSecesso.innerHTML = mensagemSucesso; 
        containerMensagemSecesso.style.display = 'block';
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricaoDeposito.value = '';
        
    }

    else{

        const  errorMensage = document.querySelector('.erroName');
        errorMensage.style.display = 'block';
        nomeBeneficiario.style.border = '2px solid red'
    }


} );


//Criando uma função para validar nome completo
function ValidaNome(nomeCompleto){

    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
    clear()
}

function clear(){

    const  containerMensagemSecesso = document.querySelector('.success-message');
    containerMensagemSecesso.style.display = 'none';

}

nomeBeneficiario.addEventListener('keyup', function(e){
    formValido = ValidaNome(e.target.value);

    if(!formValido){
        nomeBeneficiario.style.border = '2px solid red';
        document.querySelector('.erroName').style.display = 'block'

    }
    else{
        nomeBeneficiario.style.border = ''
        document.querySelector('.erroName').style.display = 'none'
    }
});




