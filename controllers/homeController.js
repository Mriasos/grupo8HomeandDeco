const path = require('path');

const renderHome = (req, res) => {
    return res.sendFile(path.resolve('views/home.html'))
}

module.exports= {renderHome}