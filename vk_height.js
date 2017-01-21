var uid, fname, surname;

document.getElementById("mr").innerHTML="mr work js file";

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {
    if (data.response) {
        var responsevk=data.response[0];
        uid=responsevk.id;
        fname=responsevk.first_name;
        surname=responsevk.sur_name;

        document.getElementById("firstname").innerHTML=fname;
    }
});






