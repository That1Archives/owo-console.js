var readlineSync = require('readline-sync')

console.log("OwO (C), all rights reserved to the author")

while (true) {
    var syntax = readlineSync.question("> ")
    switch(syntax) {
        case 'owo -help':
            console.info("owo help:\n\nowo -help // Shows the help manual\nowo -youtube // Official channel of OwO\nowo -code // Shows in which scripting language this was made and links GitHub repository\nowo -exit\n\n****OWO CONSOLE***")
        break;
        case 'owo -youtube' || 'owo -yt':
            console.log("OwO's official youtube: https://www.youtube.com/channel/UCNxrOCmK5ZJFLlQUsxRpjHA")
        break;
        case 'owo -code':
            console.log("Made in JavaScript (JS) -- extension === *.js\nGitHub Source Code: https://github.com/That1Archives/owo-console.js")
        break;
        case 'owo -exit':
            exit()
        break;
        default:
            console.error(`Syntax Error: the syntax you have entered(#${syntax}) was invalid or not found. Check for spelling errors.\n${syntax} not found ~~~ try again.\n\nType owo -help for help`)
        break;
    }
}

function exit() {
    console.log("Goodbye!")
}
