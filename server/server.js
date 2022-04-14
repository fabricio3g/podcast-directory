const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const api = require('podcast-index-api')("", "")
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(morgan('combined'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

app.get('/recentFeeds',(req, res)=>{
    api.podcastsTrending(10 ,new Date().toISOString()).then(results => {
        console.log(results)
        res.send(results) 
    })
})
app.post('/searchByTerm',(req, res)=>{
    const {name} = req.body
    api.searchByTerm(name).then(results => {
        res.send(results) 
    })
})
const PORT = process.env.PORT


app.listen(PORT || 5000, ()=>{
    console.log('Server running at port: ', PORT)
})
