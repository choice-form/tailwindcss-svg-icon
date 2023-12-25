const path = require("node:path");
const fs = require("node:fs");
const { optimize } = require("svgo");

const packageJsonPath = require.resolve('@choiceform/tailwindcss-svg-icon/package.json');
// const packageJsonPath =  path.resolve("./package.json");
const packageConfig = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
const iconDirectory = path.resolve(`${packageConfig.iconSourcePath}`);

if (!packageConfig.iconSourcePath) {
  console.error(
    "Not found icon dir, please set `iconSourcePath` in package.json."
  );
  if (!fs.existsSync(iconDirectory)) {
    console.error("icon dir is not right, please check.");
  }
}
// const iconDirectory = path.join(__dirname, '../icon');
function readDirectoryRecursively(directory) {
  const files = fs.readdirSync(directory);
  const result = [];

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      result.push(...readDirectoryRecursively(filePath));
    } else {
      try {
        const source = fs.readFileSync(path.resolve(filePath), "utf-8");
        const base64 = optimize(source, {
          datauri: "base64",
          multipass: true,
        }).data;
        result.push({
          base64,
          name: filePath
            .replaceAll(iconDirectory + path.sep, "")
            .replaceAll(".svg", "")
            .replaceAll(path.sep, "/"),
          isMask: source.includes("currentColor"),
        });
      } catch (err) {
        console.error("@choiceform/tailwindcss-svg-icon error:", filePath);
      }
    }
  });

  return result;
}
const files = readDirectoryRecursively(iconDirectory);

const result = {};

for (const file of files) {
  result[`[${file.name}]`] = file;
}

const filePath = path.join(__dirname, "icons.json");
const cacheTime = 5 * 60 * 1000; // 5 minutes in milliseconds
if (
  fs.existsSync(filePath) &&
  Date.now() - fs.statSync(filePath).mtime.getTime() < cacheTime
) {
  // console.log('Using cached icons file');
} else {
  fs.writeFile(filePath, JSON.stringify(result), (err) => {
    if (err) throw err;
    // console.log('Icons written to file');
  });
}

module.exports = result;
