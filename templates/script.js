document.getElementById('getLocationBtn').addEventListener('click', function() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
        }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            },
        (error) => {
            console.error("Error getting location:", error.message);
            },
            {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
            }
            
        );

        try {
                const response = await fetch('https://your-backend-api.com/api/location', {
                    method: 'POST',
                    headers: {'Content-Tyoe': 'application/json',
                    },

                    body: JSON.stringify({
                        lat: latitude,
                        lng: longitude,
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to send location Data to server')
                }
                console.log(Error)
            
        
        }
    
);