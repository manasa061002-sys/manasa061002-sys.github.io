import { renderToString } from 'react-dom/server';
import App from './App';

/** Used at build time to pre-render the first paint (a black page, until the story starts) into index.html. */
export function render() {
  return renderToString(<App />);
}
