

var uid, fname, surname;

VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];

        fname=responsevk["id"];

        document.getElementById("firstname").innerHTML=fname;

});






