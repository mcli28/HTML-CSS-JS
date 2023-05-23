function WeatherApp(){
    var weatherWidget = new WeatherWidget($("#weather-widget"), "YourApiKey"),
        version = "8.3";
    
    function getCurrentWeather(){
        var lat = $("#latitude").val();
        var lon = $("#longitude").val();
        if(lat && lon ){
            $("#weather-widget").fadeIn();
            weatherWidget.update(lat, lon);
        }
    }
}

function weatherWidget($widget){
    this.update = function(){
        $(".results", $widget).hide();
        $(".loading", $widget).show();
        getWeatherReport();
    }
    //function getWeatherReport(){
    function getWeatherReport(lat, lon){
        //$.get("data/weather.xml")
        
        //$.get("data/weather.json", {
        //    t: new Date().getTime();
        //})

        var coords = lat + "," + lon;
        $.ajax({
            url: "http://api.wunderground.com/api/"+wuKey+"/conditions/q/"+coords+".json",
            dataType: "jsonp"
        })
            .done(function(data){
                populateWeather(data);
            })
            .fail(function (jqXHR, textStatus, errorThrown){
                    showError(errorThrown);
            });
    }
    function populateWeather(data){
        //var $observation = $("current_observation", data);
        var $observation = data.current_observation;
        $(".results header img", $widget)
            //.attr("src", $("icon_url", $observation).text());
            .attr("src", observation.icon_url);
        $(".location>span", $widget)
            //.text($("location", data).text());
            .text(data.location.city);
        $(".conditions>span").each(function(i, e){
            var $span = $(this);
            var field = $span.data("field");
            //$(this).text($(field, $observation).text());
            $(this).text(observation[field]);
        });

        // Comply with terms of service
        $(".results footer img", $widget).attr("src", observation.image.url);

        $(".loading", $widget).fadeOut(function(){
            $(".results", $widget).fadeIn();
        });
    }

    function getLocation(){
        if (navigator.getLocation){
            navigator.geolocation.getCurrentPosition(function(position){
                $("#latitude").val(position.coords.latitude);
                $("#longitude").val(position.coords.longitude);
            }, function(error){
                $("#controls .error")
                    .text("ERROR: "+ error.message)
                    .slideDown();
            });
        }
    }
}

navigator.geolocation.getCurrentPosition(
    function (position) {alert("call was successful");},
    function (error) {alert("call failed");}
);

