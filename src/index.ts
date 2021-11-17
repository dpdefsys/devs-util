export const Greeter = (name: string) => `Hello ${name}`;

export function GetUsers() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => resolve(response.json()))
      .then((json) => reject(json));
  });
}

export function GetUserById(id: string) {
  if (!id) {
    throw new Error('Id missing');
  }
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
      .then((response) => resolve(response.json()))
      .then((json) => reject(json));
  });
}

export function GetPosts() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => resolve(response.json()))
      .then((json) => reject(json));
  });
}

export function GetPostById(id: string) {
  if (!id) {
    throw new Error('Id missing');
  }
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => resolve(response.json()))
      .then((json) => reject(json));
  });
}
