import { renderToString } from 'react-dom/server';
import App from './App';

/** Used at build time to pre-render the hero into index.html. */
export function render() {
  return renderToString(<App />);
}
