window.addEventListener("load", function(evt){
    let redbutton = document.querySelector(".red-pill")
    let bluebutton = document.querySelector(".blue-pill")

    console.log(redbutton,bluebutton)

    redbutton.addEventListener('click', function(evt){

        console.log("you have chosen the red pill")
    })

    bluebutton.addEventListener('click', function(evt){

        console.log('you have chosen the blue pill')
    })


})