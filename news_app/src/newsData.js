import React from 'react'
import axios from 'axios';

class News extends React.Component {
    state = {
        data: ''
    }

    componentDidMount(){
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-09&sortBy=publishedAt&apiKey=d6549ca171de44f198e24186841c8dd3')
        .then((responce) => {
            // console.log(responce.data)
            this.setState({
                data: responce.data.articles
            })
        }).catch((error) => {
            console.error(error)
        })
    }
    render() {
        console.log(this.state.data);
        
        return (
            <div>
            {
                this.state.data ? this.state.data.map((news, index) => (
                    <div key={index} className="card mb-3" style={{width: '100%'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={news.urlToImage} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                 <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p>{news.description}</p>
                                    <a href={news.url}>{news.source.name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null
            }
            </div>
        )
    }
}

export default News