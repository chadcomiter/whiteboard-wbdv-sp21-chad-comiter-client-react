import { BrowserRouter } from 'react-router-dom';
import CourseManager from './components/course-manager.js'
import Home from './components/home.js'
import questionReducer from './reducers/question-reducer.js';
import quizReducer from './reducers/quiz-reducer.js';
import moduleReducer from "./reducers/modules-reducer";
import lessonReducer from "./reducers/lesson-reducer";
import topicReducer from "./reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import widgetReducer from './reducers/widget-reducer';
import {Provider} from 'react-redux';

/*This needs to be at the top level of the app*/


function App() {
  const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer,
    questionReducer: questionReducer,
    quizReducer: quizReducer
  })
  
  // const store = createStore(moduleReducer)
  // const store = createStore(lessonReducer)
  const store = createStore(reducer)
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="container-fluid">
        <CourseManager/>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;