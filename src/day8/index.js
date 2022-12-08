export const validTime = (str) => {
  if (str.split(":").length !== 2) {
    return false;
  }

  const [hours, minutes] = str.split(":");

  if (hours.length !== 2 || minutes.length !== 2) {
    return false;
  }

  if (Number.isNaN(parseInt(hours)) || Number.isNaN(parseInt(minutes))) {
    return false;
  }
  if (hours < 0 || hours > 24 || minutes > 60 || minutes < 0) {
    return false;
  }
  return true;
};
