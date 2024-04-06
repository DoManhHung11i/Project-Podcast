
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
    
    MyQueue(req, res){
        res.render('MyQueue');
    }

    Recently(req, res){
        res.render('Recently');
    }
}

module.exports = new HomeController;