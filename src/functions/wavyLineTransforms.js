const wavyLineTransforms = w => {
  const xTransfm =
    w < 510 ? 0 : w < 720 ? 0 : w < 1024 ? 0 : w < 1366 ? -80 : w < 1640 ? 0 : w < 1920 ? 0 : w < 2300 ? 0 : 0;
  const yTransfm = w < 510 ? 80 : w < 720 ? 80 : w < 1024 ? 100 : w < 1366 ? -40 : w < 1640 ? 50 : w < 1920 ? 40 : 0;
  const xScale = w < 720 ? 1.5 : w < 1024 ? 1.1 : w < 1366 ? 1.35 : w < 1640 ? 1.2 : w < 1920 ? 1.1 : w < 2300 ? 1 : 1;
  const yScale = w < 510 ? 2.2 : w < 720 ? 2 : w < 1024 ? 1.3 : w < 1366 ? 1.25 : w < 1640 ? 1.1 : w < 1920 ? 0.9 : 0.9;

  return { xtrans: xTransfm, ytrans: yTransfm, xscale: xScale, yscale: yScale };
};

export default wavyLineTransforms;
