export type Product = {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
};

export const products: Product[] = [
  {
    entryId: 11,
    title: 'Title',
    photoUrl: 'Photo URL',
    notes: 'Notes',
  },
];
