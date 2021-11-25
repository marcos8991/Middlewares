module.exports = {
    index : (req,res) => res.render('index'),
    login : (req,res) => res.render('login'),
    admin : (req,res) => res.render('admin', {user: req.query.user})
}