import { useEffect, useState } from 'react';
import { Product } from '../lib/data';
import { readCode } from '../lib';
import './CodeJournal.css';

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
    <div className="new-entry column-full">
      <h1>New Entry</h1>

      <div className="container">
        {items?.map((item) => (
          <div className="item-container" key={item.entryId}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Product;
};

function ItemCard({ item }: CardProps) {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePhotoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoUrl(e.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="column-half">
          <img
            src={photoUrl || 'placeholder-image-square.jpg'}
            alt={item.title}
          />
        </div>

        <div className="column-one-fourth">
          <p>{item.title}</p>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder=""
          />

          <p>{item.photoUrl}</p>
          <input
            type="text"
            value={photoUrl}
            onChange={handlePhotoUrlChange}
            placeholder=" "
          />
        </div>
      </div>

      <div className="row">
        <div className="column-full">
          <p>{item.notes}</p>

          <input
            type="text"
            value={note}
            onChange={handleNoteChange}
            placeholder=""
          />
        </div>
      </div>

      <button>Save</button>
    </>
  );
}
