
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = `${item.name} (${item.category})`;
    listElement.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
