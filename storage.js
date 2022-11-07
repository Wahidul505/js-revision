const addToLocalStorage = () => {
    const keyField = document.getElementById('key-field');
    const valueField = document.getElementById('value-field');
    const key = keyField.value;
    const value = valueField.value;
    localStorage.setItem(key, value);
}