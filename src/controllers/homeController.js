const path = require('path');

const renderHome = (req, res) => {
    return res.render(path.resolve('src/views/home.ejs'))
}




module.exports= {renderHome}