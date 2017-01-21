


VK.init(function() {


} );


var id, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {

    if (data.response) {
        var response=data.response[0];
        id=response.uid;
        fname=response.first_name;
        surname=response.sur_name;
        document.getElementById("firstname").innerHTML=fname;



    }
});
