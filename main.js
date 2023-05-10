const form = document.getElementById('form-agenda');
const nomeContato = [];
const telefoneContato = [];
let linhas = '';

function validaNome(){

    var nome = document.getElementById('contact-name').value;

    for (letra of nome){
        if (!isNaN(nome)){
            alert("Digite apenas letras ou espaços");
            document.getElementById('contact-name').value="";
            return;
        }
        letraspermitidas="ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ"
        var ok=false;

    for (letra2 of letraspermitidas ){
        if (letra==letra2){
            ok=true;
        }
        }

        if (!ok){
            alert("Digite apenas letras ou espaços");
            document.getElementById('contact-name').value="";
            return; 
        }
    }
}    
form.addEventListener('submit',function(e)
{
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha()
{
    const inputNomeDoContato = document.getElementById('contact-name');
    const inputTelefoneDoContato = document.getElementById('contact-number');

    if (nomeContato.includes(inputNomeDoContato.value))
    {
        alert (`O contato ${inputNomeDoContato.value} já foi salvo`);
    } else {
        nomeContato.push(inputNomeDoContato.value);
        telefoneContato.push(inputTelefoneDoContato.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeDoContato.value} </td>`;
        linha += `<td> ${inputTelefoneDoContato.value} </td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeDoContato.value = '';
    inputTelefoneDoContato.value = '';
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
