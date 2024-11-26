import { useEffect, useState } from 'react';
import { data, writeData } from '../lib/data';
import { Modal } from './Modal';
import { Link, useLocation } from 'react-router-dom';

export interface Entry {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

export function EditPage() {
  const location = useLocation();
  const entry = location.state.entry;

  const [photoURL, setPhotoURL] = useState('');
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPhotoURL(entry.photoUrl);
    setTitle(entry.title);
    setNotes(entry.notes);
  }, [entry]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSave = () => {
    const editedEntry: Entry = {
      entryId: entry.entryId,
      title,
      photoUrl: photoURL,
      notes,
    };

    const entryIndex = data.entries.findIndex(
      (e) => e.entryId === entry.entryId
    );

    if (entryIndex !== -1) {
      data.entries[entryIndex] = editedEntry;
      writeData();
    }

    setTitle('');
    setPhotoURL('');
    setNotes('');
  };

  function confirmDelete() {
    // Filters out the entries in data.entries
    data.entries = data.entries.filter(
      (e) => e.entryId !== data.editing?.entryId
    );
    writeData(); // Updates the data.entries to the delete one doesn't exists.
    closeModal();
    console.log('Delete confirmed', data.entries);
  }

  return (
    <main className="w-full p-5 px-72">
      <div className="text-2xl pb-5 font-semibold">
        <h2>Edit Entry</h2>
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
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <label htmlFor="photo-url">Photo URL</label>
          <input
            id="photo"
            type="url"
            name="photoUrl"
            className="border p-1"
            required
            value={photoURL}
            onChange={(e) => setPhotoURL(e.currentTarget.value)}
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
          onChange={(e) => setNotes(e.currentTarget.value)}></textarea>
      </div>

      <div className="w-full flex flex-row-reverse justify-between">
        <Link to="/entries">
          <button
            onClick={handleSave}
            className="bg-violet-500 px-5 py-1 rounded text-white">
            SAVE
          </button>
        </Link>
        {/* Delete Button Hidden until user clicks Pencil for edit. */}
        <button className="text-red-600 " onClick={openModal}>
          Delete Entry
        </button>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <p className="font-semibold">Are you sure you want to delete?</p>
          <div className="flex justify-between items-center p-5">
            <button
              className="items-center p-2 bg-gray-300 rounded"
              onClick={closeModal}>
              Cancel
            </button>
            <Link to="/">
              <button
                className="items-center text-white p-2 rounded bg-red-500"
                onClick={confirmDelete}>
                Delete
              </button>
            </Link>
          </div>
        </Modal>
      </div>
    </main>
  );
}
