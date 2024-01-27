import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col px-24 pt-6 bg-black">
        
        {/* Navbar */}
        <div className="w-full items-center justify-between font-mono lg:flex h-10">
          <div className="flex flex-row h-screen items-center">
            <h1 className="text-2xl font-black ms-4 me-4">Opayque!</h1>
            <h1 className="ms-4 me-4 text-3xl font-extralight">|</h1>
            <button className="btn p-2 rounded me-4 font-bold  hover:underline">Create</button>
            <button className="btn p-2 rounded me-4 font-bold  hover:underline">Explore</button>
            
          </div>
          <input className="shadow appearance-none border rounded w-2/6 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold" id="username" type="text" placeholder="Search..."></input>
          <div>
            <button className="btn bg-red-700 p-2 rounded me-4 font-bold">Connect Wallet</button>
          </div>
        </div>

        {/* Main */}
        <div className="h-96 mt-4 grid grid-cols-4 gap-4">
          
          <div className="rounded shadow-lg bg-white flex flex-col justify-center items-center m-4">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>
          
        </div>

        {/* Main 2 */}
        <div className="h-96 grid grid-cols-4 gap-4">
          
          <div className="rounded shadow-lg bg-white flex flex-col justify-center items-center m-4">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-center items-center">
          </div>
          
        </div>

        {/* Footer */}
        <div className="w-full items-center justify-between font-mono lg:flex h-10">
          <div className="flex flex-row h-screen items-center">
          </div>
          <div>
            <h1 className="text-sm font-black ms-4 me-4">Built by Raheem.</h1>
          </div>
        </div>
      </div>
  );
}
