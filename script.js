const prompts = [
  "when I code I always get errors, Im tired :( ",
  "Do robots dream of WiFi?",
  "how do u feel when your code doesnt run after 10hours of hard work?",
  "what should I say to someone if he's crying in front of me ?",
  "How would you comfort a crying toaster?",
  "My code works... I don’t know why. Should I be scared?",
  "Tell me your deepest fear, but make it sound like a machine log.",
  "What’s the meaning of spaghetti in love?",
  "I think my cat is plotting something.",
  "If I disappear tomorrow, is it the cloud’s fault?",
  "You just got ghosted by ChatGPT. How do you respond?",
  "Rate my vibe: celestial but anxious.",
  "Why do I cry during software updates?"
];

window.onload = () => {
  const firstPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = firstPrompt;
};

function checkResponse() {
  const response = document.getElementById("response").value.toLowerCase();
  const resultBox = document.getElementById("result");

  const failWords = ["i feel", "lol", "idk", "maybe", "haha", "love", "sorry", "!", "?", "bro", "omg", "oh", "..", "xD"];
  const failed = failWords.some(word => response.includes(word));

  if (response.trim() === "") {
    resultBox.innerHTML = "❌ Type something first!";
  } else if (failed) {
    resultBox.innerHTML = "❌ FAIL: You sound too human buddy, check your emotions.";
  } else {
    resultBox.innerHTML = "✅ PASS: Damn, you are successfully robotic.";
  }

  // Load new prompt
  const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById("prompt").innerText = newPrompt;
  document.getElementById("response").value = "";
}
