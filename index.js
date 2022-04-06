function writeCards(names, event) {
    let message = [];
    for (let i=0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return message;
} 

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer)
        integer--;
    }
}

countDown(4)