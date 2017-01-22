

var uid, fname, surname;

var countget;


VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];

        fname=responsevk.id;

        document.getElementById("firstname").innerHTML=fname;

});



VK.api('friends.get',{},function(data) {

    var responsevk=data.response;

    countget=responsevk;

    document.getElementById("counts").innerHTML=countget;

});


