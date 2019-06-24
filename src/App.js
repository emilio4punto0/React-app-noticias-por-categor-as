import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList'
import Form from './components/Form';

 class App extends Component {

  state = {
    news: []
  }

 componentDidMount() {
    this.readNews();
  }
  readNews = async (category = 'general')=>{
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=fdebf3d8f2db4f92bc70f9cc9cd0bca2`;

    const res = await fetch(url);
    const news = await res.json();

    this.setState({
      news: news.articles
    })
  }

  render() {
    return (
      
      <Fragment>
        <Header
        title='Noticias React Api'/>
        <div className="container white news-container">
          <Form
          readNews={this.readNews}/>
          <NewsList
          news={this.state.news}/>
        </div>
        
      </Fragment>
    )
  }
}


export default App;
