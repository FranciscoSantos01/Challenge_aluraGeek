let file = document.getElementById('formFile');
let img = document.getElementById('imagen')
let form = document.querySelector('.form1')
let nombreProducto = document.getElementById('nombreProducto')
let select = document.getElementById('select')
let srcSelector =  document.querySelector('.selector')
let textArea = document.getElementById('floatingTextarea')
let price = document.getElementById('price')
let array= [];
 class nuevoProducto{
    title = "";
    price = "";
    img = "";
    description = "";
    category = "";
    id = "";
    constructor(title,price,img,description,category,id){
        this.title = title;
        this.price = price;
        this.img = img;
        this.description = description;
        this.category = category;
        this.id = id
    }
 }
  function addProducts(category, obj){
    fetch(`http://localhost:3000/${category}`,{
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
       })
       .then(response=> response.json())
       .then(data => console.log(data))
  }
 file.addEventListener('change', (e)=>{
    let imagen = e.target.files[0]
    let fileReader = new FileReader();
    fileReader.readAsDataURL(imagen);
    fileReader.onload = function(){
      let image = document.createElement('img')
      image.classList.add('selector')
      image.src = fileReader.result;
      array.push(image.src)
      img.appendChild(image)
    }
  })

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add('was-validated');
    addProducts(select.value,new nuevoProducto(nombreProducto.value,price.value,array[0],textArea.value,select.value, uuid.v4()));
  //(select.value,new nuevoProducto(nombreProducto.value,price.value, array[0], textArea.value,select.value))
})
function Base64DecodeUrl(str){
  str = (str + '===').slice(0, str.length + (str.length % 4));
  return str.replace(/-/g, '+').replace(/_/g, '/');
}

console.log(array)