// import library , hooks , class
import React from 'react'
import Comp1 from './Component/Cmp1';
import Comp2 from './Component/Cmp2';
import Comp3 from './Component/Cmp3';
import Comp4 from './Component/Cmp4';
import Variable1 from './Variables/Var1';
import Variable2 from './Variables/Var2';
import Variable3 from './Variables/Var3';
import Variable4 from './Variables/Var4';
import Es1 from './State/Es1';
import Counter from './State/Counter';
import Es2 from './State/Es2';
import Es3 from './State/Es3';
import Es4 from './State/Es4';
import Ex1 from './Props/Ex1';
import Ex2 from './Props/Ex2';
import Ex3 from './Props/Ex3';
import Ex4 from './Props/Ex4';




// content body (jsx)
function App(props) { // props mean properties , fn name also capital letter
  return(
    <div class="container">
      <h1>React Default component</h1>
      {/* <Ex1 x= {20} y={30} /> */}
      <Ex4 />

    </div>
  )
}

// export the component
export default App;