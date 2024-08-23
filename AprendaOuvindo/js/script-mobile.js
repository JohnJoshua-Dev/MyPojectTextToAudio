//declaracao de variaveis
const selecaoVozm=document.querySelector("#selecao-vozm");
const botaoOuvirm=document.querySelector("#ouvir-btnm");
const botaoBaixarTextom=document.querySelector("#baixar-texto-btnm" );
const uploadArquivom=document.querySelector("#upload-arquivom");
const entradaTextom=document.querySelector("#entrada-de-texto");

// Iniciar AI de Vozes
const falar = new SpeechSynthesisUtterance();

let vozesDisponiveism =[];

const atualizarValoresm = () => {
    vozesDisponiveism = window.speechSynthesis.getVoices();
  
    falar.voice = vozesDisponiveism[0];
    
    vozesDisponiveism.forEach((voz, index)=> {
      const opcao = document.createElement("option");
      opcao.value = index;
      opcao.textContent = voz.name
      selecaoVozm.appendChild(opcao);
    });
  };
  window.speechSynthesis.onvoiceschanged = atualizarValoresm;

  // executar o texto como voz
selecaoVozm.addEventListener("change", ()=>{
    falar.voice = vozesDisponiveism[selecaoVozm.value];
});
botaoOuvirm.addEventListener("click", ()=> {
    falar.text = entradaTextom.value
    window.speechSynthesis.speak(falar);
});

// botao baixar 
botaoBaixarTextom.addEventListener("click", () => {
    const texto =entradaTextom.value
    const blob = new Blob([texto], {type:"text/plain"});
    const url=URL.createObjectURL(blob);
    const a = document.createElement("a")
    a.href = url
    a.download="texto.docx"
    a.click()
    URL.revokeObjectURL(url);
});

// botao upload
uploadArquivom.addEventListener("change", (event)=>{
    const arquivo = event.target.files[0]

    if(arquivo){
        const leitor = new FileReader();

        leitor.onload = (e) =>{
            entradaTextom.value = e.target.result;
        };
        leitor.readAsText(arquivo);
    }
});