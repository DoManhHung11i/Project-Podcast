

class HomeController{
    home(req, res){
        res.render('home');
    }

    discovery(req, res){
        res.render('discovery');
    }
}

module.exports = new HomeController;