import React, { Component } from 'react';
class APICaller extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        res: ''
      };
    }
  
    componentDidMount() {
        fetch("http://numbersapi.com/"+this.props.number+"/"+this.props.type+"?json")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                    this.setState({
                        isLoaded: true,
                        res: result
                    });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )
    }
  
    render() {
        console.log(this.state);
        const { error, isLoaded, res } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                res.text 
            );
      }
    }
  }

  export default APICaller;