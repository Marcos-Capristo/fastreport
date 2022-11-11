document.onload = ini_()









/*  FUNÇÃO DE INICIALIZAÇÃO DA PÁGINA HTML, COLOCA ALGUNS VALORES COMO DEFAUTS */
function ini_(){
    document.querySelector('#input-designated-date').value = todayDate('Sun May 11,2014')
    document.querySelector('#input-execution-date').value = todayDate()+'T12:00'
    document.querySelector('#input-director').value="Samuel Alves de Melo Neto"
    document.querySelector('#input-expert').value="Marcos Capristo"
    document.querySelector('#input-delegate').value="Rodrigo Rodrigues"
}

















/*  VARIÁVEL QUE ARMAZENA O NOME DO FORMULÁRIO QUE DEVERÁ RETORNAR APÓS UMA JANELA AUXILIAR*/
let previusForm = ''













/*  ESTRUTURA DO LAUDO - A abordagem abaixo pode ser desenvovida em OO, mas por eqnuanto fica assim mesmo.*/
let report_header = ''
let report_number = ''
let report_preamble = ''
let report_objective = ''
let report_historic = ''
let report_informs = ''
let report_local = ''
let report_veicle = ''
let report_thing = ''
let report_corpuses = ''
let report_conclusion = ''
let report_signature = ''
let report_footer = ''

























/*  ATUALIZAÇÃO DA PÁGINA A SER IMPRESSA, SERÁ CHAMADA SEMPRE QUE UM FORMULÁRIO FOR ENVIADO
        Numera os títulos com a TAG H2 e as Legendas */
function report_update(){
    texto = `${report_number}${report_preamble}${report_objective}${report_historic}${report_informs}${report_local}${report_veicle}${report_thing}${report_corpuses}${report_conclusion}${report_signature}`
    document.querySelector('#report').innerHTML = texto
    let h2 = document.querySelectorAll('#report>h2')
    let im = document.querySelectorAll('#report>.legenda')
    let h2Num = 1
    h2.forEach(element =>{
        element.innerHTML=`${h2Num} - ${element.textContent}`
        h2Num++
        }) 
    h2Num=1
    im.forEach(elementImg=>{
        elementImg.innerHTML=`Figura ${h2Num} - ${elementImg.textContent}`
        h2Num++
        })
    }
































/*  COMANDOS DO MENU */
document.querySelector('#i-number').addEventListener('click', ()=>{showModal('#form-number-report')})
document.querySelector('#i-preamble').addEventListener('click', ()=>{showModal('#form-preamble')})
document.querySelector('#i-objective').addEventListener('click', ()=>{showModal('#form-objective')})
document.querySelector('#i-historic').addEventListener('click', ()=>{showModal('#form-historic')})
document.querySelector('#i-informs').addEventListener('click', ()=>{showModal('#form-informs')})
document.querySelector('#i-local').addEventListener('click', ()=>{showModal('#form-local')})
document.querySelector('#i-veicle').addEventListener('click', ()=>{showModal('#form-veicle')})
document.querySelector('#i-thing').addEventListener('click', ()=>{showModal('#form-thing')})
document.querySelector('#i-corpuses').addEventListener('click', ()=>{showModal('#form-corpuses')})
document.querySelector('#i-conclusion').addEventListener('click', ()=>{showModal('#form-conclusion')})
document.querySelector('#i-imagemEditor').addEventListener('click', ()=>{abrirEditorImgESelecionarImagem()})
document.querySelector('#filedialogimg').addEventListener('change', ()=>{selecionarImagem()})
document.querySelector('#i-print').addEventListener('click', ()=>{print()})

function abrirEditorImgESelecionarImagem(){
    showModal('#i-image')
    document.querySelector('#filedialogimg').click()
}

function selecionarImagem(){
    showModal('#i-image')
    const imagemSelecionada = document.querySelector('#filedialogimg').files
    if(imagemSelecionada.length>0){
        const imagemCarregada = imagemSelecionada[0]

        const canvas = document.querySelector('#i-canvas')

        const ctx = canvas.getContext('2d')

        const newImagem = document.createElement('img')

        const arquivoLido = new FileReader()

        arquivoLido.onload = function(imagemTexto){

            const imagemBase64 = imagemTexto.target.result

            newImagem.src = imagemBase64

            newImagem.onload = function(){
                ctx.drawImage(newImagem, 0, 0, 600, 400)
            }

            //document.querySelector("#container").innerHTML = newImagem.outerHTML
        }
        arquivoLido.readAsDataURL(imagemCarregada)

        //const imgW = newImagem.naturalWidth

        //const imgH = newImagem.naturalHeight

        //console.log(`${imgW} ${imgH}`)
        
    }else{
        console.log('Imagem não selecionada ...')
    }
}




























/*  COMANDOS DO ÍCONE DO FORMULÁRIO */
document.querySelector('#magic-number').addEventListener('click', function(){writeNumberReport()})
document.querySelector('#toolbar-preamble-magic').addEventListener('click', function(){writePreamble()})
document.querySelector('#toolbar-magic').addEventListener('click', function(){writeObjective()})
document.querySelector('#magic-historic').addEventListener('click', function(){writeHistoric()})
document.querySelector('#magic-local-house').addEventListener('click', function(){
    showModal('#subform-local-house')
    previusForm = '#form-local'
})
document.querySelector('#magic-local-street').addEventListener('click', function(){showModal('#subform-local-street')})














 
/*  MANIPULAR IMAGENS 
document.querySelector('.magicimg').addEventListener('dblclick', function(){
    imageManipulate()
}) */



















/*  BOTÕES DAS JANELAS AUXILIARES, ENVIAM TEXTOS PARA OS FORMULÁRIOS */
/*      Preenche o formulário LOCAL com um texto de imóvel  */
document.querySelector('#imovel-send').addEventListener('click', function(){
    quillLocal.root.innerHTML+='<h2>Submodal</h2><p>Texto que vem do submodal</p>'
    showModal('#form-local')
})
/*      Preenche o formulário LOCAL com um texto de via pública */
document.querySelector('#via-send').addEventListener('click', function(){
    quillLocal.root.innerHTML+='<h2>Submodal</h2><p>Texto que vem do submodal</p>'
    showModal('#form-local')
})
































/*  TRANSIÇÕES DE UM FORMULÁRIO PARA OUTRO - BOTÃO ENVIAR */
document.querySelector('#btn-form-number-report').addEventListener('click', function(){
    sendNumerReport()
    showModal('#form-preamble')
})
document.querySelector('#btn-form-preamble').addEventListener('click', function(){
    sendPreamble()
    showModal('#form-objective')
})
document.querySelector('#btn-form-objective').addEventListener('click', function(){
    sendObjective()
    showModal('#form-historic')
})
/*  COMANDOS DO SELECT DO HISTÓRCIO*/
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
document.querySelector('#btn-form-historic').addEventListener('click', function(){
    sendHistoric()
    showModal('#form-informs')
})
document.querySelector('#btn-form-informs').addEventListener('click', function(){
    sendInforms()
    showModal('#form-local')
})
document.querySelector('#btn-form-local').addEventListener('click', function(){
    sendLocal()
    showModal('#form-veicle')
})
document.querySelector('#btn-form-veicle').addEventListener('click', function(){
    sendVeicle()
    showModal('#form-thing')
})
document.querySelector('#btn-form-thing').addEventListener('click', function(){
    sendThing()
    showModal('#form-corpuses')
})
document.querySelector('#btn-form-corpuses').addEventListener('click', function(){
    sendCorpuses()
    showModal('#form-conclusion')
})
document.querySelector('#btn-form-conclusion').addEventListener('click', function(){
    sendConclusion()
    hideModal()
})




































/*  FUNÇÃO DO BOTÃO FECHAR QUE APARECE NO CANTO SUPERIOR DE CADA FORMULÁRIO */
document.querySelectorAll('.btn-close').forEach(element=>{
    element.addEventListener('click', function(){
        hideModal()
    })
})

/*  FUNÇÃO DO BOTÃO FECHAR QUE APARECE NO CANTO SUPERIOR DE CADA FORMULÁRIO AUXILIAR */
document.querySelectorAll('.subbtn-close').forEach(element=>{
    element.addEventListener('click', function(){
        showModal(previusForm)
    })
})


































/*  FUNCÇÃO PARA ACRESCENTAR UM 0 ANTES DO DÍGITO PARA TER DUAS CASAS NOS NUMEROS MENORS QUE 10 */
function oneToTwo(num){
    let two=num.toString()
    if(two.length<2){
        two = `0${num}`
    }else{
        two = num
    }
    return two
}





























/*  INVERTE UMA STRING - É USADA NA FUNÇÃO ABAIXO PARA FORMATAR CASAS DE MILHAR COM PONTO */
function inverter(num){
    num1 = num
    resultado = ''
    for (i=num1.length-1;i>=0;i--){
        resultado+=num1[i]
    }
    return resultado
}

/*  FORMATA CASA DE MILHAR COM PONTO PRA FICA NO PADRÃO XX.XXX.XXX */
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

































/*  EXTRAI O DIA, MÊS E ANO DE UMA DATA E RETORNA NO FORMATO DD-MM-AAAA */
function formatDate(data){
    const date = new Date(data)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}

































/*  ESCREVE O NÚMERO DO LAUDO COM A FORMATAÇÃO Laudo XX.XXX/AAAA */
function writeNumberReport(){
    const numberReport = formatMilhar(document.querySelector('#input-number-report').value.trim())
    const designatedDate = new Date(document.querySelector('#input-designated-date').value).getFullYear()
    texto = `${numberReport}/${designatedDate}`
    document.querySelector('#editor-number').value = `Laudo ${texto}`
}
/*  ENVIA O NUMERO DO LAUDO, DA FUNÇÃO ACIMA, PARA O RELATÓRIO */
function sendNumerReport(){
    report_number = `${document.querySelector('#editor-number').value.trim()}`
    if(report_number!=''){
        report_number = `<h1>${report_number}</h1>`
    }
    report_update()
}































/*  ESCREVE O PREÂMBULO */
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
}

/*  ENVIA O PREÃMBULO PARA O RELATÓRIO */
function sendPreamble(){
    report_preamble = document.querySelector('#editor-preamble').value.trim()
    if(report_preamble!=''){
        report_preamble = `<div id="article-preamble"><p>${report_preamble}</p></div>`
    }    
    if(document.querySelector('#check-signature').checked){
        report_signature = `<div id="article-signature"><p>${document.querySelector('#input-expert').value.trim()}</p><p id='signature-label'>${document.querySelector('#select-expert').value.replace('designado o', '').replace('designada a', '').trim()}</p></div>`
    }else{
        report_signature = ''
    }
    report_update()
}

































/*  ESCREVE O OBJETIVO */
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
        return
    }
    let objective = document.querySelector('#iobjective').value.trim()
    if(objective==''){
        alert('digite o objetivo.')
        document.querySelector('#iobjective').focus()
        return
    }
    let nature = document.querySelector('#inature').value.trim()
    if(nature==''){
        alert('digite a natureza do exame.')
        document.querySelector('#inature').focus()
        return
    }
    const texto = `O objetivo do exame pericial, em conformidade com a requisição ${rdo} - ${delegacia}, era ${objective}, sendo sua natureza, ${nature}.`
    quillObjective.root.innerHTML = `<h2>Objetivo</h2><p>${texto}</p>`    
}
/*  ENVIA O OBJETIVO PARA O RELATÓRIO */
function sendObjective(){
    if(quillObjective.getText().trim()!=''){
        report_objective = quillObjective.root.innerHTML
    }else{
        report_objective = ''
    }    
    report_update()


}






























/*  ESCREVE O HISTÓRICO */
function writeHistoric(){
    let expert = `${document.querySelector('#input-expert').value.trim()}, perito criminal,`
    let ftp = `e ${document.querySelector('#iftp').value.trim()}, ${document.querySelector('#select-ftp').value},`
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
            localDoExame = `dirigiram-se à ${document.querySelector('#ilocaltype').value.trim()} e procederam ao exame requisitado. Quando da chegada da equipe, servidores indicaram o veículo a ser examinado`
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
/*  ENVIA O HISTÓRICO PARA O RELATÓRIO */
function sendHistoric(){
    if(quillHistoric.getText().trim()!=''){
        report_historic = quillHistoric.root.innerHTML.trim()
        }else{
        report_historic = ''  
        }
    report_update()
}






























/*  ENVIA INFORMES PARA O RELATÓRIO */
function sendInforms(){
    if(quillInforms.getText().trim()!=''){
        report_informs = quillInforms.root.innerHTML.trim()
        }else{
        report_informs = ''
    }
    report_update()
    /* texto = quillInforms.root.innerHTML.trim()
    document.querySelector('#article-informs').innerHTML = texto
    if(texto.length<80){
    document.querySelector('#article-informs').style.display = 'none'
    }else{
    document.querySelector('#article-informs').style.display = 'block' */
}




























//                                              LOCAL                                                   


/*  ESCREVE O LOCAL - IMPLEMENTANDO AINDA*/
function writeLocal(){
    texto = `Texto do local`
}
/*  ENVIA O TEXTO DO LOCAL PARA O RELATÓRIO */
function sendLocal(){
    if(quillLocal.getText().trim()!=''){
        let textoHTML = quillLocal.root.innerHTML.trim()//.replace('img', 'img class="magicimg" ondblclick="imageManipulate(this)"')
        report_local = textoHTML
    }else{
        report_local = ''
    }    
    report_update()
}































/*  ENVIA O TEXTO DE VEÍCULO PARA O RELATÓRIO */
function sendVeicle(){
    if(quillVeicle.getText().trim()!=''){
        report_veicle = quillVeicle.root.innerHTML.trim()
    }else{
        report_veicle = ''
    }    
    report_update()
}























/*  ENVIA O TEXTO DE PEÇAS PARA O RELATÓRIO */
function sendThing(){
    if(quillThing.getText().trim()!=''){
        report_thing = quillThing.root.innerHTML.trim()
    }else{
        report_thing = ''
    }
    report_update()
    /* texto = quillThing.root.innerHTML.trim()
    document.querySelector('#article-thing').innerHTML = texto
    if(texto.lenght<80){
        document.querySelector('#article-thing').style.display = 'none'
    }else{
        document.querySelector('#article-thing').style.display = 'block'
    } */
}


































/*  ENVIA O TEXTO DE CADÁVERES PARA O RELATÓRIO */
function sendCorpuses(){
    if(quillCorpuses.getText().trim()!=''){
        report_corpuses = quillCorpuses.root.innerHTML.trim()
    }else{
        report_corpuses = ''
    }    
    report_update()
}
































/*  ENVIA O TEXTO DE CONCLUSÃO PARA O RELATÓRIO */
function sendConclusion(){
    if(quillConclusion.getText().trim()!=''){
        report_conclusion = quillConclusion.root.innerHTML.trim()
    }else{
        report_conclusion = ''
    }    
    report_update()
}



































/* function showSubModal(element_){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelector(element_).style
    //lement_)
    fade.opacity = '1'
    fade.pointerEvents = 'all'
    fade.transition = '0.5s'
    modal.opacity = '1'
    modal.pointerEvents = 'all'
    modal.zIndex = '100'
    modal.transition = '0.5s'
} */
























/*  EXIBE A JANELA PARA PREENCHIMENTO DOS TEXTOS QUE SERÃO ENVIADOS AO RELATÓRIO */
function showModal(element_){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelector(element_).style
    hideModal(element_)
    modal.zIndex = '100'
    fade.opacity = '1'
    fade.pointerEvents = 'all'
    fade.transition = '0.5s'
    modal.opacity = '1'
    modal.pointerEvents = 'all'
    modal.transition = '0.5s'
}

/*  ESCONDE AS JANELAS MODAIS */
function hideModal(){
    const fade = document.querySelector('#fade').style 
    const modal = document.querySelectorAll('.modal')
    const subModal = document.querySelectorAll('.submodal')
    modal.forEach(element => {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.zIndex = '1'
        element.style.transition = '0.5s'
    })
    subModal.forEach(element => {
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.transition = '0.5s'
        element.style.zIndex = '1'
    })
    fade.opacity = '0'
    fade.pointerEvents = 'none'
    fade.transition = '0.5s'
}

/*  ESCONDE AS JANELAS MODAIS AUXILIARES */
function hideSubModal(element_){
    let element = element_.parentNode
        element.style.opacity = '0'
        element.style.pointerEvents = 'none'
        element.style.transition = '0.5s'
        element.style.zIndex = '1'
    }





























/*      QUILL EDITOR    */

/*  BARRA DE FERRAMENTAS DE JANELAS QUE NÃO EXIBEM IMAGENS */
let toolbarOptions = [
    [{ 'header': [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],                                                        
  ];

/*  BARRA DE FERRAMENTAS DE JANELAS QUE EXIBEM IMAGENS */
let toolbarOptionsImg = [
    [{ 'header': [2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    ['image'],
    [{ 'align': 'center' }]                                                       
  ];
  
































// QUILL OBJETVO
let quillObjective = new Quill('#editorObjective', {
    modules: {
        toolbar: '#toolbar',
        toolbar: toolbarOptions,
      },
    theme: 'snow'
  });































  //QUILL HISTÓRICO
  let quillHistoric = new Quill('#editorHistoric', {
    modules: {
        toolbar: '#toolbar-historic',
        toolbar: toolbarOptions,
      },
    theme: 'snow'
  });


































  //QUILL INFORMES
  let quillInforms = new Quill('#editorInforms', {
    modules: {
        toolbar: toolbarOptions,
      },
    theme: 'snow'
  });


































  //QUILL LOCAL
  let quillLocal = new Quill('#editorLocal', {
    modules: {
        toolbar: '#toolbar-local',
        toolbar: {
            container: toolbarOptionsImg,
                handlers:{align:function(){
                    addHTMLQuill(this.quill)
                }
            }            
        }
    },
    theme: 'snow'
  });






































  //QUILL VEÍCULO
  let quillVeicle = new Quill('#editorVeicle', {
    modules: {
        //toolbar: '#toolbar-veicle',
        toolbar: {
            container: toolbarOptionsImg,
                handlers:{align:function(){
                    addHTMLQuill(this.quill)
                }
            }            
        }
      },
    theme: 'snow'
  });



































  //QUILL PEÇA
  let quillThing = new Quill('#editorThing', {
    modules: {
        //toolbar: '#toolbar-thing',
        toolbar: {
            container: toolbarOptionsImg,
                handlers:{align:function(){
                    addHTMLQuill(this.quill)
                }
            }            
        }
      },
    theme: 'snow'
  });

































  //QUILL CADÁVER
  let quillCorpuses = new Quill('#editorCorpuses', {
    modules: {
        //toolbar: '#toolbar-corpuse',
        toolbar: {
            container: toolbarOptionsImg,
                handlers:{align:function(){
                    addHTMLQuill(this.quill)
                }
            }            
        }
      },
    theme: 'snow'
  });



































  //QUILL CONCLUSÃO
  let quillConclusion = new Quill('#editorConclusion', {
    modules: {
        toolbar: toolbarOptionsImg,
      },
    theme: 'snow'
  });


































  /*    DESENHAR NO CANVAS = EM TESTE  */
  function draw(){
    let canvas = document.querySelector('#i-canvas')
    let ctx = canvas.getContext('2d')
    let img=new Image()
    img.src = './img/ceu.jpg'
    ctx.fillStyle='#845'
    ctx.drawImage(img, 10, 10)
  }































  /*    SELECIONAR IMAGEM NO EXPLORER - EM TESTE */
  function selectLocalImage() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.click();

    // Listen upload local image and save to server
    input.onchange = () => {
      const file = input.files[0].name;

      // file type is only image.
      if (/^image\//.test(file.type)) {
        return file;
      } else {
        return 'You could only upload images.'
      }
    };
  }































/*  FUNÇÃO PARA INSERIR HTML NO LOCAL DO CURSOR - TESTE */
  function addHTMLQuill(thisquill){
    let position = thisquill.getSelection().index
    let data = `<span>[textodalegendaasersubstituido]</span>`
    thisquill.clipboard.dangerouslyPasteHTML(position, data)
    let textHTML1 = thisquill.root.innerHTML
    textHTML1 = textHTML1.replace(`[textodalegendaasersubstituido]`, `<p class="legenda">Vista Frontal do imóvel</p>`)
    thisquill.root.innerHTML = textHTML1
  }
































  /*    DATA DE HOJE  */
  function todayDate() {
    let d = new Date()
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return [year, month, day].join('-')
}







function imageManipulate(element){
    element.style.border = '2px solid red'
    let imgName = element.src
    alert(imgName)
    let theParent = element.parentNode
    let myDiv = document.createElement('canvas')
    myDiv.width='600'
    myDiv.className = 'canvasImg'
    myDiv.appendChild(element)
    theParent.appendChild(myDiv)
    let ctx = myDiv.getContext("2d");
    let myImg = new Image()
    myImg.src = imgName
    let proportion = myImg.width/myImg.height
    myDiv.height=(600/proportion)
    myImg.onload = ()=>{ctx.drawImage(myImg, 0, 0, 600, (600/proportion))}
    
   // ctx.fillRect(10, 10, 50, 60)
   // ctx.stroke();
}