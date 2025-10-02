const POSTS = [
  {
    title: "はじめての投稿",
    url: "posts/2025-09-26-first-post.html",
    date: "2025-09-26",
    summary: "ブログをゼロからコードで作った最初の記事です。"
  }
];

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const listEl = document.getElementById('postList');
if (listEl) {
  POSTS.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `<h2><a href="${post.url}">${post.title}</a></h2>
      <p>${post.summary}</p>`;
    listEl.appendChild(card);
  });
}
