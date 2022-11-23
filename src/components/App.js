//import logo from '../logo.svg';
import '../css/App.css';
import Header from './Header.js';
import FunctionalComponent from './FunctionalComponent';


function App() {
  const variableTexte = "Exemple de texte"; 
  const propsFuncObject = {
    nom: "Marc",
    edat: 45
  }

  return (
    <>
      <div className='bg-primary card'>
        <Header />
      </div>
      <div>
        <FunctionalComponent
        propsFunctional1 = { variableTexte }
        propsFunctional2String = "Cadena de text"
        propsFunctionalNumber = { 3 }
        propsFunctionalObject = { propsFuncObject }
        />
      </div>
    </>    
  );
}

export default App;


/*
        
        


function calcular(){
  return 5+2;
}
 
const alumne = "Peptio Grillo";

// Això és una manera de fer els estils, encara que la manera correcta és fer-ho amb un css
const inLineStyle = {
    color:"Green",
    fontSize:"50px",
}


 const funcioClick = () => {
    console.log("A clickat el botó");
  }

  const functionMouseOver =() => {
    console.log("You pass the mouse over text!!");
  }

  const funcioClick2 = (parametre) => {
    console.log(`S'ha activat la funció: ${parametre}`);
  }

<Header />
      
      <p style={inLineStyle}>Text a personalitar amb el 'inLineStyle' </p>
      <div className="color">
        <h2>SUBTITOL</h2>
      </div>
      <h1 className="color">Operació matemàtica en una funció JS: {calcular()}</h1>
      <h1>Operació matemàtica directa: {2*2}</h1>
      <p>Texte: {`Holaaa!! ${alumne}`}</p>
      <p>Operador ternari {(6>2) ? "Sí!!! és més gran":"No!!! És més petit"}</p>

      <img src="" alt="" />


      <button onClick = {funcioClick}> Acceptes els termes d'ús?!!!</button> 
      <h2 onMouseOver = {functionMouseOver}>Move mouse over text</h2>

      <button onClick={() => funcioClick2("onClick")}> Acceptes els termes d'ús?!!! With send parametres</button> 
      <h2 onMouseOver = {() => funcioClick2("mouseOver")}>Move mouse over text. With send parametres</h2>
*/

