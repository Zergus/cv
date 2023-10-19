const fs = require("fs");
const path = require("path");

// Define the path to the JSON file
const jsonFilePath = path.join(__dirname, "../src/data", "info.json");

// Read the JSON file
fs.readFile(jsonFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  const cvData = JSON.parse(data);

  // Initialize an array to hold the lines of the Markdown file
  let mdLines = [];

  // Add name and title with emojis
  mdLines.push(`# 👤 ${cvData.name}`);
  mdLines.push(`## 💼 ${cvData.title}`);
  mdLines.push("");

  // Add profile
  mdLines.push("### 📝 Profile");
  mdLines.push(cvData.profile);
  mdLines.push("");

  // Add jobs
  mdLines.push("### 🛠 Work Experience");
  cvData.jobs.forEach((job) => {
    mdLines.push(`- **${job.title}** at *${job.company}* (${job.years})`);
    mdLines.push(`  - ${job.description}`);
  });
  mdLines.push("");

  // Add skills
  mdLines.push("### 🌟 Skills");
  cvData.skills.forEach((skill) => {
    mdLines.push(`- **${skill.category}**: ${skill.skills.join(", ")}`);
  });
  mdLines.push("");

  // Convert the array of lines into a single Markdown-formatted string
  const mdContent = mdLines.join("\n");

  // Define the path to the output Markdown file
  const mdFilePath = path.join(__dirname, "../", "README.md");

  // Write to the Markdown file
  fs.writeFile(mdFilePath, mdContent, (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("README.md file has been generated with emojis 😄");
    }
  });
});
