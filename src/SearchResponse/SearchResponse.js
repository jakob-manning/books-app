import React from 'react'

class SearchResponse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            expandedDivs: {}
        }
    }

    expandHandler = (id) => {
        let expandedDivs = {...this.state.expandedDivs}
        expandedDivs[id] = true
        this.setState({
            expandedDivs
        })
    }

    render() {
        let responses = []

        if(this.props.loading){
            return (
                <div className={"padding-L"}>
                    <div className="loader center"> </div>
                </div>
            )
        }

        if(this.props.searchError){
            return(
                <div className={"center gray"}>
                    <h3>Search Error</h3>
                    <p className={"subTitle"}>No books found for "{this.props.searchError}"</p>
                </div>
            )
        }

        if(this.props.searchData){
            this.props.searchData.map(data => {
                let imageURL = ''
                try {imageURL = data.volumeInfo.imageLinks.smallThumbnail}
                catch {imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/200px-No_image_available.svg.png'} //no image

                let description = ''
                if(this.state.expandedDivs[data.id]){
                    description = <p onClick={this.expandHandler.bind(this,data.id)}> {data.volumeInfo.description}</p>
                }
                else{
                    try{description =
                        <p onClick={this.expandHandler.bind(this,data.id)}>
                            {data.volumeInfo.description.split(' ').slice(0, 20).join(' ')}
                            <a className={"more"}> ... (more)</a>
                        </p>}
                    catch{ }
                }


                console.log(data)
                console.log(data.id)
                // TODO add a 'read more button' to expand the description text.
                return(
                    responses.push(
                        <div className={"mtop padding-left"} key={data.id}>
                            <a href={data.volumeInfo.previewLink}>
                                <img className={"center"} src={imageURL} alt={'smallThumbnail'} />
                                <br />
                                <h3 className={"center"}>{data.volumeInfo.title}</h3>
                            </a>
                            <p className={"subTitle"}> {data.volumeInfo.categories}</p>
                            {description}
                        </div>
                    )
                )
            })
        }

        return(
            <div>
                <div>{responses}</div>
            </div>
        )
    }
}

export default SearchResponse