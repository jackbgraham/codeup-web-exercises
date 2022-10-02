$(function() {

//function from Javier to convert wind azimuth to cardinal direction
    function windCardinalDirection(degrees) {
        let cardinalDirection = '';
        if ((degrees > 348.75 && degrees <= 360) || (degrees >= 0 && degrees <= 11.25)) {
            cardinalDirection = "N";
        } else if (degrees > 11.25 && degrees <= 33.75) {
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
        } else if (degrees > 191.25 && degrees <= 213.75) {
            cardinalDirection = "SSW";
        } else if (degrees > 213.75 && degrees <= 236.25) {
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

//not really sure why I need this?
    function appendLeadingZeroes(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n;
    }

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function formatTime(timeStamp) {
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

//access token for mapbox, the map will not load without this
    mapboxgl.accessToken = MAPBOX_API_TOKEN;

    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WX_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        // console.log("current weather:");
        // console.log(data);
        // console.log(data.main.temp);
        // console.log(data.wind.speed);
        // console.log(windCardinalDirection(data.wind.deg));
        $('body').append(`<p>The current temperature is ${data.main.temp}</p>`);

    });
//forecasted wx data from the open weather map api service
    $.get("http://api.openweathermap.org/data/2.5/forecast/", {
        APPID: OPEN_WX_APPID,
        lat: 29.423017,
        lon: -98.48527,
    }).done(function (data) {
        console.log("forecasts:");
        console.log(formatTime(data.list[0].dt));
        console.log(data.list);
    });


//loads the map, but we need to add style/bootstrap into the tag so that it has a designated display area
    var map = new mapboxgl.Map({
        container: 'map', // container ID, the map should appear in whatever division has this ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL from mapbox, customizable
        center: [-98.492, 29.420], //coordinates for San Antonio
        zoom: 10 //default zoom level
    });
    //just realized I can go through the mapboxgl in the same way I can look through the wx data

    console.log(mapboxgl);
    console.log(mapboxgl.LngLat);

//coordinates and coordinate updates
    let coordinates = document.getElementById('coordinates');

    console.log(coordinates);

    // map.on("mousemove",
    //     (e) => {
    //         document.getElementById('coordinates').innerHTML =
    // // `e.point` is the x, y coordinates of the `mousemove` event
    // // relative to the top-left corner of the map.
    //             JSON.stringify(e.point) +
    //             '<br />' +
    //             // `e.lngLat` is the longitude, latitude geographical position of the event.
    //             JSON.stringify(e.lngLat.wrap());
    //     });

//draggable marker

    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.492, 29.420])
        .addTo(map);
// move marker on double click and gets new coordinate data
//     map.on('dblclick').preventDefault(); < trying to stop the map from zooming in on dblclick

    let lngLat = marker.getLngLat();
    let wx_lat = marker.lat;
    let wx_lng = marker.lng;

    console.log(wx_lat,wx_lng);


    function onDragEnd() {
        lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = `Latitude: ${lngLat.lat.toFixed(3)}` + ', ' + `Longitude: ${lngLat.lng.toFixed(3)}` + ` double click to set marker location`; //toFixed displays this as a 5 digit grid
        console.log( "marker at " + lngLat.lat, lngLat.lng);
        updateWx();
    }

    //updates the mapbox coordinates, event onload
        marker.onload = onDragEnd();
        marker.on('dragend', onDragEnd);

        map.on('dblclick', (e) => {
            marker.setLngLat(e.lngLat)
            lngLat = marker.getLngLat();
            console.log( "marker at " + lngLat.lat, lngLat.lng);
            coordinates.style.display = 'block';
            coordinates.innerHTML = `Latitude: ${lngLat.lat.toFixed(3)}` + ', ' + `Longitude: ${lngLat.lng.toFixed(3)}` + ` double click to set marker location`;
            updateWx();
        });

//we will use 'lngLat.lat, lngLat.lng' to pass locational data into the weather updates
console.log( "this is center " + lngLat.lat, lngLat.lng);
//now we need to get this passed to the weather api to get the correct location



    function updateWx(){

//current wx data from the open weather map api service
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WX_APPID,
            lat: lngLat.lat,
            lon: lngLat.lng,
            units: "imperial"
        }).done(function (data) {
            $('body').append(`<p>The current temperature is ${data.main.temp}</p>`);

        });
//forecasted wx data from the open weather map api service
        $.get("http://api.openweathermap.org/data/2.5/forecast/", {
            APPID: OPEN_WX_APPID,
            lat: lngLat.lat,
            lon: lngLat.lng,
        }).done(function (data) {

        });

    }
console.log(lngLat.lat);

})