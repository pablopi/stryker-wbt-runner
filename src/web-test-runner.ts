import {
  DryRunOptions,
  DryRunResult,
  MutantRunOptions,
  MutantRunResult,
  TestRunner,
  toMutantRunResult,
  DryRunStatus
} from "@stryker-mutator/api/dist/src/test-runner";


export class WebTestRunner implements TestRunner {
  public init(): Promise<void> {
    return new Promise((res, rej) => {
      console.log('init called');

      res();
    });
  }

  private collectRunResult(): DryRunResult {
    return {
      status: DryRunStatus.Error,
      errorMessage: 'WTR FAILURE'
    };
  }

  private run(): DryRunResult {
    console.log('run called');

    return this.collectRunResult();
  }

  public dryRun(options: DryRunOptions): Promise<DryRunResult> {
    return Promise.resolve(this.run());
  }

  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {
    console.log('mutant called');
    const dryRunResult = this.run();
    return Promise.resolve(toMutantRunResult(dryRunResult));
  }

  public dispose(): Promise<void> {
    return new Promise((res, rej) => {
      console.log('dispose called');

      res();
    });
  }
}