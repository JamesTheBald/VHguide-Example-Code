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
    xTrans = 30;
    yTrans = 460 - 500 * widthAdjRatio;
    xScale = 1.1;
    yScale = 0.95;
  } else if (winWidth < 2300) {
    xTrans = 120;
    yTrans = -20;
    xScale = 1.3;
    yScale = 1;
  } else {
    xTrans = 160;
    yTrans = 0;
    xScale = 1.6;
    yScale = 1;
  }

  return [xTrans, yTrans, xScale, yScale];
};

export default wavyLineParams;
