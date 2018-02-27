$(function() {

    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');
    var flag = $('.flag');

    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if(!countryName.length) {
            countryName = 'Poland';
        }
        $.getJSON(url + countryName, getCountriesList);
    }
    
    function getCountriesList(response) {
        countriesList.empty();
        flag.empty();
        response.forEach(function(item) {
            var countryCode = item.alpha2Code.toLowerCase();
            $('<img>').attr('src', 'http://www.countryflags.io/' + countryCode + '/flat/64.png').appendTo('.flag');
            $('<li>').text('Country name').text(item.name).appendTo(countriesList);
            $('<li>').text(item.capital).appendTo(countriesList);
            $('<li>').text(item.demonym).appendTo(countriesList);
            $('<li>').text(item.area).appendTo(countriesList);
             $('<li>').text(item.population).appendTo(countriesList);
             $('<li>').text(item.currencies).appendTo(countriesList);
        });
    }

});
