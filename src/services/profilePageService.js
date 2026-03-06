export default async function profilePageservice() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Error status is : ${response.status}`);
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Api is down", error);
    throw error;
  }
}
