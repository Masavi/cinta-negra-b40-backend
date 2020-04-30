// 1) Obtenemos app y PORT mediante "destructuring"
// 2) app y PORT vienen del archivo index de la carpeta server
// NOTA: No es necesario agregar "index" cuando se solicita mediante require
const { app, PORT } = require('./server');

// Encedemos servidor
app.listen(PORT, () => console.log(`Listening on ${PORT}`));