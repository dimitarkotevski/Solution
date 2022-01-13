var api_url="https://codeit-fe-internship-2022.herokuapp.com/api/books/"
    +sessionStorage.id;

fetch(api_url).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    let temp="";
    let pomos="/image"

    temp+="<div>";
    temp+="<h5>Title:</h5> "+data.title;
    temp+="</div>";
    temp+="<div>";
    temp+="<h5>Author:</h5> "+data.author;
    temp+="</div>";
    temp+="<div>";
    temp+="<h5>Genres:</h5>  "+data.genres;
    temp+="</div>";
    temp+="<div>";
    temp+="<h5>Pages:</h5>  "+data.pages;
    temp+="</div>";
    temp+="<div>";
    temp+="<h5>Descriptio:</h5>  "+data.description;
    temp+="</div>";
    document.getElementById("data").innerHTML=temp
}).catch(function() {
    console.log("");
});