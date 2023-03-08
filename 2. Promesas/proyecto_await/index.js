const rc = require("./readConsole")
const writeAndRead = require ("./writeAndRead")


rc.readConsoleAwait(user => writeAndRead.writeAndReadAwait("./promesaArrow.json", user))