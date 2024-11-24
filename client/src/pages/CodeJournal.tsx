import { useEffect, useState } from 'react';
import { Product } from '../lib/data';
import { readCode } from '../lib';

export function CodeJournal() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCode();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <main className="w-full p-5 px-72">
      <div className="text-2xl pb-5 font-semibold">
        <h2>New Entry</h2>
      </div>

      {/* Body Main */}
      {/* row */}
      <div className="w-full h-auto flex flex-wrap pb-3">
        {/* column - Image Display*/}
        <div className="w-1/2">
          <img
            src="/placeholder-image-square.jpg"
            alt="placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* column - Title & Photo Input Section */}
        <div className="w-1/2 flex flex-col pl-5 pt-5 space-y-5">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="border p-1"
            required
          />
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo-url"
            type="url"
            name="photoUrl"
            className="border p-1"
            required
          />
        </div>
      </div>

      {/* column - Notes Section */}
      <div className="w-full">
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          className="w-full h-24 p-1 border"
          required></textarea>
      </div>

      <div className="w-full flex flex-row-reverse justify-between">
        <button className="bg-violet-500 px-5 py-1 rounded text-white">
          SAVE
        </button>
        {/* Delete Button Hidden until user clicks Pencil for edit. */}
        <button className="text-red-600 hidden">Delete Entry</button>
      </div>
    </main>
  );
}
