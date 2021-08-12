type ToFixed = (value: number) => number;

function toFixed(value: number, fixed: number = 0): number {
  return Number.parseFloat(value.toFixed(fixed));
}

export const toFixed0: ToFixed = (value) => {
  return toFixed(value, 0);
}

export const toFixed1: ToFixed = (value) => {
  return toFixed(value, 1);
}

export const toFixed2: ToFixed = (value) => {
  return toFixed(value, 2);
}
