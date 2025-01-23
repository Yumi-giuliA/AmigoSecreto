let amigos = [];
let listaAmigo = adicionarAmigo();
let sorteioResultado = sortearAmigo(); 

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim(); 

    if (nome == '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    amigos.push(nome);

    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
    document.querySelector('#amigo').value = '';
    
}

function sortearAmigo(){
    let resultado = Math.floor(Math.random() * amigos.length);
    let nomesAleatorio = amigos[resultado];
    
    if(amigos.length > 0){
        let lista = document.getElementById('listaAmigos'); 
        lista.innerHTML = '';

        let botao = document.getElementById('resultado');
        botao.innerHTML = `O(A) amigo(a) sorteado(a) é: ${nomesAleatorio}`;
    }
     
}

sortearAmigo();


function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}