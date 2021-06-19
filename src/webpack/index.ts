import isEmail from 'validator/lib/isEmail'
const SHOW_ERROR_MESSAGE="show-error-message"

// É usado o AS para informar ao typescript o tipo do elemento
const form=document.querySelector('#form') as HTMLFormElement
const username=document.querySelector('.username') as HTMLInputElement
const email=document.querySelector('.email') as HTMLInputElement
const password=document.querySelector('.password') as HTMLInputElement
const password2=document.querySelector('.password2') as HTMLInputElement


form.addEventListener('submit',function(event:Event){
    event.preventDefault()
    hiderErrors(this)
    camposVazios(username,email,password,password2)
    checkEmail(email)
    checkPassowrds(password,password2)
    if(sendForm(this))alert('FORMULÁRIO ENVIADO COM SUCESSO')
})
function camposVazios(...inputs:HTMLInputElement[]):void{
    inputs.forEach(el=>{
        if(!el.value)showError(el,'Campo vazio')
    })
}
function checkEmail(input:HTMLInputElement):void{
    if(!isEmail(input.value)){
        showError(input,'Email inválido')
    }
}
function checkPassowrds(password:HTMLInputElement,password2:HTMLInputElement):void{
    if(password.value !== password2.value){
        showError(password2,'Senha não correspondente')
    }
}
function hiderErrors(form:HTMLFormElement):void{
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach((el)=>{
        console.log(el)
        el.classList.remove(SHOW_ERROR_MESSAGE)
    })
}
function showError(input:HTMLInputElement,msg:string):void{
    const form=input.parentElement as HTMLFormElement
    const spanErrorMsg=form.querySelector('.error-message') as HTMLSpanElement
    spanErrorMsg.innerText=msg
    form.classList.add(SHOW_ERROR_MESSAGE)

}

function sendForm(form:HTMLFormElement):boolean{
    let send=true
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGE}`).forEach(()=>send=false)
    return send

}


