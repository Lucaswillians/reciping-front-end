import './App.css';
import { Login } from './components/login';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Login>
            <div>
              div apenas dizer que isso deve ser continuado com os componentes
            </div>
        </Login>
      </AuthProvider>
    </div>
    );
}

export default App;
