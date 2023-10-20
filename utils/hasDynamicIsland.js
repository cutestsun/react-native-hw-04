import * as Device from "expo-device";

const iphones = [
  "iPhone15,2", // 14 Pro
  "iPhone15,3", // 14 Pro Max
  "iPhone15,4", // iPhone 15
  "iPhone15,5", // iPhone 15 Plus
  "iPhone16,1", // iPhone 15 Pro
  "iPhone16,2", // iPhone 15 Pro Max
  "arm64", //for simulator
];

export const hasDynamicIsland = iphones.includes(Device.modelId);
