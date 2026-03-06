/**export async function getPosts() {
  try {
    const fetchResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
    if (!fetchResponse.ok) {
      throw new Error(`HTTP Error! Status: ${fetchResponse.status}`);
    }
    const fetchData = await fetchResponse.json();
    console.log(fetchData);
  } catch (error) {}
}

export async function horseList() {
  const horseFetch = await fetch("https://jsonplaceholder.typicode.com/posts");
  horseResponse = await horseFetch.json();
  console.log(horseResponse);

  return horseResponse.json();
}

async function oneHorse(endpoint, id) {
  horseName = horseResponse();
}

export async function fetchUser() {
  try {
    const userFetch = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!userFetch.ok) {
      throw new Error(`status: ${userFetch.status}`);
    }
    const userFetchResponse = await userFetch.json();
    return userFetchResponse;
  } catch (error) {
    console.error(`network error, API not reached`);
  }
}
const users = await fetchUser();
console.log(users);
*/
