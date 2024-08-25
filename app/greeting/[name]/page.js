import React from 'react'

const page = ({params}) => {
  return (
    <div>Nice To Meet You, {params.name}</div>
  )
}

export default page