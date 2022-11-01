const path = require('path');

const renderLoggin = (req, res) => {
    return res.sendFile(path.resolve('views/loggin.html'))
}

module.exports= {renderLoggin}