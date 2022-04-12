
import React from 'react';
import FunCompo from './Components/Func'
import ClassCompo  from './Components/ClassComp'
 

class App extends React.Component{

  state = {
      funComp:false,
      classComp:false

    }
  
  render(){
    return(
      <div >
      <h1>Conditional Rendering</h1>

      <button onClick={()=>{this.setState({funComp: ! this.state.funComp})}}>Func</button>

      <button onClick={()=> {this.setState({classComp: ! this.state.classComp})}}>Class</button>

      <br></br>
      {this.state.funComp === true ? <FunCompo /> : null}
      {this.state.classComp === true ? <ClassCompo /> : null}


      </div>
    )
  }
}
export default App