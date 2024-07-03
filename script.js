
function openNav() {
    document.getElementById("Menu").style.width = " 300px";
    document.getElementById("Menu").style.marginRight = " 0";


}

function cancel () {
    document.getElementById("Menu").style.width = " 0";
    document.getElementById("Menu").style.marginRight = " -40px";



    
}


const counters= document.querySelectorAll(".counter")
counters.forEach( (counter) => {

counter.innerText="0"

const updateCounter = () => {
const target= +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target / 800;

if ( c < target){
counter.innerHTML = Math.ceil(c + increment );

setTimeout(updateCounter, 3);

}

else{
    console.log("done");
    counter.innerHTML= target ;
}



}
updateCounter();


});

function openVid(Event, videoName) {
var i, videobody ;
videobody = document.getElementsByClassName("videobody");
for (i = 0; i < videobody.length; i++) {
    videobody[i].style.display = "none";
}
document.getElementById(videoName).style.display = "flex";

}

//  window.print()


























































