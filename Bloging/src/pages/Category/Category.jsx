import React from 'react'

import Blog from '../Blog/Blog'

const CatgoryPage = ({category}) => {

  return (
    <div><Blog category={category}/></div>
  )
}

export default CatgoryPage