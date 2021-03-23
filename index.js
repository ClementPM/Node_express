const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html")
});

app.post('/', function(req, res){
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let total = num1 + num2
  res.send("The total is " + total);
});

// BMI CALCULATOR
app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post('/bmiCalculator', function(req, res){
  let weight = parseFloat(req.body.weight); 
  let height = parseFloat(req.body.height);

  let bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

app.listen(3000);