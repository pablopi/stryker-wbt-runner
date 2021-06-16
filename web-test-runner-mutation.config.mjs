import defaultConfig from './web-test-runner.config.mjs';

function getCurrentMutant() {
  return process.env.__STRYKER_ACTIVE_MUTANT__;
}

const config = {
  ...defaultConfig,
  browsers: undefined,
  coverage: false,
  testRunnerHtml: testFramework =>
  `<html>
    <body>
      <script>
        window.__stryker__ = window.__stryker__ || {};
        window.__stryker__.activeMutant = '${getCurrentMutant()}';
        window.process = {
          env: {
            __STRYKER_ACTIVE_MUTANT__: '${getCurrentMutant()}',
          }
        }
      </script>
      <script type="module" src="${testFramework}"></script>
    </body>
  </html>`,
};

export default config;