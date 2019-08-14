

let username;
let gender;
let loc;
let level;
let age;
const newDiv = document.createElement("div");
  

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].name.first)
   
    
    username = data.results[i].username;
   
    gender = data[i].gender;

    loc = data[i].location;

    level = data[i].skill_level;

    age = data[i].dob.age
  
  

//create a variable called person to represent each item in list of data
// for(let person of data ){
//     console.log(person.name.first)
    newDiv.innerHTML += `<div>

    <p>${fname}</p>
    <p>${lname}</p>
    <p>${gender}</p>
    <p>${loc}</p>
    <p>${level}</p>
    <p>${age}</p>
    <img src=${data[i].picture.large}></img>
    </div>
    `
    document.body.append(newDiv);
    }


   

    const btn = document.querySelector('#home');

    btn.addEventListener('click', function(){
        window.location.href = 'homepage.html';
        
        return false; 
    })