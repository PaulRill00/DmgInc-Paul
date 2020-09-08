import React, { Component } from 'react';

class NumberForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            res: '',
            type: 'trivia',
            number: 0,
            text: 'Loading...'
        };

        this.paragraph = {text: 'Loading...', number: 0};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {

    }
  
    handleSubmit(event) {
        const target = event.target;
        const name = target.name;

        this.setState({[name]: target.value}, () => {
            this.componentDidMount()
        });

        event.preventDefault();
    }

    componentDidMount() {
        const number = (this.state.number === undefined || this.state.number === '') ? 0 : this.state.number;
        const type = (this.state.type === undefined || this.state.type === '') ? 'trivia' : this.state.type;

        fetch("http://numbersapi.com/"+number+"/"+type+"?json")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    res: result
                });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
            });
        })
    }
  
    render() {
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const res = this.state.res;        

        if (error) {
            this.paragraph.text = error.message;
        } else if (!isLoaded) {
            this.paragraph.text = 'Loading...';
        } else {
            this.paragraph = res;
        }

        const text = this.paragraph.text.replace(this.paragraph.number, '<span>'+this.paragraph.number+'</span>')
        
        return (
            <div className="trivia">
            <section>
                <form onSubmit={this.handleSubmit}>
                    <h3>Type of triva</h3>
                    <select name="type" value={this.state.type} onChange={this.handleSubmit}>
                        <option value="trivia">Trivia</option>
                        <option value="math">Math</option>
                        <option value="date">Date</option>
                        <option value="year">Year</option>
                    </select>

                    <h3>Type a number</h3>
                    <input name="number" defaultValue="0" type="number" value={this.state.number} onChange={this.handleSubmit} />
                </form>
            </section>
            <section>
                <p dangerouslySetInnerHTML={{__html: text}}></p>
            </section>
            </div>
        );
    }
}



export default NumberForm;