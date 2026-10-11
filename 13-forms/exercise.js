
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.textContent = "";

  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(heading, priceTag);
    list.append(card);
  }
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const errorLine = document.querySelector("#error");
  const products = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();
    const priceInput = document.querySelector("#price");

    if (!name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    if (
      !priceInput.value.trim() ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    errorLine.textContent = "";
    products.push({ name, price });
    renderList(products);
    clearForm();
  });
}
