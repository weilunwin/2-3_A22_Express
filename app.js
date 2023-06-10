const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))


app.get('/', (req, res) => {
  const page = {
    title: '首頁',
  }
  res.render('index', { page })
})

app.get('/about', (req, res) => {
  const page = {
    title: 'about'
  }
  res.render('index', { page })
})

app.get('/portfolio', (req, res) => {
  const page = {
    title: 'portfolio'
  }
  res.render('index', { page })
})

app.get('/contact', (req, res) => {
  const page = {
    title: 'contact'
  }
  res.render('index', { page })
})



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})