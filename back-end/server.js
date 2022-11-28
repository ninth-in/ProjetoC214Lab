require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(4000, () => {
    console.log('REST server running on port 4000...');
});