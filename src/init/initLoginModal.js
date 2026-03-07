export default function initLoginModal() {
  const modalContainer = document.createElement("div");
  modalContainer.id = "login-data";
  modalContainer.classList.add(
    "fixed",
    "inset-0",
    "flex",
    "items-center",
    "justify-center",
    "bg-gray-900",
    "bg-opacity-50",
  );

  const modalContent = document.createElement("div");
  modalContent.classList.add(
    "relative",
    "bg-white",
    "p-6",
    "rounded-lg",
    "shadow-lg",
    "w-96",
  );

  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.classList.add(
    "absolute",
    "top-2",
    "right-4",
    "text-gray-800",
    "hover:text-red-700",
    "cursor-pointer",
    "text-lg",
    "font-bold",
  );
  closeButton.addEventListener("click", () => {
    closeModal("login-data");
  });

  const form = document.createElement("form");
  form.innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <div class="space-y-4">
      <div>
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" name="username" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
      </div>
      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal("login-data");
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hidden");
  }
}
