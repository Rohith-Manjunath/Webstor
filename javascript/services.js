let number_spans1 = document.querySelector("#number-spans1");
let number_spans2 = document.querySelector("#number-spans2");
let number_spans3 = document.querySelector("#number-spans3");
let number_spans4 = document.querySelector("#number-spans4");
let number_spans5 = document.querySelector("#number-spans5");
let number_spans6 = document.querySelector("#number-spans6");
let our_process_heading = document.querySelector(".our-process-heading");
let our_process_description = document.querySelector(
  ".our-process-description"
);
let progress_bar = document.getElementById("progress");

let number_spans = document.querySelectorAll(".number-span");
our_process_description.style.textAlign = "justify";

number_spans1.addEventListener("click", () => {
  div1.style.opacity = "1";
  div1.style.transition = "opacity 0.5s";
  our_process_heading.textContent = "Initial Meeting";
  our_process_description.textContent =
    "This is the first step where the client and the development team meet to discuss the project requirements, objectives, and any specific needs. It involves understanding the client's vision, goals, and expectations for the website.";

  progress_bar.style.width = "0rem";
  progress_bar.style.transition = "all 1s";
});

number_spans2.addEventListener("click", () => {
  div1.style.opacity = "1";
  our_process_heading.textContent = "Evaluation and Planning";
  our_process_description.textContent =
    "In this step, the development team evaluates the project requirements and conducts a thorough analysis of the scope, timeline, and resources needed for successful implementation. They create a detailed plan outlining the development process, milestones, and any potential challenges.";

  progress_bar.style.width = "10rem";
  progress_bar.style.transition = "all 1s";
});
number_spans3.addEventListener("click", () => {
  div1.style.opacity = "1";
  our_process_heading.textContent = "Design and Development";
  our_process_description.textContent =
    "Once the planning phase is complete, the design and development phase begins. Designers create the visual layout, user interface, and overall aesthetic of the website, while developers write the code and build the website's functionality based on the approved design. This step involves coding, integrating necessary features, and ensuring compatibility across different devices and browsers";

  progress_bar.style.width = "20rem";
  progress_bar.style.transition = "all 1s";
});
number_spans4.addEventListener("click", () => {
  div1.style.opacity = "1";
  our_process_heading.textContent = "Quality Testing and Delivery";
  our_process_description.textContent =
    "After the initial development is completed, the website goes through a rigorous quality testing phase. This involves checking for any bugs, errors, or usability issues. The development team performs various tests to ensure the website is functioning properly and meeting the client's requirements. Once the website passes all quality checks, it is ready for delivery to the client";

  progress_bar.style.width = "30rem";
  progress_bar.style.transition = "all 1s";
});

number_spans5.addEventListener("click", () => {
  div1.style.opacity = "1";
  our_process_heading.textContent = "Maintenance and Testing";
  our_process_description.textContent =
    "Once the website is delivered, ongoing maintenance and testing are crucial to ensure its optimal performance. This step involves monitoring the website for any issues, applying updates and security patches, and performing regular backups. Testing may also continue to identify and fix any bugs or errors that arise after the initial delivery";

  progress_bar.style.width = "40rem";
  progress_bar.style.transition = "all 1s";
});

number_spans6.addEventListener("click", () => {
  div1.style.opacity = "1";
  our_process_heading.textContent = "Delivery";
  our_process_description.textContent =
    "In this final step, the completed and thoroughly tested website is officially handed over to the client. The development team assists with the deployment of the website to the client's hosting environment or makes it live on the desired domain. At this stage, any remaining documentation, training, or support is provided to ensure the client's seamless transition and understanding of the website.";
  progress_bar.style.width = "50rem";
  progress_bar.style.transition = "all 1s";
});
