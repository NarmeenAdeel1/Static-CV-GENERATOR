var _a;
(_a = document.getElementById("cv-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    document.getElementById("output-name").textContent = name;
    document.getElementById("output-email").textContent = email;
    document.getElementById("output-education").textContent = education;
    document.getElementById("output-skills").textContent = skills;
    document.getElementById("resume-output").style.display = "block";
});
document.getElementById("toggle-skills").addEventListener("click", function () {
    var skillsSection = document.getElementById("output-skills");
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});
