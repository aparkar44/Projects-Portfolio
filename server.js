const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    // res.render("bmiCalculator")
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var totalBMI = weight / (height * height);
    // const BMItotal = totalBMI.toString();

    res.send("Your current BMI is:  " + totalBMI.toFixed(2));

})
app.listen(3000, function () {
    console.log("Server is up and running on 3000")
})