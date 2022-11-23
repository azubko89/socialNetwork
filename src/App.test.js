import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJsApp from "./App";

test('renders without crashing', () => {
  const div = document.createElement ('div');
  ReactDOM.render(< SamuraiJsApp />, div) ;
  ReactDOM.unmountComponentAtNode (div) ;
});
