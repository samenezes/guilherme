import './App.css'

function headerInfo() {

  const url = 'https://opentdb.com/api.php?amount=30&category=15 ';

  fetch("https://opentdb.com/api.php?amount=30&category=15")
    .then((res) => res.json())
    .then((dados) => {
      
const perguntas = dados.question;
const correctAnswers = dados.correct_answer



    })





const changePhrase = document.getElementsByClassName("button");
changePhrase.addEventListener("click", () => {
   ;
});




// se tirar isso de cima, funciona o cabeçalho e footer, essa foi minha tentativa

  return (
    <>
    
      <header className="header">
        <div>
          Prova-React
        </div>
        
      </header>
      <div className ="button">
      <button>Clique para receber as respostas corretas</button>
      </div>
      <footer className="footer">
        <div>
          Guilherme
         </div>
      </footer>
      
    </>

  )
}

export default headerInfo
