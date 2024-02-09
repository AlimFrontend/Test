const App = (textS, classS) => {
  let [text, setText] = React.useState(textS.text);
  let [classes, setClasses] = React.useState(classS.classes);
  const change = () => {
    setText(`no ${Math.random()}`);
    setClasses(`gb`);
  };

  return (
    <div className="app">
      <button className={classes} onClick={change}>
        {text}
      </button>
    </div>
  );
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App text="Click me, kk?" classes="app" />);

/*

*/
