
var uid, fname, surname;


var countget;

var bro1, bro2, bro3;


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
        opt.value = bro.uid.
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
    //
    var sel = document.getElementById('FriendsList2');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.uid;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);
    //
    var sel = document.getElementById('FriendsList3');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.uid;
        fragment.appendChild(opt);
    });

    sel.appendChild(fragment);




});



function Bro1(data) {
    bro1 = data.options[data.selectedIndex].value;
    document.getElementById("demo").innerHTML = bro1;

}
function Bro2(data) {
    bro2 = data.options[data.selectedIndex].value;
    document.getElementById("demo").innerHTML = bro2;}
function Bro3(data) {
    bro3 = data.options[data.selectedIndex].value;
    document.getElementById("demo").innerHTML = bro3;}




function broCheck() {
    document.getElementById("demo").innerHTML = bro1;
}