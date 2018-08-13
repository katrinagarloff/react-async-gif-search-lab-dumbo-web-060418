import React from 'react'

function GifList(props) {
  var gifs = props.gifs.map(gif => {
    return(
      <li key={gif.id}><img alt={gif.slug} src={gif.images.fixed_height.url}/></li>
    )
  })
  return (
    <div>
      <ul>
      {gifs}
      </ul>
    </div>
  )
}
export default GifList
