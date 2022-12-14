const inpute_cep = document.getElementById('input-cep')
const butt_cep = document.getElementById('but-input')
const h_logradouro = document.getElementById('logradouro')
const h_bairro = document.getElementById('bairro')
const h_cidade = document.getElementById('cidade')
const h_estado = document.getElementById('estado')

butt_cep.addEventListener('click', () =>{
    let cep = inpute_cep.value

    if (cep.length !== 8) {
        alert('Digite a quantidade de números suficiente ou remova o dígito (-).')
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resposta => resposta.json())
    .then(json=>{

        h_logradouro.innerHTML = 'Logradouro: ' + json.logradouro 
        h_bairro.innerHTML = 'Bairro: ' + json.bairro 
        h_cidade.innerHTML = 'Cidade: ' + json.localidade
        h_estado.innerHTML = 'UF: ' + json.uf
    })
    
} )

gerarQr =()=>{
    var inpute = document.getElementById('input-qr').value
    var apiQrCode = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${inpute}`
    document.querySelector('#qr-code-image').src = apiQrCode
}


pagQr = () =>{
    window.location.href = '#section-qr-central'
}

lgpd = () =>{
    window.location.href = './Politica de Privacidade/lgpd.html'
}

butAmazonia = () =>{
    window.location.href = '#article-amazonia'
}

videoUm = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=X3gvWKyZy_s'
}

videoDois = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=OODsSZ5KDnI'
}

videoTres = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=XpLoUmn4yG8'
}

videoQuatro = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=uQVOMoTNPAI'
}

videoCinco = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=XK2uVOiRQv8'
}

videoSeis = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=1RkUDzYeGjw'
}

mapadoamor = () =>{
    window.location.href = './mapadoamor.html'
}

verificarincendio = () =>{
    window.location.href = 'https://www.google.com.br/maps/@-13.7407473,-50.0563623,6053820m/data=!3m1!1e3!5m1!1e8'
}
