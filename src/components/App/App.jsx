import './App.styled.js';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLoader, LoaderWraper } from './App.styled.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const UserPage = lazy(() => import('../../pages/UserPages/UserPage'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <LoaderWraper>
            <MainLoader size={350} color="aqua" />
          </LoaderWraper>
        }
      >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
