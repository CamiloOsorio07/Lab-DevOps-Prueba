const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.APP_ENVIRONMENT || 'LOCAL';

app.get('/api/hello', (req, res) => {
  res.json({
    message: "Hola desde DevOps",
    environment: ENVIRONMENT
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} - Ambiente: ${ENVIRONMENT}`);
  });
}

module.exports = app;
