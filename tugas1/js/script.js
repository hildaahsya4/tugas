const ApiKey = "153f41c8531b41d6a1ef44ccb9bc1324";
const baseUrl = "http://api.football-data.org/v2/";
const leagueId = "2021";
const baseEndPoin = `${baseUrl}competitions/${leagueId}`;
const teamEndPoin = `${baseUrl}competitions/${leagueId}/teams`;
const standingEndPoin = `${baseUrl}competitions/${leagueId}/standings`;
const matchEndPoin = `${baseUrl}competitions/${leagueId}/matches`;

const contents = document.querySelector("#content-list");
const fetchHeader = {
  headers: {
    "X-Auth-Token": ApiKey,
  },
};

function getListTeams() {
  fetch(teamEndPoin, fetchHeader)
    .then((response) => response.json())
    .then((resJson) => {
      console.log(resJson.teams);
      let.teams = "";
      resJson.teams.forEach((team) => {
        teams += `
          <li class="collection-item avatar">
      <img src="${team.crestUrl}" alt="" class="circle">
      <span class="title">${team.name}</span>
      <p>Berdiri: ${team.founded} <br>
         Markas: ${team.venue}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">info</i></a>
    </li>   
          `;
      });
      contents = '<ul class="collection">' + teams + "</ul>";
    })
    .catch((err) => {
      console.error(err);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var intances = M.sidenav.init(elems);

  document.querySelectorAll(".sidenav a, .topnav a").forEach((elm) => {
    elm.addEventListener("click", (evt) => {
      let sideNav = document.querySelector(".sidenav");
      M.Sidenav.getInstance(sideNav).close();
      page = evt.target.getAttribute("href");
      console.log(page);
    });
  });
  getListTeams;
});
