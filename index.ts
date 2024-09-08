document.getElementById("cv-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    
    (document.getElementById("output-name") as HTMLElement).textContent = name;
    (document.getElementById("output-email") as HTMLElement).textContent = email;
    (document.getElementById("output-education") as HTMLElement).textContent = education;
    (document.getElementById("output-skills") as HTMLElement).textContent = skills;

    
    (document.getElementById("resume-output") as HTMLElement).style.display = "block";
});


document.getElementById("toggle-skills")!.addEventListener("click", () => {
    const skillsSection = document.getElementById("output-skills");
    skillsSection!.style.display = skillsSection!.style.display === "none" ? "block" : "none";
  
});




