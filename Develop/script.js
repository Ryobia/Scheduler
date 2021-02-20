let hours = {};
let m = moment();

let saveHours = function() {
    localStorage.setItem("hours", JSON.stringify(hours));
};

let loadHours = function() {
    hours = JSON.parse(localStorage.getItem("hours"));

    if(!hours) {
        hours = {
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
    }


};

$('#currentDay').text(m.format("dddd, MMM do"));