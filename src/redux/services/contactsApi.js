const BASE_URl = 'https://6443c55e466f7c2b4b59fd2b.mockapi.io';
export const getContacts = async () => {
  const data = await fetch(`${BASE_URl}/contacts`);
  return await data.json();
};

export const createContact = async data => {
  const res = await fetch(`${BASE_URl}/contacts`, {
    body: JSON.stringify(data),
  });
  return await res.json();
};
export const deleteContact = async id => {
  const res = await fetch(`${BASE_URl}/contacts/${id}`);
  return await res.json();
};
