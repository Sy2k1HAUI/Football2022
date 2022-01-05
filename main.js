const modalElement = document.querySelector(".modal");
const btnShow = document.querySelector(".confirm-btn");
const gridTitle = document.querySelector(".grid-title");
const grid = document.querySelector(".grid");
const teamTitle = document.querySelector(".teams");

const buttonSubmit = document.querySelector("#submit");
const changeLayoutBtn = document.querySelector("#changeLO");
const listTeams = [
  {
    name: "A1K45",
  },
  {
    name: "A13K45",
  },
  {
    name: "A2 + A3 (K40)",
  },
  {
    name: "A3K43",
  },
  {
    name: "A2K43",
  },
  {
    name: "A9K43",
  },
  {
    name: "A1K44",
  },
  {
    name: "A2K42",
  },
  {
    name: "A1K41",
  },
  {
    name: "A2K44",
  },
  {
    name: "LQ K38",
  },
  {
    name: "LQ K37",
  },
];

const leagues = [
  {
    name: "Bảng A",
  },
  {
    name: "Bảng B",
  },
  {
    name: "Bảng C",
  },
];

function renderTeams(listTeams) {
  var htmls = listTeams.map((team) => {
    return `
            <div class="content-left-item">${team.name}</div>
        `;
  });
  var html = htmls.join("");
  document.querySelector(".content-left").innerHTML = html;
}

function renderLeagues(leagues) {
  var htmls = leagues.map((league) => {
    return `
        <div class="content-right-item">
           <h3 class="league-name">${league.name}</h3>
           <div class="list-team"></div>
       </div>
        `;
  });
  var html = htmls.join("");
  document.querySelector(".content-right").innerHTML = html;
}

let d = 0;
function randomTeams() {
  d++;
  if (d <= 12) {
    let leagues = document.querySelectorAll(".list-team");
    let newarrayTeams = Array.prototype.slice.call(leagues);

    let indexTeam = Math.floor(Math.random() * listTeams.length);
    let result = listTeams[indexTeam].name;
    if (listTeams[indexTeam]) {
      var newListTeams = listTeams.splice(indexTeam, 1);
      renderTeams(listTeams);
    }
var arrayLeagues = document.querySelectorAll('.list-team');
var newArrayLeagues = Object.keys(arrayLeagues);
console.log(newArrayLeagues);
    let r = 0;
    do {
      r = Math.floor(Math.random() * 3);
    } while (document.getElementsByClassName(`countTeam${r}`).length > 3);

    let divElement = document.createElement("div");
    divElement.className = "team";
    divElement.classList.add(`countTeam${r}`);
    divElement.innerHTML = result;
    leagues[r].appendChild(divElement);
  } else {
    alert("Đủ rồi bạn ơii");
  }
}

buttonSubmit.addEventListener("click", () => {
  changeLayoutBtn.style.display = "block";
  modalElement.classList.add("show");
  setTimeout(function () {
    modalElement.classList.remove("show");
    randomTeams();
  }, 3000);
});

changeLayoutBtn.addEventListener("click", () => {
  gridTitle.classList.add("changeCol");
  grid.classList.add("changeCol");
  teamTitle.style.display = "none";
})
renderTeams(listTeams);
renderLeagues(leagues);
