# Email Templates using Azure Functions & React Email

![Love developing emails](https://dholmes.co.uk/img/email-heart.jpeg)

An [Azure Function App](https://docs.microsoft.com/en-us/azure/azure-functions/) using [TypeScript](https://www.typescriptlang.org/) for handling the rendering and sending of email templates using [React Email](https://react.email/).

![Overview](https://dholmes.co.uk/img/email-overview.png)

Read the [blog post](https://dholmes.co.uk/blog/developing-emails-doesnt-have-to-be-hell/) for more information.

## Development

### Prerequisites

1. An installation of [Node.js v20.14.0 (npm v10.7.0)](https://nodejs.org/en/download/)
2. An installation of [Azure Functions Core Tools v4](https://www.npmjs.com/package/azure-functions-core-tools)
3. An installation of [VSCode](https://code.visualstudio.com/download) with the following extensions:
   1. [Spelling Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
   2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   3. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   4. [Azurite](https://marketplace.visualstudio.com/items?itemName=Azurite.azurite)
4. A working knowledge of:
   1. [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-get-started?pivots=programming-language-csharp) (and the [VsCode extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) is installed)
   2. [Node.js](https://nodejs.org/en/)
   3. [TypeScript](https://www.typescriptlang.org/)

### Getting Started

1. Review and complete the `Prerequisites` above
2. `npm i`: Install dependencies

### Azure Function

Follow the steps below to start a local DEV environment for the Azure Function:

1. Copy [./local.settings-template.json](./local.settings-template.json) to `./local.settings.json` and replace the required environment variables
2. Start the Azurite Blob & Queue Services
3. `npm run start:dev`: Start the local DEV environment
4. Copy & paste the contents of [sample.json](./qTSendGridEmail/sample.json) into the `SENDGRID_QUEUE_EMAIL` queue in Azurite (be sure to update the details to your email address)
5. Press `CTRL+c` to stop the local DEV environment

### Email Templates

Follow the steps below to start a local DEV environment for the email templates:

1. `npm run email:dev`: Start the local DEV environment
2. Open [localhost:3000](http://localhost:3000) in your browser
3. Press `CTRL+c` to stop the local DEV environment

## Credits

- [Des Holmes: Technical Leadership & Product Development](https://dholmes.co.uk)
  - [About](https://dholmes.co.uk/) [Blog](https://dholmes.co.uk/blog)
- [React Email](https://react.email/)
- [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/)
