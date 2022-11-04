document.querySelector('#i-number').addEventListener('click', function(){
    //hideModal()
    showModal('#form-number-report')
})
document.querySelector('#magic-number').addEventListener('click', function(){
    writeNumberReport()
})
document.querySelector('#btn-form-number-report').addEventListener('click', function(){
    sendNumerReport()
    showModal('#form-preamble')
})
document.querySelector('#i-preamble').addEventListener('click', function(){
    showModal('#form-preamble')
})
document.querySelector('#toolbar-preamble-magic').addEventListener('click', function(){
    writePreamble()
})
document.querySelector('#btn-form-preamble').addEventListener('click', function(){
    sendPreamble()
    showModal('#form-objective')
})
document.querySelector('#i-objective').addEventListener('click', function(){
    showModal('#form-objective')
})
document.querySelector('#toolbar-magic').addEventListener('click', function(){
    writeObjective()
})
document.querySelector('#btn-form-objective').addEventListener('click', function(){
    sendObjective()
    showModal('#form-historic')
})
document.querySelector('#i-historic').addEventListener('click', function(){
    showModal('#form-historic')
})
document.querySelector('#selectlocal').addEventListener('change', function(){
    let element = document.querySelector('#ilocaltype')
    switch(this.selectedIndex){
    case 0:
        element.value = ''
        element.placeholder = 'ex: um imóvel residencial localizado na cidade de Limeira ...'
        break
    case 1:
        element.value = 'base da EPCL - Equipe de Perícias Criminalísticas de Limeira'
        element.placeholder = 'o nome da Base da Equipe de Perícias'
        break
    case 2: 
        element.value = 'base do Plantão Policial da Delegacia Seccional de Limeira'
        element.placeholder = 'o nome da delegacia e da cidade onde foi realizado o exame'
        break
    case 3: 
        element.value = 'pátio Assist na cidade de Limeira'
        element.placeholder = 'o nome do pátio e da cidade onde foi realizado o exame'
        break
    }
})

document.querySelector('#magic-historic').addEventListener('click', function(){
    writeHistoric()
    //showModal('#form-historic')
})
document.querySelector('#btn-form-historic').addEventListener('click', function(){
    sendHistoric()
    //showModal('#form-historic')
})
document.querySelectorAll('.btn-close').forEach(element=>{
    element.addEventListener('click', function(){
        hideModal()
    })
})
function oneToTwo(num){
    let two=num.toString()
    if(two.length<2){
        two = `0${num}`
    }else{
        two = num
    }
    return two
}
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
    document.querySelector('#editor-number').value = `Laudo ${texto}`
    //document.querySelector('#article-number-report').innerHTML = `<h1>Laudo ${texto}</h1>`
}
function sendNumerReport(){
    document.querySelector('#article-number-report').innerHTML = `<h1>${document.querySelector('#editor-number').value.trim()}</h1>`
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
    document.querySelector('#editor-preamble').value = texto
    /* document.querySelector('#article-preamble').innerHTML = `<p>${texto}</p>`
    hideModal() */
}
function sendPreamble(){
    document.querySelector('#article-preamble').innerHTML = `<p>${document.querySelector('#editor-preamble').value.trim()}</p>`
    hideModal()
}
function writeObjective(){
    let rdo = document.querySelector('#irdo').value.trim()
    if(rdo==''){
        rdo = `recebida via telefonema e e-mail`
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
    quillObjective.root.innerHTML = `<h2>Objetivo</h2><p>${texto}</p>`    
}
function sendObjective(){
    let texto = quillObjective.root.innerHTML
    document.querySelector('#article-objective').innerHTML = texto
    //hideModal()


/* início*/


}
function writeHistoric(){
    let expert = `${document.querySelector('#input-expert').value.trim()}, perito criminal,`
    let ftp = `e ${document.querySelector('#iftp').value.trim()}, fotógrafo técnico pericial,`
    let localDoExame = ''
    let police = document.querySelector('#selectguarnicao').value
    let partner = `${document.querySelector('#iguarnicaopatente').value.trim()} ${document.querySelector('#iguarnicaonome').value.trim()}`
    let vtr = document.querySelector('#iguarnicaovtr').value.trim()
    let delegate = ''
    if(document.querySelector('#check-authorit').checked){
        delegate = `${document.querySelector('#select-delegate').value} ${document.querySelector('#input-delegate').value.trim()}, presente ao local, acompanhou o trabalho da perícia`
        delegate = `<p>${delegate[0].toUpperCase()}${delegate.slice(1)}.</p>`
    }
    
    switch(document.querySelector('#selectlocal').selectedIndex){
        case 0:
            localDoExame = `dirigiram-se ao local indicado, ${document.querySelector('#ilocaltype').value.trim()}. Quando da chegada da equipe, a ${police}, representada na pessoa ${partner}, de posse da viatura ${vtr}, guarnecia o local`
            break
        case 1:
            localDoExame = 'procederam ao exame do veículo apresentado na base da EPCL - Equipe de Perícias Criminalísticas de Limeira'
            break
        case 2:
            localDoExame = `dirigiram-se à ${document.querySelector('#ilocaltype').value.trim()} e proccederam ao exame requisitado. Quando da chegada da equipe, servidores indicaram o veículo a ser examinado`
            break
        case 3: 
            localDoExame = `dirigiram-se ao ${document.querySelector('#ilocaltype').value.trim()} e proccederam ao exame requisitado. Quando da chegada da equipe, funcionários do pátio indicaram o veículo a ser examinado`
            break
    }    
    let data = new Date(document.querySelector('#input-execution-date').value)
    let year = data.getFullYear()
    let month = oneToTwo(data.getMonth()+1)
    /* if(month.length<2){
        month=`0${month}`
    } */
    let day = oneToTwo(data.getDate())
    let hour = oneToTwo(data.getHours())
    let min = oneToTwo(data.getMinutes())
    let texto = `Em ${day}-${month}-${year} às ${hour}h${min}, `
    quillHistoric.root.innerHTML = `<h2>Histórico</h2><p>${texto} ${expert} ${ftp} ${localDoExame}.</p>${delegate}`
    //hideModal()
}
function sendHistoric(){
    texto = quillHistoric.root.innerHTML.trim()
    document.querySelector('#article-historic').innerHTML = texto
}


/*Fim*/


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
//quill
let quillObjective = new Quill('#editorObjective', {
    modules: {
        toolbar: '#toolbar'
      },
    theme: 'snow'
  });

  let quillHistoric = new Quill('#editorHistoric', {
    modules: {
        toolbar: '#toolbar-historic'
      },
    theme: 'snow'
  });