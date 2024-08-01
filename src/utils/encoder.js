export const encodeURL = data => {
  const res = [];
  for(let d in data){
    res.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return res.join('&');
}