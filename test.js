
var uid, fname, surname;


var countget;




VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];

        fname=responsevk.first_name;

        document.getElementById("firstname").innerHTML=fname;

});



VK.api('friends.get',{order:"hints",fields:"domain"},function(data) {

    var responsevk=data.response;

    countget=responsevk.length;
    var bestfr=responsevk[0].first_name;


    document.getElementById("counts").innerHTML=countget;
    document.getElementById("best").innerHTML=bestfr;


    var friends = responsevk;

    var sel = document.getElementById('FriendsList');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.first_name+" "+bro.last_name;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);


});


