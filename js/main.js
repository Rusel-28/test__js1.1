// function onClickButton (){
//     alert('вы нажали на меня');
// }




// var content = 0;

// function onClickButton (){

//     content++;
//     console.log(content)
// }



/*------------------------------------------------------*/
// var cont = 0;

// function onClickButton (el){

//     cont++;
//     el.innerHTML = 'вы нажали на кнопку: ' + cont;

//     console.log(el.name)
// }

/*------------------------------------------------------*/
// var cont = 0;

// function onClickButton (el){

//     alert('вы нажали на кнопку');

// }





// var cont = 0;

// function onClickButton (el){

//     cont++;
//     el.innerHTML = 'вы нажали на кнопку: ' + cont;
//     el.style.background = "red";
//     el.style.color = "blue";

//     el.style.cssText = "border-radius: 5px;font-size: 20px;";
// }





// function onInput(el){
    
//     console.log(el.value);
// }




// var text = document.getElementById('text');


// text.style.color = "red";
// text.style.backgroundColor = "blue";

/*-----------------------------------------------------*/


function checkForm(el){
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if(name == "" || pass == "" || state == "")
    fail = "Заполните все поля";
    else if(name.length <= 1 || name.length > 10)
    fail = "ведите имя правильно";
    else if(pass != repass)
    fail = "пароли не совпадают";
    else if (pass.split("&").length > 1)
    fail = "некоректный пароль";

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
        return false;
    } 
    
    else {
        alert("Все записанно верно !!!");
        alert("Ваше имя -" + name + "; Пароль - " + pass + "; Пол - " + state + " !")
        return true;
    }        
}


