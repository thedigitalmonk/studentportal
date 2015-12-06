var Students = require('../models/Student');

exports.getStudents = function(req, res){
  res.render('list',{
    students: Students
  });
};

exports.addNewStudent = function(req, res){
  res.render('add');
};

exports.getSingleStudent = function(req, res){
  res.send(Students[req.params.index]);
};

exports.editStudent = function(req, res){
  var Student = Students[req.params.index];
  res.render('edit', {
    student : Student
  });
};

exports.removeStudent = function(req, res){
  Students.splice(req.params.index, 1);
  res.redirect('/students');
};

exports.addStudent =  function(req, res){
  Students.push({
    name: req.body.name,
    age:  req.body.age
  });
  res.redirect('/students');
};

exports.updateStudent = function(req, res){
    Students[req.params.index].name = req.body.name;
    Students[req.params.index].age = req.body.age;
    res.send("UPDATED");
};
