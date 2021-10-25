const wavyLineParams = (widthAdjRatio, winWidth) => {
  // console.log("wavyLineParams.js widthAdjRatio=", widthAdjRatio, ",winWidth=", winWidth);

  let xTrans;
  let yTrans;
  let xScale;
  let yScale;

  if (winWidth < 510) {
    xTrans = 0;
    yTrans = 80;
    xScale = -1.5;
    yScale = 2.2;
  } else if (winWidth < 720) {
    xTrans = 0;
    yTrans = 80;
    xScale = -1.5;
    yScale = 2;
  } else if (winWidth < 1024) {
    xTrans = 0;
    yTrans = 80;
    xScale = -1.2;
    yScale = 1.4;
  } else if (winWidth < 1366) {
    xTrans = -80;
    yTrans = -40;
    xScale = -1.2;
    yScale = 1.25;
  } else if (winWidth < 1920) {
    xTrans = 0;
    yTrans = 200 + 444*1.15 - 444 * widthAdjRatio;
    // want yTrans = 200 at 1380px (widthAdjRatio = 1.15)
    // want yTrans = 0   at 1900px (widthAdjRatio = 1.6)
    // So multiplier is 200/(1.6-1.15) = 444
    xScale = 1;
    yScale = 1;
  } else if (winWidth < 2300) {
    xTrans = 50;
    yTrans = 0;
    xScale = 1.25;
    yScale = 1;
  } else {
    xTrans = 160;
    yTrans = 0;
    xScale = 1.4;
    yScale = 1;
  }

  return [xTrans, yTrans, xScale, yScale];
};

export default wavyLineParams;
