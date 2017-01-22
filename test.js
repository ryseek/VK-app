
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

    document.getElementById("counts").innerHTML=countget;


    var friends = responsevk;11
    //
    var sel = document.getElementById('FriendsList1');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.first_name+" "+bro.last_name;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
    //
    var sel = document.getElementById('FriendsList2');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.first_name+" "+bro.last_name;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
    //
    var sel = document.getElementById('FriendsList3');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.first_name+" "+bro.last_name;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);




});



function broCheck() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function Bro1(data) {
    document.getElementsByClassName("demo").innerHTML=1;
}
function Bro2(data) {
    document.getElementsByClassName("demo").innerHTML=2;
}
function Bro3(data) {
    document.getElementsByClassName("demo").innerHTML=3;
}


