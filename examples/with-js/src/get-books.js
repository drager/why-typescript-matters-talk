const books = [
  { id: 1, name: "The Old Man and the Sea", ownerUserId: 1 },
  { id: 2, name: "Jane Eyre", ownerUserId: 1 },
];

export const getBooksByUser = ({ user }) =>
  books.filter((book) => book.ownerUserId === user.id);
