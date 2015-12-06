var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

var studentController = require('./controllers/student');
var Students = require('./models/Student');

app.get('/', function(req, res){
  res.render('home');
});

app.get('/students', studentController.getStudents);

app.get('/students/new', studentController.addNewStudent);

app.get('/students/:index', studentController.getSingleStudent);

app.post('/students', studentController.addStudent);

app.get('/students/:index/edit', studentController.editStudent);

app.put('/students/:index', studentController.updateStudent);

app.delete('/students/:index', studentController.removeStudent);

app.listen(3000, function(){
  console.log("Express Server at port 3000");
});
