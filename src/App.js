import taxi from './taxi1.png';
import tache from './tache.png';
import branche from './branche.png';
import './App.css';
import Tel from './Tel';
import EmailButton from './Button';
import Fix from './Fix';



function App() {
  return (
    <div className="App">
      <header>
        <img src={branche} className="branche" alt="logo" />
        <div className="text-overlay">
          <p className="text">BIENVENUE</p>
        </div>
      </header>

      <main>
        <section className="container">
          <div className="text-container">
            <h1> TAXI<br/>MOMO</h1>
            <div className='icon_container'>
              <div className='icons'>
                <Tel/>
                <EmailButton/>
                <Fix/>
              </div>
              
              <div className='mini_text_container'>
                <p className='mini_text'>TAXI SAINT-LOUBES-BORDEAUX <br/> RIVE DROITE</p>
                <p className='micro-text'>Mohammed Ben Hamouda</p>
              </div>
              
            </div>
            
          </div>
          
          <div className="image-container">
           <img src={taxi} className="taxi" alt="logo" />
            <p className='text-bas'>Transport gare & aéroport ...</p>
            
          </div>
        </section>
      </main>

      
    </div>
  );
}

export default App;
