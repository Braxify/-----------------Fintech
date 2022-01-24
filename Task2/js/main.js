function inputHandler(evt) {
  const input = evt.target;
  const value = +input.value;

  if (isNaN(value)) {
    input.value = "";
    return;
  }

  const pos = input.selectionStart;
  input.value = value.toFixed(2);

  input.selectionStart = pos;
  input.selectionEnd = pos;
}
