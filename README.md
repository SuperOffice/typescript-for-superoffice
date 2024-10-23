# What is `TypeScript for SuperOffice`?

`TypeScript for SuperOffice` (TSFSO) enables you to write scripts in typescript, moving away from the traditional CRMScript-language as a whole.
The new engine implements everything the NetServer has to offer, and the syntax looks familiar to those who has previously used the webapi.

See the [`TypeScript for SuperOffice`: A Paradigm Shift in SuperOffice CRM Customization](./docs/index.md) document to read more about the changes.

See the [`TypeScript for SuperOffice` Online Architecture](./docs/online-architecture.md) document to read more about the architecture and flow.

This repo contains basic examples to get started writing scripts, and some helpers to get the proper intellisense in vscode.

## Using this git repo

1. git clone <https://github.com/SuperOffice/javascript-for-superoffice.git>
2. Open the terminal and run 'npm run setup'
3. Check out the Examples-folder

## How do i run my script?

The scripts still need to be executed inside of SuperOffice!! This means you will have to copy-paste the TS-scripts into the SuperOffice-editor after creation.

VSCODE:
To help the editor understand the @types we need to have the import-statement at the top of the file. This line is redundant in the SuperOffice-script, as it's imported by default.

It is also important that you import the webApiHelper as soApi, as that is what the SuperOffice-environment expects.

Lets use CreateContactEntity.ts as an example:
<!-- START:.ts -->
```typescript

import { soApi } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";

const agent = soApi.getContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.name = name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);

```
<!-- END:.ts -->

And this is what you copy-paste into your SuperOffice-Script (without the lines with import):
<!-- START:.crmscript -->
```typescript

    
//Variables
const name = "NewName";

const agent = soApi.getContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.name = name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);

```
<!-- END:.crmscript -->

## How do i log anything in SuperOffice

The good old print()/printLine() is now gone, and we need to use 'context.result.body' to print any of the values back into the debug-window.
Example:

```javascript
context.result.body = "foo";
```

## What is 'context'

Context is the model that contains data (eventData, cgiVariables etc) in the new script.

You can run this to see whats inside the context.

```javascript
context.result.body = JSON.stringify(context);
```

## #includes

Yes, you can still #include other files similar to how it was done in CRMScript. Please see ./Examples/Includes for an example.

## Do i need to clone this repo to create scripts

No, this repo only contains a starting-point for you to make your own scripts.
We supply an NPM package you can import into any project of your choosing:

URL: <https://www.npmjs.com/package/@superoffice/webapi>

Command: npm i @superoffice/webapi

As long as you import this package as RTL you should not have any problems.

PS: This NPM package does not contain the class Context, so you can either copy-paste the logHelper.ts into your own project or create the class yourself.

## Workflow

How you want to work with `TypeScript for SuperOffice` is up to you, but as per 01.11.2023 there is no proper intellisense inside the SuperOffice (Monaco) editor, which means that you should make use of the npm-package @superoffice/webapi to get the types.

Example workflow:

1. Open a new folder/project in vscode
2. Add npm-package with command 'npm i @superoffice/webapi'
3. Create new file, with file-extension .ts
4. Add import-statement at the top of the file:

```typescript
import { WebApi } from "@superoffice/webapi";
const soApi = new WebApi();
```

5. Write your script
6. Copy your script and paste it into SuperOffice, without the import-statement in point 4.
7. Execute script in SuperOffice and see the result

We are currently discussing the possibility to have a vscode extension that connects to a tenant and have the methods to download/upload scripts. This will simplify the workflow for developers wanting to work in vscode, but we have (for now) only a [POC](https://github.com/SuperOffice/language-tools) for this.

We also have a new endpoint in our API which allows you to pass inn a script without having it stored inside of SuperOffice:
<https://docs.superoffice.com/en/api/reference/restful/agent/CRMScript_Agent/v1CRMScriptAgent_ExecuteScriptByString.html>
It is still undecided if this endpoint will remain open when JSFSO is in production, but for testing-purposes it might come in handy.

## FAQ

### How to get access to writing `TypeScript for SuperOffice`

To get access to write `TypeScript for SuperOffice` on a tenant you need to get a specific tag set on your tenant. This is only available in SOD, as the project is still in the early stages.
To get this tag set you can send an email to email:appdev@superoffice.com with information about who you are and which tenant you want to enable this for.

### SearchEngine

The SearchEngine does not exist in typescript. Historically this was used to easily access the database and get/insert information into the database, and it even had the option to byPassNetServer(true), which with the new architecture does not make any sense..
The SearchEngine query can be replicated using the [dot syntax for the dynamic archive](https://docs.superoffice.com/en/api/netserver/search/odata/dynamic-provider.html), and should be the recommended way to do search.
A benefit is that it is actually faster to execute then the old SearchEngine, and almost equal in performance to having byPassNetServer(true).

## Disclaimer

1. This repo only contains examples on how to handle different entities, and will expand as new functionality is created.
2. Importing your own NPM-packages are as of 22.05.2024 not supported.
3. Only methods available in the NetServer/webapi is supported, so trying to use classes from Service (Ticket, Customer, etc) are not available. We do on the other hand know about a handful of special classes that needs to be implemented.

Hopefully this shows how would to get writing new Scripts. Got any feedback? Please create an issue on this repo to improve its readability and usefulness!
