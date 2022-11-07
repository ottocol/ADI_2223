const path = require("path");
const express = require("express");
const app = express();
app.use(express.json())

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "db/database.sqlite")
  },
  useNullAsDefault: true
});


app.get("/api/usuarios", async function(pet, resp){
  
})

app.post("/api/usuarios", function(pet, resp){
    var nuevo = {login: pet.body.login, password: pet.body.password}

})


var listener = app.listen(process.env.PORT||3000, () => {
  console.log(`Servidor en el puerto ${listener.address().port}`);
});