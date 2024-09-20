// Essa é a forma de implementar este endpoint
app.get('/', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
    })