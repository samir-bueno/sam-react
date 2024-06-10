import {MiPrimerComponente} from './components/miPrimerComponente/MiPrimerComponente'
import {Estado} from './components/estado/Estado'

const MyFunction = () => {
  return <>hola</>;
}
//props
function App() {

  return (
    <>
      <MyFunction/>
      <MiPrimerComponente name={"samir"} lastName={"bueno"}/>
      <Estado/>
    </>
  );
}

export default App
