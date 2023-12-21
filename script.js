function register(){
    window.location="./register.html"
}
function signup(){
    Acc={
        Username:uname.value,
        Password:pass.value
    }
    if(Acc.Username=="" || Acc.Password==""){
        alert("Input details in all fields")
    }
    else{
        if(Acc.Username in localStorage){
            alert("User Already Exists")
        }
        else{
            localStorage.setItem(Acc.Username,JSON.stringify(Acc))
            window.location="./login.html"
            alert("Signup Successful")
        }
        
}

}
function signin(){
    window.location="./login.html"
}

function login(){

    let user=acno1.value
    let key=pass1.value
    if(user=="" || key==""){
        alert("Enter Details ")
    }
    else{
    if(user in localStorage){
        let key1=JSON.parse(localStorage.getItem(user))
        if(key==key1.Password){
            window.location="./index.html"
            alert("Login sucessful")
        }
        else{
            alert("Invalid Credentials")
        }
    }
}
}

function submit(){
    Data1={
        userid:id.value,
        Name:nme.value,
        category:categ.value,
        Description:desc.value,
        Rate:rate.value,
        Review:review.value,



    }
    if(Data1.userid==""|| Data1.Name==""|| Data1.category=="" || Data1.Description=="" || Data1.Rate=="" || Data1.Review==""){
        alert("Enter Details ")
    }
    else{
        localStorage.setItem(Data1.userid,JSON.stringify(Data1))
        alert("Details Saved")
}
}

function Reset(){
    localStorage.clear()
    alert("Removed data ")

}
