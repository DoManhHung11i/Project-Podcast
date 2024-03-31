

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

    Login(req, res){
        res.render('Login');
    }
    
    Signup(req, res){
        res.render('Signup');
    }
}

module.exports = new HomeController;