let string = "";
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((button) => {
    button.addEventListener('click',(e) =>{
        // console.log(e.target);
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.btn2').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = '';
            document.querySelector('.btn2').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('.btn2').value = string;
        }
    })
})
