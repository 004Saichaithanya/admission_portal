const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const admissions = [];

app.get("/admission", (req, res) => {
  res.sendFile(__dirname + "/views/admission.html");
});

app.post("/submit", (req, res) => {
  const { fullName, email, phone, course } = req.body;
  admissions.push({ fullName, email, phone, course });
  res.send(
    `
       <div style="border:2px solid black;border-radius:10px;text-align: center;
        max-width: 360px;background: #ffffff;
        padding: 30px;position: absolute;
  top: 50%;left: 50%;transform: translate(-50%, -50%);"> 
    <h2 style="color:green;font-weight:400;">Thank you,<b> ${fullName}!</b></h2>
    <p style="font-size:medium;">You’ve successfully applied for the <strong>${course}</strong> program.</p>
    <a href="/admission">Back to form</a>
    </div>
        `
  );
});

app.listen(3000, () => {
  console.log("Running at port:http://localhost:3000/admission");
});
