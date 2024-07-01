import {MiPrimerComponente} from './components/miPrimerComponente/MiPrimerComponente'
import {Estado} from './components/estado/Estado'
import {GetPost} from './components/GetPost/GetPost'
import {Personajes} from './components/Personajes/Personajes'
import {ConvertirMonedas} from './components/ConvertirMonedas/ConvertirMonedas'
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
      <GetPost/>
      <Personajes/>
      <ConvertirMonedas/>
    </>
  );
}

export default App
