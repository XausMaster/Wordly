'use client'
import { useEffect, useState } from "react"

export default function HomePage() {
  const users_url: string = 'http://127.0.0.1:5000/users'
  const [users, setUsers] = useState('')

  const [word, setWord] = useState('')
  const [difficult, setDifficult] = useState('')
  const [lcount, setLcount] = useState('')

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const word_obj = { word, difficult, letter_count: parseInt(lcount) };
  
    fetch('http://127.0.0.1:5000/addWord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(word_obj)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add word');
        }
        console.log('I sent a new word');
        // You can add any further logic or state updates here if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., display an error message to the user
      });
  };
  

  return (
    <>
      <main className="p-5">
        <form onSubmit={handleSubmit} method="post">
          <input onChange={(e) => {setWord(e.target.value)}} type="text" name="word" placeholder="Word" />
          <input onChange={(e) => {setDifficult(e.target.value)}} type="text" name="difficult" placeholder="Difficult" />
          <input onChange={(e) => {setLcount(e.target.value)}} type="text" name="letter_count" placeholder="Letter Count" />
          <input type="submit" value="Send" />
        </form>
      </main>

      <footer></footer>
    </>
  )
}
