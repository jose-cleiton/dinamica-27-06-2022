const isValidUsername = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.length < 3) {
    return res.status(400).json({ message: 'Username must be at least 3 characters long' });
  }
  next();

}
const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email ||!regexEmail.test(email)){
    return res.status(400).json({ message: 'Invalid email address' });
  }
  next();
}
const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordValid =/^[0-9]{4,8}$/
  if(!passwordValid.test(password)){
    return res.status(400).json({ message: 'Invalid password' });

 
}
next();
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
};