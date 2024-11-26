import { useNavigate } from 'react-router-dom';
import { data } from '../lib/data';
import { useState } from 'react';
import { EditEntry } from './EditEntry';

export function Entries() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(data.entries);

  const handleNewEntry = () => {
    navigate('/');
  };


  return (
    <div className="w-full p-5 px-72">
      {/* Entry title and NEW Button */}
      <div className="pb-5 flex justify-between">
        <h1 className="text-2xl font-semibold">Entries</h1>
        <button
          onClick={handleNewEntry}
          className="bg-violet-500 px-5 py-1 rounded text-white">
          NEW
        </button>
      </div>

      {/* row - Entries Body */}
      <div className="w-full h-auto flex flex-wrap pb-3">
        {/* column -  Photo and Pencil */}
          {
            entries.map((entry) => (
              <div className='w-full flex pb-5'>
                {/* Image */}
                <div className="w-1/2">
                  <img
                    src={entry.photoUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="w-1/2 flex flex-col pl-5 pt-5 space-y-5">
                  <h2 className="text-3xl flex justify-between">
                    {entry.title}
                  <EditEntry entryId={entry.entryId} />
                  </h2>
                  <p className="text-base">{entry.notes}</p>
                </div>
              </ div>
            ))
          }
      </div>
    </div>
  );
}
