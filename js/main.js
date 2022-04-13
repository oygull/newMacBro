let listBtn = document.querySelector("#btnsRam");
let listMemory = document.querySelector("#btnsMemory");
let price = document.querySelector("#price");
let add = document.querySelector(".add");
let title= document.getElementById('title');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let countInput = document.getElementById('quantityInput');

priceTotal(macObj);

function priceTotal(obj) {

  obj.ram.forEach((el) => {
    if (el.active) {
      el.memory.forEach((element) => {
        if (element.active) {
          price.innerHTML = element.price;
          total = element.price;
        }
      });
    }
  });

}

countInput.value=1;
plus.addEventListener('click',()=>{

  countInput.value++;
  let a =  total*countInput.value;
  console.log(a);
  price.innerHTML= `${a} so'm`
})

minus.addEventListener('click',()=>{

if(countInput.value>0){
  countInput.value--;
  let a = total/countInput.value;
price.innerHTML= `${a} so'm`
}
else{
  countInput.value=0;
  total=0;
}
})
priceTotal(macObj);

function addBtnRam(macObj) {
  listBtn.innerHTML = "";
  listMemory.innerHTML = "";
  macObj.ram.forEach((element) => {
    let btn = document.createElement("button");
    btn.className = "btnn";
    if (element.active) {
      title.innerHTML= `  Mac Book Air 13-inch <br />
      M1/${element.ramSize}/256Gold`
      btn.classList.add("active-btn");
      element.memory.forEach((item) => {
        let btn = document.createElement("button");
        btn.className = "btnn";

        if (item.active) {
          btn.classList.add("active-btn");
          title.innerHTML= `  Mac Book Air 13-inch <br />
          M1/${element.ramSize}/${item.size} Gold`
        }
        btn.innerHTML = `${item.size}GB`;

        listMemory.appendChild(btn);
      });
    }
    btn.innerHTML = `${element.ramSize}GB`;
    listBtn.appendChild(btn);
  });
}
addBtnRam(macObj);

listBtn.addEventListener("click", (e) => {
  total=0;
  countInput.value=1;

  macObj.ram.forEach((element) => {
    element.active = false;
    if (
      element.ramSize ==
      e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
    ) {
      element.active = true;
    }
  });
  isAcitve(macObj);
  priceTotal(macObj);
  addBtnRam(macObj);
});



function isAcitve(macObj) {
  listMemory.addEventListener("click", (e) => {
    total=0;
    countInput.value=1;
  
    macObj.ram.forEach((element) => {
      // element.memory.active = false;
      element.memory.forEach((el) => {
        el.active = false;
        if (
          el.size == e.target.innerHTML.slice(0, e.target.innerHTML.length - 2)
        ) {
          el.active = true;
        }
      });
    });
    priceTotal(macObj);
    addBtnRam(macObj);
  });
}

isAcitve(macObj);

let imgSlider = document.getElementById('imgSlider');
let gold = document.getElementById('gold');
let silver = document.getElementById('silver');
let spaceGrey = document.getElementById('spaceGrey');
let newArr = arr[0].imgs;
let newArr2 = arr[1].imgs;
let newArr3 = arr[2].imgs;

gold.addEventListener('click', ()=>{
  spaceGrey.classList.remove('active-btn');
  silver.classList.remove('active-btn');
  gold.classList.add('active-btn');
  nameType= 'Gold';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr)
  title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
silver.addEventListener('click', ()=>{
  spaceGrey.classList.remove('active-btn');
  gold.classList.remove('active-btn');
  silver.classList.add('active-btn');
  nameType= 'Silver';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr2)

title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
spaceGrey.addEventListener('click', ()=>{
  gold.classList.remove('active-btn');
  silver.classList.remove('active-btn');
  spaceGrey.classList.add('active-btn');
  nameType= 'Space Grey';
  imgSlider.innerHTML='';
  showProducts(imgSlider,newArr3)

title.innerHTML = `Mac Book Air 13-inch M1/16/512 ${nameType}`
})
let mainImg = document.getElementById('mainImg');

function showProducts(list,arr){
  arr.forEach(element => {
      let li = document.createElement('li');
      li.innerHTML = `<img src="${element}" alt="mac">`;
      li.addEventListener('click',(e)=>{
        mainImg.innerHTML='';
        console.log(e.target.src);
        let imgMain = document.createElement('div');
        imgMain.innerHTML = `<img src="${e.target.src}" alt="">`
        imgMain.classList='main-slider';
        mainImg.appendChild(imgMain)
      })
      list.appendChild(li)
  });
}
showProducts(imgSlider,newArr);