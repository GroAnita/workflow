import initLoginModal from "../init/initLoginModal.js";

export default function Home() {
  const container = document.createElement("div");
  const headLine = document.createElement("h1");
  headLine.textContent = "Home";
  headLine.classList.add("text-3xl", "font-bold", "mb-2");
  container.appendChild(headLine);

  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = "Welcome to the Equestrian chat rooms!";
  welcomeMessage.classList.add("text-lg", "text-blue-700");
  container.appendChild(welcomeMessage);

  const linkContainer = document.createElement("div");
  linkContainer.className = "flex flex-col justify-center";

  const loginButton = document.createElement("button");
  loginButton.id = "loginButton";
  loginButton.dataset.modal = "login-data";
  loginButton.classList.add(
    "bg-sky-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "mt-4",
  );
  loginButton.textContent = "Join the fun!";
  linkContainer.appendChild(loginButton);

  const profileLink = document.createElement("button");
  profileLink.className =
    "no-underline text-cyan-700 cursor-pointer bg-pink-400 text-white font-bold h-10 rounded mt-2";
  profileLink.textContent = "Profile Page";
  profileLink.dataset.link = "/profilePage";

  const randomProfile = document.createElement("button");
  randomProfile.className =
    "no-underline text-pink-400 cursor-pointer bg-black font-bold h-10 rounded mt-2";
  randomProfile.textContent = "Random Profile";
  randomProfile.dataset.link = "/randomProfile";
  randomProfile.id = "randomProfileBtn";

  linkContainer.appendChild(randomProfile);
  linkContainer.appendChild(profileLink);
  container.appendChild(linkContainer);
  loginButton.addEventListener("click", () => {
    initLoginModal();
  });

  return container;
}
