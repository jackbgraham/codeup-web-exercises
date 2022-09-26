$(function(){

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WX_APPID,
        lat: 29.423,
        long: -98.485,
        units: "imperial"
    }).done(function(data) {
        console.log('the entire response:', data);
    });
})