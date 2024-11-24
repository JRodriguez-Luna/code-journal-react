import { useEffect, useState, useRef } from 'react';

type Entry = {
  onSave: (entry: { title: string; photoURL: string; notes: string }) => void;
};

export function CodeJournal({ onSave }: Entry) {
  const [photoURL, setPhotoURL] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  const handleSave = () => {
    onSave({ title, photoURL, notes });
    setTitle('');
    setPhotoURL('');
    setNotes('');
  };

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = photoURL;
    }
  }, [photoURL, imgRef.current]);

  return (
    <main className="w-full p-5 px-72">
      <div className="text-2xl pb-5 font-semibold">
        <h2>New Entry</h2>
      </div>

      {/* Body Main */}
      {/* row */}
      <div className="w-full h-auto flex flex-wrap pb-3">
        {/* column - Image Display */}
        <div className="w-1/2">
          <img
            src={photoURL || '/placeholder-image-square.jpg'}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo"
            type="url"
            name="photoUrl"
            className="border p-1"
            required
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
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
          required
          value={notes}
          onChange={(e) => setNotes(e.target.value)}></textarea>
      </div>

      <div
        className="w-full flex flex-row-reverse justify-between"
        onClick={handleSave}>
        <button className="bg-violet-500 px-5 py-1 rounded text-white">
          SAVE
        </button>
        {/* Delete Button Hidden until user clicks Pencil for edit. */}
        <button className="text-red-600 hidden">Delete Entry</button>
      </div>
    </main>
  );
}
