var open_btn=document.getElementsByClassName('open-btn');
var close_btn=document.getElementsByClassName('close-btn');
var slide=document.getElementsByClassName('slide-container');
var popup=document.getElementsByClassName('popup-main')


for (let i = 0; i < open_btn.length; i++) {
    open_btn[i].addEventListener('click', () => {
        slide[i].style.display = 'block'
        popup[i].style.cssText= 'animation: slide-out .2s ease-out'

        for (let j = 0; j < slide.length; j++) {
            if(slide[j] != slide[i]){
                slide[j].style.display ='none'
            }
        }
    });
    
    close_btn[i].addEventListener('click', () =>{
        popup[i].style.cssText='animation: slide-in .2s ease-in;animation-fill-mode:forward;'
        
        setTimeout(() => {
            slide[i].style.display = 'none' 
        }, 200);
    })
    
    window.addEventListener('click', (e) =>{
        if(e.target == document.getElementsByClassName('popup-overlay')[i]){
            popup[i].style.cssText='animation: slide-in .2s ease-in;animation-fill-mode:forward;'

            
        setTimeout(() => {
            slide[i].style.display = 'none' 
        }, 200);
        }
    })
        
}

    
