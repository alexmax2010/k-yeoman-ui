import * as vscode from "vscode"; // NOSONAR
import { LogLevel } from "@vscode-logging/logger";

/**
 * Note that the values of these configuration properties must match those defined in the package.json
 */
export const LOGGING_LEVEL_CONFIG_PROP = "k-yeoman-ui.loggingLevel";
export const SOURCE_TRACKING_CONFIG_PROP = "k-yeoman-ui.sourceLocationTracking";

/**
 * @returns {LogLevel}
 */
export function getLoggingLevelSetting(): LogLevel {
  const config = vscode.workspace.getConfiguration();
  return config.get(LOGGING_LEVEL_CONFIG_PROP);
}

/**
 * @returns {boolean}
 */
export function getSourceLocationTrackingSetting(): boolean {
  const config = vscode.workspace.getConfiguration();
  return config.get(SOURCE_TRACKING_CONFIG_PROP)? config.get(SOURCE_TRACKING_CONFIG_PROP):false
}

module.exports = {
  LOGGING_LEVEL_CONFIG_PROP,
  SOURCE_TRACKING_CONFIG_PROP,
  getLoggingLevelSetting,
  getSourceLocationTrackingSetting,
};
