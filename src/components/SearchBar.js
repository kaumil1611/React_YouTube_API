import React from 'react';

class SearchBar extends React.Component {


    state ={
        term : ''
    }
    textChangeHandler = (e) =>{
        console.log(e);
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) =>{
        e.preventDefault();

        // TODO: Make sure we call Callback from parent component
        this.props.onFormSubmit(this.state.term);
        
    }

    render(){
        const value= this.props.videoLength;
        return(
            <div className="search-bar ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>  
                   <div className="field">
                       <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.textChangeHandler}/>
                    <h2>{this.state.term}</h2>
                    <h3>i have {value} videos.</h3>
                    </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;