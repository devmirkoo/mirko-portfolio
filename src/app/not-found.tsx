import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto flex-auto w-full max-w-2xl px-4 mt-20">
      <h2 className='text-3xl font-bold'>Not Found 🙈</h2>
      <p className='text-gray-500 text-wrap'>Whoa! I think you got lost! Don&apos;t worry, even the best can get lost sometimes.</p>
      <Link href="/" className=' font-semibold text-blue-500  hover:text-blue-300 transition-colors duration-300'>Return Home</Link>
    </div>
  )
}
