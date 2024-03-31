

class HomeController{
    home(req, res){
        res.render('home');
    }

    discovery(req, res){
        res.render('discovery');
    }

    MyPodcast(req, res) {
        res.render('MyPodcast');
    }
}

module.exports = new HomeController;