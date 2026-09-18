function sendUserLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation not supported by your browser");
        return;
    }

    const options = {
        enableHighAccuracy : true,
        timeout : 10000,
        maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
        async (position) =>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log(` Latitude : ${latitude}, Longitude : ${longitude}`)
        })
}