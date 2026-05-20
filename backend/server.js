const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'akhil123',
    database:'todo'
});

db.connect((err)=>{
    if(err){
        console.log('Error connecting to database');
        return;
    }
    console.log("Connection established with database");
});

// Serve frontend page
app.get('/', (req,res)=>{
    res.sendFile(
        path.join(__dirname,'../frontend/todolist.html')
    );
});

// API to get todos
app.get('/todos',(req,res)=>{
    db.query('SELECT * FROM todoitems',(err,results)=>{
        if(err){
            return res.status(500).send("Database error");
        }

        res.json(results);
    });
});

// API to add todo
app.post('/add-item',(req,res)=>{

    db.query(
        'INSERT INTO todoitems(itemDescription) VALUES(?)',
        [req.body.text],
        (err,results)=>{

            if(err){
                return res.status(500).send("Database error");
            }

            res.send("Item added successfully");
        }
    );
});

// API to update todo
app.put('/update-item/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    db.query(
        'UPDATE todoitems SET itemDescription = ? WHERE id = ?',
        [text, id],
        (err, results) => {
            if (err) {
                return res.status(500).send("Database error");
            }
            res.send("Item updated successfully");
        }
    );
});

// API to delete todo
app.delete('/delete-item/:id', (req, res) => {
    const { id } = req.params;
    db.query(
        'DELETE FROM todoitems WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return res.status(500).send("Database error");
            }
            res.send("Item deleted successfully");
        }
    );
});

app.listen(3000,()=>{
    console.log("server started running on port 3000");
});