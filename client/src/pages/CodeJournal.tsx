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
    <div
      className="container"
      style={{
        minHeight: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
      <h1
        style={{ color: 'black', marginLeft: '-450px', marginBottom: '10px' }}>
        New Entry
      </h1>

      <div
        className="full"
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '10px',
        }}>
        {items?.map((item) => (
          <div key={item.entryId}>
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
    <div
      style={{
        paddingBottom: '25px',
        paddingLeft: '25px',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
      <div
        className="image-catalog"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '25px',
          width: '100%',
        }}>
        <img
          src={photoUrl || 'placeholder-image-square.jpg'}
          alt={item.title}
          style={{ width: '400px', height: '400px', paddingTop: '20px' }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
          <p style={{ color: 'black', fontSize: '20px', marginBottom: '-2px' }}>
            {item.title}
          </p>

          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder=""
            style={{
              backgroundColor: 'white',
              border: '1px solid black',
              color: 'black',
              fontSize: '18px',
              marginTop: '10px',
              width: '100%',
            }}
          />

          <p
            style={{
              color: 'black',
              fontSize: '20px',
              marginTop: '50px',
              width: '300px',
              marginBottom: '-2px',
            }}>
            {item.photoUrl}
          </p>

          <input
            type="text"
            value={photoUrl}
            onChange={handlePhotoUrlChange}
            placeholder=" "
            style={{
              backgroundColor: 'white',
              border: '1px solid black',
              color: 'black',
              fontSize: '18px',
              marginTop: '10px',
              width: '100%',
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '-20px' }}>
        <p
          style={{
            color: 'black',
            fontSize: '20px',
            marginTop: '35px',
            width: '300px',
            marginBottom: '-1px',
          }}>
          {item.notes}
        </p>

        <input
          type="text"
          value={note}
          onChange={handleNoteChange}
          placeholder=""
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            color: 'black',
            paddingBottom: '100px',
            fontSize: '18px',
            marginTop: '10px',
            width: '100%',
          }}
        />
      </div>

      <button
        style={{
          backgroundColor: '#572C81ff',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
          marginRight: '650px',
        }}>
        Save
      </button>
    </div>
  );
}
