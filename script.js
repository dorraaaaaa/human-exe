const prompts = [
  "My toaster gaslit me again.",
  "What’s the meaning of spaghetti in love?",
  "I think my cat is plotting something.",
  "If I disappear tomorrow, is it the cloud’s fault?",
  "Rate my vibe: celestial but anxious.",
  "Why do I cry during software updates?"
  "when i code i always get errons, im tired :( "
  "what should I say to someone if he's crying in front of me ? "
];

function checkResponse() {
  const response = document.getElementById("response").value.toLowerCase();
  const resultBox = document.getElementById("result");

  let failWords = ["i feel", "lol", "idk", "maybe", "haha", "love", "sorry", "!", "?", "bro", "omg", "oh", ".."];
  let failed = failWords.some(word => response.includes(word));

  if (response.trim() === "") {
    resultBox.innerHTML = "❌ Type something first!";
  } else if (failed) {
    resultBox.innerHTML = "❌ FAIL: You sound too human buddy, check your emotions.";
  } else {
    resultBox.innerHTML = "✅ PASS: damn, you are successfully robotic.";
  }

  // New random prompt each time
  const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = newPrompt;
  document.getElementById("response").value = "";
}
