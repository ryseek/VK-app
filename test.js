
var uid, fname, surname;


var countget;

var bro1, bro2, bro3;


VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];
        uid=responsevk.id;
        fname=responsevk.first_name;

        document.getElementById("firstname").innerHTML=fname+uid;

});



VK.api('friends.get',{order:"hints",fields:"domain"},function(data) {

    var responsevk=data.response;

    countget=responsevk.length;

    document.getElementById("counts").innerHTML=countget;


    var friends = responsevk;
    bro1=responsevk[0].uid;
    bro2=responsevk[0].uid;
    bro3=responsevk[0].uid;

    //
    var sel = document.getElementById('FriendsList1');
    var fragment = document.createDocumentFragment();

    friends.forEach(function(bro, index) {
        var opt = document.createElement('option');
        opt.innerHTML = bro.first_name+" "+bro.last_name;
        opt.value = bro.uid;
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

}
function Bro2(data) {
    bro2 = data.options[data.selectedIndex].value;
}
function Bro3(data) {
    bro3 = data.options[data.selectedIndex].value;
}




function broCheck() {

    var vkmess='{ "self":'+uid+","+'"1#":'+bro1+","+'"2#":'+bro2+","+'"3#":'+bro3+"}";
    document.getElementById("demo").innerHTML = vkmess;

    var dest=10904171;

    VK.api('message.send',{user_id:dest,message:"test"},function(data) {

        document.getElementById("demo").innerHTML = data.error.error_msg;

    });


    // here will be code for message send


}