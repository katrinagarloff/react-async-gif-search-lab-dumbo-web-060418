import React, { Component} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default class GifListContainer extends Component {
state = {gifs: []}

componentDidMount() {
  // fetch for data
  // set state
  this.makeFetch('hi')
}

render(){
  return (
    <div>
      <GifSearch submitHandler={this.submitHandler}/>
      <GifList gifs={this.state.gifs}/>
    </div>
  )
}

  submitHandler = (query) => {
    this.makeFetch(query)
  }

  makeFetch = (query) => {
    const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`

    fetch(giphyUrl)
      .then(resp => resp.json())
      .then(json => {
        const newAr = json.data.slice(0, 3)
        this.setState({gifs: newAr})
    })
  }
}
