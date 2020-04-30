require('dotenv').config()
// 1) Obtenemos app y PORT mediante "destructuring"
// 2) app y PORT vienen del archivo index de la carpeta server
// NOTA: No es necesario agregar "index" cuando se solicita mediante 
const { server, PORT } = require('./server');
require('./database');

// Encedemos servidor
server.listen(PORT, () => console.log(`Listening on ${PORT}`));