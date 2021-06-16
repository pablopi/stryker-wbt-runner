import { PluginKind, declareClassPlugin } from '@stryker-mutator/api/plugin';

import { WebTestRunner } from './web-test-runner'

export const strykerPlugins = [declareClassPlugin(PluginKind.TestRunner, 'web-test-runner', WebTestRunner)];
