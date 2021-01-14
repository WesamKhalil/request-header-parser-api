const express = require('express')
const app = express()

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.set('trust proxy', true)
app.get('/api/whoami', (req, res) => {
    res.json({
        "ipaddress": req.ip,
        "language": req.get('accept-language'),
        "software": req.get('user-agent')
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ' + (process.env.PORT || 3000))
})