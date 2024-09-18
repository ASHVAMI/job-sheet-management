import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobSheetPage from './pages/JobSheetPage';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} exact />
      <Route path="/jobsheet/:id" component={JobSheetPage} />
    </Router>
  );
}

export default App;
