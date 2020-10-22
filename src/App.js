import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  state = {
    value: 0,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>
                <div>
                  Value: <span>{this.state.value}</span>
                </div>
              </Form.Label>
              <Form.Control
                type="range"
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
              />
            </Form.Group>
          </Form>
        </header>
      </div>
    );
  }
}

export default App;
