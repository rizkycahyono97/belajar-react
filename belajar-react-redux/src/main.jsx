import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './CounterSlice.js';
import Counter from './Counter.jsx';
import { todoListSlice } from './todoListSlice.js';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import UpdateTodo from './UpdateTodo.jsx';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoListSlice.reducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={'/todolist'} element={<TodoList />} />
          <Route path={'/todolist/add'} element={<AddTodo />} />
          <Route path={'/todolist/:id/edit'} element={<UpdateTodo />} />
          <Route path={'/'} element={<App />} />
          <Route
            path={'/counter'}
            element={
              <>
                <Counter />
                <Counter />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
