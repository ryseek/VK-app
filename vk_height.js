

var uid, fname, surname;

VK.api("users.get",{"user_ids":"","fields":"","name_case":""},function(data) {
    if (data.response) {
        var responsevk=data.response[0];
        console.log("data:"+responsevk);
        console.log("dafuck");
        fname=responsevk.first_name;
        surname=responsevk.sur_name;

        document.getElementById("firstname").innerHTML=fname;
    }
});






