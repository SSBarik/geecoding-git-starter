// js/script.js

async function loadProfileCards() {
  const owner = "ssbarik"; // ← replace me
  const repo = "geecoding-git-starter";
  const branch = "main";
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/students?ref=${branch}`;
  const container = document.getElementById("profiles");

  try {
    const listRes = await fetch(apiUrl);
    if (!listRes.ok) throw new Error("Could not fetch student list");
    const files = await listRes.json();

    for (const file of files) {
      if (!file.name.endsWith(".html")) continue;

      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/students/${file.name}`;
      const fileRes = await fetch(rawUrl);
      if (!fileRes.ok) throw new Error(`Could not fetch ${file.name}`);

      const html = await fileRes.text();
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      container.appendChild(wrapper);
    }
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Unable to load profiles automatically.</p>";
  }
}

window.addEventListener("DOMContentLoaded", loadProfileCards);
