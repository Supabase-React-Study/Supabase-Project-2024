import React, { useDeferredValue, Suspense} from "react";
import Spline from '@splinetool/react-spline';

const Home =()=>{

  return (
    <>
    
    <Suspense fallback={<div>Loading...</div>}>
      <Spline
        scene="https://prod.spline.design/XuwDyKsZqC8vQtfs/scene.splinecode" 
      />
  </Suspense>
    </>
  )

}

export default Home;