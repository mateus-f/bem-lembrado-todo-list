export const setObject = (name, obj) => {
  const stringObj = JSON.stringify(obj);

  localStorage.setItem(name, stringObj);
}

export const getObject = (name) => {
  const obj = JSON.parse(localStorage.getItem(name));

  return obj;
}