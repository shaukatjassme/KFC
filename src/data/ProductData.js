export const get = async (apiEndpoint) => {
  console.log('Loading todos' + apiEndpoint);
  let res = await fetch('https://fakestoreapi.com/' + apiEndpoint);
  let data = await res.json();
  return data; 
}