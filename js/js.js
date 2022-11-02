document.querySelector('#btn-teste').addEventListener('click', function(){
    showModal('#form-model')
})
document.querySelector('#btn-model').addEventListener('click', function(){
    hideModal()
    showModal('#form-number-report')
})
document.querySelector('#btn-form-number-report').addEventListener('click', function(){
    hideModal()
})

function showModal(element_){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelector(element_).style
    hideModal(element_)
    fade.opacity = '1'
    fade.pointerEvents = 'all'
    fade.transition = '0.5s'
    modal.opacity = '1'
    modal.pointerEvents = 'all'
    modal.zIndex = '100'
    modal.transition = '0.5s'
}

function hideModal(){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelectorAll('.modal')
    modal.forEach(element => {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.zIndex = '1'
        element.style.transition = '0.5s'
    });
    fade.opacity = '0'
    fade.pointerEvents = 'none'
    fade.transition = '0.5s'
}