document.getElementById('getLocationBtn').addEventListener('click', function() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        // 1. Success Callback
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            try {
                // FIXED: Updated URL to your actual Render backend (or use http://127.0.0.1:8000/api/location for local testing)
                const response = await fetch('https://checkin-vmcb.onrender.com/api/location', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        lat: latitude,
                        lng: longitude,
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to send location Data to server');
                }
                
                const result = await response.json();
                console.log('Server Response', result);

                if (result.checkin_status == True) {
                    alert("Sucess: You are clocked in")
                }else {
                    alert ("You are too far away to clock in")
                }

            } catch (error) {
                console.error("Error sending location to server:", error.message);
            }
        },
        // 2. Error Callback (Correctly separated outside the success function)
        (error) => {
            console.error("Error getting location:", error.message);
        },
        // 3. Options Object
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
});