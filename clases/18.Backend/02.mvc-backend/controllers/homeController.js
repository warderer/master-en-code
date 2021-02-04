const homeController = (req, res) => {
    res.send( {message: 'esto viene desde el archivo myRoutes.js'} )
}

module.exports = homeController;