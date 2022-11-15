const path = require('path');

const renderRegister = (req, res) => {
    return res.render(path.resolve('src/views/user/register.ejs'))
}

const renderLoggin = (req, res) => {
    return res.render(path.resolve('src/views/user/loggin.ejs'))
}

module.exports= {renderLoggin, renderRegister}
