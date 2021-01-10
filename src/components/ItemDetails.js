import React, { useState, useEffect } from 'react'

export default function ItemDetails(params) {
  console.log(params.match.params.id)

  useEffect(() => {
    fetchItem()
  }, [])

  const [item, setItem] = useState({
    images: {}
  })

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.com/v1/playlists/${params.match.params.id}`
    )
    const item = await data.json()
    console.log(item.data)
    // console.log(item.item)
    setItem(item.data)
  }

  return (
    <div>
      <h1>Hello Item Details</h1>
      <h1>{item.added}</h1>
      <img src={item.images.showcase} alt='item' />
      <h1>{item.description}</h1>
    </div>
  )
}
