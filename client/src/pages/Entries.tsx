import { FaPencil } from 'react-icons/fa6';

export function Entries() {
  return (
    <div className="w-full p-5 px-72">
      {/* Entry title and NEW Button */}
      <div className="pb-5 flex justify-between">
        <h1 className="text-2xl font-semibold">Entry</h1>
        <button className="bg-violet-500 px-5 py-1 rounded text-white">NEW</button>
      </div>

      {/* row - Entries Body */}
      <div className="w-full h-auto flex flex-wrap pb-3">
        {/* column -  Photo and Pencil */}
        <div className="w-full flex pb-5">
          {/* column-half - Image */}
          <div className="w-1/2">
            <img
              src="/placeholder-image-square.jpg"
              alt="placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* column-half - details */}
          <div className="w-1/2 flex flex-col pl-5 pt-5 space-y-5">
            <h2 className="text-3xl flex justify-between">Placeholder<FaPencil className='cursor-pointer'/></h2>
            <p className="text-base">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}
