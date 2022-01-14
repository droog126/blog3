import React, { useEffect, useState } from 'react';
import request from '@/utils/request';
import NotFoundPage from '@/pages/utils/notFound';
import Loadding from '@/pages/utils/loading';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import("@/pages/home"));
const Author = React.lazy(() => import("@/pages/author"));
document.title = 'React App';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loadding />;
  }
  return (
    <Routes>
      <Route path='/'>
        <Route
          path=""
          element={
            <React.Suspense fallback={Error}>
              <Home />
              <div onClick={() => {
                window.open('https://reactrouter.com/docs/en/v6/examples/lazy-loading', '_self')
              }}>
                click
              </div>
            </React.Suspense>
          }
        />
        <Route
          path="home"
          element={
            <React.Suspense fallback={Error}>
              <Home />
              <div onClick={() => {
                window.open('https://reactrouter.com/docs/en/v6/examples/lazy-loading', '_self')
              }}>
                click
              </div>
            </React.Suspense>
          }
        />
        <Route
          path="author"
          element={
            <React.Suspense fallback={Error}>
              <Author />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
