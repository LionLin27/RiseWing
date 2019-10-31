var LinesCountToTextHeight = function (linesCount) {
    // height = (maxLines * (lineHeight + lineSpacing)) - lineSpacing
    return (linesCount * (this.textLineHeight + this.textLineSpacing)) - this.textLineSpacing;
}
export default LinesCountToTextHeight;