$('.setting').click(function () {
    if ($('aside').animate("left", "-260px")) {
        $('aside').toggleClass("active")
    }
})

let inputname = document.getElementById('inputname')
let inputemail = document.getElementById('inputemail')
let inputphone = document.getElementById('inputphone')
let inputage = document.getElementById('inputage')
let inputpass = document.getElementById('inputpass')
let inputrepass = document.getElementById('inputrepass')
let btn = document.getElementById('btn')

$('#inputname').keyup(function(){
    nameregex()
})

$('#inputemail').keyup(function(){
    emailregex()
})

$('#inputphone').keyup(function(){
    phoneregex()
})


$('#inputage').keyup(function(){
    ageregex()
})

$('#inputpass').keyup(function(){
    passregex()
})

$('#inputrepass').keyup(function(){
    repassregex()
})

function nameregex(){
    let regex = /^[A-Za-z]{1,}$/;
    if(regex.test(inputname.value) == true)
    {
        inputname.style.border = 'green 1px solid'
        inputname.nextElementSibling.style.display = 'none'
    }
    else{
        inputname.style.border = 'red 1px solid'
        inputname.nextElementSibling.style.display = 'block'
    }
}

function emailregex(){
    let regex = /^[A-Za-z]{1,}\@(yahoo.com|gmail.com)/;
    if(regex.test(inputemail.value) == true)
    {
        inputemail.style.border = 'green 1px solid'
        inputemail.nextElementSibling.style.display = 'none'
    }
    else{
        inputemail.style.border = 'red 1px solid'
        inputemail.nextElementSibling.style.display = 'block'
    }
}

function phoneregex(){
    let regex = /^[011|010|012|015][0-9]{10}$/;
    if(regex.test(inputphone.value) == true)
    {
        inputphone.style.border = 'green 1px solid'
        inputphone.nextElementSibling.style.display = 'none'
    }
    else{
        inputphone.style.border = 'red 1px solid'
        inputphone.nextElementSibling.style.display = 'block'
    }
}

function ageregex(){
    let regex = /(^[1-7][0-9]|80)$/;
    if(regex.test(inputage.value) == true)
    {
        inputage.style.border = 'green 1px solid'
        inputage.nextElementSibling.style.display = 'none'
    }
    else{
        inputage.style.border = 'red 1px solid'
        inputage.nextElementSibling.style.display = 'block'
    }
}

function passregex(){
    let regex = /([A-Za-z]{1,}|[0-9]{1,})/;
    if(regex.test(inputpass.value) == true)
    {
        inputpass.nextElementSibling.style.display = 'none'
        inputpass.style.border = 'green 1px solid'
    }
    else{
        inputpass.style.border = 'red 1px solid'
        inputpass.nextElementSibling.style.display = 'block'
    }
}

function repassregex(){
    if(inputrepass.value == inputpass.value)
    {
        inputrepass.style.border = 'green 1px solid'
        inputrepass.nextElementSibling.style.display = 'none'
    }
    else{
        inputrepass.style.border = 'red 1px solid'
        inputrepass.nextElementSibling.style.display = 'block'
    }
}
