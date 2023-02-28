let previoustitle = document.title

window.addEventListener('blur', ()=>{
    previoustitle = document.title
    document.title = '¡No te vayas! ¡Vuelve!'
})

window.addEventListener('focus', ()=>{
    document.title = previoustitle
})