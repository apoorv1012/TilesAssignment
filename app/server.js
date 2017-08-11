const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const tilesData = require('./public/json/tiles.json');

module.exports = {
    app: function() {
        const app = express();
        const indexPath = path.resolve(__dirname, 'public', 'index.html');
        const publicPath = express.static(path.resolve(__dirname, '../app/public/'));
        const tileDetailsPath = path.resolve(__dirname, 'public/json', 'tileDetails.json');

        app.use(bodyParser.json());
        app.use(publicPath);

        app.get('/', function(_, res) {
            res.sendFile(indexPath);
        });

        app.get('/tiles', function(_, res) {
            res.send(tilesData);
        });

        app.get('/tiles/:id', function(_, res) {
            res.sendFile(indexPath);
        });

        app.get('/tiles/search/:term', function(_,res) {
            res.sendFile(indexPath);
        });

        app.get('/tiles/search/get/:term', function(req, res) {
            fs.readFile(tileDetailsPath, 'utf-8', function(err, data) {
                let content = JSON.parse(data);
                res.send(JSON.stringify(content));
            });
        });

        app.get('/tiles/get/:id', function(req, res) {
            const reqId = req.params.id;
            fs.readFile(tileDetailsPath, 'utf-8', function(err, data) {
                let content = JSON.parse(data);
                content = content[reqId];
                res.send(JSON.stringify(content));
            });
        });

        app.put('/tiles/put/:id', function(req, res) {
            const reqData = req.body;
            const reqId = req.params.id;
            fs.readFile(tileDetailsPath, 'utf-8', function(err, data){
                let content = JSON.parse(data);
                Object.assign(content[reqId], reqData);
                fs.writeFile(tileDetailsPath, JSON.stringify(content));
                res.send(req.body);
            });
        });

        return app;
    }
}