import React, { Suspense } from "react";

import Loading from "./components/Loading";

function App() {
  const LazyComponent = React.lazy(() => import("./components/KVsCarousel"));
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
      <div>
        <h1>xD</h1>
        <h1>xD</h1>
        <h1>xD</h1>
        <h1>xD</h1>
        <h1>xD</h1>
      </div>
    </div>
  );
}

export default App;
