const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001

app.use(cors())

app.get('/', cors({
    origin: 'http://localhost:3000'
}), (req, res) => {

    res.status(200).json([
        {
            name: "adaylarla ilgili teknik bir ödev hazırlamam gerekiyor",
            priority: "Urgent"
        },
        {
            name: "Yapılan işlerle ilgili activity kayıtları oluşturmam gerekiyor",
            priority: "Regular"
        },
        {
            name: "Teknik taskları paylaşacağım",
            priority: "Trivial"
        }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})