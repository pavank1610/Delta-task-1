colour = []
index=7
var myarray = ["#FF0000","#FF4500","#00BFFF","#008000","#8A2BE2", "#FFFFFF"];
var myarray2 = ["#FF0000","#FF4500","#00BFFF","#008000","#8A2BE2", "#FFFFFF","#000000"];
var blacktile=0
moves=0
timerstart=false
function randomcolor()
{
 for(i=1;i<10;i++)
    {
        const rand_color = Math.floor(Math.random()*6);
        box=document.getElementById(`${i}`)
        box.style.backgroundColor=myarray[rand_color]
        colour.push(myarray[rand_color])
    }
}


function randomcolor1()
{for(i=10;i<35;i++)
    {box=document.getElementById(`${i}`)
    if(i>=10 && i<=18)
    {
        box.style.backgroundColor=colour[0]
        colour.shift()
    }
 else{
    const rand_color = Math.floor(Math.random()*index);
    
    box=document.getElementById(`${i}`)
    box.style.backgroundColor=myarray2[rand_color]
    if(rand_color==6){
        myarray2.pop()
        index=6
        blacktile=box.id
        console.log(blacktile)
    }
if(box.id=="34" && blacktile==0){
    box.style.backgroundColor='#000000'
    blacktile=box.id
}


 }
      
    }

}
randomcolor()
randomcolor1() 


    document.querySelectorAll('.grid-item').forEach(tile => {
        tile.addEventListener('click', (e) =>{swap(e) 
        if (timerstart==false)
        {
            start=new Date().getTime()
            timerstart=true
           
           timerstarter()
        }
        })
    })
    document.querySelectorAll('.grid').forEach(tile => {
        tile.addEventListener('click', (e) =>{swap(e)
            if (timerstart==false)
            {
                start=new Date().getTime()
                timerstart=true
                
                timerstarter()
            }
        })
    })
   
    
    
function swap(e)
{
if(Math.abs(e.target.id-parseInt(blacktile))==1 || Math.abs(e.target.id-parseInt(blacktile))==5 ){
    
    temp=e.target.style.backgroundColor
   box= document.getElementById(blacktile)
   box.style.backgroundColor=temp
   e.target.style.backgroundColor="#000000"
   blacktile=e.target.id
   moves++
   document.getElementById("moves").innerHTML=moves
}
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function timerstarter()
{
    while(timerstart==true)
    {
       currenttime=new Date().getTime()
    document.getElementById("time").innerHTML=Math.round((currenttime-start)/1000)
     await sleep(1000)
    }
}
