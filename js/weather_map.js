"use strict";
$(function(){

    //forecast data
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WX_APPID,
        lat: markerLocation.lat,
        lon: markerLocation.lng,
        units: "imperial"
    }).done(function(data) {
        console.log("forecast data")
        console.log(data.list);
        console.log(data.list[0].dt_txt)
        var iconcode1 = data.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
        var iconcode2 = data.list[8].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
        var iconcode3 = data.list[16].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
        var iconcode4 = data.list[24].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
        var iconcode5 = data.list[32].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
        $(`#forecast1Display1`).html(data.list[0].dt_txt);
        $(`#forecast1Display2`).html('temp: ' + data.list[0].main.temp_min + ' - ' + data.list[0].main.temp_max);
        $(`#forecast1Display3`).html(data.list[0].weather[0].description + " ").append( `<br>`).append( `<img src="${iconurl}">`);
        $(`#forecast1Display4`).html(data.list[0].main.humidity + "% rh");
        $(`#forecast1Display5`).html("wind " + data.list[0].wind.speed + "mph / " + windCardinalDirection(data.list[0].wind.deg));

        $(`#forecast2Display1`).html(data.list[8].dt_txt);
        $(`#forecast2Display2`).html('temp: ' + data.list[8].main.temp_min + ' - ' + data.list[8].main.temp_max);
        $(`#forecast2Display3`).html(data.list[8].weather[0].description + " ").append( `<br>`).append( `<img src="${iconurl}">`);
        $(`#forecast2Display4`).html(data.list[8].main.humidity + "% rh");
        $(`#forecast2Display5`).html("wind " + data.list[8].wind.speed + "mph / " + windCardinalDirection(data.list[8].wind.deg));

        $(`#forecast3Display1`).html(data.list[16].dt_txt);
        $(`#forecast3Display2`).html('temp: ' + data.list[16].main.temp_min + ' - ' + data.list[16].main.temp_max);
        $(`#forecast3Display3`).html(data.list[16].weather[0].description + " ").append( `<br>`).append( `<img src="${iconurl}">`);
        $(`#forecast3Display4`).html(data.list[16].main.humidity + "% rh");
        $(`#forecast3Display5`).html("wind " + data.list[16].wind.speed + "mph / " + windCardinalDirection(data.list[16].wind.deg));

        $(`#forecast4Display1`).html(data.list[24].dt_txt);
        $(`#forecast4Display2`).html('temp: ' + data.list[24].main.temp_min + ' - ' + data.list[24].main.temp_max);
        $(`#forecast4Display3`).html(data.list[24].weather[0].description + " ").append( `<br>`).append( `<img src="${iconurl}">`);
        $(`#forecast4Display4`).html(data.list[24].main.humidity + "% rh");
        $(`#forecast4Display5`).html("wind " + data.list[24].wind.speed + "mph / " + windCardinalDirection(data.list[24].wind.deg));

        $(`#forecast5Display1`).html(data.list[32].dt_txt);
        $(`#forecast5Display2`).html('temp: ' + data.list[32].main.temp_min + ' - ' + data.list[32].main.temp_max);
        $(`#forecast5Display3`).html(data.list[32].weather[0].description + " ").append( `<br>`).append( `<img src="${iconurl}">`);
        $(`#forecast5Display4`).html(data.list[32].main.humidity + "% rh");
        $(`#forecast5Display5`).html("wind " + data.list[32].wind.speed + "mph / " + windCardinalDirection(data.list[32].wind.deg));

    });

    // current wx data
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WX_APPID,
        lat: markerLocation.lat,
        lon: markerLocation.lng,
        units: "imperial"
    }).done(function(data) {
        console.log("current wx data");
        console.log(data);
        //for the current wx icon
        var iconcode = data.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $(`#locationDisplay1`).html("City: " + data.name + ", " + data.sys.country);
        $(`#locationDisplay2`).html("Currently: " + data.weather[0].description + " " ).append(`<br>`).append( `<img src="${iconurl}">`);
        $(`#locationDisplay3`).html("Visibility: " + data.visibility + "m");
        $(`#locationDisplay4`).html("Wind from the " + windCardinalDirection(data.wind.deg) + " at " + data.wind.speed + "mph");
        $(`#locationDisplay5`).html("Temp: " + data.main.temp + "° F");
        $(`#locationDisplay6`).html("Range: " + data.main.temp_min + "° F - " + data.main.temp_max + "° F");
        $(`#locationDisplay7`).html("Humidity: " + data.main.humidity + "%rh");
        });



    });

function updateLocation(lng, lat){
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WX_APPID,
        lon: markerLocation.lng,
        lat: markerLocation.lat,
        units: "imperial"
    }).done(function(data) {});
};




    //convert azimuth to cardinal directions function
    function windCardinalDirection(degrees){
    let cardinalDirection = '';
    if ((degrees > 348.75 && degrees <= 360) || (degrees >=0 && degrees <= 11.25)){
        cardinalDirection = "N";
    } else if (degrees > 11.25 && degrees  <= 33.75) {
        cardinalDirection = "NNE";
    } else if (degrees > 33.75 && degrees <= 56.25) {
        cardinalDirection = "NE";
    } else if (degrees > 56.25 && degrees <= 78.75) {
        cardinalDirection = "ENE";
    } else if (degrees > 78.75 && degrees <= 101.25) {
        cardinalDirection = "E";
    } else if (degrees > 101.25 && degrees <= 123.75) {
        cardinalDirection = "ESE";
    } else if (degrees > 123.75 && degrees <= 146.25) {
        cardinalDirection = "SE";
    } else if (degrees > 146.25 && degrees <= 168.75) {
        cardinalDirection = "SSE";
    } else if (degrees > 168.75 && degrees <= 191.25) {
        cardinalDirection = "S";
    } else  if (degrees > 191.25 && degrees <= 213.75) {
        cardinalDirection = "SSW";
    } else if (degrees > 213.75 && degrees <= 236.25)  {
        cardinalDirection = "SW";
    } else if (degrees > 236.25 && degrees <= 258.75) {
        cardinalDirection = "WSW";
    } else if (degrees > 258.75 && degrees <= 281.25) {
        cardinalDirection = "W";
    } else if (degrees > 281.25 && degrees <= 303.75) {
        cardinalDirection = "WNW";
    } else if (degrees > 303.75 && degrees <= 326.25) {
        cardinalDirection = "NW";
    } else if (degrees > 326.75 && degrees <= 348.75) {
        cardinalDirection = "NNW";
    }
    return cardinalDirection;
}

function appendLeadingZeroes(n){
    if(n <= 9){
        return "0" + n;
    }
    return n;
}

const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function formatTime(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    let year = dateTime.getFullYear();
    let month = months[dateTime.getMonth()];
    let day = dateTime.getDate();
    let hour = appendLeadingZeroes(dateTime.getHours());
    let minutes = appendLeadingZeroes(dateTime.getMinutes());
    let seconds = appendLeadingZeroes(dateTime.getSeconds());
    let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
    return formattedDateTime;
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function namedDayFromDay(timeStamp){
    let dateTime = new Date(timeStamp * 1000);
    return daysOfWeek[dateTime.getDay()];
}




//mapbox notes
//Forward Geocoding - search by address
//Reverse Geocoding - search by coordinates



