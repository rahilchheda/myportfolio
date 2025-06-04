function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subejct : document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_ud0itch","template_wje0jns",parms).then(alert("Email Sent"))
}