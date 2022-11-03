const path = require('path');

const renderRegister = (req, res) => {
    return res.render(path.resolve('src/views/user/register.ejs'))
}

module.exports= {renderRegister}