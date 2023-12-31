function debounce(callback, wait) {
    let timeout;
  
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(context, args), wait);
    };
  }
  
  export default debounce;
  