import React from 'react'
import './App.css';
import SearchBox from "./SearchBox/SearchBox";
import axios from "axios";
import SearchResponse from "./SearchResponse/SearchResponse";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: 'harry potter',
            currentSearch: '',
            searchResponse: null,
            searchError: null,
            loading: false
        }
    }

    //2 way binding on forms
    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({
            [inputName] : inputValue
        })
    }

    //handle submit button
    handleSubmit = (event) => {
        event.preventDefault();
        //axios search
        this.axiosRequest (this.state.bookSearch)
        let currentSearch = this.state.bookSearch
        this.setState({
            bookSearch: '',
            currentSearch,
            loading: true
        })
    }

    //axios http request
    axiosRequest = (searchTerm) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchTerm)
            .then(response => {
                let searchError = null
                if(!response.data.items){
                    searchError = this.state.currentSearch
                }
                this.setState({
                    searchResponse: response.data.items,
                    searchError,
                    loading: false
                })
            })
            .catch( error => {
                let searchError = this.state.currentSearch
                this.setState({
                    searchError,
                    loading: false
                })
                console.log(error)
            })
    }

    render(){
        return(
            <div className={"wrapper"}>
                <SearchBox
                    value={this.state.bookSearch}
                    onChange={this.handleChange}
                    onClick={this.handleSubmit}
                    currentSearch={this.state.currentSearch}
                />
                <SearchResponse
                    searchData={this.state.searchResponse}
                    searchError={this.state.searchError}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default App;
