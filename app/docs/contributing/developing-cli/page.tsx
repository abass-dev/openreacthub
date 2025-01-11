import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Developing @open-react-hub CLI | OpenReactHub',
  description: 'A comprehensive guide on developing the @open-react-hub CLI with One-Time Installation feature',
}

export default function DevelopingCLIPage() {
  return (
    <div className="container mx-auto py-6 px-16 lg:py-10">
      <h1 className="text-4xl font-bold mb-4">Developing @open-react-hub CLI</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This guide will walk you through the process of developing the @open-react-hub CLI, 
        including implementing the One-Time Installation feature.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Setting up the Project</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Create a new directory for your project:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>mkdir open-react-hub-cli && cd open-react-hub-cli</code>
              </pre>
            </li>
            <li>Initialize a new Node.js project:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm init -y</code>
              </pre>
            </li>
            <li>Install necessary dependencies:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm install commander chalk fs-extra inquirer</code>
              </pre>
            </li>
            <li>Install development dependencies:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm install --save-dev typescript @types/node @types/fs-extra @types/inquirer</code>
              </pre>
            </li>
            <li>Initialize TypeScript configuration:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npx tsc --init</code>
              </pre>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Implementing CLI Functionality</h2>
          <p className="mb-4">Create the main CLI file <code>src/index.ts</code>:</p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`import { Command } from 'commander';
import chalk from 'chalk';
import { addComponent } from './commands/add';

const program = new Command();

program
  .version('1.0.0')
  .description('OpenReactHub CLI for managing React components');

program
  .command('add <component>')
  .description('Add a component to your project')
  .action(addComponent);

program.parse(process.argv);`}</code>
          </pre>
          <p className="mt-4 mb-4">Create the add command file <code>src/commands/add.ts</code>:</p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { componentTemplates } from '../templates/components';

export async function addComponent(componentName: string) {
  try {
    const template = componentTemplates[componentName];
    if (!template) {
      console.error(chalk.red(\`Component "\${componentName}" not found.\`));
      return;
    }

    const componentDir = path.join(process.cwd(), 'components');
    await fs.ensureDir(componentDir);

    const filePath = path.join(componentDir, \`\${componentName}.tsx\`);
    await fs.writeFile(filePath, template);

    console.log(chalk.green(\`\${componentName} component added successfully!\`));
  } catch (error) {
    console.error(chalk.red('Error adding component:'), error);
  }
}`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Implementing One-Time Installation</h2>
          <p className="mb-4">Update <code>package.json</code> to include the bin field:</p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`{
  "name": "@open-react-hub/cli",
  "version": "1.0.0",
  "bin": {
    "orh": "./dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  }
}`}</code>
          </pre>
          <p className="mt-4 mb-4">Ensure the entry point file has the correct shebang:</p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`#!/usr/bin/env node

// Rest of the index.ts content...`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Publishing the Package</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>Build the project:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm run build</code>
              </pre>
            </li>
            <li>Login to npm (if not already logged in):
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm login</code>
              </pre>
            </li>
            <li>Publish the package:
              <pre className="bg-muted p-4 rounded-md mt-2 overflow-x-auto">
                <code>npm publish --access public</code>
              </pre>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Usage Instructions for End-Users</h2>
          <p className="mb-4">Users can now use the CLI with One-Time Installation:</p>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>npx @open-react-hub/cli add Button</code>
          </pre>
          <p className="mt-4">This command will add the Button component to the user's project without requiring a global installation of the CLI.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>
            By following this guide, you've created a CLI tool for @open-react-hub that supports One-Time Installation. 
            This allows users to easily add components to their projects without the need for a global installation, 
            making it more convenient and reducing potential conflicts with other global packages.
          </p>
        </section>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid gap-4 mt-4 sm:grid-cols-2">
            <Link href="/docs/cli" className="group relative rounded-lg border p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">CLI Documentation</h3>
              <p className="text-muted-foreground mb-4">Learn more about using the @open-react-hub CLI in your projects.</p>
              <Button variant="link" className="group pl-0">
                View CLI Docs <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/docs/contributing" className="group relative rounded-lg border p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-2">Contributing Guide</h3>
              <p className="text-muted-foreground mb-4">Discover how you can contribute to the @open-react-hub project.</p>
              <Button variant="link" className="group pl-0">
                Read Contributing Guide <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

