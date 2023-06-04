
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
