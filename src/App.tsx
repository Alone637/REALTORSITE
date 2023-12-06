import { MainPage } from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { Favorite } from "@mui/icons-material";
import { HomePage } from "./pages/HomePage/HomePage";


const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/main',
    element: <MainPage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  },
  {
    path: '/favourite',
    element: <Favorite />
  },
  {
    path: '/home',
    element: <HomePage />
  }
])

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
          <RouterProvider router={routerConfig} />
      </Provider>
    </div>
  );
};

export default App;
