var express = require("express"),
    bodyParser = require("body-parser"),
    http = require("http"),
    app = express(),
    database = require("./db.json");

    app.use(express.static(__dirname + "/client"));
    console.log(__dirname);
    http.createServer(app).listen(3000);
    
    // parse application/json
    app.use(bodyParser.json());

    app.get("/", function (req, res) {
      res.send("This is the root route!");
    })

    app.get("/hello", function (req, res) {
      res.send("Hello World!");
    });

    app.get("/goodbye", function (req, res) {
      res.send("Goodbye World!");
    });
    
    app.get("/users", function (req, res) {
       res.json(database.users); 
    });
    
    app.post("/users", function (req, res) {
       var newUser = req.body;
       database.users.push(newUser);
    });
    
    app.get("/users/:id", function (req, res) {
        var id = req.params.id;
        findUsersById(id, function (user) {
            res.json(user);
        });
    });
    
    var findUsersById = function (id, callback) {
        database.users.forEach( function (user) {
            if (user.id == id) {
                return callback(user);
            }
        });
    };

    // app.get("/index.html", function (req, res) {
    //   res.send("<html><head></head><body><h1>Hello World!</h1>,</body></html>");
    // })
