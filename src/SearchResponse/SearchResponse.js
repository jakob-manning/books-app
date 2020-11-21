import React from 'react'

class SearchResponse extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let responses = []

        if(this.props.loading){
            return (
                <div className="loader"></div>
            )
        }

        if(this.props.searchError){
            return(
                <div>
                    <h1>Search Response</h1>
                    <p>No books found for "{this.props.searchError}"</p>
                </div>
            )
        }

        if(this.props.searchData){
            this.props.searchData.map(data => {
                let imageURL = ''
                try {imageURL = data.volumeInfo.imageLinks.smallThumbnail}
                catch {imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/200px-No_image_available.svg.png'} //no image

                console.log(data)
                console.log(data.id)
                return(
                    responses.push(
                        <div key={data.id}>
                            <a href={data.volumeInfo.previewLink}> {data.volumeInfo.title} </a>
                            <p> {data.volumeInfo.description} </p>
                            <p> {data.volumeInfo.categories}</p>
                            <img src={imageURL}
                                 alt={'smallThumbnail'} />
                        </div>
                    )
                )
            })
        }

        return(
            <div>
                <h1>Search Response</h1>
                <div>{responses}</div>
            </div>
        )
    }
}

export default SearchResponse