module.exports = app => {
  app.post('/email', (req, res) => {
    const data = req.body
    console.log(data)
    res.send('Enviando email')
  })
}
