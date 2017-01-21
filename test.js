

var uid, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":"nom"},function(data) {
    if (data.response) {
        var responsevk=data.response[0];

        fname=responsevk["first_name"];

        document.getElementById("firstname").innerHTML=fname;
    }
});






