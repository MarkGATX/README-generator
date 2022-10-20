let link ='';
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

    return `[${license} license](https://choosealicense.com/licenses/${license.toLowerCase()})`;
    
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is covered under the `
  } else {
    return `There is no license associated with this project.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, projectDesc, projectInstall, projectUsage, projectLicense, projectContrib, projectTests, projectUserName, projectEmail } = data;
  let badge = renderLicenseBadge(projectLicense);
  let link = renderLicenseLink(projectLicense);
  let licenseText = renderLicenseSection(projectLicense);
  return `# ${data.title}
  ${badge}

  ## Description

  ${projectDesc}

  ---

  ## Table of Contents
  - [Installation](#installation)
  - [How to use](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

  ## Installation

  ${projectInstall}

  ---
  
  ## Usage

  ${projectUsage}

  --- 
  
  ## License 

  ${licenseText}${link}

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

module.exports = {generateMarkdown}
