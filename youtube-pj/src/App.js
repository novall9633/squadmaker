import { Suspense } from "react";

const App=()=>{
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />} >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
