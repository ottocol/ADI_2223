const path = require("path");

// Crear conexión con BD
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "db/database.sqlite")
  },
  useNullAsDefault: true
});

//Crear la tabla "usuarios" si no existe ya
knex.schema
  .hasTable("usuarios")
  .then(exists => {
    if (!exists) {
      return knex.schema
        .createTable("usuarios", table => {
          table.string("email").primary();
          table.string("password");
        })
        .then((tabla) => {
          console.log("Tabla 'usuarios' creada");
          return  knex('usuarios').insert({email:"pepe@ua.es", password:"pepe"})
        })
        .then(()=>{
          return  knex('usuarios').insert({email:"adi@ua.es", password:"adi"})
        })
        .then(()=> {
          console.log("Datos insertados")
        })
        .catch(error => {
          console.error(`Error creando la tabla: ${error}`);
        })
        .finally(()=>{
          knex.destroy()
        })
    }
    else {
      console.log("La tabla ya existe")
      knex.destroy()
    }
  })

// Export the database
module.exports = knex;
