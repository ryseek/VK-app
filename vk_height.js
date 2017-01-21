


VK.init(function() {


} );


var id, name, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {

    if (data.response) {
        var response=data.response[0];
        id=response.uid;
        document.getElementById("iname").innerHTML=id;



    }
});
