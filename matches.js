
//variables
let username;
let gender;
let loc;
let level;
let age;
const newDiv = document.createElement("div");
  console.log(data);

    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name.first)
   
    
    username = data.results[i].login.username;
  
    gender = data.results[i].gender;

    loc = data.results[i].location;

    level = data.results[i].skill_level;

    age = data.results[i].dob.age
  
  

//create a variable called person to represent each item in list of data
// for(let person of data ){
//     console.log(person.name.first)
    newDiv.innerHTML += `<div>

   
    <img src=${data.results[i].picture.large}></img>
    <div class="p">
    <p>${username}</p>
    <p>Gender: ${gender}</p>
    <p>Location: ${loc}</p>
    <p>Skill Level: ${level}</p>
    <p>Age: ${age}</p>
    </div>
    </div>
    `
    document.body.append(newDiv);
    }


   

    const btn = document.querySelector('#home');

    btn.addEventListener('click', function(){
        window.location.href = 'homepage.html';
        
        return false; 
    })