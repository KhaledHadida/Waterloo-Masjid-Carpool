import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from './common/header'
import Footer from './common/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <br></br>
      <main>
        <div class="bg-gray-300">
          <h1 class="text-2xl p-3">Title</h1>
          <p class="p-3">Small description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consequat.</p>
          <Link href="#" class="p-3">About</Link>
        </div>
        <br></br>
        <div class="flex justify-center items-center">
          <div class="flex items-center justify-center p-4 bg-gray-300 w-2/3">
            <img src="https://unsplash.it/g/600/400" class="rounded-full w-40 h-40" />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div class="flex items-center justify-center bg-gray-300 w-2/3">
            <div class="w-1/2 text-center">
              <p>Brief description about the functionality Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
