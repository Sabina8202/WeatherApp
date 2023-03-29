let weather = {
    "apiKey" : "aec8838e1819a7bae337fd9462a5eb20",
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q= " 
        + city 
        + "&units=metric&appid="
        + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data){

        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        

        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".speed").innerHTML = "Wind speed: " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";


    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};
document.querySelector(".search button").addEventListener("click", function(){
    weather.search();

})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }

})