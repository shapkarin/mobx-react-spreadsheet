const times = n => f => {
  if (n > 0) {
    f();
    times(n - 1)(f);
  }
};

export default times;
