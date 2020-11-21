import React from 'react'

class SearchBox extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            marginTop: "50%"
        }
        if(this.props.currentSearch){
            style = {
                marginTop: 0
            }
        }

        return(
         <div style={style} className={"mbottom search"}>
             <form className={"center"}>
                 <h1>Book Search</h1>
                 <input className={"inputField"} name={'bookSearch'}
                        type={'text'}
                        placeholder={'what do you want to read?'}
                        value={this.props.value}
                        onChange={this.props.onChange}
                 />
                 <input className={"submitButton"} type={'submit'} value={'search'} onClick={this.props.onClick}/>
             </form>
         </div>
        )
    }
}

export default SearchBox