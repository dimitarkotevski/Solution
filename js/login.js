const api_url = "https://codeit-fe-internship-2022.herokuapp.com/api/books";



/*
async function getData(){
    const response=await fetch(api_url);
    const data=await response.json();
    console.log(data)
    return data;
}
api_data=getData();

console.log(fetch(api_url))
*/


function check(event) {
    event.preventDefault();
    document.getElementById('message').innerHTML = "checking";
    sessionStorage.username=document.getElementById("username").value;
    

    document.getElementById("login").innerHTML=sessionStorage.username;
    const url = "https://codeit-fe-internship-2022.herokuapp.com/api/authentication";
    const data = {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value
    };
    const other_params = {
        headers : { "content-type" : "application/json"},
        body : JSON.stringify(data),
        method : "POST",
        mode : "cors"
    };

    fetch(url, other_params)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Could not reach the API: " + response.statusText);
            }
        }).then(function(data) {
        document.getElementById("message").innerHTML = data.encoded;
        document.getElementById("message").style.display="block";
    }).catch(function(error) {
        document.getElementById("message").innerHTML = error.message;
        document.getElementById("message").style.display="block";
    });
    return true;
}



