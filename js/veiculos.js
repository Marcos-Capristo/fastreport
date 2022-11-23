

document.querySelector('#veiculo-descrever').addEventListener('click', ()=>{
    descrever()
})

function descrever(){
    let cor = document.querySelector('#veiculo-cor').value.trim()
    let placa = document.querySelector('#veiculo-placa').value.trim().toUpperCase()
    let apresentado = `Caminhão da marca MB, modelo TR1212, na cor ${cor}`
    let identificado = ''

    if(placa!=''){
        identificado = `Identificado por sua Placa de Identificação que se apresentava íntegra, sem sinais de violação ou de alteração, e que exibia os dígitos ${placa}`
    } 
    document.querySelector('#veiculos-descricao').innerHTML = `<br><br><br><br><p>${apresentado}</p><p>${identificado}</p>`
}