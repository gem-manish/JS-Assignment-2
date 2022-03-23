function saveData(){
    let myname = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let phone = document.getElementById("mob").value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{return v.email==email}))
    {
        alert("duplicate data");
    }
    else
    {
        user_records.push({
            "name":myname,
            "email":email,
            "password":password,
            "phone":phone
        })

        localStorage.setItem("users",JSON.stringify(user_records));

    }
    showData();
}

function showData(){
    document.getElementById("showUsers").innerHTML="";
    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records){
        for(let i=0;i<user_records.length;i++){
            let addDiv = document.createElement('div');
            addDiv.className="row";
            addDiv.innerHTML=' <div class="col-sm-3" style="background-color: #ffdc5c; padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-3" style="background-color: #38b7ff; padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-3" style="background-color: #ff914d; padding: 10px;">'+user_records[i].password+'</div><div class="col-sm-3" style="background-color: #3aa154; padding: 10px;">'+user_records[i].phone+'</div>'
            document.getElementById("showUsers").appendChild(addDiv);
        }
    }
    
}
