const request = require("supertest");
const app = require("../app");
const user = require("../db/models/user");
const faker = require("faker");
const JWT = require("jsonwebtoken");

const secret = "secret";

const token = JWT.sign({ email: 'demo@gmail.com', password: "password" }, secret);


//test for GET root "/"
describe("GET /", function () {
  it("responds with json of 'w}elcome to pikagram'", function (done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect({ message: "welcome to pikagram" })
      .expect(200, done);
  });
});
//test for GET "/api/users/all"
describe("GET /api/users/all", function () {
  it("responds with json listing all users", function (done) {
    request(app)
      .get("/api/users/all")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)

      .expect(200, done);
  });
});
//test for GET "/api/users/:id(\\d+)"
describe("GET /api/users/:id(\\d+)", function () {
  it("responds with json for an exisiting user", function (done) {
    request(app)
      .get("/api/users/5")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)

      .expect(200, done);
  });
});

//test for GET "/api/users/:id(\\d+)" with an invalid id
describe("GET /api/users/:id(\\d+)", function () {
  it("responds with error showing invalid user id", function (done) {
    request(app)
      .get("/api/users/1546")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
//test for GET "/api/:id(\\d+)/followers"
describe("GET /api/users/:id(\\d+)/followers", function () {
  it("responds with json listing all of a user's followers", function (done) {
    request(app)
      .get("/api/users/3/followers")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
//test for GET "/api/:id(\\d+)/following"
describe("GET /api/users/:id(\\d+)/following", function () {
  it("responds with json listing all users a user follows", function (done) {
    request(app)
      .get("/api/users/3/following")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
//test for POST "/api/users" to create a user

it("Should create a new user", (done) => {
  request(app)
    .post("/api/users")
    .send({
      firstName: faker.name.firstName,
      lastName: faker.name.lastName,
      userName: faker.internet.userName,
      email: faker.internet.email,
      password: "secret",
    })
    .set("Authorization", `Bearer ${token}`)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(201, { user }, done());
});

//test for POST "/api/users" with missing information
it("Should not creat a new user due to missing info", (done) => {
  request(app)
    .post("/api/users")
    .send({
      firstName: faker.name.firstName,
      lastName: faker.name.lastName,
      userName: faker.internet.userName,
      password: "secret",
    })
    .expect(400, done());
});
//test for PUT "/api/users/:id(\\d+)" to update user
it("Should edit an existing user", (done) => {
  request(app)
    .post("/api/users/32")
    .send({
      firstName: faker.name.firstName,
      lastName: faker.name.lastName,
      userName: faker.internet.userName,
      email: faker.internet.email,
      password: "secret",
      bio: "This is some testing bio text",
      age: 25,
      gender: "male",
    })
    .set("Authorization", `Bearer ${token}`)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, { user }, done());
});
//test for DELETE "/api/users/:id(\\d+)" to delete a user

//test for PUT "/api/users/:id(\\d+)/profile-pic" to update profile pic

//test for POST "/api/users/:id(\\d+)/following" to follow someone

//test for DELETE "/api/users/:id(\\d+)/:followingId(\\d+)" to unfollow
