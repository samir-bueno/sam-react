import {MiPrimerComponente} from './components/miPrimerComponente/MiPrimerComponente'

const MyFunction = () => {
  return <>hola</>;
}
//props
function App() {

  return (
    <>
      <MyFunction/>
      <MiPrimerComponente name={"samir"} lastName={"bueno"}/>
    </>
  );
}

export default App
