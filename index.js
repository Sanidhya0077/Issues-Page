const allbtns = document.querySelectorAll("#pgnum")
allbtns.forEach(btn=>{
  btn.addEventListener("click",(e)=> display(e))
})
async function display(e) {
  const num = parseInt(e.target.innerHTML)
  const api_url = `https://api.github.com/repos/octocat/hello-world/issues?page=${num}`;
  const rawData = await fetch(api_url);
  const parsedData = await rawData.json();
  let tab = `<tr>
      <th>Issues</th>    
    </tr>`;
  for (let i = 0; i < parsedData.length; i++) {
    tab += `<tr>
        <td> ${parsedData[i].title}</td>
        <td> ${parsedData[i].url}</td>
      </tr>`;
  }
  document.getElementById("rep").innerHTML = tab;
}
