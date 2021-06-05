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


    // Right after finishing all of this copying and pasting I figured out a much more efficient way to do it but the work was already done so I'm leaving it as is in all it's glory
    if(h === 9) {
        $('#hourNine').addClass('present');
        $('#hourTen').addClass('future');
        $('#hourEleven').addClass('future');
        $('#hourTwelve').addClass('future');
        $('#hourThirteen').addClass('future');
        $('#hourFourteen').addClass('future');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 10) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('present');
        $('#hourEleven').addClass('future');
        $('#hourTwelve').addClass('future');
        $('#hourThirteen').addClass('future');
        $('#hourFourteen').addClass('future');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 11) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('present');
        $('#hourTwelve').addClass('future');
        $('#hourThirteen').addClass('future');
        $('#hourFourteen').addClass('future');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 12) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('present');
        $('#hourThirteen').addClass('future');
        $('#hourFourteen').addClass('future');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 13) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('present');
        $('#hourFourteen').addClass('future');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 14) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('past');
        $('#hourFourteen').addClass('present');
        $('#hourFifteen').addClass('future');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 15) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('past');
        $('#hourFourteen').addClass('past');
        $('#hourFifteen').addClass('present');
        $('#hourSixteen').addClass('future');
        $('#hourSeventeen').addClass('future');

    } else if(h === 16) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('past');
        $('#hourFourteen').addClass('past');
        $('#hourFifteen').addClass('past');
        $('#hourSixteen').addClass('present');
        $('#hourSeventeen').addClass('future');

    } else if(h === 17) {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('past');
        $('#hourFourteen').addClass('past');
        $('#hourFifteen').addClass('past');
        $('#hourSixteen').addClass('past');
        $('#hourSeventeen').addClass('present');

    } else {
        $('#hourNine').addClass('past');
        $('#hourTen').addClass('past');
        $('#hourEleven').addClass('past');
        $('#hourTwelve').addClass('past');
        $('#hourThirteen').addClass('past');
        $('#hourFourteen').addClass('past');
        $('#hourFifteen').addClass('past');
        $('#hourSixteen').addClass('past');
        $('#hourSeventeen').addClass('past');

    }
}, 2000);
    
    


$('#currentDay').text(m.format("dddd, MMM do"));