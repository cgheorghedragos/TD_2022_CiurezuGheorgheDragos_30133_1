var api = require("./src/api.js").app;
var users = require("./src/users.json");

api.get("/", function (request, response) {
  response.json("NodeJS REST API");
});

// http://localhost:3000/

api.get("/users", function (request, response) {
  response.json(users);
});

// http://localhost:3000/users

api.post("/users", function (request, response) {
  const { name, city } = request.body;
  users[users.length] = { name, city };
  response.json({ message: "User was saved succesfully", data: users });
});

api.delete("/users", function (request, response) {
  const { index } = request.query;
  users.splice(index, 1);
  response.json({
    message: "User with index " + request.query.index + " was deleted",
    data: users,
  });
});

api.listen(3000, function () {
  console.log("Server running @ localhost:3000");
});
