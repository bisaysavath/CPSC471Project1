var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    fs = require('fs'),
    database,
    port = process.env.PORT || 3000;

var findUsersById = function(id, callback) {
    "use strict";

    database.users.forEach(function(user) {
        if (String(user.id) === id) {
            return callback(user);
        }
    });
};

var readDB = function() {
    "use strict";

    fs.readFile("db.json", "utf8", function(err, data) {
        if (err) {
            throw err;
        }
        database = JSON.parse(data);
    });
};

var writeDB = function() {
    "use strict";

    fs.writeFile("db.json", JSON.stringify(database, null, 2), "utf8", function(err) {
        if (err) {
            throw err;
        }
        console.log("Database saved!");
    });
};

readDB();

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + "/Client"));

app.listen(port, function () {
    console.log("Server is listening at port " + port);
});

app.get("/contacts", function(req, res) {
    "use strict";

    res.json(database.contacts);
});

app.post("/contacts", function(req, res) {
    "use strict";

    var newContact = req.body;
    database.contacts.push(newContact);
    writeDB();
    res.send("Contact posted");
});

app.get("/users", function(req, res) {
    "use strict";

    res.json(database.users);
});

app.post("/users", function(req, res) {
    "use strict";

    var newUser = req.body;
    var getId = database.users.length + 1;
    newUser.id = getId;
    database.users.push(newUser);
    writeDB();
    res.send("New user added");
});

app.get("/users/:id", function(req, res) {
    "use strict";

    var id = req.params.id;
    findUsersById(id, function(user) {
        res.json(user);
    });
});

app.post("/users/:id", function(req, res) {
    "use strict";

    var id = req.params.id;

    findUsersById(id, function(user) {
        var indexToUpdate = database.users.indexOf(user);
        database.users[indexToUpdate] = req.body;
    });

    writeDB();

    res.send("Update profile succeeded");
});