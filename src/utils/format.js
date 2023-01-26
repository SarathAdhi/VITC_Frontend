export const staffUrlFormat = (name, id) => {
  const newName = name?.replaceAll(" ", "-").toLowerCase();

  return `${newName}-${id}`;
};

export const getIdFormat = (url) => {
  const _url = url?.split("-");

  return _url[_url.length - 1];
};
