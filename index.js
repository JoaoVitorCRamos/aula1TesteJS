
const form = document.getElementById("cadastrar");
const arrayPersonagens = []; 

form.addEventListener('submit', function(ev){
    ev.preventDefault();

    const personagem = {};

    personagem.name = document.getElementById('name').value;
    personagem.city = document.getElementById('city').value;
    personagem.raca = document.getElementById('raca').value;
    personagem.apetrecho = document.getElementById('apetrecho').value;

    arrayPersonagens.push(personagem);

    console.log({
        arrayPersonagens
    });
});
