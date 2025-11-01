function cleanAndFormat() {
  let text = document.getElementById('input').value;
  let numbers = text.split(/\r?\n/)
    .map(n => n.replace(/\D/g, "")) // Remove non-digits
    .filter(n => n.length > 0);

  let formatted = numbers.map(n => {
    if (n.startsWith("254")) return n;
    if (n.startsWith("0")) return "254" + n.slice(1);
    if (n.startsWith("7")) return "254" + n;
    if (n.startsWith("4")) return "254" + n.slice(1);
    return "254" + n;
  });

  document.getElementById('result').innerText =
    "Total numbers: " + formatted.length + "\n\n" + formatted.join("\n");

  document.getElementById('input').value = "";
}

function copyAll() {
  let textBlock = document.getElementById('result').innerText;
  let extracted = textBlock.split("\n\n")[1];
  if (!extracted) {
    alert("No numbers to copy!");
    return;
  }
  navigator.clipboard.writeText(extracted).then(() => {
    alert("Copied successfully!");
  });
}

function clearAll() {
  document.getElementById('input').value = "";
  document.getElementById('result').innerText = "";
}
