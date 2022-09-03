let User = localStorage.getItem('guest')
let mycont = document.querySelector('#myconta')
let RegForm = document.querySelector('.regform')


if (User == null) {
    mycont.classList.add('d-block')
    RegForm.classList.add('d-none')
    localStorage.setItem('guest', false);
}else {
    
    mycont.classList.remove('d-block')
    mycont.classList.add('d-none')
    RegForm.classList.add('d-block')
};
document.addEventListener('click', function(){
    mycont.classList.add('d-none')
})


function saveData() {
let name,email,psw;

name = document.getElementById("Name").value;
email = document.getElementById("Email").value;
psw = document.getElementById("Psw").value;


let jsonstr = JSON.stringify(name)
console.log(jsonstr);

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("psw",psw);

if (email == 'info@gmail.com'){
    alert('მომმხმარებელი მსგავსი ელ:ფოსტით უკვე არსებობს');
}else{
    alert('წარმატებით გაიარეთ რეგისტრაცია');
}

};
