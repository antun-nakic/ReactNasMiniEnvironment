await import("./node_modules/react/umd/react.development.js");

export default class BotunSaStanjem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
        <div>
          <h1>Sklopka podignuta</h1>
          <button onClick={() => this.setState({ liked: false })}>
            Spusti sklopku
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Sklopka spuštena</h1>
          <button onClick={() => this.setState({ liked: true })}>
            Podigni sklopku
          </button>
        </div>
      );
    }
  }
}
