import React, { Suspense } from "react";

import Loading from "./components/Loading";

function App() {
  const LazyComponent = React.lazy(() => import("./components/KVsCarousel"));
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
