import profilePageService from "../services/profilePageService.js";
import { navigateTo } from "../router/router.js";

export default async function initRandomProfile() {
  try {
    const user = await profilePageService();
    if (!user || user.length === 0) return;
    // if there are 10 users gives 0-9 (10)
    const randomIndex = Math.floor(Math.random() * user.length);
    //selects a random user
    const randomUser = user[randomIndex];
    //Navigato to that profile
    navigateTo(`/profile/${randomUser.id}`);
  } catch (error) {
    console.error("Failed to load random Profile", error);
  }
}
