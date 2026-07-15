const express = require('express')
const app = express()

app.get('/', (_req, res) => {
  res.json({ service: process.env.SERVICE_NAME || 'artifact-test', status: 'ok', version: '1.0.1' })
})

app.get('/health', (_req, res) => res.json({ status: 'ok' }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
