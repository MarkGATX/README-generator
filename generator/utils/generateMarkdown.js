let licenseTOC = ``;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![${license} license badge](https://img.shields.io/badge/License-${license}-blueviolet)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    switch (license) {
      case 'MIT':
        return `[${license} license](https://choosealicense.com/licenses/mit)`;
        break;
      case 'Apache':
        return `[${license} license](https://choosealicense.com/licenses/apache)`
        break;
      case 'GPLv2':
        return `[${license} license](https://choosealicense.com/licenses/gpl-2.0)`
        break;
      case 'GPLv3':
        return `[${license} license](https://choosealicense.com/licenses/gpl-3.0)`
        break;
    }
  } else {
    return '';
  }
}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "None") {
      licenseTOC = ` - [License](#license)`;
      return `---
    
  ## License
    
  This project is covered under the `
    } else {
      licenseTOC = ``;
      return ``;
    }
  }

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const { title, projectDesc, projectInstall, projectUsage, projectLicense, projectContrib, projectTests, projectUserName, projectEmail } = data;
    renderLicenseSection(projectLicense);
    return `# ${data.title}
  ${renderLicenseBadge(projectLicense)}

  ## Description

  ${projectDesc}

  ---

  ## Table of Contents
  - [Installation](#installation)
  - [How to use](#usage)
  ${licenseTOC}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

  ## Installation

  ${projectInstall}

  ---
  
  ## Usage

  ${projectUsage}

  

  ${renderLicenseSection(projectLicense)}${renderLicenseLink(projectLicense)}

  ---
  
  ## Contributing

  ${projectContrib}

  ---
  
  ## Tests 

  ${projectTests}

  ---
  
  ## Questions 

  If you have any questions please feel free to reach out to me on [GitHub](https://github.com/${projectUserName}) or via [email](https://mailto:${projectEmail}).

`;
  }

  module.exports = { generateMarkdown }
