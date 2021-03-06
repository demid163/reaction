const baseTime = "2018-12-05T13:47:16.446Z"
let now = baseTime

export function __advance(ms: number) {
  now = require("moment")(now)
    .add(ms, "milliseconds")
    .toISOString()
}

export function __reset() {
  now = baseTime
}

export function __setCurrentTime(time: string) {
  now = time
}

export const getCurrentTimeAsIsoString = jest.fn(() => now)
