### Initialize the project

1. Run ``` tsc --init ``` to initialize TypeScript project and create a tsconfig.json file.
2. Run ``` npm init -y ``` to initialize a node project.

### Configure

1. Create two folders into the root of the project and, inside each one of these create a new file like this:
    src/index.ts
    dist/index.js

2. Inside the tsconfig file search the option "outDir": "./" and, set the out folder. The option should look like this 
"outDir": "./dist".

3. Run ``` tsc -W ``` to run into the watch mode, that compile the code and should generate the code into distribution file.