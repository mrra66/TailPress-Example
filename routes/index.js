module.exports.initialize = function (app) {
  app.get('/', (req, res) => {
    return res.render('index', {
      title: 'TailwindCSS x Express.js'
    })
  })
}