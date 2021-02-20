let hours = JSON.parse(localStorage.getItem("hours")) || {
    nine: [],
    ten: [],
    eleven: [],
    twelve: [],
    thirteen: [],
    fourteen: [],
    fifteen: [],
    sixteen: [],
    seventeen: []
};
let m = moment();

let saveHours = function() {
    localStorage.setItem("hours", JSON.stringify(hours));
};

let loadHours = function() {
    console.log(hours);
    $("#hourNine").html(hours.nine);
    $("#hourTen").html(hours.ten);
    $("#hourEleven").html(hours.eleven);
    $("#hourTwelve").html(hours.twelve);
    $("#hourThirteen").html(hours.thirteen);
    $("#hourFourteen").html(hours.fourteen);
    $("#hourFifteen").html(hours.fifteen);
    $("#hourSixteen").html(hours.sixteen);
    $("#hourSeventeen").html(hours.seventeen);

};

$("#btnNine").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourNine").val().trim();
    hours.nine = text;

    saveHours();
});

$("#btnTen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourTen").val().trim();
    hours.ten = text;

    saveHours();
});

$("#btnEleven").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourEleven").val().trim();
    hours.eleven = text;

    saveHours();
});

$("#btnTwelve").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourTwelve").val().trim();
    hours.twelve = text;

    saveHours();
});

$("#btnThirteen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourThirteen").val().trim();
    hours.thirteen = text;

    saveHours();
});

$("#btnFourteen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourFourteen").val().trim();
    hours.fourteen = text;

    saveHours();
});

$("#btnFifteen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourFifteen").val().trim();
    hours.fifteen = text;

    saveHours();
});

$("#btnSixteen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourSixteen").val().trim();
    hours.sixteen = text;

    saveHours();
});

$("#btnSeventeen").on("click", function(event) {
    event.preventDefault();
    let text = $("#hourSeventeen").val().trim();
    hours.seventeen = text;

    saveHours();
});

loadHours();

setInterval(function() {
    let d = new Date();
    let h = d.getHours();
    console.log(h)

    if(h = 2) {
        $('#hourNine').addClass('present');

    } else if(h = 10) {
        $('#hourTen').addClass('present');

    } else if(h = 11) {
        $('#hourEleven').addClass('present');

    } else if(h = 12) {
        $('#hourTwelve').addClass('present');

    } else if(h = 13) {
        $('#hourThirteen').addClass('present');

    } else if(h = 14) {
        $('#hourFourteen').addClass('present');

    } else if(h = 15) {
        $('#hourFifteen').addClass('present');

    } else if(h = 16) {
        $('#hourSixteen').addClass('present');

    } else if(h = 17) {
        $('#hourSeventeen').addClass('present');

    } else {

    }
}, 1000);
    
    


$('#currentDay').text(m.format("dddd, MMM do"));