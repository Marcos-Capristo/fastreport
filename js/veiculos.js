

document.querySelector('#veiculo-descrever').addEventListener('click', ()=>{
    descrever()
})

function descrever(){
    let tipo = captalize(document.querySelector('#veiculo-tipo').value)
    let marca = captalize(document.querySelector('#veiculo-marca').value)
    let modelo = captalize(document.querySelector('#veiculo-modelo').value)
    let cor = document.querySelector('#veiculo-cor').value.trim().toLowerCase()
    let placa = document.querySelector('#veiculo-placa').value.trim().toUpperCase()
    let chassi = document.querySelector('#veiculo-chassi').value.trim().toUpperCase()
    let motor = document.querySelector('#veiculo-motor').value.trim().toUpperCase()
    let apresentado = `${tipo} da marca ${marca}, modelo ${modelo}, na cor ${cor}`
    let identificado = ''

    texto = `<br><br><br><br><h2>Vistoria Placa ok, Chassi ok, Motor ok</h2><p>${tipo} da marca ${marca}, modelo ${modelo}, na cor ${cor}.</p><h3>Placa de Identificação</h3><p>Sua Placa de Identificação se apresentava íntegra, sem sinais de violação ou de alteração, fixada e lacrada à estrutura do veículo, exibindo os dígitos ${placa}.</p><h3>Numeração do Chassi</h3><p>Na estrutura do veículo, sobre a área destinada a gravação da numeração do chassi, a superfície se apresentava íntegra, sem sinais de alteração, exibindo os dígitos ${chassi}.</p><h3>Numeação do Motor</h3><p>No motor, sobre a área destinada a gravação de sua numeração, a superfície se apresentava íntegra, sem sinais de alteração, exibindo os dígitos ${motor}</p>.`

    document.querySelector('#veiculos-descricao').innerHTML = texto
}

function captalize(_texto){
    let texto = _texto.trim()
    if(texto.length<1){
        return
    }
    return texto.charAt(0).toUpperCase()+texto.slice(1)
}