import { PureComponent } from "react";
import {ListItem} from "./components/list";
import { generateStr } from "./helpers";
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
    }
  }

  componentDidMount() {
    this.timer = setInterval(
        () => this.setState(prevState => {
          const wordList = [...prevState.wordList]
          wordList.push(generateStr())
          return { wordList }
        }),
        3000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    const { wordList } = this.state
    return (
        <div className="App">
          {wordList
              .filter((item) => !item.split('').includes(0))
              .map((item, index) => <ListItem item={item} key={`${item}${index}`}/>)
          }
        </div>
    );
  }
}

export default App;
