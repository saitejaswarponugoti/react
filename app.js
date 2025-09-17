// Create sibling elements (h1 and h2) inside a container div
const title = React.createElement('h1', { id: 'title' }, 'Hello World from React!');
const subtitle = React.createElement('h2', {}, "I'm a h2 tag");
const container = React.createElement('div', { id: 'container' }, [title, subtitle]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);