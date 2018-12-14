require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    sourceMap: false,
    target: 'es2015',
    isolatedModules: false,
    noImplicitReturns: true,
    moduleResolution: 'node',
    noUnusedLocals: true,
    experimentalDecorators: true,
  },
  files: [ './types/*', './src/*' ]
})