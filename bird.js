const list = document.querySelector("#bird-list");
const items = Array.from(list.children);

for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [items[i], items[j]] = [items[j], items[i]];
}

items.forEach(item => list.appendChild(item));

const birds = document.querySelectorAll("#bird-list li");

birds.forEach(bird => {
    const text = bird.textContent;
    bird.innerHTML = text.match(/.{1,3}/g).join("<br>");
});


