const navDialog = document.getElementById('nav-dialog');
function handleMenu() {
    navDialog.classList.toggle('hidden');
}


const initialTranslateLTR = -38*4;
const initialTranslateRTL = 76*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        console.log(element, isIntersecting);
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
     //  this fcn is called again n again , intersection obbserver is called inside it, than a callback is called again, it will create new intersection observer, and observe the single element, that is line 1, 2, 3
    }
    
 
    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    //  we are using the intersection observer here so that we can observe the ele. if it is not present on the view port [visible screen] than if there is scroll it should not effect/ it should not count the scroll,
    // it will increse the efficiency and the preformance of the code, it will take a call back having the entries array where the entries tells about lot of details abt the visible ele. see kyle video for it 
    intersectionObserver.observe(element);
   
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        
        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
       

        //element.style.transform = `translateX(${translateX}px)`;
        // here initially we are using the translateX but this is not taking the initial value, for that we are adding the if condition here 
    }  

}
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');
    
    
    setupIntersectionObserver(line1, true, 0.15);
    setupIntersectionObserver(line2, false, 0.15);
    setupIntersectionObserver(line3, true, 0.15);
    setupIntersectionObserver(line4, true, 0.55)

    
    const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})