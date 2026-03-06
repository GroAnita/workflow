import Home from "../view/home.js";
import ProfilePage from "../view/profilepage.js";
import initProfilePage from "../init/initProfilePage.js";
import initSingleProfilePage from "../init/initSingleProfilePage.js";
import randomProfile from "../view/randomProfile.js";

export default async function router() {
  let path = window.location.pathname;
  console.log("Original pathname:", window.location.pathname);
  console.log("Processed path:", path);
  try {
    const basePath = "/workflow";

    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length) || "/";
    }
    console.log("processed path:", path);
    const app = document.getElementById("app");
    app.innerHTML = "";

    if (path.startsWith("/profilePage/")) {
      const id = path.split("/")[2];
      const view = await initSingleProfilePage(id);

      if (!(view instanceof Node)) {
        throw new Error("View is invalid");
      }
      app.appendChild(view);
      return;
    }

    if (path === "/profilePage") {
      const users = await initProfilePage();
      const view = ProfilePage(users);
      if (!(view instanceof Node)) {
        throw new Error("View is invalid");
      }
      app.appendChild(view);
      return;
    }

    if (path === "/randomProfile") {
      const users = await initProfilePage();
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const view = randomProfile(randomUser);
      app.appendChild(view);
      return;
    }
    app.appendChild(Home());
  } catch (error) {
    console.error("ROUTER CRASH", error);
  }
}
