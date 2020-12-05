fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))

for (let post in json){
  var lista = document.createElement("li");
  lista.innerHTML = post.value;
}
