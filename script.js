document.addEventListener("keydown", function(event){

    // Upadte Keyname in dom
    let keyName = document.getElementById("key-name");
    keyName.innerText = event.key;

    // Upadte Keycode in dom
    let keyCode = document.getElementById("key-code");
    keyCode.innerText = event.keyCode;
})