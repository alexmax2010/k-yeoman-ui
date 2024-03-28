import { BASClientFactory, BASTelemetryClient } from "@sap/swa-for-sapbas-vsx";
import { IChildLogger } from "@vscode-logging/logger";

/**
 * A Simple Wrapper for reporting usage analytics
 */
export class AnalyticsWrapper {
  // Event types used by Application Wizard Kruger
  private static readonly EVENT_TYPES = {
    PROJECT_GENERATION_STARTED: "Project generation started",
    PROJECT_GENERATOR_SELECTED: "Project generator selected",
    PROJECT_GENERATED_SUCCESSFULLY: "Project generated successfully",
  };

  private static startTime: number = Date.now();

  /**
   * Note the use of a getter function so the value would be lazy resolved on each use.
   * This enables concise and simple consumption of the tracker throughout our Extension.
   *
   * @returns { Tracker }
   */
  public static getTracker(): BASTelemetryClient {
    return BASClientFactory.getBASTelemetryClient();
  }

  public static createTracker(logger?: IChildLogger): void {
    logger?.info('createTracker');
  }

  private static report(opt: { eventName: string; properties?: any; logger?: IChildLogger }): void {
    // We want to report only if we are not in Local VSCode environment
    const eventName = opt.eventName;
    if (process.env.LANDSCAPE_ENVIRONMENT) {
      opt.logger?.trace("Web Analytics tracker was called", {
        eventName,
      });
    } else {
      opt.logger?.trace("Web Analytics tracker was not called because LANDSCAPE_ENVIRONMENT is not set", {
        eventName,
      });
    }
  }

  public static updateGeneratorStarted(logger?: IChildLogger): void {
    logger?.info('updateGeneratorStarted');
  }

  public static updateGeneratorSelected(generatorName: string, logger?: IChildLogger): void {
    logger?.info('updateGeneratorSelected');
  }

  public static updateGeneratorEnded(generatorName: string, logger?: IChildLogger): void {
    logger?.info('updateGeneratorEnded');
  }
}
