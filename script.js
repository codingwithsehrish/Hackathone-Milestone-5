// Get Refernces to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('sharable-link-continer');
var shareableLinkElement = document.getElementById('sharable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle  Form Submission:
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent  Page Reload
    // collect Input Values.
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var phone = document.getElementById('phone').value;
    var national = document.getElementById('national').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experiance: experiance,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally
    // Generate the resume content Dynamically
    var resumeHTML = "\n<h4><b>Editable Resume</b></h4>\n<h3>PERSONAL INFORMATION</h3>\n<p><b>Name:</b><span contenteditable =\"true\"".concat(name, "</span><p>\n<p><b>Father Name:</b><span contenteditable =\"true\"").concat(fathername, "</span></p>\n<p><b>Phone:</b><span contenteditable =\"true\"").concat(phone, " </span> </p>\n<p><b>National ID:</b><span contenteditable =\"true\"").concat(national, " </span></p>\n<p><b>Email:</b><span contenteditable =\"true\"").concat(email, " </span></b>").concat(email, "</p>\n\n\n<h3>EDUCATION</h3>\n<p contenteditable =\"true\">").concat(education, "</p>\n\n<h3>EXPERIANCE</h3>\n<p contenteditable =\"true\">").concat(experiance, "</p>\n\n<h3>SKILLS</h3>\n<p contenteditable =\"true\">").concat(skills, "</p>\n");
    //display the Generate Resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
