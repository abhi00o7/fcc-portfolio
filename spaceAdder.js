// sample script to add space between letters


function spacer(word){
    const regex = / /gi
    return word
                .split('')
                .join(' ')
                .splice(0, 0, '<span>')
                .replace(regex, "</span> <span>")
}

let word = "this is sparta"

console.log(spacer(word));