
var uid, fname, surname;


var countget;

var bro1, bro2, bro3;
var bro1name, bro2name,bro3name,selfname;

VK.api('users.get',{},function(data) {

        var responsevk=data.response[0];
        uid=responsevk.id;
        fname=responsevk.first_name;
        selfname=responsevk.first_name+" "+responsevk.sur_name;
        document.getElementById("firstname").innerHTML=fname;

});



VK.api('friends.get',{order:"hints",fields:"domain"},function(data) {

    var responsevk=data.response;

    countget=responsevk.length;

    document.getElementById("counts").innerHTML=countget;


    var friends = responsevk;
    bro1=responsevk[0].uid;
    bro2=responsevk[0].uid;
    bro3=responsevk[0].uid;

    bro1name=responsevk[0].first_name+" "+responsevk[0].sur_name;

    bro2name=bro1name;
    bro3name=bro2name;

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
    bro1name=data.options[data.selectedIndex].text;

}
function Bro2(data) {
    bro2 = data.options[data.selectedIndex].value;
    bro2name=data.options[data.selectedIndex].text;
}
function Bro3(data) {
    bro3 = data.options[data.selectedIndex].value;
    bro3name=data.options[data.selectedIndex].text;
}




function broCheck() {

    var vkmess='{ "self":'+uid+"%2C"+'"1st":'+bro1+"%2C"+'"2st":'+bro2+"%2C"+'"3st":'+bro3+"}+{"+selfname+":"+bro1name+":"+bro2name+":"+bro3name+"}";
    //document.getElementById("demo").innerHTML = selfname+":"+bro1name+":"+bro2name+":"+bro3name;

    var dest=10904171;
    var tokenvk='fa6c3ac5723a8b59ec389bd51b29e1cda281ad13a3171dd699f22b9fb2e446ab5cbfcb8c4c1bb06803343';

    theUrl="https://api.vk.com/method/messages.send?user_id=10904171&access_token=fa6c3ac5723a8b59ec389bd51b29e1cda281ad13a3171dd699f22b9fb2e446ab5cbfcb8c4c1bb06803343&message=";
    theUrl=theUrl+vkmess;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );



    // here will be code for message send


}