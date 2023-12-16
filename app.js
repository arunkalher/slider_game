let ball=document.querySelector('#ball')


ball.style.left=getComputedStyle(ball)["left"]
ball.style.top=getComputedStyle(ball)["top"]
let slider_top=Number(getComputedStyle(ball)["top"].replace("px",""))
let hurdles=document.querySelectorAll(".small_box")

let left_top=true
let right_top=false
let right_bottom=false
let left_bottom=false

let big_box=document.querySelector("#big_box")
slider=document.querySelector("#bottom_rod")
slider.style.left=getComputedStyle(slider)["left"]
slider.style.top=getComputedStyle(slider)["top"]

let slide_left=0
let array_of_hurdes=[]
for (let i=0;i<hurdles.length;i++)
{
    // x0  x1
    // y0 y1
    let x0=getComputedStyle(hurdles[i])["left"]
    x0=Number(x0.replace("px",""))
    let x1=x0+90
    let y0=getComputedStyle(hurdles[i])["top"]
    y0=Number(y0.replace("px",""))
    let y1=y0+15

    array_of_hurdes.push([x0,x1,y0,y1,hurdles[i]])

}
hurdles=[]
console.log(array_of_hurdes)
document.addEventListener('keydown',(e)=>{
    
    slide_left=Number(slider.style.left.replace("px",""))
    
    
    switch (e.key)
    {
        case "ArrowLeft":
            if(slide_left<3)
            slide_left=0
            else
            slide_left-=3
            break

        case "ArrowRight":
            if (slide_left>377)
            slide_left=380
        else
            slide_left+=3

    }
    slider.style.left=String(slide_left)+"px"
    
})
let big_box_top=Number(getComputedStyle(big_box)["top"].replace("px",""))
let big_box_left=Number(getComputedStyle(big_box)["left"].replace("px",""))
let ball_left=0
let ball_top=0
let ball_botom=0
let ball_right=0

function ball_move()
{
    ball_left=Number(ball.style.left.replace("px",""))
    ball_top=Number(ball.style.top.replace("px",""))
    if ( ball_top>500-16)
    {   clearInterval(ball_move)
        alert("Game Over")
        return
        
    }
    if ( array_of_hurdes.length==0)
    {   clearInterval(ball_move)
        alert("Congratulaitons!! you won")
        return
        
    }
    
    

    for (let i=0;i<array_of_hurdes.length;i++)
{
    // x0  x1
    // y0 y1
    if ((ball_top >= array_of_hurdes[i][2] ) && (ball_top <= array_of_hurdes[i][3] )
     && (ball_left >= array_of_hurdes[i][0] ) && (ball_left <= array_of_hurdes[i][1] ))
    {   array_of_hurdes[i][4].classList.add('none')
        array_of_hurdes.splice(i,1)
        if (left_top)
        {
            left_top=false
            right_top=true
        }
        else if (right_top)
        {
            right_top=false
            right_bottom=true
        }
        else if (right_bottom)
        {
            right_bottom=false
            left_bottom=true
        }
        else if (left_bottom)
        {
            left_bottom=false
            left_top=true
        }
        break
    }
}
    
    

   
    if (ball_top<0  || ball_left<0 || ball_left+16>510|| (
        ball_left>Number(slider.style.left.replace("px","")) && ball_left<Number(slider.style.left.replace("px",""))+130 && ball_top>slider_top 
    ))
{
   
    
    if (left_top)
    {
        left_top=false
        right_top=true
    }
    else if (right_top)
    {
        right_top=false
        right_bottom=true
    }
    else if (right_bottom)
    {
        right_bottom=false
        left_bottom=true
    }
    else if (left_bottom)
    {
        left_bottom=false
        left_top=true
    }
}
    if (left_top)
    {
      
        ball_left=Number(ball.style.left.replace("px",""))
        ball_top=Number(ball.style.top.replace("px",""))
        ball_left=String(ball_left-7)
        ball.style.left=ball_left+"px"
        ball_top=Number(ball.style.top.replace("px",""))
        ball_top=String(ball_top-7)
        ball.style.top=ball_top+"px"
       
    

    }
    
    if (left_bottom)
    {
       
        ball_left=Number(ball.style.left.replace("px",""))
        ball_top=Number(ball.style.top.replace("px",""))
        ball_left=String(ball_left-7)
        ball.style.left=ball_left+"px"
        ball_top=Number(ball.style.top.replace("px",""))
        ball_top=String(ball_top+7)
        ball.style.top=ball_top+"px"
    

    }
    if (right_bottom)
    {
        
        ball_left=Number(ball.style.left.replace("px",""))
        ball_top=Number(ball.style.top.replace("px",""))
        ball_left=String(ball_left+7)
        ball.style.left=ball_left+"px"
        ball_top=Number(ball.style.top.replace("px",""))
        ball_top=String(ball_top+7)
        ball.style.top=ball_top+"px"
    

    }
    if (right_top)
    {
      
        ball_left=Number(ball.style.left.replace("px",""))
        ball_top=Number(ball.style.top.replace("px",""))
        ball_left=String(ball_left+7)
        ball.style.left=ball_left+"px"
        ball_top=Number(ball.style.top.replace("px",""))
        ball_top=String(ball_top-7)
        ball.style.top=ball_top+"px"
    }
   
}


setInterval(ball_move,111)
