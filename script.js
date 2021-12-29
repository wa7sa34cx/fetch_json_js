(async () => {
  await temp();
})();

async function temp() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res.status);
  let json = await res.json();
  console.log(json);
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}
