const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "chatapp"
})   

db.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`username`,`password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("error");
        }
        return res.status(200).json(data);
    })
})


app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE username = ? AND password = ? ";
    
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        // console.log(data);
        if (err) {
            return res.status(500).json("Error");
        } 
        if (data.length > 0) {
            return res.status(200).json(data);
        } else {
            return res.status(401).json("failed");
        }
    })

})

app.post('/chat', (req, res) => {
    const sql = "select distinct id,username from users;";
    db.query(sql, (err, data) => {
        // console.log(data); 
        if (err) {
            return res.status(500).json("Error");
        } 
        if (data.length > 0) {
            
            return res.status(200).json(data);
        } else {
            return res.status(401).json("failed");
        }
    })
})

app.post('/loadchats', (req, res) => {
    const sql = "SELECT * FROM chats WHERE (sender_id = 1  AND receiver_id = 2) OR (sender_id = 2  AND receiver_id =1) ORDER BY timestamp;";
    console.log(req.body.id1,req.body.id2);
    db.query(sql, (err, data) => {
        // console.log(data); 
        if (err) {
            return res.status(500).json("Error");
        } 
        if (data.length > 0) {
            return res.status(200).json(data);
        } else {
            return res.status(401).json("failed");
        }
    })
})

// const sql2 = "SELECT * FROM users";
//     db.query(sql2, (err, data) => {
//         console.log(data);
//     })

app.listen(5001, () => {
    console.log("listen");
})