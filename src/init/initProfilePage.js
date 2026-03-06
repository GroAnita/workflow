import profilePageService from "../services/profilePageService.js";

export default async function initProfilePage() {
  try {
    const users = await profilePageService();
    if (!users || users.length === 0) {
      console.warn("no Users found;");
      return [];
    }

    return users;
  } catch (error) {
    console.error("not able to fetch profiles", error);
    return [];
  }
}
