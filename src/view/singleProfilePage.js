export default function SingleProfilePage(user) {
  const container = document.createElement("section");
  container.className = "mx-auto";

  const backButton = document.createElement("a");
  backButton.className = "no-underline text-pink-800 text-bold";
  backButton.textContent = "Go Back";
  backButton.dataset.link = "data-link";

  const profileBox = document.createElement("article");
  profileBox.className = "flex flex-col items-center gap-2 text-center";

  const profileImg = document.createElement("img");
  profileImg.src = `https://images.pexels.com/photos/35873260/pexels-photo-35873260.jpeg`;
  profileImg.className = "w-32 h-32 rounded-xl object-cover";
  profileImg.alt = user?.name || "Profile image";

  const profileName = document.createElement("h1");
  profileName.className = "text-lg text-cyan-800";
  profileName.textContent = user.name;

  const profileEmail = document.createElement("p");
  profileEmail.className = "text-sm text-cyan-700";
  profileEmail.textContent = user.email;

  profileBox.append(profileImg, profileName, profileEmail);
  container.append(profileBox, backButton);

  return container;
}
