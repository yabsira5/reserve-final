import { Cookie, Dns } from "@mui/icons-material"
import express from "express"
import mysql from "mysql"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cors from "cors"
import CookieParser from "cookie-parser"

// const express = require("express")
// const mysql = require("mysql")

const app = express()

app.use(express.json())

export const db = mysql.createConnection({
    user:"db admin",
    host:"localhost",
    password:"MySQL",
    database:"reserve"
})

// app.get("/",(req,res) => {
//    res.json("hello")
// })

// app.get("/Room", (req,res)=>{
//     const q = "SELECT * FROM Room"
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })

// app.post("/User", (req,res)=>{
//     const q = "INSERT INTO User (`Username`,`Email`,`Counrty`,`Img`,`City`,`Phone`,`Password`,`isAdmin`) VALUE (?)"
//     const values = [
//         req.body.Username,
//         req.body.Email,
//         req.body.Contry,
//         req.body.Img, 
//         req.body.City,
//         req.body.Phone,
//         req.body.Password,
//         req.body.isAdmin
//     ]
//     db.query(q,[values],(err,data)=>{
//         if(err) return res.json(err)
//         return res.json("Successfull")})
// })

//middlewares
app.use(express.json())
app.use(cors())
app.use(CookieParser)


app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)


app.listen(3306, () => {
    
    console.log("running server!!")
})

