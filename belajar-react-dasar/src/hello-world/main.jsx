import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import Container from './Container';
import TodoList from '../todo/TodoList';
import Table from '../table/Table';
import AlertButton from '../button/AlertButton';
import OnSmash from '../button/OnSmash';
import Toolbar from '../button/Toolbar';
import SearchForm from '../form/SearchForm';
import SayHelloForm from '../form/SayHelloForm';
import Counter from '../form/Counter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="Hai" />
      <OnSmash onSmash={() => alert('clicked Me')} text="On Smash" />
      <Toolbar onClick={e => (e.stopPropagation(), alert('Hai'))} />
      <SearchForm />
      <SayHelloForm />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);
