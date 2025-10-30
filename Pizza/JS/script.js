console.log("Hello Pizza!");
const allButtons = document.querySelectorAll(".slide");
function HandleSlideClick(event){
    const chosenSlide = document.querySelector(".chosen-slide");
    if(chosenSlide) 
        {
            chosenSlide.classList.remove("chosen-slide");
        }
    event.currentTarget.classList.add("chosen-slide");
}   
allButtons.forEach(slide =>{
    slide.addEventListener('click', HandleSlideClick);
});