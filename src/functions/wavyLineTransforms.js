const wavyLineTransforms = w => {
  // w = window width
  // xTr = x translate, yTtr = y translate, xSc = x Scale, ySc = y Scale
  const xTr =
              w < 510 ? 0 : w < 720 ? 0 : w < 1024 ? 0 : w < 1366 ? -80 : w < 1640 ? 0 : w < 1920 ? 0 : w < 2300 ? 100 : 250;
  const yTr = w < 510 ? 80 : w < 720 ? 80 : w < 1024 ? 100 : w < 1366 ? -40 : w < 1640 ? 90 : w < 1920 ? 0 : w < 2300 ? 0 : -50;
  const xSc = w < 510 ? 1.5 : w < 720 ? 1.5 : w < 1024 ? 1.1 : w < 1366 ? 1.35 : w < 1640 ? 1.2 : w < 1920 ? 1.1 : w < 2300 ? 1.2 : 1.3;
  const ySc = w < 510 ? 2.2 : w < 720 ? 2 : w < 1024 ? 1.3 : w < 1366 ? 1.25 : w < 1640 ? 1.1 : w < 1920 ? 0.9 : 1.05;

  return { xTr: xTr, yTr: yTr, xSc: xSc, ySc: ySc };
};

export default wavyLineTransforms;
