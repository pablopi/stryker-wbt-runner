import { 
  DryRunOptions, 
  DryRunResult, 
  MutantRunOptions, 
  MutantRunResult,
  TestRunner,
} from '@stryker-mutator/api/test-runner';

export class WebTestRunner implements TestRunner {
  public init (): Promise<void> {
    // TODO: Implement or remove
  }

  public dryRun (options: DryRunOptions): Promise<DryRunResult> {
    // TODO: Implement
  }

  public mutantRun (options: MutantRunOptions): Promise<MutantRunResult> {
    // TODO: Implement
  }

  public dispose (): Promise<void> {
    // TODO: Implement or remove
  }
}