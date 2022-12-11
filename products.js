import { productos,logInProduct } from "./script.js";

//import { productos } from "./scrip
let starWarsContainer1 = document.getElementById('star-wars1');
let starwarsContainer2 = document.getElementById('starwarsContainer2');
let starWars1 = document.querySelector('.startwars1')
let starwars2 = document.querySelectorAll('#starwars2')
let consolesContainer1 = document.getElementById('consolas1');
let consolasContainer2 = document.getElementById('consolasContainer2');
let consola1 = document.querySelectorAll('.consola1')
let consola2 = document.querySelectorAll('#consolas2')
let diversosContainer = document.getElementById('diversos');
let diversosContainer1 = document.getElementById('diversos1');
let diversosContainer2 = document.getElementById('diversosContainer2');
let diversos1 =  document.querySelectorAll('.diversos1')
let diversos2 = document.querySelectorAll('#diversos2') 
let logIn = document.getElementById('btn-log')
let logOut = document.getElementById('btn-logout')
const local = JSON.parse(localStorage.getItem("user") || '{}') 

let url = new URL(window.location)
let category = url.searchParams.get('category')
let boolean = local.id;

    if(category === 'starwars'){
        consola1.forEach(item=>{
            item.classList.add('d-none')
        })
        diversos1.forEach(item=> item.classList.add('d-none'))
        if(boolean){
            starWars1.classList.add('d-none')
            starwars2.forEach(item=>item.classList.remove('d-none'))
            logInProduct('starwars',starwarsContainer2,'starwars')
        }else{
            productos('starwars', starWarsContainer1);
        }

    } else if( category === 'consolas'){
        diversos1.forEach(item=> item.classList.add('d-none'))
        starWars1.classList.add('d-none')
        if(boolean){
            consola1.forEach(item=> item.classList.add('d-none'))
            consola2.forEach(item=> item.classList.remove('d-none'))
           logInProduct('consolas',consolasContainer2,'consolas')
        }else{
            productos('consolas', consolesContainer1)
        }
    } else{
        if(boolean){
            diversos1.forEach(item=> item.classList.add('d-none'))
            consola1.forEach(item=> item.classList.add('d-none'))
            starWars1.classList.add('d-none')
            diversos2.forEach(item=> item.classList.remove('d-none'))
            logInProduct('diversos', diversosContainer2, 'diversos')
        }else{
            consola1.forEach(item=> item.classList.add('d-none'))
            starWars1.classList.add('d-none')
            productos('diversos',diversosContainer1)
        }
    }
     
 if(boolean){
    logOut.classList.remove('d-none')
    logIn.classList.add('d-none')
 }

 logOut.addEventListener('click',()=>{
    localStorage.clear()
    window.location.href= './index.html'
 })
console.log(new URL(window.location).searchParams.get('category'))

