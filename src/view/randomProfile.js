export default function randomProfile(user) {
  const container = document.createElement("section");
  container.className = "mx-auto flex flex-col items-center gap-4 text-center";

  const backButton = document.createElement("a");
  backButton.className = "no-underline text-cyan-800 font-bold cursor-pointer";
  backButton.textContent = "Go back";
  backButton.dataset.link = "/";

  const profileHeadLine = document.createElement("h1");
  profileHeadLine.className = "text-xl font-bold text-pink-700";
  profileHeadLine.textContent = "Random Profile";

  const profileBox = document.createElement("article");
  profileBox.className = "flex flex-col items-center gap-2 text-center";

  const profileImage = document.createElement("img");
  profileImage.src = `https://images.pexels.com/photos/35873260/pexels-photo-35873260.jpeg`;
  profileImage.className = "w-56 h-56 rounded-xl object-cover";
  profileImage.alt = user?.name || "profile image";

  const profileName = document.createElement("h2");
  profileName.className = "text-xl text-pink-900 text-bold";
  profileName.textContent = user.name;

  const profileEmail = document.createElement("p");
  profileEmail.className = "text-md text-pink-400";
  profileEmail.textContent = user.email;

  profileBox.append(profileImage, profileName, profileEmail);
  container.append(profileHeadLine, backButton, profileBox);

  return container;
}
