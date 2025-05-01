#!/usr/bin/env node
import fs from "fs";
import path from "path";
import input from "@inquirer/input";

function pascalCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function generateNestModule() {
  const moduleName = await input({ message: "Module name:" });

  const templatePath = path.join(__dirname, "generators/nestjs/templates/module.ts.tpl");
  const outputDir = path.join(process.cwd(), moduleName);
  const outputPath = path.join(outputDir, `${moduleName}.module.ts`);

  const template = fs.readFileSync(templatePath, "utf8");

  const rendered = template.replace(/{{name}}/g, moduleName).replace(/{{Name}}/g, pascalCase(moduleName));

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, rendered);

  console.log(`Module ${moduleName} generated at ${outputPath}`);
}

generateNestModule();
