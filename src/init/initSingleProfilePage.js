import initProfilePage from "../init/initProfilePage.js";
import SingleProfilePage from "../view/singleProfilePage.js";

export default async function initSingleProfilePage(id) {
  const users = await initProfilePage();
  const user = users.find((user) => user.id == id);
  if (!user) {
    const p = document.createElement("p");
    p.textContent = "User not found";
    return p;
  }
  console.log("users:", users);
  return SingleProfilePage(user);
}
