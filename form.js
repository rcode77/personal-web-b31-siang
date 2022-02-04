function showData() {

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value
    let emailReceiver = "kuroikiba77@gmail.com"

    if (name == "") {
        alert("name input field must be not empty")
    }
    if (email == "") {
        alert("email input field must be not empty")
    }
    if (phone == "") {
        alert("phone input field must be not empty")
    }
    if (subject == "") {
        alert("subject input field must be not empty")
    }
    if (message == "") {
        alert("message input field must be not empty")
    }

    let a = document.createElement("a")
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name}, ${subject}, ${message}, ini nomor saya ${phone}`

    a.click()
}