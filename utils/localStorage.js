export const getItem = (key) => {
  let value = null;
  try {
    const result = window.localStorage.getItem(key);
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }
  return value;
};

export const getStringItem = (key) => {
  return window.localStorage.getItem(key);
};

export const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

export const clearItems = () => {
  window.localStorage.clear();
};
