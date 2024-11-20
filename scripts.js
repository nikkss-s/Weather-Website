async function getWeather() {
    const apiKey = 'f9a43feeca0d4685940294381ddf4df7'; 
    const city = document.getElementById('city').value;
    // console.log(city)
    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
    // console.log(url);
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}
function displayWeather(data) {
    // console.log(data);
    document.getElementById('location').innerText = `${data.data[0].city_name}, ${data.data[0].country_code}`;
    document.getElementById('description').innerText = `Weather: ${data.data[0].weather.description}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.data[0].app_temp}°C`;
    // document.getElementById('humidity').innerText = `Humidity: ${data.data[0].main.humidity}%`;
}