const projects = [
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png',
    url: '#'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
    
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
    
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
    
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
    
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
    
    imageUrl: 'images/17.png'
  },
  { 
    title: 'Project 1', 
   
    imageUrl: 'images/17.png'
  },
 
  // ... more projects
];

const projectsPerPage = 6; // 2x3 matrix, 2 rows and 3 columns
const totalPages = Math.ceil(projects.length / projectsPerPage);
let currentPage = 1;

function displayProjects(page) {
  const projectContainer = document.getElementById('project-container');
  projectContainer.innerHTML = ''; // Clear the container before adding new projects

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  for (let i = startIndex; i < endIndex && i < projects.length; i++) {
    const project = projects[i];
    // Create HTML elements to display the project information
    const projectElement = document.createElement('div');
    projectElement.classList.add('col-md-4', 'col-sm-6', 'project');

    const imageElement = document.createElement('img');
    imageElement.src = project.imageUrl;
    imageElement.classList.add('project-image'); // Add CSS class for the image
    projectElement.appendChild(imageElement);

     const titleElement = document.createElement('h2');
    const titleLink = document.createElement('a');
    titleLink.href = project.url; // Set the URL for the project
    titleLink.textContent = project.title;
      titleLink.classList.add('custom-link');
    titleElement.appendChild(titleLink);
    projectElement.appendChild(titleElement);

    

    projectContainer.appendChild(projectElement);
  }
}

function generatePaginationLinks() {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = ''; // Clear the container before adding new links

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    link.classList.add('pagination-link');

    if (i === currentPage) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      currentPage = i;
      displayProjects(currentPage);
      generatePaginationLinks();
    });

    paginationContainer.appendChild(link);
  }
}

displayProjects(currentPage);
generatePaginationLinks();
