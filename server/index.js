const express=require('express')
const app=express()
const port=8000
app.use(express.urlencoded({extended: ture}))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post', (request, response) => {
    let name = request.body.name ||''
    let email = request.body.email ||''
    let msg = request.body.msg ||''

    let test =`
     <table border="1">
        <caption>ข้อมูลที่ส่งขึ้นไป</caption>
        <tr><td>ชื่อ:</td><td>${name}</td></tr>
        <tr><td>อีเมล:</td><td>${email}</td></tr>
        <tr><td>ข้อความ:</td><td>${msg}</td></tr>
     </table>
    `
    
    response.send(text)
})
app.listen(port, () => console.log('Server listing on port'+port))