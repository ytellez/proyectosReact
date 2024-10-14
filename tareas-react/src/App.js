import './App.css';
import logo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img className='freeCodeCamp-logo'
          src={logo}
          alt='logo freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
          <ListaDeTareas>
          </ListaDeTareas>    
      </div>
    </div>
  );
}

export default App;
