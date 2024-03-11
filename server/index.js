const express=require('express')
const app=express()
const port=8000

app.get('/',(request,response)=>{
    response.send(`
        <!doctype html>
        <html>
            <head>
                <title>Express.js</title>
            </head>
            <body>
                <h3>
                    welcome to Express.js
                </h3>
                <b>Express.js Fast, unopinionated, minimalist<br>web framework for node.js</b>
            </body>
        </html>
    `)
})
app.listen(port, () => console.log('Server listing on port'+port))