const User = require('../models/users')
const { mutilpleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class Login_SignupController{
    Login(req, res){
        res.render('Login');
    }
    
    Signup(req, res){
        res.render('Signup');
    }
    registerUser(req, res) {
        const formData = req.body;
        const { userName, userEmail, userPassword, userPassword_Confirm } = formData;
    
        if (!userName || !userEmail || !userPassword || !userPassword_Confirm) {
            return res.render('Signup', { alert: 'Please fill in all fields' });
        }
        
        if (userPassword !== userPassword_Confirm) {
            return res.render('Signup', { alert: 'Passwords do not match' });
        }
    
        const user = new User(formData);
        user.save()
            .then(() => res.redirect('Login'))
            .catch(err => {
                console.error('Error saving user:', err);
                res.status(500).json(err);
            });
    }
    
    loginUser(req, res, next){
       try {
            User.findOne({ userName: req.body.userName, userPassword: req.body.userPassword })
            .then(user => {
                if (user) {
                    res.redirect('/');
                } else {
                    return res.render('Login', { alert: 'Incorrect Username or Password' });
                }
            })
            .catch(err => {
                console.error(err);
                res.status(500).send("Error occurred");
            });
    
       } catch (err) {
            res.status(500).json(err);
       }
    }

}

module.exports = new Login_SignupController;