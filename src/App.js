import logo from './logo.svg';
import './App.css';
import DemoProps from './Components/DemoProps';
import ClassDemo from './Components/ClassDemo';
import DemoEx from './Components/DemoEx';
import UserEx from './Components/UserEx';
import MountEx from './Components/MountEx';
import UpdateEx from './Components/UpdateEx';
import Class1 from './Components/LifeEx';
import UseStateEx from './Hooks/UseStateEx';
import UseStateAr from './Hooks/UseStateAr';
import UseEff from './Hooks/UseEff';
import DemoSta from './Basics/DemoSta';
import DemoObj from './Basics/DemoObj';
import TestEx from './Basics/TestEx';
import GetDemo from './AXIOS/GetDemo';
import PostDemo from './AXIOS/PostDemo';
import PropValid from './PropsValidations/PropValid';
import RefDomEx from './Refs/RefDomEx';
import WithoutRef from './Refs/WithoutRef';
import WithRef from './Refs/WithRef';


function App() {
  return (
    <div className="App">
  <h2>i am parent compoenent</h2>
{/*<DemoProps name="sathya"></DemoProps>
<ClassDemo movie="avatar"></ClassDemo>  
<DemoEx></DemoEx>  
  <UserEx></UserEx>
  <MountEx></MountEx>
  <UpdateEx></UpdateEx>
  <Class1></Class1>
<UseStateEx></UseStateEx>
<UseStateAr></UseStateAr>
<DemoSta></DemoSta>
<DemoObj></DemoObj>
<UseEff></UseEff>
<TestEx></TestEx

<PostDemo></PostDemo>
<PropValid></PropValid>
<RefDomEx></RefDomEx>

<WithoutRef></WithoutRef>
<WithRef></WithRef>*/}

<GetDemo></GetDemo>
    </div>
  );
}

export default App;
