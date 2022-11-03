/* document.querySelector('#btn-teste').addEventListener('click', function(){
    showModal('#form-model')
}) */
document.querySelectorAll('.btn-close').forEach(element=>{
    element.addEventListener('click', function(){
        hideModal()
    })
})
document.querySelector('#i-number').addEventListener('click', function(){
    hideModal()
    showModal('#form-number-report')
})
document.querySelector('#btn-form-number-report').addEventListener('click', function(){
    writeNumberReport()
    showModal('#form-preamble')
})
document.querySelector('#btn-form-preamble').addEventListener('click', function(){
    writePreamble()
    showModal('#form-objective')
})
document.querySelector('#btn-form-objective').addEventListener('click', function(){
    writeObjective()
    //showModal('#form-objective')
})
function inverter(num){
    num1 = num
    resultado = ''
    for (i=num1.length-1;i>=0;i--){
        resultado+=num1[i]
    }
    return resultado
}
function formatMilhar(num){
let num1 = inverter(num)
resultado = ''
    for(i=0;i<num1.length;i++){
        resultado += num1[i]
        if (i%3==2 && i!=num1.length-1){
            resultado += `.` 
        }               
    }
    return inverter(resultado)
}
function formatDate(data){
    const date = new Date(data)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}
function writeNumberReport(){
    const numberReport = formatMilhar(document.querySelector('#input-number-report').value.trim())
    const designatedDate = new Date(document.querySelector('#input-designated-date').value).getFullYear()
    texto = `${numberReport}/${designatedDate}`
    document.querySelector('#article-number-report').innerHTML = `<h1>Laudo ${texto}</h1>`
}
function writePreamble(){
    let designatedDate = formatDate(new Date(document.querySelector('#input-designated-date').value))
    let director = document.querySelector('#input-director').value.trim()
    if(director == ''){
        alert('Informe o nome do diretor.')
        document.querySelector('#input-director').focus()
        return
    }else{
        director = `${document.querySelector('#select-director').value} ${director}`
    }
    let expert = document.querySelector('#input-expert').value.trim()
    if(expert == ''){
        alert('Informe o nome do perito.')
        document.querySelector('#input-expert').focus()
        return
    }else{
        expert = `${document.querySelector('#select-expert').value} ${expert}`
    }
    let delegate =document.querySelector('#input-delegate').value.trim()
    if(delegate == ''){
        alert('Informe o nome do delegado.')
        document.querySelector('#input-delegate').focus()
        return
    }else{
        delegate = `${document.querySelector('#select-delegate').value} ${delegate}`
    }
    let texto = `Em ${designatedDate}, na cidade de Limeira e no Instituto de Criminalística, da Superintendência da Polícia Técnico-Científica, da Secretaria de Segurança Pública do Estado de São Paulo, em conformidade com o disposto no art. 178 do Decreto-Lei 3689 de 3-10-1941 e Decreto-Lei 42847 de 9-2-1998, ${director}, foi ${expert} para proceder ao Exame Pericial especificado em requisição de exame assinada pela Autoridade Policial, ${delegate}.`
    document.querySelector('#article-preamble').innerHTML = `<p>${texto}</p>`
    hideModal()
}
function writeObjective(){
    let rdo = document.querySelector('#irdo').value.trim()
    if(rdo==''){
        rdo = `recebeda via telefonema e e-mail`
    }else{
        let ano = new Date(document.querySelector('#input-designated-date').value).getFullYear()
        rdo = `referente ao ${document.querySelector('#selectrdo').value} ${rdo.toUpperCase()}/${ano}`
    }
    let delegacia = document.querySelector('#idelpol').value.trim()
    if(delegacia==''){
        alert('digite o nome da delegacia.')
        document.querySelector('#idelpol').focus()
        retur
    }
    let objective = document.querySelector('#iobjective').value.trim()
    if(objective==''){
        alert('digite o objetivo.')
        document.querySelector('#iobjective').focus()
        retur
    }
    let nature = document.querySelector('#inature').value.trim()
    if(nature==''){
        alert('digite a natureza do exame.')
        document.querySelector('#inature').focus()
        retur
    }
    const texto = `O objetivo do exame pericial, em conformidade com a requisição ${rdo} - ${delegacia} era ${objective}, sendo sua natureza, ${nature}.`
    document.querySelector('#article-objective').innerHTML = `<h2>Objetivo</h2><p>${texto}</p>` 
    hideModal()
}
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