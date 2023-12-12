import './App.css';
import ConnectCCP from './aws-ccp';
import React, { useCallback } from "react";

function App() {
  const CCP = useCallback(() => <ConnectCCP />, []);
  console.log(process.env.REACT_APP_API_ENDPOINT)
  return (
    

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div id="ccp" className="ccp h-100vh">
            <CCP />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">      
          right
        </div>
      </div>
    </div>

    
    // <div className="App">
    //   <CCP />
    // </div>
  );
}

export default App;
