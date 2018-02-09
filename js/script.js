var ClientID;
var RedirectURI;
var accessToken;

$.ajax({
    url: "../config.json",
    dataType: 'json',
    success: function(configData){
        console.log(configData);
    },
    error: function(error){
        console.log(error);
        console.log("Something has gone wrong");
    }
})
