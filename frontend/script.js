'use strict'


// Validação do CPF

function validaCPF(cpf) {

    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;

        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }


        //O operador condicional (ternário) é o único operador JavaScript que possui três operandos
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validacao do primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        //Validação do segundo digito
        if (resultado != digitos.charAt(1)) {
            return false;
        }
        return true;
    }
}

const limparCpf = (cpf) => {
    document.getElementById('cpf').value = null;
}

function validacao() {
    var cpf = document.getElementById('cpf').value;

    var resultadoValidacao = validaCPF(cpf);

    if (!resultadoValidacao) {
        document.getElementById("cpf").value = 'CPF inválido';

    } else {

    }
}

document.getElementById('cpf')
    .addEventListener('focusout', validacao);



// Validação do CEP: 

const limparForm = (endereco) => {
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherForm = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// Dessa forma, verifica-se o cep antes de enviar para a API: se tem 8 número E se só foram digitados números do início ao fim.
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
    limparForm();
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    // método assícrono: fetch(url).then(response => response.json()).then(console.log);
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('logradouro').value = 'CEP não encontrado';
        } else {
            preencherForm(endereco);
        }
    } else {
        document.getElementById('logradouro').value = 'CEP incorreto';
    }
}

document.getElementById('cep')
    .addEventListener('focusout', pesquisarCep);



    const criarCandidato = async (candidato) => {
        {
            const usuario = fetch('http://localhost:2002/register', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Formulario())
            });
            if (user.status == 200) {
                console.log(Form())
                alert('deu certo');
                window.open('./sucesso.html')
            } if (user.status == 500) {
                alert ('já temos seus dados');
                window.open('./dadosDup.html') 
            }
        }


const Formulario = () => {
    const elements = document.getElementsByName('veiculo');
    let checkedButton;
    elements.forEach(e => {
        if (e.checked) {
            //if radio button is checked, set sort style
            checkedButton = e.value;
        }

    });
    function checkForm(){
        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobrenome').value;
        let cpf = document.getElementById('cpf').value;
        let data = document.getElementById('data').value;
        let profissao = document.getElementById('profissao').value;
        let genero = document.getElementById('genero').value;
        let qual = document.getElementById('qual').value;
        let estadoCivil = document.getElementById('estadoCivil').value;
        let email = document.getElementById('email').value;
        let telefoneFixo = document.getElementById('telefoneFixo').value;
        let celular = document.getElementById('celular').value;
        let cep = document.getElementById('cep').value;
        let logradouro = document.getElementById('logradouro').value;
        let numero = document.getElementById('numero').value;
        let bairro = document.getElementById('bairro').value;
        let cidade = document.getElementById('cidade').value;
        let estado = document.getElementById('estado').value;
        let veiculo = checkedButton;
        let habilitacao = document.getElementById('habilitacao').value;

        if (nome == '' || cpf == '' || dataDia == '' || dataMes == '' || dataAno == ''
        || cep == '' || endereco == '' || numero == '' || bairro == '' || cidade == ''
        || telefone == '' || email == '' || profissao == '' || cargo == ''){
            document.getElementById('errorSubmit').style.display = 'block'; 
        } else {
            createCandidate();
            alert('verificando cadastro...');
        }


    }
}}

