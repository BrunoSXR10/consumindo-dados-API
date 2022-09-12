async function buscaEndereco(cep){
    let mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = ""
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCEPNew = await consultaCEP.json();

        if(consultaCEPNew.erro) {
            throw Error('CEP não existe')
        }

        let cidade = document.getElementById('cidade')
        let estado = document.getElementById('estado')
        let endereco = document.getElementById('endereco')

        cidade.value = consultaCEPNew.localidade
        estado.value = consultaCEPNew.uf
        endereco.value = consultaCEPNew.logradouro


        console.log(consultaCEPNew);
        return consultaCEPNew
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP não identificado aaa</p>`
        console.log(erro)
    }
}

let cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value));








































































































