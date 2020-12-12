export async function getPosts(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const data = await response.json()
  console.log(data)

  const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2")
  const data2 = await response2.json()
  console.log(data2)
}
