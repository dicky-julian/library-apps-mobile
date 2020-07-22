const arrayFilter = (key, arr) => {
    let query = key.toLowerCase();
    return arr.filter(item => item.title.toLowerCase().indexOf(query) >= 0);
  }
  
  export {
      arrayFilter
  }