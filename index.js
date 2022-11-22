const app = require('./src/App');
let coonection = require('./src/db/Conection')

const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is ready " + PORT);
})