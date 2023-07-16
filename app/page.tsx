import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import HomePage from './pages'

export default function App() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-screen h-screen bg-gray-200">
        <HomePage />
      </div>
    </>
  )
}
