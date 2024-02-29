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



var heroesD=[{
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
},]


heroesD.forEach(element => {
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
    modal.style.zIndex = "9999";
}

function cerrarModal(dialogId) {
    const modal = document.getElementById(dialogId);
    modal.style.display = "none";
    difuminar.style.filter= "blur(0px)"; 
}

const BotonDc =document.getElementById("dc");
const BotonM=document.getElementById("marvel");
const contenidoM = document.getElementById("container");
const contenidiDc = document.getElementById("containerDc");
const BotonI = document.getElementById("inicio");
const todo = document.getElementsByClassName("container");
const logodcd = document.getElementById("logoDc");

BotonDc.addEventListener("click", function () {
    contenidoM.style.display="none";
    contenidiDc.style.display="grid";
    BotonDc.style.display="none";
    BotonM.style.display="block";
});

BotonM.addEventListener("click",function(){
    contenidiDc.style.display="none";
    contenidoM.style.display="grid";
    BotonM.style.display="none";
    BotonDc.style.display="block";
    logodcd.style.display="none";
});

BotonI.addEventListener("click", function () {
    contenidiDc.style.display="grid";
    contenidoM.style.display="grid";
    BotonDc.style.display="block";
    BotonM.style.display="block";
    logodcd.style.display="block";
});
function mostrarInformacion() {
    var info = document.getElementById("info").value;

    // Filtrar héroes que coinciden con el nombre ingresado
    const heroeFiltrado = heroesM.find(heroe => {
        return heroe.name.toLowerCase() === info.toLowerCase();
    });

    // Crear un diccionario con los datos del héroe filtrado
    const heroeDiccionario = {};
    if (heroeFiltrado) {
        heroeDiccionario.name = heroeFiltrado.name;
        heroeDiccionario.description = heroeFiltrado.description;
        heroeDiccionario.foto = heroeFiltrado.foto;
    }

    // Mostrar información del héroe filtrado (puedes cambiar esto según tus necesidades)
    if (heroeFiltrado) {
        alert("Se encontró un héroe con el nombre ingresado:\n" + 
              "Nombre: " + heroeDiccionario.name + "\n" + 
              "Descripción: " + heroeDiccionario.description + "\n" + 
              "Foto: " + heroeDiccionario.foto);
    } else {
        alert("No se encontraron héroes con el nombre ingresado.");
    }

    contenidiDc.style.display="none";
    contenidoM.style.display="none";
    logodcd.style.display="none";








    

}


