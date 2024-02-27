


var heroesM=[{
    name:'Thor',
    description: `Thor es un poderoso héroe de Marvel,
     dios del trueno y miembro de los Vengadores. 
     Con su fuerza sobrehumana y control sobre el trueno, 
     lucha contra enemigos como Loki y Thanos. 
     Armado con el martillo Mjolnir, Thor demuestra valentía y liderazgo 
     en batallas épicas. Interpretado por Chris Hemsworth en el cine,
      es uno de los personajes más populares de Marvel.`,
    foto:"images/thor.webp"
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
        addContainer.innerHTML += 
    `<section class="section">
                <div class="foto-cont">
                    <img class="foto" src=${element["foto"]}>
                </div>
                <div class="info">
                    <section class="nombre">${element["name"]} </section>  
                   <section class="ver"><a href="emergent.html" target="_blank" onclick="window.open(this.href,'_blank','width=400,height=400'); return false;"> <button id ="ver" class="buton-ver " >ver</button></a></section>
                </div>
        </section>`
});



heroesM.forEach(element => {
    const addContainer = document.getElementById('containerDc');
        addContainer.innerHTML += 
    `<section class="section">
                <div class="foto-cont">
                    <img class="foto" src=${element["foto"]}>
                </div>
                <div class="info">
                    <section id="name" class="nombre">${element["name"]} </section>  
                    <section class="ver"><a href="emergent.html" target="_blank" onclick="window.open(this.href,'_blank','width=400,height=400'); return false;"> <button class="buton-ver " >ver</button></section>
                </div>
        </section>`
});
document.getElementById("botonB").addEventListener("click", function() {
    var listas = document.getElementById('lista');
    
    alert(listas)

   
})


















selectElement.addEventListener("change", handleChange);
// Agregar un evento de escucha para el evento 'change' al elemento select

// Obtener el botón con el ID "marvel"
var botonf = document.getElementById("marvel");

// Agregar un event listener para el evento de clic en el botón
botonf.addEventListener("click", handle);

// Agregar otro event listener para el evento de clic en el botón
botonf.addEventListener("click", function () {
    // Obtener el elemento con el ID "containerDc"
    var elemento = document.getElementById("containerDc");
    // Ocultar el elemento cambiando su estilo display a "none"
    elemento.style.display = "none";
});

