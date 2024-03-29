/**
 * This is a minimal script to publish your package to "npm".
 * This is meant to be used as-is or customize as you see fit.
 *
 * This script is executed on "dist/path/to/library" as "cwd" by default.
 *
 * You might need to authenticate with NPM before running this script.
 */
import devkit from "@nrwl/devkit";

import { execSync } from "child_process";
import chalk from "chalk";

// Executing publish script: node path/to/publish.mjs {name} --version {version} --tag {tag}
// Default "tag" to "next" so we won't publish the "latest" tag by accident.
const [, , name] = process.argv;
console.log(process.cwd());

function invariant(condition, message) {
  if (!condition) {
    console.error(chalk.bold.red(message));
    process.exit(1);
  }
}


const graph = devkit.readCachedProjectGraph();
const project = graph.nodes[name];

invariant(
  project,
  `Could not find project "${name}" in the workspace. Is the project.json configured correctly?`
);

const outputPath = project.data?.targets?.build?.options?.outputPath;
const projectRoot = project.data.root;

invariant(
  outputPath,
  `Could not find "build.options.outputPath" of project "${name}". Is project.json configured  correctly?`
);
invariant(
  projectRoot,
  `Could not find "projectRoot" of project "${name}". Is project.json configured  correctly?`
);

process.chdir(projectRoot)
execSync(`nx lint ${name}`);
execSync(`nx test ${name}`);
execSync(`npm version patch`);
process.chdir('../../');
execSync(`git add .`);
execSync(`git commit -m "version"`);
execSync(`git push"`);
execSync(`nx build ${name}`);
process.chdir(outputPath)
// Execute "npm publish" to publish
execSync(`npm publish --access public --tag latest`);

// Executing publish script: node path/to/publish.mjs {name} --version {version} --tag {tag}
// Default "tag" to "next" so we won't publish the "latest" tag by accident.
