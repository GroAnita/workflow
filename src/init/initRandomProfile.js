import profilePageService from "../services/profilePageService.js";
import { navigateTo } from "../main.js";

export default async function initRandomProfile() {
  try {
    const users = await profilePageService();
    if (!users || users.length === 0) return;
    // if there are 10 users gives 0-9 (10)
    const randomIndex = Math.floor(Math.random() * users.length);
    //selects a random user
    const randomUser = users[randomIndex];
    //Navigato to that profile
    navigateTo(`/profilePage/${randomUser.id}`);
  } catch (error) {
    console.error("Failed to load random Profile", error);
  }
}
