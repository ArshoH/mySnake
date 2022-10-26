let getStart = document.querySelector(".start");
let getEat = document.querySelector(".eat")
let allStart = document.getElementsByClassName('start')
let getText = document.querySelector('p')
let i = 1,l=10,t=10,topE = 100 ,leftE = 100 ,g ,h ,leftInt,rightInt,bottomInt,topInt,control1 = true ,control2 = true ,control3 = true ,control4 = true;

 getEat.style=`
        left:${leftE}px;
        top:${topE}px;
    `
document.addEventListener("keypress",(e)=>{
    console.log(e.which);
    
    /////////////-----------------D------------------/////////
    if(e.which == 100 && control1 == true){
        rightInt  = setInterval(() => {
            if( l <= 490){
                let cloneNext = getStart.cloneNode(true);
                l+=10;
                cloneNext.style=`
                left:${l}px;
                top:${t}px;
                `;
                document.body.appendChild(cloneNext);
                if(l != leftE || t != topE){
                    allStart[0].remove();
                }  
            }
        },100)
        clearInterval(topInt);
        clearInterval(leftInt);
        clearInterval(bottomInt);
        control1= false;
        control2= true;
        control3= true;
        control4= true;
    }
    /////////////-----------------S------------------/////////
    if(e.which == 115 && control2 == true ){
        bottomInt  = setInterval(() => {
          if(t <= 490){
            let cloneNext = getStart.cloneNode(true);
            t+=10;
            cloneNext.style=`
            top:${t}px;
            left:${l}px;
            `;
            document.body.appendChild(cloneNext);
            if(l != leftE|| t != topE){
                allStart[0].remove();
            }
          }
        },100);
        clearInterval(topInt);
        clearInterval(leftInt);
        clearInterval(rightInt); 
        control1= true;
        control2= false;
        control3= true;
        control4= true;
    }
    /////////////-----------------A------------------/////////
    if(e.which == 97 && control3 == true){
        leftInt = setInterval(()=>{ 
            if(l >= 20){
                let cloneNext = getStart.cloneNode(true);
                l-=10;
                cloneNext.style=`
                top:${t}px;
                left:${l}px;
                `;
                document.body.appendChild(cloneNext);
                if(l != leftE || t != topE){
                allStart[0].remove();
                }
            }
        },100);
        clearInterval(topInt);
        clearInterval(bottomInt);
        clearInterval(rightInt); 
        control1= true;
        control2= true;
        control3= false;
        control4= true;
    }
        /////////////-----------------W------------------/////////
    if(e.which == 119 && control4 == true){
        topInt = setInterval( ()=>{ 
          if( t >= 20){
            let cloneNext = getStart.cloneNode(true);
            t-=10;
            cloneNext.style=`
            top:${t}px;
            left:${l}px;
            `;
            document.body.appendChild(cloneNext);
            if(l != leftE || t != topE){
                allStart[0].remove();
            }
          }
        },100);
        clearInterval(leftInt);
        clearInterval(bottomInt);
        clearInterval(rightInt);
        control1= true;
        control2= true;
        control3= true;
        control4= false; 
    }
})
//////////////////////////////////////////////////////////////////////
setInterval(()=>{
    if(l == leftE && t == topE){
        for(let j = 0; j < 50;j++){
            g = Math.round(10+Math.random()*480);
            h = Math.round(10+Math.random()*480);
            console.log(1);
            
            if(g%10 == 0){
                leftE = g
            }
            if(h%10 == 0){
                topE = h  
            };
        }
        let getEatClone = getEat.cloneNode(true);
        getEatClone.style=`
        left:${leftE}px;
        top:${topE}px;
        `;
        
        //  console.log(topE,leftE);
         document.body.appendChild(getEatClone);
         let getEatAll = document.querySelectorAll('.eat')
         getEatAll[0].remove();
         getText.innerText=`${i++}`
    }
},100)