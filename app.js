// example function that alerts the user when the page is loaded
// window.onload = function() {
//   alert("Welcome to Coding Jobs!");
// };

// example function that changes the text of a specific element when a button is clicked
function changeText() {
  document.getElementById("main-text").innerHTML = "Jobs are now available!";
}

fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.jobs.forEach(job => {
      output += `
        <div class="job-card">
          <h2>${job.title}</h2>
          <p class="job-company">${job.company}</p>
          <p class="job-location">${job.location}</p>
          <p class="job-description">${job.description}</p>
          <p class="job-salary">Salary: ${job.salary}</p>
          <button class="apply-button">Apply Now</button>
        </div>
      `;
    });
    document.getElementById('job-list').innerHTML = output;

    document.getElementById('location-filter').addEventListener('change', filterJobs);

    document.querySelectorAll('.apply-button').forEach(button => {
      button.addEventListener('click', () => {
          alert('Here is the application form.')
      });
    });

    function filterJobs(){
      let locationFilter = document.getElementById('location-filter').value;
      let filteredJobs = data.jobs.filter(job => {
        if(locationFilter === "all"){
          return true;
        }else{
          return job.location === locationFilter;
        }
      });

      let output = '';
      filteredJobs.forEach(job => {
        output += `
          <div class="job-card">
            <h2>${job.title}</h2>
            <p class="job-company">${job.company}</p>
            <p class="job-location">${job.location}</p>
            <p class="job-description">${job.description}</p>
            <p class="job-salary">Salary: ${job.salary}</p>
            <button class="apply-button">Apply Now</button>
          </div>
        `;
      });
      document.getElementById('job-list').innerHTML = output;

      document.querySelectorAll('.apply-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Here is the application form.')
        });
      });
    }

  });

  


