// script.js

const deptSelect = document.getElementById('dept');
const yearSelect = document.getElementById('year');
const coursesDiv = document.getElementById('courses');
const cgpaDisplay = document.getElementById('cgpa');
const clearBtn = document.getElementById('clearData');

const addCourseForm = document.getElementById('addCourseForm');
const newCourseCode = document.getElementById('newCourseCode');
const newCourseName = document.getElementById('newCourseName');
const newCourseCredit = document.getElementById('newCourseCredit');
const saveCourseBtn = document.getElementById('saveCourse');
const cancelCourseBtn = document.getElementById('cancelCourse');

const gradePoints = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };

let savedData = JSON.parse(localStorage.getItem("cgpaData")) || {};
let extraCourses = JSON.parse(localStorage.getItem("extraCourses")) || {};
let currentDept = "", currentYear = "", currentSemester = "";

// Render courses for selected dept/year
function renderCourses() {
  coursesDiv.innerHTML = "";
  const dept = deptSelect.value;
  const year = yearSelect.value;
  if (!dept || !year) return;

  currentDept = dept;
  currentYear = year;

  // Special case: Not in Science Education
  if (dept === "nSc") {
    const semDiv = document.createElement("div");
    semDiv.classList.add("semester-block");
    semDiv.innerHTML = `<h3>Custom Courses</h3>`;

    // Show only extra (user-added) courses
    let courses = extraCourses[`${dept}-${year}-custom`] || [];

    courses.forEach((course, idx) => {
      const div = document.createElement("div");
      div.classList.add("course-item");

      div.innerHTML = `
        <span class="course-name">
          ${course.code} (${course.credit} units)
          <button type="button" class="info-btn" data-info="${course.name}">ℹ️</button>
          <span class="tooltip">${course.name}</span>
        </span>
        ${["A","B","C","D","E","F"].map(g => `
          <label>
            <input type="radio" 
              name="course${dept}-${year}-custom-${idx}" 
              value="${g}" 
              ${savedData[`${dept}-${year}-custom-${idx}`] === g ? "checked" : ""}>
            ${g}
          </label>
        `).join(" ")}
      `;

      // Tooltip
      const infoBtn = div.querySelector(".info-btn");
      const tooltip = div.querySelector(".tooltip");
      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".tooltip.show").forEach(t => {
          if (t !== tooltip) t.classList.remove("show");
        });
        tooltip.classList.toggle("show");
      });

      // Save grade
      div.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
          savedData[`${dept}-${year}-custom-${idx}`] = input.value;
          localStorage.setItem("cgpaData", JSON.stringify(savedData));
          calculateCGPA();
        });
      });

      semDiv.appendChild(div);
    });

    // Add Course button
    const addBtn = document.createElement("button");
    addBtn.textContent = "➕ Add Custom Course";
    addBtn.addEventListener("click", () => {
      currentSemester = "custom";
      addCourseForm.style.display = "flex";
    });
    semDiv.appendChild(addBtn);

    coursesDiv.appendChild(semDiv);
    calculateCGPA();
    return;
  }

  // Normal departments
  let yearData = coursesData[dept]?.[year];
  if (!yearData) return;

  Object.keys(yearData).forEach(semester => {
    const semDiv = document.createElement("div");
    semDiv.classList.add("semester-block");
    semDiv.innerHTML = `<h3 class="header-semester">${semester.toUpperCase()} SEMESTER</h3>`;

    // Merge dept + shared courses
    let courses = [...yearData[semester]];
    if (extraCourses[`${dept}-${year}-${semester}`]) {
      courses = courses.concat(extraCourses[`${dept}-${year}-${semester}`]);
    }

    courses.forEach((course, idx) => {
      const div = document.createElement("div");
      div.classList.add("course-item");

      div.innerHTML = `
        <span class="course-name">
          ${course.code} (${course.credit} units)
          <button type="button" class="info-btn" data-info="${course.name}">ℹ️</button>
          <span class="tooltip">${course.name}</span>
        </span>
        ${["A","B","C","D","E","F"].map(g => `
          <label>
            <input type="radio" 
              name="course${dept}-${year}-${semester}-${idx}" 
              value="${g}" 
              ${savedData[`${dept}-${year}-${semester}-${idx}`] === g ? "checked" : ""}>
            ${g}
          </label>
        `).join(" ")}
      `;

      // Tooltip
      const infoBtn = div.querySelector(".info-btn");
      const tooltip = div.querySelector(".tooltip");
      infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".tooltip.show").forEach(t => {
          if (t !== tooltip) t.classList.remove("show");
        });
        tooltip.classList.toggle("show");
      });

      // Save grade
      div.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
          savedData[`${dept}-${year}-${semester}-${idx}`] = input.value;
          localStorage.setItem("cgpaData", JSON.stringify(savedData));
          calculateCGPA();
        });
      });

      semDiv.appendChild(div);
    });

    // Add Course button for each semester
    const addBtn = document.createElement("button");
    addBtn.textContent = "➕ Add Course to " + semester;
    addBtn.addEventListener("click", () => {
      currentSemester = semester; // track semester
      addCourseForm.style.display = "flex"; // show modal
    });
    semDiv.appendChild(addBtn);

    coursesDiv.appendChild(semDiv);
  });

  calculateCGPA();
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".course-item")) {
    document.querySelectorAll(".tooltip.show").forEach(t => t.classList.remove("show"));
  }
});

// Calculate cumulative CGPA
function calculateCGPA() {
  let totalPoints = 0, totalCredits = 0;
  const dept = deptSelect.value;
  if (!dept) return;

  const deptData = coursesData[dept] || {}; // ✅ handles nSc safely

  // Loop through normal courses (if any exist)
  Object.keys(deptData).forEach(year => {
    const yearData = deptData[year];
    Object.keys(yearData).forEach(semester => {
      let courses = [...yearData[semester]];

      // Merge in any extra courses for this dept-year-sem
      if (extraCourses[`${dept}-${year}-${semester}`]) {
        courses = courses.concat(extraCourses[`${dept}-${year}-${semester}`]);
      }

      courses.forEach((course, idx) => {
        const grade = savedData[`${dept}-${year}-${semester}-${idx}`];
        if (grade) {
          totalPoints += gradePoints[grade] * course.credit;
          totalCredits += course.credit;
        }
      });
    });
  });

  // ✅ Special case: nSc may ONLY have extraCourses
  Object.keys(extraCourses).forEach(key => {
    if (key.startsWith(dept)) {
      extraCourses[key].forEach((course, idx) => {
        const grade = savedData[`${key}-${idx}`];
        if (grade) {
          totalPoints += gradePoints[grade] * course.credit;
          totalCredits += course.credit;
        }
      });
    }
  });

  // Calculate CGPA
  const cgpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  cgpaDisplay.textContent = cgpa;

  // Change background color based on CGPA range
  const cgpaVal = parseFloat(cgpa);
  let bgColor = "";

  if (cgpaVal >= 4.5) bgColor = "#2ecc71";     // First class
  else if (cgpaVal >= 3.5) bgColor = "#3498db"; // 2nd Upper
  else if (cgpaVal >= 2.4) bgColor = "#f1c40f"; // 2nd Lower
  else if (cgpaVal >= 1.5) bgColor = "#e67e22"; // 3rd Class
  else if (cgpaVal >= 1.0) bgColor = "#e74c3c"; // Pass
  else bgColor = "#7f8c8d";                     // Fail

  cgpaDisplay.style.backgroundColor = bgColor;
  cgpaDisplay.style.padding = "5px 10px";
  cgpaDisplay.style.borderRadius = "6px";
  cgpaDisplay.style.color = "#fff";
}

// Save course from modal
saveCourseBtn.addEventListener("click", () => {
  const code = newCourseCode.value.trim();
  const name = newCourseName.value.trim();
  const credit = parseInt(newCourseCredit.value, 10);

  if (!code || !name || isNaN(credit) || credit <= 0) {
    alert("Please fill all fields correctly!");
    return;
  }

  const newCourse = { code, name, credit };
  const key = `${currentDept}-${currentYear}-${currentSemester}`;
  if (!extraCourses[key]) {
    extraCourses[key] = [];
  }
  extraCourses[key].push(newCourse);

  localStorage.setItem("extraCourses", JSON.stringify(extraCourses));

  // Reset form
  newCourseCode.value = "";
  newCourseName.value = "";
  newCourseCredit.value = "";
  addCourseForm.style.display = "none";

  renderCourses();
});

// Cancel modal
cancelCourseBtn.addEventListener("click", () => {
  addCourseForm.style.display = "none";
});

// Clear data
clearBtn.addEventListener("click", () => {
  localStorage.removeItem("cgpaData");
  localStorage.removeItem("extraCourses");
  savedData = {};
  extraCourses = {};
  renderCourses();
  calculateCGPA();
});

// Event listeners
deptSelect.addEventListener("change", renderCourses);
yearSelect.addEventListener("change", renderCourses);

// Initial render if data exists
if (deptSelect.value && yearSelect.value) {
  renderCourses();
}
