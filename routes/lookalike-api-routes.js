// Requiring our models
const { LookAlike } = require("../models");


module.exports = function (app) {

    // Get everything in LookAlikes table
    app.get("/api/lookalike", function (req, res) {
        LookAlike.findAll({})
            .then(function (dbLookAlike) {
                res.json(dbLookAlike)
            })
    })

    // Post new lookalike to lookalike table
    app.post("/api/lookalike", function (req, res) {
        LookAlike.create({
            caption: req.body.caption,
            url1: req.body.url1,
            url2: req.body.url2,
            score: req.body.score
        })
            .then(function (dbLookAlike) {
                res.json(dbLookAlike)
            })
    })

    // Find lookalike where id = __
    app.get('/api/lookalike/:id', function (req, res) {
        LookAlike.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbLookAlike) {
                res.json(dbLookAlike)
            })
    })

    // Update score
    app.put("/api/lookalike/:id", function (req, res) {
        LookAlike.update({
            score: req.body.score
        }, {
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    })

    // Delete lookalike
    app.delete("/api/lookalike/:id", function (req, res) {
        LookAlike.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });

}
