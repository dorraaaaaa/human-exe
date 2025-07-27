const prompts = [
  "My toaster gaslit me again.",
  "What’s the meaning of spaghetti in love?",
  "I think my cat is plotting something.",
  "If I disappear tomorrow, is it the cloud’s fault?",
  "Rate my vibe: celestial but anxious.",
  "Why do I cry during software updates?"
];

function checkResponse() {
  const response = document.getElementById("response").value.toLowerCase();
  const resultBox = document.getElementById("result");

  let failWords = ["i feel", "lol", "idk", "maybe", "haha", "love", "sorry", "!", "?", "bro", "omg"];
  let failed = failWords.some(word => response.includes(word));

  if (response.trim() === "") {
    resultBox.innerHTML = "❌ Type something first!";
  } else if (failed) {
    resultBox.innerHTML = "❌ FAIL: You sound too human.";
  } else {
    resultBox.innerHTML = "✅ PASS: You are successfully robotic.";
  }

  // New random prompt each time
  const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = newPrompt;
  document.getElementById("response").value = "";
}
