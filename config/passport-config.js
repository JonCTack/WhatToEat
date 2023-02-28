const localStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async function(passport) {
    passport.use(
        new localStrategy({usernameField: 'email'}, async (email, password, done) => {
            const user = await User.findOne({email: email}).select('+password');
            if (!user) {
                return done(null, false, {message: "Email or password incorrect."});
            }
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    let noPasswordUser = {...user};
                    delete noPasswordUser.password
                    return done(null, noPasswordUser, {message: "Found user - passwords match."});
                } else {
                    return done(null, false, {message: "Email or password incorrect."})
                }
            })
        })
    )
    passport.serializeUser((user, cbf) => {
        cbf(null, user)
    })
    passport.deserializeUser(async (id, cbf) => {
        return cbf(null, await User.findById(id))
    })
};