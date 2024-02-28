


var heroesM=[{
    name:'Thor',
    description: `Thor es un poderoso héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas épicas. Interpretado por Chris Hemsworth en el cine,
      es uno de los personajes más populares de Marvel.`,
    foto:"images/thor.webp",
},
{
    name:'Hulk',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Hulk.webp",
},
{
    name:'Blackwidow',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Blackwidow.jpg",
},
{
    name:'wolverine',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/wolverine.avif",
},
{
    name:'capitanAmerica',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/capitanAmerica.webp",
},
{
    name:'Hulk',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Hulk.webp",
},
{
    name:'Hulk1',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Hulk.webp",
},
{
    name:'Hulk',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Hulk.webp",
},
{
    name:'Hulk1',
    description: `Hulk es un héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas`,
    foto:"images/Hulk.webp",
},

]

var imagenes=[
    `images/thor.jpg`,
    `images/Hulk.jpg`
]

heroesM.forEach(element => {
    const addContainer = document.getElementById('container');
    const dialogId = `ventana-${element.name.replace(/\s+/g, '-').toLowerCase()}`; // Generar un ID único para el diálogo
    addContainer.innerHTML += `
        <section class="section">
            <div class="foto-cont">
                <img class="foto" src=${element["foto"]}>
            </div>
            <div class="info">
                <section id="name" class="nombre">${element["name"]} </section>  
                <section class="ver"> 
                    <button class="buton-ver" onclick="mostrarModal('${dialogId}')">ver</button>
                </section>
            </div>
        </section>
        <dialog class="ventana" id="${dialogId}">
            <div class="sections">
                <section class="imagenMini inforS">
                    <div>
                        <img src=${element.foto}>
                    </div>
                    <div> 
                        <button class="cerrar" onclick="cerrarModal('${dialogId}')">closed</button>
                        <p class="infor">${element["description"]}</p>
                    </div>
                </section>
               
            </div>
        </dialog>`;
});




heroesM.forEach(element => {
    const addContainer = document.getElementById('containerDc');
    const dialogId = `ventana-${element.name.replace(/\s+/g, '-').toLowerCase()}`; // Generar un ID único para el diálogo
    addContainer.innerHTML += `
        <section class="section">
            <div class="foto-cont">
                <img class="foto" src=${element["foto"]}>
            </div>
            <div class="info">
                <section id="name" class="nombre">${element["name"]} </section>  
                <section class="ver"> 
                    <button class="buton-ver" onclick="mostrarModal('${dialogId}')">ver</button>
                </section>
            </div>
        </section>
        <dialog class="ventana" id="${dialogId}">
            <div class="sections">
                <section class="imagenMini inforS">
                    <div>
                        <img src=${element.foto}>
                    </div>
                    <div> 
                        <button class="cerrar" onclick="cerrarModal('${dialogId}')">closed</button>
                        <p class="infor">${element["description"]}</p>
                    </div>
                </section>
                <section>
                    <button class="cerrar" onclick="cerrarModal('${dialogId}')">X</button>
                </section>
            </div>
        </dialog>`;
});





function mostrarModal(dialogId) {
    const modal = document.getElementById(dialogId);
    modal.style.display = "block";
}

function cerrarModal(dialogId) {
    const modal = document.getElementById(dialogId);
    modal.style.display = "none";
}

const marvelv = document.getElementById("marvel");
const dcOcult = document.getElementById("containerDc");
const logoD = document.getElementById("logoDc");
marvelv.addEventListener("click", function () {
    dcOcult.style.display = "none";
    logoD.style.display = "none";
});

const inicio = document.getElementById("inicio");

inicio.addEventListener("click", function () {
    dcOcult.style.display = "grid";
    logoD.style.display = "block";
});






// selectElement.addEventListener("change", handleChange);
// // Agregar un evento de escucha para el evento 'change' al elemento select


// // Obtener el botón con el ID "marvel"
// var botonf = document.getElementById("marvel");

// // Agregar un event listener para el evento de clic en el botón
// botonf.addEventListener("click", handle);

// // Agregar otro event listener para el evento de clic en el botón
// botonf.addEventListener("click", function () {
//     // Obtener el elemento con el ID "containerDc"
//     var elemento = document.getElementById("containerDc");
//     // Ocultar el elemento cambiando su estilo display a "none"
//     elemento.style.display = "none";
// });




