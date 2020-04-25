//https://portfolio-4aafa.firebaseio.com/
const container = document.querySelector(".projects-grid");

const config = {
  apiKey: "AIzaSyDsoEz4Qw-eq07bBJEu3DarHltdHk6fnfY",
  authDomain: "portfolio-4aafa.firebaseapp.com",
  databaseURL: "https://portfolio-4aafa.firebaseio.com/",
  storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();
const values = database.ref("/").on("value", addProjects);

function addProjects(projects) {
  console.log(projects.val());
  projects.val().forEach((project) => {
    const aux = `
      <div class="project">
      <div class="action-buttons">
        <i
          data-feather="circle"
          class="feather-button"
          color="#FF605C"
        ></i>
        <i
          data-feather="circle"
          class="feather-button"
          color="#FFBD44"
        ></i>
        <i
          data-feather="circle"
          class="feather-button"
          color="#00CA4E"
        ></i>
      </div>
      <div class="project-asset">
        <img
          alt="Icon-Image"
          height="150px"
          src="${project.url_img}"
        />
      </div>
      <div class="project-content">
        <p>
          <a
            href="${project.link}"
          >
            <i data-feather="link" class="feather-16"></i> ${project.title}
          </a>
        </p>
        <section>
          <p>
          ${project.description}
          </p>
        </section>
      </div>
    </div>
    `;
    const parser = new DOMParser();
    const html = parser.parseFromString(aux, "text/html");
    container.appendChild(html.documentElement.querySelector("div"));
    feather.replace();
  });
}
