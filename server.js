const express = require ('express');
const app = express();

app.use (express.json());

//home route
app.get ("/" ,(req, res) => {
    res.send ("student api is running ");

});
//get student details 

app.get ("/student" , (req,res)  => {
res.json({
    name: "Anuj Sharma",
    course: "b tech cse ",
    collage: "gn group of institutions"
});
});

//add student data 
app.post ("/student", (req,res) => {
    res.json({
        message: "student data recieve succesfull",
        student: req.body

    });
});


//server start
app.listen(8080, () => {
    console.log("server running on port 8080");

    
});