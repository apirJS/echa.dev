import { Envs } from "./types"

function getEnv(key: Envs): string {
  const value = process.env[key]
  if (value) {
    return value
  } else {
    throw new Error("Env variable: " + key + " is not found")
  }
}

export { getEnv }