const api_url = "https://api.github.com/repos/octocat/hello-world/issues";

async function Getapi(url) {
  const rawData = await fetch(url);
  const parsedData = await rawData.json();
  console.log(parsedData);
  display(parsedData);
}

Getapi(api_url);

function display(data) {
  let tab = `<tr>
      <th>Issues</th>
    </tr>`;

  for (let i = 0; i < data.length; i++) {
    tab += `<tr>
        <td> ${data[i].title}</td>
        <td> ${data[i].url}</td>
      </tr>`;
  }
  document.getElementById("rep").innerHTML = tab;
}
