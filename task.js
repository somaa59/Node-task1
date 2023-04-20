import express from "express";
const app = express();
const students = [
    {
        id: 1,
        name: "Abdelsamea",
        city: "cairo"
    }
    ,
    {
        id: 2,
        name: "Ayamn",
        city: "elkhadra"
    }
    ,
    {
        id: 3,
        name: "ahmed",
        city: "elgharbia"
    }
    ,
    {
        id: 4,
        name: "sayed",
        city: "elgharbia"
    }


];

function studentFunction(req, res) {
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        const std = students[i];
        output += "<li>" + std.name + "</li>";
    }
    output += "</ul>"
    res.send(output);
}



app.get("/students", studentFunction)


app.listen(5500);