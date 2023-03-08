const rc = require("./readConsole")
const writeAndRead = require ("./writeAndRead")


rc.readConsole(user => writeAndRead.writeAndRead("./promesaArrow.json", user))