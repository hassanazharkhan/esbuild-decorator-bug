const { TypeScriptAppProject } = require('projen');
const project = new TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'decorators-bug',
  deps: ['reflect-metadata', '@shiftcoders/dynamo-easy', 'aws-sdk'],
  devDeps: ['esbuild'],
  codeCov: true,
  authorName: 'Hassan Azhar Khan',
  authorEmail: 'hassanazharkhan@gmail.com',
  tsconfig: {
    compilerOptions: {
      experimentalDecorators: true,
      emitDecoratorMetadata: true
    }
  },  
});

project.gitignore.addPatterns('/build')

project.synth();