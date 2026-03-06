export default function ProfilePage(users = []) {
  const container = document.createElement("section");
  container.className = "mx-auto";

  const backButton = document.createElement("a");
  backButton.className = "no-underline text-pink-800 font-bold cursor-pointer";
  backButton.textContent = "Go Back";
  backButton.dataset.link = "/";

  const profileGrid = document.createElement("div");
  profileGrid.className =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4";
  users.forEach((user) => {
    const profileContainer = document.createElement("article");
    profileContainer.className =
      "flex flex-col justify-center rounded-lg shadow p-4 bg-white";
    profileContainer.dataset.link = `/profilePage/${user.id}`;

    const profileImage = document.createElement("img");
    profileImage.src = `https://images.pexels.com/photos/35873260/pexels-photo-35873260.jpeg`;
    profileImage.alt = user.name;
    profileImage.className =
      "w-50 h-50 rounded-lg border-0 mx-auto object-cover mb-3";

    const profileHeadLine = document.createElement("h1");
    profileHeadLine.textContent = user.name;
    profileHeadLine.className = "text-lg text-cyan-700";

    const profileText = document.createElement("p");
    profileText.className = "text-sm text-cyan-600";
    profileText.textContent = user.email;

    profileContainer.append(profileImage, profileHeadLine, profileText);
    profileGrid.append(profileContainer);
    container.append(backButton, profileGrid);
  });

  return container;
}
