
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('dark')//Weather the dark ode is Enable aur not
  const [alert, setAlert] = useState(null)
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  
  function toggleMode() {

    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#002350'; // navi blue
      showAlert("Dark Mode is enable","success")
      document.title='Textutils -Dark Mode';

      setInterval(()=>{
        document.title='Textutils is Amazing';

      },2000);
      setInterval(()=>{
        document.title=' Install Textutils is Now';

      },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fbd2fd'; //light pink
      showAlert("Light Mode is enable","success")
      document.title='Textutils -Light Mode';

      

    }
  }
  return (
    <>    
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar /> */}

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the Text To Anaylze below" mode={mode}/>
{/* <About/> */}


</div>
    </>
  );
}

export default App;
