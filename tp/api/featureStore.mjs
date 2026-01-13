import { getKey } from "./redisClient.mjs";

export async function getFeature(code) {
  const enabled = await getKey(code);
  return {
    code,
    enabled: enabled === "enabled"
  };
}
