
const emailValue =  document.querySelector('[data-name="email"]')
const passValue = document.querySelector('[data-name="password"]')
const submit = document.getElementById('btn-submit');
localStorage.setItem('user', JSON.stringify({user:'admin@gmail.com', password:'1234!'}))

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const local =JSON.parse(localStorage.getItem("user") || '{}') 
    if(emailValue.value === local.user && passValue.value === local.password){
        localStorage.setItem('user',JSON.stringify({...local,id:true}))
        window.location.href= './productos.html?category=starwars'
    }
})
