export enum STORAGE_KEYS  {
    USER_DATA = 'USER_DATA',
    LAST_ONLINE = 'LAST_ONLINE',
}

export const getStorageItem = (key: STORAGE_KEYS) => {
    const item = localStorage.getItem(key);

if(item) {
    try {
        return JSON.parse(item)
    } catch(e) {
        console.error('Parsing error for ${key}');
    }
  }
  return null;    

};

export const setStorageitem = (key: STORAGE_KEYS, value: unknown) => {
try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
} catch(e)   {
    console.error('Error while setting value for key ${key}', e);
 } 
};

export const clearStorageItem = (key: STORAGE_KEYS) => {
    localStorage.removeItem(key);
  };