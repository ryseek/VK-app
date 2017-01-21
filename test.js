

var uid, fname, surname;

VK.api('users.get',{user_ids:"",fields:"",name_case:"nom"},function(data) {

        var responsevk=data.response;

        fname=responsevk.length;

        document.getElementById("firstname").innerHTML=fname;

});






