const express = require("express");
const app = express();
const port = 8000;
const { faker } = require("@faker-js/faker");

const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department(),
  };
  return newFake;
};

const createUser = () => {
  const newUser = {
    userId: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    companyId: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return newCompany;
};

// const newFakeProduct = createProduct();
// console.log(newFakeProduct);

// const newFakeUser = createUser();
// console.log(newFakeUser);

// const newFakeCompany = createCompany();
// console.log(newFakeCompany);

app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json(
    (newUserAndCompany = {
      newUser: createUser(),
      newCompany: createCompany(),
    })
  );
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
