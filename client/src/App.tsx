import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Entries } from './pages/Entries';
import { NotFound } from './pages/NotFound';
import { CodeJournal } from './pages/CodeJournal';
import { EditPage } from './pages/EditPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<CodeJournal />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/edit" element={<EditPage/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
