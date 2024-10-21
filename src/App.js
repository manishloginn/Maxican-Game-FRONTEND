import { useState } from "react";
import FirstPlayer from "./component/FirstPlayer";
import SecondPlayer from "./component/SecondPlayer";



function App() {

  const [toggle, settoggle] = useState(true)

  return (
    <div className="App">

      {
        toggle && toggle ? <FirstPlayer settoggle={settoggle} /> : <SecondPlayer />
      }



    </div>
  );
}

export default App;
