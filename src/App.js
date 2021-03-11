import { BrowserRouter } from 'react-router-dom';
import CourseManager from './components/course-manager.js'
import Home from './components/home.js'

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid">
      <CourseManager/>
    </div>
    </BrowserRouter>
  );
}

export default App;
