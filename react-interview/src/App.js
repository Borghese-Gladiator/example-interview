import UserList from './components/UserList';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';

function App() {
  const isMobile = useMediaQuery(768);
  const isTablet = useMediaQuery(1024);

  return (
    <div className="App">
      <UserList />
      <h1>{isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}</h1>
    </div>
  );
}

export default App;
