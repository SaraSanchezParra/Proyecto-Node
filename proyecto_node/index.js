const rc = require("./readConsole")
const writeAndRead = require ("./writeAndReadObject")


// rc.readConsole(function(newUser){writeAndRead.writeAndRead("./newPathObject.json", newUser)})

rc.readConsole(newUser => writeAndRead.writeAndRead("./objetoArrow.json", newUser))




