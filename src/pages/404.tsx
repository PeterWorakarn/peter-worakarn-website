import type { NextPage } from 'next'

const NotFound: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-4xl sm:text-6xl tracking-wider leading-tight sm:leading-none my-5 text-white font-sans_english">
        <span className="font-light text-9xl">404</span> <br /> Page <i className="not-italic custom_underline">Not Found</i>
      </h1>
    </div>
  )
}

export default NotFound;
