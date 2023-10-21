
const propiedadesAlquiler = [
    {
        nombre: 'Departamento Con Con',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max200/168281680.jpg?k=662290c9d580672dd14b3718d1698a6832aaad560ed3b587fd92b747aa328373&o=&hp=1',
        descripcion: 'Espectacular departamento para vacacionar',
        ubicacion: 'Viña del Mar, Con Con',
        habitaciones: 2,
        baños: 2,
        costo: 250000,
        smoke: false,
        pets: false,
    },
    {
        nombre: 'Departamento en barrio universitario',
        src: 'https://www.ahp.cl/wp-content/uploads/2019/02/living-200x200.jpg',
        descripcion: 'Pequeño departamento para estudiantes en barrio universitario',
        ubicacion: 'Santiago',
        habitaciones: 1,
        baños: 1,
        costo: 300000,
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Departamento en Con Con',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max200/154698195.jpg?k=1425d66472293e2c88560b23448478d0cb92f14c007125d4b2d466007d254529&o=&hp=1',
        descripcion: 'Se arrienda departamento por dias, temporada de verano, Con Con, Viña del Mar',
        ubicacion: 'Viña del Mar',
        habitaciones: 3,
        baños: 2,
        costo: 150000,
        smoke: false,
        pets: false,
    },

    {
        nombre: 'Departamento con vista al mar',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max200/214498206.jpg?k=9c54ca316ff8de2a5a73182d577ae9376319949619362110e87ec333013b9581&o=&hp=1',
        descripcion: 'Excelente ubicación, vista al mar, arriendo por semanas',
        ubicacion: 'La Serena',
        habitaciones: 2,
        baños: 2,
        costo: 400000,
        smoke: true,
        pets: false,
    },

];

const articulosSection = document.querySelector(".articulos");

propiedadesAlquiler.forEach(articulo => {
  articulosSection.innerHTML += `
  <article class="articulo">
  <img src="${articulo.src}" alt="${articulo.nombre}" class="imagen">
  <p>${articulo.descripcion}</p>
  <a href="/articulo/${articulo.id}"><button>Ver más</button></a>
  <p>Ubicación: ${articulo.ubicacion || null}</p>
  <p>Habitaciones: ${articulo.habitaciones || null}</p>
  <p>Baños: ${articulo.baños}</p>
  <p>Costo: $${articulo.costo}</p>

    </article>
  `;
  if (articulo.smoke) {
    articulosSection.innerHTML += `
    <p style="color: green;">Si se permite fumar</p>
    `;
  } else {
    articulosSection.innerHTML += `
    <p style="color: red;">No se permite fumar</p>
    `;
  }
  if (articulo.pets) {
    articulosSection.innerHTML += `
    <p style="color: green;">Mascotas permitidas</p>
    `;
  } else {
    articulosSection.innerHTML += `
    <p style="color: red;">Mascotas no permitidas</p>
    `;
  }
    
  });
