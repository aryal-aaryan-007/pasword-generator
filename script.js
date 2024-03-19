

let result = ""
function show() {
    //if password exists beforehand
    let exist = document.querySelector('.password-show');
    if (exist) {
        exist.remove()
    }


    //password generator
    result = ''
    let value = '@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789'

    for (let i = 0; i <= 7; i++) {
        const password = Math.floor(Math.random() * value.length);
        result = result + value[password]
    }
    //display worker
    let element = document.createElement('p');
    element.innerHTML = result;
    document.body.append(element);
    element.setAttribute('class', 'password-show');
}
function save() {
    navigator.clipboard.writeText(result);
    alert('Password copied to clipboard ')
    //console.log(navigator.clipboard.readText(result))
}
