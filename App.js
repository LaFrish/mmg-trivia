import React from 'react';
let Mixin = InnerComponent => class extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this)
    this.state = {val: 0}
    }
  update(){
    this.setState({val: this.state.val +1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return<InnerComponent
    update={this.update}
    {...this.state}
    {...this.props} />
  }
  componentDidMount(){
    console.log('mounted')
  }
}

const Button = (props) => <button
                            onClick={props.update}>
                            <Like/> {props.txt} - {props.val}
                          </button>

const Like =() => <span className="fa fa-thumbs-o-up"></span>

let ButtonMixed = Mixin(Button)

class App extends React.Component {
  render(){
    return (

      <div>
        <h1>Office Olympics Trivia-palooza! </h1>
        <ButtonMixed txt="Office Olympics" />
      </div>
    );
  }
}

export default App
