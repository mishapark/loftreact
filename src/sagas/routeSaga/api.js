export const serverBuildRoute = (from, to) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${from}&address2=${to}`
  )
    .then((response) => response.json())
    .then((data) => data);
};
