// Get Refernces to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('sharable-link-continer') as HTMLDivElement;
const shareableLinkElement = document.getElementById('sharable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle  Form Submission:
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault(); //prevent  Page Reload
 
// collect Input Values.
const username = (document.getElementById('username') as HTMLInputElement).value
const name = (document.getElementById ('name') as HTMLInputElement).value
const fathername = (document.getElementById ('fathername') as HTMLInputElement).value
const phone = (document.getElementById ('phone') as HTMLInputElement).value
const national = (document.getElementById ('national') as HTMLInputElement).value
const email = (document.getElementById ('email') as HTMLInputElement).value
const education = (document.getElementById ('education') as HTMLInputElement).value
const experiance = (document.getElementById ('experiance') as HTMLInputElement).value
const skills = (document.getElementById ('skills') as HTMLInputElement).value

// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    phone,
    education,
    experiance,
    skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

// Generate the resume content Dynamically
const resumeHTML = `
<h4><b>Editable Resume</b></h4>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name:</b><span contenteditable ="true"${name}</span><p>
<p><b>Father Name:</b><span contenteditable ="true"${fathername}</span></p>
<p><b>Phone:</b><span contenteditable ="true"${phone} </span> </p>
<p><b>National ID:</b><span contenteditable ="true"${national} </span></p>
<p><b>Email:</b><span contenteditable ="true"${email} </span></b>${email}</p>


<h3>EDUCATION</h3>
<p contenteditable ="true">${education}</p>

<h3>EXPERIANCE</h3>
<p contenteditable ="true">${experiance}</p>

<h3>SKILLS</h3>
<p contenteditable ="true">${skills}</p>
`;
//display the Generate Resume

resumeDisplayElement.innerHTML = resumeHTML;

// Generate a shareable URL with the username only
const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;

// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});