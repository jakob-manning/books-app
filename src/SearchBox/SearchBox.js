import React from 'react'

class SearchBox extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
         <div>
             <form>
                 <input name={'bookSearch'}
                        type={'text'}
                        placeholder={'what do you want to read?'}
                        value={this.props.value}
                        onChange={this.props.onChange}
                 />
                 <input type={'submit'} value={'search'} onClick={this.props.onClick}/>
             </form>
         </div>
        )
    }
}

export default SearchBox