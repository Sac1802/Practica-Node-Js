const app = require('./src/App');


const PORT = 4000;

app.listen(PORT, () => {
    console.log("Server is ready " + PORT);
})