$(document).ready(function () {

    $('#Submit').click(function () {
        var city = $('#city').val();
        if (city != '') {

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                    "&APPID=85ac65e46f89bc52d9316fbfbb75b6c7",
                type: "GET",
                datatype:"jsonp",
                success: function (data) {
                   var widget= show(data);
                   $("#show").html(widget);
                   $("#city").val('');

                },
                error: function (err) {
                    console.error(err);
                }
            });
        } else {
            $("#error").html('field cannot be empty');
        }
    });
});

function show(data){
    return "<h2 style='font-size:30px' class='mx-auto text-center'>Current Weather for " + data.name +", " + data.sys.country +"</h2>"+ 
    
    "<h3 style='font-size:20px'><strong>Weather</strong>:"+ data.weather[0].main +"</h3>" +
    
    "<h3 style='font-size:20px'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/" +data.weather[0].icon+".png'>" + data.weather[0].description +"</h3>"+ 
    "<h3 style='font-size:20px'><strong>Temprature</strong>:" + data.main.temp +"&deg;c </h3>" + 
    
    "<h3 style='font-size:20px'><strong>pressure</strong>:"+ data.main.pressure +"hPa</h3>" +
    
    "<h3 style='font-size:20px'><strong>Humidity</strong>:"+ data.main.humidity +"%</h3>"+  
    
    "<h3 style='font-size:20px'><strong>Min. Temprature</strong>:"+ data.main.temp_min +"&deg;c</h3>" + 
    
    "<h3 style='font-size:20px'><strong>Max. Temprature</strong>:"+ data.main.temp_max +"&deg;c</h3>" + 
    
    "<h3 style='font-size:20px'><strong>Wind Direction</strong>:"+ data.main.deg +"&deg;</h3>";
}