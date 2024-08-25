let greetings =['Hi ','Heya ','Sup ']
let names = ['man ','dude ', 'rascal ']
let request = ['you got some money?','what have you been up to?','hows your day been?']
function generate(){
    return greetings[Math.floor(Math.random()*3)] + names[Math.floor(Math.random()*3)] + request[Math.floor(Math.random()*3)]
}
console.log(generate())