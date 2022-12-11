let file = document.getElementById('formFile')
let btn = document.getElementById('btntry')
let consolesContainer = document.getElementById('consolas');
let starWarsContainer = document.getElementById('star-wars');
let diversosContainer = document.getElementById('diversos');
let consolesContainer1 = document.getElementById('consolas1');
let starWarsContainer1 = document.getElementById('star-wars1');
let diversosContainer1 = document.getElementById('diversos1');
let selectProductsContainer = document.getElementById('logInProducts');



 export function productos(category,container){ 
   fetch(`http://localhost:3000/${category}`)
   .then(response=> response.json())
   .then(data => data.map(item=>{
    container.innerHTML += cardProducts(item, container)
   })).catch(err=>console.log(err))
}
//file.addEventListener('change', (e)=>{
    //let imagen = e.target.files[0]
    //console.log(imagen)
    //let fileReader = new FileReader()
    //fileReader.readAsDataURL(imagen)
    //fileReader.onload = function (){

  //  }
//})

function cardProducts (item,container){
    if(container === consolesContainer || container === consolesContainer1){
        if(item.id === 7 || item.id === 8 || item.id === 9 || item.id === 10){
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0" id=${item.id} data-col=${item.id} >
               <div class="card text-start" style="width: 165px;">
                   <div class="card-img-top">
                       <img src=${item.img}  alt="star" width="164px" height="174px">
                   </div>
                   <div class="card-body ">
                       <h4 class="card-text h4">${item.title}</h4>
                       <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                       <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                   </div>
               </div>
           </div>
           <div class="modal fade" id="modal${item.id}">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <h1 class="text-center fs-3">${item.title}</h1>
            <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
            </div>
            <div class="modal-body">
            <img src=${item.img}  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
            <h4>Description:</h4>
            <p style="font-size = 15px;">${item.description}</p>
            <h3 class="text-center fs-3">$ ${item.price}</h3>
            <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
            </div>
            </div>
            </div>
           </div>
           `
           )
        } else{
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0 d-none d-lg-block" id=${item.id} data-col=${item.id} >
               <div class="card text-start" style="width: 165px;">
                   <div class="card-img-top">
                       <img src=${item.img}  alt="star" width="164px" height="174px">
                   </div>
                   <div class="card-body ">
                       <h4 class="card-text h4">${item.title}</h4>
                       <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                       <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                   </div>
               </div>
           </div>
           <div class="modal fade" id="modal${item.id}">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            <h1 class="text-center fs-3">${item.title}</h1>
            <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
            </div>
            <div class="modal-body">
            <img src=${item.img}  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
            <h4>Description:</h4>
            <p style="font-size = 15px;">${item.description}</p>
            <h3 class="text-center fs-3">$ ${item.price}</h3>
            <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
            </div>
            </div>
            </div>
           </div>
           `
            )
        }
        
    } else if(container === diversosContainer || container === diversosContainer1){
        if(item.id === 13 || item.id === 14 || item.id === 15 || item.id === 16){
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0" id=${item.id} data-col=${item.id} >
                <div class="card text-start" style="width: 165px;">
                    <div class="card-img-top">
                        <img src=${item.img}  alt="star" width="164px" height="174px">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-text h4">${item.title}</h4>
                        <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                        <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal${item.id}">
             <div class="modal-dialog">
             <div class="modal-content">
             <div class="modal-header">
             <h1 class="text-center fs-3">${item.title}</h1>
             <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
             </div>
             <div class="modal-body">
             <img src=${item.img}  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
             <h4>Description:</h4>
             <p style="font-size = 15px;">${item.description}</p>
             <h3 class="text-center fs-3">$ ${item.price}</h3>
             <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
             </div>
             </div>
             </div>
            </div>
            `
            )
        } else{
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0 d-none d-lg-block" id=${item.id} data-col=${item.id} >
                <div class="card text-start" style="width: 165px;">
                    <div class="card-img-top">
                        <img src=${item.img}  alt="star" width="164px" height="174px">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-text h4">${item.title}</h4>
                        <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                        <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal${item.id}">
             <div class="modal-dialog">
             <div class="modal-content">
             <div class="modal-header">
             <h1 class="text-center fs-3">${item.title}</h1>
             <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
             </div>
             <div class="modal-body">
             <img src=${item.img}  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
             <h4>Description:</h4>
             <p style="font-size = 15px;">${item.description}</p>
             <h3 class="text-center fs-3">$ ${item.price}</h3>
             <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
             </div>
             </div>
             </div>
            </div>
            `
            )
        }
       
    } else{
        if(item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4){
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0" id=${item.id} data-col=${item.id} >
                <div class="card text-start" style="width: 165px;">
                    <div class="card-img-top">
                        <img src=${item.img}  alt="star" width="164px" height="174px">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-text h4">${item.title}</h4>
                        <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                        <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal${item.id}">
             <div class="modal-dialog">
             <div class="modal-content">
             <div class="modal-header">
             <h1 class="text-center fs-3">${item.title}</h1>
             <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
             </div>
             <div class="modal-body">
             <img src="${item.img}"  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
             <h4>Description:</h4>
             <p style="font-size = 15px;">${item.description}</p>
             <h3 class="text-center fs-3">$ ${item.price}</h3>
             <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
             </div>
             </div>
             </div>
            </div>
            `
            )
        }else{
            return(
                `  <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0 d-none d-lg-block" id=${item.id} data-col=${item.id} >
                <div class="card text-start" style="width: 165px;">
                    <div class="card-img-top">
                        <img src=${item.img}  alt="star" width="164px" height="174px">
                    </div>
                    <div class="card-body ">
                        <h4 class="card-text h4">${item.title}</h4>
                        <span class="card-subtitle  fw-bold" style="font-size: 15px ;">$ ${item.price}</span>
                        <h4 class="card-text mt-2 text-blue" style="font-size: 15px;"><button data-bs-toggle="modal" data-bs-target="#modal${item.id}" class="btn btn-primary boton"> Ver Producto</button></h4>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal${item.id}">
             <div class="modal-dialog">
             <div class="modal-content">
             <div class="modal-header">
             <h1 class="text-center fs-3">${item.title}</h1>
             <button class="btn-close" data-bs-dismiss="modal" data-bs-target="#modal${item.id}"></button>
             </div>
             <div class="modal-body">
             <img src=${item.img}  alt="star" width="250px" height="174px" class="mx-auto d-block mb-2">
             <h4>Description:</h4>
             <p style="font-size = 15px;">${item.description}</p>
             <h3 class="text-center fs-3">$ ${item.price}</h3>
             <button class="btn btn-outline-primary mx-auto d-block"><i class="fa-solid fa-cart-shopping"></i>Comprar</button>
             </div>
             </div>
             </div>
            </div>
            `
            )
        }
       
    }
}

 export function logInProduct(category,container,product){
    fetch(`http://localhost:3000/${category}`)
    .then(response=> response.json())
    .then(data => data.map(item=>{
     container.innerHTML += logInSection(item, product);
     let delete1 = document.querySelectorAll('.delete')
     delete1.forEach(btn=>{
        btn.addEventListener('click',()=>{
            let id = btn.id;
            let category = btn.dataset.info
            deleteProduct(category, id);
           
        })
     })
     
    })).catch(err=>console.log(err))
}


function logInSection (item,product){
    if(product === 'starwars'){
        let line =
            `
            <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0">
                    <div class="card border-2 shadow " style="width: 165px ;">
                        <div class="card-img-top">
                         <img src=${item.img} alt="" width="163px" height="174px">
                        </div>
                        <div class="card-body text-start">
                         <h3 class=".card-text fs-5">${item.title}</h3>
                         <span class="fs3 card-text d-block font-bold fw-bolder">$${item.price}</span>
                         <h4 class="card-text fs-5">id:${item.id}</h4>
                         <div class="mx-auto d-block">
                             <button type="button" class="btn btn-outline-danger group delete" id=${item.id}  data-info="starwars"><i class="fa-solid fa-trash"></i></button>
                             <button type="button" class="btn btn-outline-success group ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                         </div>
                        </div>
                    </div>
                </div> 
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-circle-xmark text-center" style="color: red; font-size: 80px;"></i>
                            <p class="fw-bold fs-5 text-center mt-3">At the moment is not available</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            ` 
            ; 
            
            return line
           
    }
    else if(product === 'diversos'){
        return(
            `
            <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0">
            <div class="card border-2 shadow " style="width: 165px ;">
                <div class="card-img-top">
                 <img src=${item.img} alt="" width="163px" height="174px">   
                </div>
                <div class="card-body text-start">
                 <h3 class=".card-text fs-5">${item.title}</h3>
                 <span class="fs3 card-text d-block font-bold fw-bolder">$${item.price}</span>
                 <h4 class="card-text fs-5">id:${item.id}</h4>
                 <div class="mx-auto d-block">
                     <button type="button" class="btn btn-outline-danger group" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>
                     <button type="button" class="btn btn-outline-success group ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                 </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-circle-xmark text-center" style="color: red; font-size: 80px;"></i>
                            <p class="fw-bold fs-5 text-center mt-3">At the moment is not available</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
             ` 
        )
    } else{
        return(
            `
            <div class="col mb-4 mb-lg-0 col-md-3 col-md-offset-2 col-lg-2 col-lg-offset-0">
            <div class="card border-2 shadow" style="width: 165px ;">
                <div class="card-img-top">
                 <img src=${item.img} alt="" width="163px" height="174px">   
                </div>
                <div class="card-body text-start">
                 <h3 class=".card-text fs-5">${item.title}</h3>
                 <span class="fs3 card-text d-block font-bold fw-bolder">$${item.price}</span>
                 <h4 class="card-text fs-5">id:${item.id}</h4>
                 <div class="mx-auto d-block">
                     <button type="button" class="btn btn-outline-danger group " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>
                     <button type="button" class="btn btn-outline-success group ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                 </div>
                </div>
            </div>
        </div> 
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                        <div class="d-flex flex-column justify-content-center">
                            <i class="fa-solid fa-circle-xmark text-center" style="color: red; font-size: 80px;"></i>
                            <p class="fw-bold fs-5 text-center mt-3">At the moment is not available</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
             ` 
        )
    }
    
}



function deleteProduct(category,id){
    return fetch(`http://localhost:3000/${category}/${id}`, {
        method: "DELETE",
      });
}
