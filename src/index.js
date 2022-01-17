import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class CloudForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text_to_generate: null,
      receivedMessage: "Loading"
    };
    this.mainInput = {};
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  handleSubmit = async (event) => {

    this.mainInput.value = "Loading...";
    event.preventDefault();

    const response = await fetch('https://api.aicloud.sbercloud.ru/public/v1/public_inference/gpt3/predict', {
        headers:{
          'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        method: 'POST',
        body: JSON.stringify({text: this.state.text_to_generate}),
    }).catch(error => {
        this.mainInput.value = "К сожалению, не удалось обработать ваш запрос. У нас технические проблемы. Приносим свои извинения. Попробуйте позже.";
    });

    if (response){
        const data = response.json();
        this.setState({receivedMessage: data.predictions});
        const finaloutput = this.state.text_to_generate + "\nRuGPT3: " + this.state.receivedMessage;
        this.mainInput.value = finaloutput;
      } else {
          this.mainInput.value = "К сожалению, не удалось обработать ваш запрос. У нас технические проблемы. Приносим свои извинения. Попробуйте позже.";
      };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="demoform" class="w-100 justify-content-center">
        <div>
          <p class="text-center"><b>Введите текст:</b></p>
        </div>
        <div class="row">
          <textarea 
            ref={(ref) => this.mainInput= ref}
            value={this.state.value}
            name="text_to_generate" 
            onChange={this.handleChange} 
            rows="15"
            class="textareacls"
            >
            </textarea>
        </div>

        <div class="row">
          <input type="submit" value="Дополнить" class="btn btn-success" />
        </div>  
      </form>
    );
  }

}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = "На словах ты Лев Толстой, а на деле ";
  }

render() {
  return (
    <div className="App">
      <header className="App-header">

        <CloudForm />

      </header>
    </div>
  );
}
}

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);