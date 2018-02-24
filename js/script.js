$(function() {

var url = 'https://restcountries.eu/rest/v2/all';
var countriesList = $('#countries');


$('#search').on('click', function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.lenght) countryName = 'Poland';
});
    $.ajax({
        url: url + countryName,
        json: 'json',
        method: 'GET',
        success: function showCountriesList(response) {
        countriesList.empty();
        response.forEach(function(item) {
            $('<li>').text(item.name).appendTo(countriesList);
        }); 
    }
    });
});
