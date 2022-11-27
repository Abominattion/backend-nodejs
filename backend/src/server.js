const app = require('./app');

// Carrega as variáveis de ambiente
require('dotenv').config();
const port = process.env.PORT || 3333;


// Alerta de que o servidor está rodando
app.listen(port, () => console.log(`Server is running on port ${port}`));