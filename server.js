const PORT = 8000

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

require('dotenv').config()

const { GoogleGenerativeAI } = require('@google/generative-ai')

const getAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY)

app.post('/gemini', async(req, res) => {
    console.log(req.body.history)
    console.log(req.body.message)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))