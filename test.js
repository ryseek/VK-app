

var uid, fname, surname;

VK.api('users.get',{},function(data) {

        var responsevk=data.response;

        fname=responsevk.length;

        document.getElementById("firstname").innerHTML=fname;

});






