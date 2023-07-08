import './App.css';
import Main from './Components/Main';

function App() {

  

  return (
    <section>
      <div>
        Hello World!
        <h1>Gimhan</h1>
      </div>
      <Main>
        <h5>Leo Munasinghe</h5>
      </Main>
      <Main />
      <p>react tutorial series</p>

    {/* manual parameters send */}
      <Main name='Gimhan' age='23' position='web developer' />
    </section>
  );
}

export default App;
