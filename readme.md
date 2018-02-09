# Config Example

Configuration codes are something which you really want to hide away from users.
If you go back to my first commit on this repo and look into script.js. You can see all of my secure information i needed for the Instagram API.

I really don't want those details to be seen by people on git or the rest of the internet.
If so then people could take my information and do some bad things in my name.

This project now has a config.json.example file which has all the appropriate key names which my application needs.
In my script.js file I am now making an ajax request to a file called config.json which holds my actual keys and passwords.

What I need to do is copy the example file 1 directory above my root directory, remove the .example at the end and then add in my actual codes.

In the script.js file now, we have 1 ajax request at the top which is getting all the config data. And once we have the config data we are then running a function called runApp(). In runApp we will now write all of our js code normally. We dont want to run anything outside of that function because of the first ajax request. Because ajax is Asynchronous, it will run other lines while it is running everything within the ajax function. What we want to do is wait until that ajax function is done before we actually start running anything else in our js.
