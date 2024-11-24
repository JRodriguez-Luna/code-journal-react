import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Entries } from './pages/Entries';
import { NotFound } from './pages/NotFound';
import { CodeJournal } from './pages/CodeJournal';

export function App() {
  const handleSave = (entry: {
    title: string;
    photoURL: string;
    notes: string;
  }) => {
    console.log('Entry saved', entry);
  };

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="new-entry" element={<CodeJournal onSave={handleSave} />} />
        <Route path="entries" element={<Entries />} />
        <Route index element={<CodeJournal onSave={handleSave} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
