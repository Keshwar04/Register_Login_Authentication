const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "demo"
})

db.connect((err, res) => {
    err ? console.log('err') : console.log('success')
})

app.post('/signup', (req, res) => {
    const { userName, email, password } = req.body;
    const sql = "insert into signin (`name`,`email`,`password`) VALUES (?,?,?)";
    db.query(sql, [userName, email, password], (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err)
        } else {
            return res.json(data);
        }
    })
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM signin WHERE `email` = ? AND `password` = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            return res.json(err)
        }else{
            res.json(data)
        }
        
    })
})









app.listen(8081, () => {
    console.log("listening");
})