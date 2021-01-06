
import Layout from './pages/Layout'
import './App.sass';
import Logo from './components/Logo/Logo'
import Button from './components/UI/Button/Button'

function App() {
  return (
    <div className="App">
      
       <Layout>
         <Logo/>
         <Button btnType='' disabled={false}>Cennik</Button>
         <Button btnType='opposit' disabled={false}>Sklep</Button>
         <Button btnType='' disabled={false}>Wizyta</Button>
        
       </Layout>
        
        
      
    </div>
  );
}

export default App;
