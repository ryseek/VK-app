


VK.init(function() {


} );


var id, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {

    if (data.response) {
        var response=data.response[0];
        fname=response.first_name;
        document.getElementById("fname").innerHTML=fname;



    }
});
