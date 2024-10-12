import type { CIOptions } from "@tarojs/plugin-mini-ci";
import projectConfig from "../project.config.json";
import path from "path";

export const CIPluginOpt: CIOptions = {
  weapp: {
    appid: projectConfig.appid,
    privateKeyPath: path.resolve(__dirname, "../private.appid.key"),
  },
};
