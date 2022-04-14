// do this right away
let message = "good job";


// wait until everything has been loaded
document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        document.getElementById("textbox1").value = "success";
    });

    document.getElementById("button2").addEventListener("click", function () {

       DoSomething();

    });

    document.getElementById("button3").addEventListener("click", function () {

        document.getElementById("textbox1").value = message;
    });


});

// definitional code

function DoSomething() {
    console.log("doing somehting");
}

