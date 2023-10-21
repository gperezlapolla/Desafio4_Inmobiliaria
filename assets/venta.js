const propiedadesVenta = [
    {
        nombre: 'Casa en Viña del Mar',
        src: 'https://i.pinimg.com/236x/a3/7c/76/a37c7689ffa2a2c6514952f632a7e026.jpg',
        descripcion: 'Hermosa casa en Viña del Mar, vista al mar, perfecta para vacacionar',
        ubicacion: 'Viña del Mar',
        habitaciones:3,
        baños: 2,
        costo: 250000000,
        smoke: true,
        pets: false ,
    },
    {
        nombre: 'Casa en Machalí',
        src: 'https://loqueva.com/wp-content/uploads/2016/08/homify-casas-modernas-ideas-modernas-200x200.jpg',
        descripcion: 'Chalet en comuna de Machalí, sector de gran plusvalía',
        ubicacion: 'Machalí,sexta región',
        habitaciones:2,
        baños: 2,
        costo: 110000000 ,
        smoke: true,
        pets: true,
    },

    {
        nombre: 'Casa en Santiago',
        src: 'https://www.pacal.cl/wp-content/uploads/2021/08/los-molinos-casas-200x200.jpg',
        descripcion: 'Hermosa casa en barrio residencial',
        ubicacion: 'Santiago, Región Metropolitana',
        habitaciones:4,
        baños: 2,
        costo: 90000000,
        smoke: true,
        pets: true,
    },

    

  {
    nombre: 'Casa en Colchagua',
    src: 'https://www.pacal.cl/wp-content/uploads/2019/02/lomas-de-colchagua-casas-200x200.jpg',
    descripcion: 'Casa nueva, inmobiliaria ADL ',
    ubicacion: 'Colchagua, Sexta Región',
    habitaciones:3,
    baños: 2,
    costo: 80000000,
    smoke: true,
    pets: true,
},

   
    
    
  ];
  
  const articulosSection = document.querySelector(".articulos");
  
  propiedadesVenta.forEach(articulo => {
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




  