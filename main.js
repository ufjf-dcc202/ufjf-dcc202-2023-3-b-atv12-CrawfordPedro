document.entrada.enviar.addEventListener('click', leFormulario);

function leFormulario() {

const quantidade = document.entrada.quantidade.value;
const fruta = document.entrada.fruta.value;

console.log(`Eu tenho ${quantidade} ${fruta}`);
}