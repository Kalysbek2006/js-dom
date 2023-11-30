
// let h1ClassName =document.querySelector('.h1')
// console.log(h1ClassName)
//
// let h1 =document.querySelector('h1')
// console.log(h1)
//
// let p =document.querySelectorAll('.title')
// console.log(p)
//
// let id = document.querySelector('#input')
// console.log(id)

// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'pink',
//     'white',
//     'black'
// ];

// let block = document.querySelectorAll('.block')
// block.forEach(el=>{
//     el.addEventListener('click',()=>{
//         el.style.background = colors[Math.floor(Math.random()* colors.length)]
//     })
// })
//
// console.log(colors[Math.floor(Math.random()* colors.length)])


const btn =document.querySelector('.menu-btn'),
    openBtn =document.querySelector('.open-btn'),
    closeBtn =document.querySelector('.close-btn'),
    menu=document.querySelector('.menu')


btn.addEventListener('click' ,() =>{
   if (menu.style.display === "none"){
       menu.style.display = "block"
       menu.style.display = "flex"
       openBtn.style.display = "none"
       closeBtn.style.display = "block"
   }else {
       menu.style.display = "none"
       openBtn.style.display = "block"
       closeBtn.style.display = "none"
   }
})

const modalBtn =document.querySelector('.modal-window'),
    windowModal =document.querySelector('.window'),
    modalClose =document.querySelector('.modal-close')

modalBtn.addEventListener('click' ,() =>{
    windowModal.style.display ="black"
    windowModal.style.display ="none"
    windowModal.style.display ="flex"

})

modalClose.addEventListener('click' ,() =>{
    windowModal.style.display ="none"
})



const aboutBtn =document.querySelector(".ok-btn"),
    input =document.querySelector('.input'),
    name =document.querySelector('.name'),
    fuo =document.querySelector('.fuo'),
    inputOne =document.querySelector('.input-one')
    fly =document.querySelector('.fly'),
    inputTwo =document.querySelector('.input-two'),
    kk =document.querySelector('.kk'),
    inputTree =document.querySelector('.input-three')


aboutBtn.addEventListener('click' ,()=>{
    name.textContent += input.value
    input.value =''
    fuo.textContent += inputOne.value
    inputOne.value =''
    fly.textContent += inputTwo.value
    inputTwo.value =''
    kk.textContent += inputTree.value
    inputTree.value =''

})


