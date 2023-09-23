import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";
import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home.page";
import RegisterPage from "./pages/Register.page";
import SigninPage from "./pages/Signin.page";
import PrivateRoute from "./features/auth/components/PrivateRoute";
import { store } from "./store";
function App() {
  return(
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        
        <Route path="/" element={<PrivateRoute page={<HomePage/>}/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="*" element={<Navigate to= '/'/>}></Route>
    
      </Routes>
    </Router>
      </ThemeProvider>
  )
}

type CypressWindow = Window & typeof globalThis & { Cypress: any; store: any };

const thisWindow = window as CypressWindow;

if (thisWindow.Cypress) {
  console.log('CYPRESS WINDOW');

  thisWindow.store = store;
}

export default App;
