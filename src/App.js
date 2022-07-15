import './App.css';
// import ClassComp from "./day1/classComp"
// import FunctionalComp from "./day1/functionalComp"
// import AddValue from './day4/contextAPI/addValue';
// import Name from './day4/contextAPI/name';
// import LifeCycle from './day4/lifeCycle';
// import Memo from './day4/usememo';
// import UseRef from './day4/useref';
// import Context from './day4/contextAPI/createcontext';
import EnhanceClickCounter from './day5/highorderComponent/clickIncrement';
import EnhanceOverCounter from './day5/highorderComponent/mouseCounter';
import Call from './day5/useCallback/callBack';
import ForExample from './day5/useEffectCleanup';


function App() {
  return (
    <div className="App">
      {/* <FunctionalComp/>
      <ClassComp/>
      <UseRef/>
      <Memo/>
      <LifeCycle/>
     <Context> 
      <AddValue/>
      <Name/>
      </Context> */}
      <EnhanceClickCounter/>
      <EnhanceOverCounter/>
      <ForExample/>
      <Call/>
      
    </div>
  );
}

export default App;
