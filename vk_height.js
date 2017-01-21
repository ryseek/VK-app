
document.getElementById("mr").innerHTML="MR work yea";

var uid, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":"nom"},function(data) {
    if (data.response) {
        

        var myObj = JSON.parse(data);
        var responsevk=myObj.response[0];

        document.getElementById("firstname").innerHTML=myObj;
    }
});






