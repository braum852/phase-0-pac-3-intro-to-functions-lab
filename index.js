function shout() {
    return 'hello'.toUpperCase()
}

function whisper() {
    return 'hello'.toLowerCase()
}

function logShout() {
    return console.log(`hello`.toUpperCase());
}

function logWhisper() {
    return console.log(`hello`.toLowerCase());
}

function sayHiToGrandma(string) {
    if (string.toUpperCase() === string)
    return "YES INDEED!"
    
    else if (string.toLowerCase() === string)
    return `I can't hear you!`

    else if (string === `I love you, Grandma.`)
    return `I love you, too.`

}