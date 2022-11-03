const path = require('path');

const renderLoggin = (req, res) => {
    return res.render(path.resolve('src/views/user/loggin.ejs'))
}

module.exports= {renderLoggin}