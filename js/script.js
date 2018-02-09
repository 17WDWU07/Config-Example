var ClientID;
var RedirectURI;
var accessToken;
getConfig();

function getConfig(){
    $.ajax({
        url: "../config.json",
        dataType: 'json',
        success: function(configData){
            ClientID = configData[0].ClientID;
            RedirectURI = configData[0].RedirectURI;
            accessToken = configData[0].AccessToken;
            runApp();
        },
        error: function(error){
            console.log(error);
            console.log("Something has gone wrong");
        }
    })
}

function runApp(){
    //write all your other js within here
    console.log(ClientID);

}
