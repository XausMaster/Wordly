'use client'
import { useEffect, useState } from "react"

export default function HomePage() {
  const users_url: string = 'http://127.0.0.1:5000/users'
  const [users, setUsers] = useState('')

  useEffect(() => {
    console.log("Fetching data...");
    const fetchData = async () => {
      try {
        const response = await fetch(users_url)
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json()
        console.log(data)
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <main className="p-5">
        <form action="" method="post">
          <input type="text" placeholder="Word" />
          <input type="text" placeholder="Difficult" />
          <input type="text" placeholder="Letter Count" />
          <input type="submit" value="Send" />
        </form>
      </main>

      <footer></footer>
    </>
  )
}
