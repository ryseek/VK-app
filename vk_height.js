
document.getElementById("mr").innerHTML="MR work yea";

var uid, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":"nom"},function(data) {
    if (data.response) {
        var responsevk=data.response[0];


        document.getElementById("firstname").innerHTML=responsevk.first_name;
    }
});






