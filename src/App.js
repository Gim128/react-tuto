import './App.css';
import Main from './Components/Main';

import myData from './Data/myData';

const NewBlock = () => {
  return(
    <>
      {
        myData?.map(
          ({name, city, hobby, position}, index) => {
            return <Main key={index} name={name} city={city} hobby={hobby} position={position} />;
          }
        )
      }
    </>
  )
}

function App() {

  // const mainBlock = myData.map(
  //   ({name, city, hobby, position}, index) => {
  //     return <Main key={index} name={name} city={city} hobby={hobby} position={position} />;
  //   }
  // );

  return (
    <section>
      <div>
        Hello World!
        <h1>Gimhan</h1>
      </div>
      
      <NewBlock />

    </section>
  );
}

export default App;
