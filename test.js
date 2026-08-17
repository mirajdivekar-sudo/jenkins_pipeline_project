const fs = require("fs");

if (fs.existsSync("app.js")) {
    console.log("Test passed: app.js exists");
    process.exit(0);
} else {
    console.error("Test failed: app.js not found");
    process.exit(1);
}
