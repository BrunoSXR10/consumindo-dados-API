async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPNew = await consultaCEP.json();

        if(consultaCEPNew.erro) {
            throw Error('CEP não existe')
        }
        console.log(consultaCEPNew);
        return consultaCEPNew
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`
        console.log(erro)
    }
}

let cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

buscaEndereco();










































































































