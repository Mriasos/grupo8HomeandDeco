const path = require('path');

const renderRegister = (req, res) => {
    return res.sendFile(path.resolve('views/Register.html'))
}

module.exports= {renderRegister}