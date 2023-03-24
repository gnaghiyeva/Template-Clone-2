const cards = document.getElementById("cards");
const cardLink = document.getElementById("cardLink");
const blogs = [
    {
        id:1,
        Image:"./assets/images/photo-2.jpg",
        title:"XİN-dən Mirzoyanın Azərbaycan əleyhinə yalan və iftira dolu fikirlərinə CAVAB",
        cardLink:"./card_1.html",
        like:22,
        unlike:1,
        view:314
    }, 
    {
        id:2,
        Image:"./assets/images/photo-4.jpg",
        title:"Azərbaycandan Ukraynaya növbəti humanitar yardım partiyası çatdırılıb -<br> FOTO",
        cardLink:"./card_2.html",
        like:68,
        unlike:16,
        view:210

        
    },
    {
        id:3,
        Image:"./assets/images/cardPhoto2.jpg",
        title:"Nazir “Neftçi”nin sabiq baş məşqçisini vəzifəsindən uzaqlaşdırdı <br><br>",
        cardLink:"./card_3.html",
        like:41,
        unlike:8,
        view:733
        
    },
    {
        id:4,
        Image:"./assets/images/cardPhoto4.jpg",
        title:"Bakıda sürücü yolsuzluq avtomobili ilə səhv girdiyi yoldan özünəməxsus üsulla çıxdı - VİDEO",
        cardLink:"./card_4.html",
        like:130,
        unlike:72,
        view:3690

    }, 
    {
        id:5,
        Image:"./assets/images/cardPhoto5.jpg",
        title:"Azərbaycan mobil operatorları iki ayda nə qədər gəlir əldə edib? <br><br>",
        cardLink:"./card_5.html",
        like:14,
        unlike:175,
        view:1677
        
    },
    {
        id:6,
        Image:"./assets/images/cardPhoto6.jpg",
        title:"Ölkədə COVID-19 əleyhinə peyvənd olunanların sayı AÇIQLANDI - FOTO <br><br>",
        cardLink:"./card_6.html",
        like:16,
        unlike:66,
        view:494
        
    },
    {
        id:7,
        Image:"./assets/images/cardPhoto7.jpg",
        title:"Azərbaycanda altı nəfər COVID-19-a yoluxub - <br>FOTO <br><br>",
        cardLink:"./card_7.html",
        like:18,
        unlike:110,
        view:1872

    }, 
    {
        id:8,
        Image:"./assets/images/cardPhoto8.jpg",
        title:"Sürücülərin 50 manat cərimə olunmamaq üçün üz tutduqları mərkəzdən REPORTAJ - FOTO",
        cardLink:"./card_8.html",
        like:96,
        unlike:74,
        view:3198
        
    },
    {
        id:9,
        Image:"./assets/images/cardPhoto9.jpg",
        title:"Azərbaycanda müşahidə edilən FAKTİKİ HAVA <br><br><br>",
        cardLink:"./card_9.html",
        like:86,
        unlike:10,
        view:1171
        
    },
    {
        id:9,
        Image:"./assets/images/cardPhoto10.jpg",
        title:"Novruz bayramı <br>coşqusu - <br>VİDEO <br><br>",
        cardLink:"./card_10.html",
        like:31,
        unlike:53,
        view:443

    }, 
  
    


];

let innerHTML="";

for (let i = 0; i < blogs.length; i++) {
    innerHTML+=
    `
    <div class="col-4">  
          
    <div class="card mb-5 mt-5" style="width: 18rem;  height: 400px;"> 
    <a href="${blogs[i].cardLink}" >
      <img src="${blogs[i].Image}" class="card-img-top" alt="..." >
      <div class="card-body">
        <h5 class="card-title">${blogs[i].title}</h5> <br>
      </div>
      </a>
      <div class="card-footer custom_card">
        <button id="likeButton" class="text-muted"><img  src="./assets/images/likeButton.png" alt="" class="card_like_button"></button>  
         <span id="span">${blogs[i].like}</span>   
           <button class="text-muted"><img src="./assets/images/unlikeButton.png" alt="" class="card_like_button"></button>  
           ${blogs[i].unlike}
        <small class="text-muted"><img src="./assets/images/viewButton.png" alt="" class="card_like_button"></small>
           ${blogs[i].view}
      </div>
     </div>
                         
    </div> 
     
    `;
   
// const likeButton = document.getElementById("likeButton");
// const span = document.getElementById("span");
// let counter = blogs[i].unlike;

// span.innerHTML=counter;
// likeButton.addEventListener("click", function(){
//     counter++;
//     span.innerHTML=counter;
// })

}
cards.innerHTML = innerHTML;





