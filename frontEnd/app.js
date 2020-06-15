const express = require('express')
const cp = require('cookie-parser')
const csrf = require('csurf')({ cookie: true })
// const db = require("./models/index")
const app = express()
const eh = (handler) => (req, res, next) => handler(req, res, next).catch(next)

app.use(cp())
app.use(express.urlencoded({ extended: false }))

app.use('/staticImages', express.static('assets/images'))
app.use('/staticCSS', express.static('assets/stylesheets'))
app.use('/staticFonts', express.static('assets/fonts'))
app.use('/staticIcons', express.static('assets/icons'))

app.get("/", eh(async (req, res) => {

  res.render('landing.pug')
}))


// app.get('/new-person', csrf, eh(async (req, res) => {
//   let hairColors = await db.HairColor.findAll()
//   res.render('form.pug', { hairColors, _csrf: req.csrfToken() })
// }))

// app.post("/new-person", csrf, eh(async (req, res) => {
//   const { firstName, lastName, age, biography, hairColorId } = req.body
//   await db.Person.create({ firstName, lastName, age, biography, hairColorId })
//   res.redirect('/')
// }))


// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500);
//   res.send('An error occurred!');
// });

app.listen(8877, ()=> console.log(`Listening on port 8877`))