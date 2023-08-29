import { List } from './List';
import { Button } from './Button';

import './App.css';

export const App = () => (
  <>
    <header>
      <h1>Pokemon app</h1>
      <Button>Click me</Button>
    </header>
    <main>
      <List />
    </main>
  </>
);
