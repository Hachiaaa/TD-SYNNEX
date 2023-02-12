const debounce = (func: Function, delay: number) => {
  let timer: any = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => func(), delay);
  };
};

export default debounce;
