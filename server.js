var express = require("express"),
    http = require("http"),
    app = express();

    app.use(express.static(__dirname + "/client"));
    console.log(__dirname);
    http.createServer(app).listen(3000);

    app.get("/", function (req, res) {
      res.send("This is the root route!");
    })

    app.get("/hello", function (req, res) {
      res.send("Hello World!");
    });

    app.get("/goodbye", function (req, res) {
      res.send("Goodbye World!");
    });

    // app.get("/index.html", function (req, res) {
    //   res.send("<html><head></head><body><h1>Hello World!</h1>,</body></html>");
    // })
