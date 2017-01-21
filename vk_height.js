

var id, fname, surname;
var response;

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {

    if (data.response) {
        response=data.response[0];
        fname=response.first_name;
        surname=response.sur_name;

        document.getElementById("firstname").innerHTML=fname;
        document.write("work");
    }
});






