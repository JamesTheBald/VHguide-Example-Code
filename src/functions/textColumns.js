import { useMyContext } from "../context/Context";


const textColumns = (winWidth, firstBreak, secondBreak) => {

  const textColumnStyle = {
    paddingTop: 8,
    columnCount: winWidth < firstBreak ? 1 : winWidth < secondBreak ? 2 : 3,
    columnGap: winWidth < secondBreak ? 50 : 60,
  }

  return textColumnStyle
}

export default textColumns;

