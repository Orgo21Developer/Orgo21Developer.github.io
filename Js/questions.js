(function(){

    const titlequestions = [...document.querySelectorAll('.questions__title')]; /*los tres ... son para convertirlo en un array y por ende se encierra en []*/
    

    titlequestions.forEach(question =>{
        question.addEventListener('click',()=>{
            
            let height = 0
            let answer = question.nextElementSibling
            let addpadding = question.parentElement.parentElement


            addpadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight ===0){
                height = answer.scrollHeight /*scrollheight solo da un padding para que se muestre un contenido, por eso se agraga el questions__padding--add*/
            }

            answer.style.height = `${height}px`;
        });
    });
})();