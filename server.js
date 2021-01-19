const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const faker = require("faker");

app.use(express.json())

class User{
    constructor(){
        this._id = faker.random.uuid();
        this.fistName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


app.get("/api/users/new", (req, res) =>{
    const user1 = new User()
    console.log(user1)
    res.json(user1)
})

app.get("/api/companies/new", (req, res) =>{
    const company1 = new Company()
    console.log(company1)
    res.json(company1)
})

app.get("/api/user/company", (req, res) =>{
    const user = new User()
    const company = new Company()
    console.log(`The company is ${company} and the User is ${user}`)
    res.json({"company":company, "user":user})
})







app.listen(port, () => console.log(`Listening on port ${port}`));