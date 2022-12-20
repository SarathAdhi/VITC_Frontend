export const staffUrlFormat = (salutation, name, id) => {
  const newSalutation = salutation?.replace(".", "").toLowerCase();
  const newName = name?.replaceAll(" ", "-").toLowerCase();

  return `${newSalutation}-${newName}-${id}`;
};

export const getIdFormat = (url) => {
  const _url = url?.split("-");

  return _url[_url.length - 1];
};
