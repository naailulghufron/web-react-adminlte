import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v1/playlists')
    const items = await data.json()
    console.log(items.data)
    // console.log(items.items)
    setItems(items.data)
  }

  return (
    <div>
      <h1>All shop items</h1>
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.gameType}</li>
        ))}
      </ul> */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subname</th>
            <th>gameType</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </td>
              <td>
                {item.subName}
              </td>
              <td>
                {item.gameType}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
