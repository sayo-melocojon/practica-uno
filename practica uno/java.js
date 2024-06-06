document.addEventListener("DOMContentLoaded", function(){
    const datosCard = [
        { images: "hobbies/1.png", nombre: "┇°♡☆Acuarela y oleo₊❏❜ ⋮ ", description: "☆Pintar con acuarela y tipo oleo☆"},
        { images: "hobbies/2.png", nombre: "┇°♡☆Hacer postres₊❏❜ ⋮ ", description: "☆Hacer postres☆"},
        { images: "hobbies/3.png", nombre: "┇°♡☆Hacer musica₊❏❜ ⋮ ", description: "☆Hacer musica☆"},
        { images: "hobbies/4.png", nombre: "┇°♡☆Tocar el bajo₊❏❜ ⋮ ", description: "☆Tocar el bajo☆"},
        { images: "hobbies/5.png", nombre: "┇°♡☆Trabajos de arcilla, porcelana, etc₊❏❜ ⋮ ", description: "☆Trabajar con masas moldeables☆"},
        { images: "hobbies/6.png", nombre: "┇°♡☆Hacer cartas₊❏❜ ⋮ ", description: "☆Hacer cartas☆"},
        { images: "hobbies/7.png", nombre: "┇°♡☆Bailar contemporaneo₊❏❜ ⋮ ", description: "☆Bailar☆"},
        { images: "hobbies/8.png", nombre: "┇°♡☆Cantar₊❏❜ ⋮ ", description: "☆Cantar☆"},
        { images: "hobbies/9.png", nombre: "┇°♡☆Escuchar historias paranormales:)₊❏❜ ⋮ ", description: "☆Conocer casos paranormales☆"},
        { images: "hobbies/11.png", nombre: "┇°♡☆Dormir₊❏❜ ⋮ ", description: "☆Dormir☆"},

    ];
    const contenedor = document.getElementById("contenedor");

    datosCard.forEach(function(card, index){
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${card.images}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${card.nombre}</h5>
        <p class="card-text">${card.description} </p>
</div>
</div>
        `;
    })
});