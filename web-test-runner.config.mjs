import { importMapsPlugin } from '@web/dev-server-import-maps';
import { defaultReporter } from '@web/test-runner';
import { playwrightLauncher } from '@web/test-runner-playwright';
import { junitReporter } from '@web/test-runner-junit-reporter';

export default {
  files: [
    './dist/test/**/*.js',
  ],
  testFramework: {
    config: {
      timeout: '4000',
    },
  },
  browsers: [
    playwrightLauncher({ product: 'firefox' }),
    playwrightLauncher({ product: 'chromium' }),
  ],
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: 'coverage',
    threshold: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
    exclude: [
      'node_modules/**/*'
    ],
  },
  reporters: [
    // use the default reporter only for reporting test progress
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    // use another reporter to report test results
    junitReporter({
      outputPath: './results/test-results.xml', // default `'./test-results.xml'`
      reportLogs: true, // default `false`
    }),
  ],
  plugins: [importMapsPlugin()],
}