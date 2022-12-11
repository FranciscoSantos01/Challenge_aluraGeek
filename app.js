
import { logInProduct, productos } from "./script.js";

let main = document.getElementById('main')
let selectProducts = document.getElementById('selectProducts')
let starWarsContainer = document.getElementById('star-wars');

let consolesContainer = document.getElementById('consolas');

let diversosContainer = document.getElementById('diversos');

let producto = document.getElementById('productos');
let verTodoS = document.getElementById('verTodoS');
let verTodoC = document.getElementById('verTodoC');
let verTodoD = document.getElementById('verTodoD');


let logInContainer = document.getElementById('logIn');
let logIn = document.getElementById('btn-log')
let logOut = document.getElementById('btn-logout')
const emailValue =  document.querySelector('[data-name="email"]')
const passValue = document.querySelector('[data-name="password"]')
const submit = document.getElementById('btn-submit');
 let selectProductsContainer= document.getElementById('logInProducts');




    productos('starwars',starWarsContainer);
    productos('consolas',consolesContainer);
    productos('diversos', diversosContainer);
    verTodoS.addEventListener('click',(e)=>{
        window.location.href='/productos.html?category=starwars'
        /*if(boolean){
            verTodo(starWars1)
        } else{
            verTodo2(starwars2,'starwars', starwarsContainer2)
        }*/ 
        }
        
        )
    verTodoC.addEventListener('click',()=>{
        window.location.href='/productos.html?category=consolas'
        /*if(boolean){
            verTodo(consola1)
        } else{
            verTodo2(consola2, 'consolas', consolasContainer2)
        }*/
    })
    verTodoD.addEventListener('click',()=>{
       window.location.href='/productos.html?category=diversos'
    })
    
    


const local = JSON.parse(localStorage.getItem("user") || '{}') 

if(local.id){
    logOut.classList.remove('d-none')
    logIn.classList.add('d-none')
}



logOut.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload()
})












logIn.addEventListener('click',()=>{
   window.location.href= './logIn.html'
})



