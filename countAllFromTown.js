export function countAllFromTown(regNumbers, townPrefix) {
    return regNumbers.split(',').filter(reg => reg.trim().startsWith(townPrefix)).length;
  }
  