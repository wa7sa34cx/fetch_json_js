(async () => {
  await temp();
})();

async function temp() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res.status);
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}
