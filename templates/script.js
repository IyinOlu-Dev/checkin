document.getElementById('getLocationBtn').addEventListener('click', function() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
        }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        (error) => {
            console.error("Error getting location:", error.message);
            },
            {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
            }
            


            try {
                const response = await fetch('[https://checkin-1-5mso.onrender.com]',
                    '(https://checkin-vmcb.onrender.com/api/location)', 
                    '(http://127.0.0.1:8000)',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        lat: latitude,
                        lng: longitude,
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to send location Data to server')
                }
                
                const result = await response.json();
                console.log('Server Response', result);

        }
        catch(error){
            console.error("Error getting location", error.message)
        };
    
})});