module.exports = {
  testRunner: 'web-test-runner',
  reporters: [
    'html', 
    'dashboard', 
    'progress'
  ],
  plugins: [
    '@stryker-mutator/*',
    require.resolve('./src')
  ],
  concurrency: 1, 
  testRunnerNodeArgs: [
    '--inspect'
  ]
}