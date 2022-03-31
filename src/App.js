await import("./node_modules/react/umd/react.development.js");
await import("./node_modules/react-dom/umd/react-dom.development.js");
import BotunSaStanjem from "./Botun.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BotunSaStanjem />
        <BotunSaStanjem />
        <BotunSaStanjem />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
