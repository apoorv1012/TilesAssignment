const Server = require('./server.js');
const port = process.env.PORT || 3000;
const app = Server.app();

const webpack = require('webpack');
let config = '';

if (process.env.NODE_ENV === 'production') {
    config = require('../webpack.prod.config.js');
} else {
    config = require('../webpack.dev.config.js');
}

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
        colors: true
    }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port);
console.log(`Listening at http://localhost:${port}`);