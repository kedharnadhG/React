import React, {Fragment} from "react";
import Provider from "./provider"
import Context from "./context"

const Agents = () =>{
  return <AgentOne />
}

const AgentOne = () =>{
  return <AgentTwo />
}

const AgentTwo = () =>{
  return <AgentBond />
}

const AgentBond = () =>{
  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            {/* there is no prop drilling here */}
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>Agent Name: {context.data.agent}</p>
            <h3>Mission Status: {context.data.accept}</h3>
            <button onClick={context.isMissionAccepted}>Choose to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}




const App = () =>{
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;