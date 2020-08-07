const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
})
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: views })
})
app.get("/people", (req, res) => {
  res.sendFile("people.html", { root: views })
})
app.get("/invent", (req, res) => {
  res.sendFile("invent.html", { root: views })
})
app.get("/event", (req, res) => {
  res.sendFile("event.html", { root: views })
})
app.get("/join", (req, res) => {
  res.sendFile("join.html", { root: views })
})
app.listen(3000)
console.log("Running at port 3000")
