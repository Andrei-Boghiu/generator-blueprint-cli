# generator-blueprint-cli

This CLI tool is designed to be used in combination with existing tools, like [Vite](https://vitejs.dev/), to streamline project setup by generating customizable boilerplate templates and directory structures.

### 1. Set up the project with Vite

First, create a new project using Vite (or any other tool of your choice). For example, with Vite, you can run:

```bash
npm create vite@latest my-project
cd my-project
npm install
```

This will set up the basic structure of your project with Vite.

### 2. Use `generator-blueprint-cli` to scaffold additional files and structures

After setting up your project with Vite (or another tool), you can use `generator-blueprint-cli` to scaffold additional files or folder structures that your project might need.

To install `generator-blueprint-cli` globally, run:

```bash
npm install -g generator-blueprint-cli (Not Yet Available//Work in Progress)
```

Alternatively, to test it locally, run:

```bash
npm link
```

### 3. Generate Boilerplate Code

Once installed, you can run the CLI tool to generate custom files and structures based on your project requirements. For example:

```bash
blueprint generate:nest
```

This will prompt you for input and generate a new NestJS module (or other templates) based on the predefined templates.

### Example command to generate a NestJS module:

```bash
blueprint generate:nest
```

You will be asked for the following:

- **Module Name**: Name of the module to create.

This will generate the necessary files and folder structure for a NestJS module or other templates you have set up.

## Installation

To install this tool globally, run:

```bash
npm install -g generator-blueprint-cli
```
