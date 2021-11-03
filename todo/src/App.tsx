import './App.css';
import Todos from './components/todo';
import TodoList from './components/todolist';
import { Provider } from 'react-redux';
import store from './components/store';



const App = () => {
  return (
    <>
      <Provider store={store}>

        {/* <Todos /> */}
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
