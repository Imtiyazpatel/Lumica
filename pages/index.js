import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Head>
        <title>Lumica – Your World. Your Flow.</title>
      </Head>
      <h1 className="text-5xl font-bold mb-4">Welcome to Lumica 🌍</h1>
      <p className="text-xl">A new generation of social experience. Fully AI-powered.</p>
      <div className="mt-8 space-x-4">
        <a href="/leaderboard" className="bg-white text-black px-4 py-2 rounded-lg shadow">Leaderboard</a>
        <a href="/invite" className="bg-white text-black px-4 py-2 rounded-lg shadow">Invite</a>
        <a href="/profile" className="bg-white text-black px-4 py-2 rounded-lg shadow">Profile</a>
      </div>
    </div>
  )
}
