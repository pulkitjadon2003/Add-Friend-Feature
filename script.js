var btn= document.querySelector("#card button")
var h3 = document.querySelector("#card h3")

var flag=0

btn.addEventListener("click",function(){
    h3.innerHTML =" Waiting"
    h3.style.color = "violet"
    if (flag == 0) {
        flag=1
        setTimeout(function(){
            btn.innerHTML = "Requesting."
        },0)

        setTimeout(function(){
            btn.innerHTML = "Requesting.."
        },200)

        setTimeout(function(){
            btn.innerHTML = "Requesting..."
        },400)

        setTimeout(function(){
            btn.innerHTML = "Requesting"
        },600)

        setTimeout(function(){
            btn.innerHTML = "Requesting."
        },800)

        setTimeout(function(){
            btn.innerHTML = "Requesting.."
        },1000)

        setTimeout(function(){
            btn.innerHTML = "Requesting..."
        },1200)

        setTimeout(function(){
            btn.innerHTML =" Remove Friend"
            btn.style.backgroundColor = "red"
            h3.innerHTML= "Friends Now"
            h3.style.color= "green"
            
            
        },1500)
    }else{
        flag=0
        setTimeout(function(){
            btn.innerHTML = "Removing."
        },0)

        setTimeout(function(){
            btn.innerHTML = "Removing.."
        },200)

        setTimeout(function(){
            btn.innerHTML = "Removing..."
        },400)

        setTimeout(function(){
            btn.innerHTML = "Removing"
        },600)

        setTimeout(function(){
            btn.innerHTML = "Removing."
        },800)

        setTimeout(function(){
            btn.innerHTML = "Removing.."
        },1000)

        setTimeout(function(){
            btn.innerHTML = "Removing..."
        },1200)


        setTimeout(function(){
            btn.innerHTML ="Add Friend"
            btn.style.backgroundColor = "royalblue"
            h3.innerHTML= "Stranger"
            h3.style.color= "red"
           
            
        },1500)
       

    }
})