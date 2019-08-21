// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
const selection = figma.currentPage.selection;
const nodes = [];
const numberOfLines = 4;
let errorMessage = "Please select 1 object with a parent.";
if (selection.length == 1) {
    const child = selection[0];
    let childWidth = child.width;
    let childHeight = child.height;
    let childX = child.x;
    let childY = child.y;
    let parentWidth = child.parent.width;
    let parentHeight = child.parent.height;
    let distance = [];
    distance[0] = childX;
    distance[1] = childY;
    distance[2] = parentWidth - (childX + childWidth);
    distance[3] = parentHeight - (childY + childHeight);
    // let getDistance = Object.values(distance)
    // let points = Object.values(getAllCenterPoints(child))
    for (let i = 0; i < distance.length; i++) {
        const line = figma.createLine();
        const length = distance[i];
        line.resize(length, 0);
    }
    // loopPoints(points, line)
    // loopDistance(getDistance, line)
    // figma.group(nodes, child.parent)
    errorMessage = '';
}
// function loopPoints(array, line){
//     for (let i = 0; i < array.length; i++) {
//         const pts = array[i];
//         line.x = pts.x
//         line.y = pts.y
//         console.log(pts)
//    }
// }
// Returns all possible center points
function getAllCenterPoints(obj) {
    let objCenter = {};
    objCenter.t = { x: obj.x + obj.width * 0.5, y: obj.y };
    objCenter.r = { x: obj.x + obj.width, y: obj.y + obj.height * 0.5 };
    objCenter.b = { x: obj.x + obj.width * 0.5, y: obj.y + obj.height };
    objCenter.l = { x: obj.x, y: obj.y + obj.height * 0.5 };
    return objCenter;
}
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin(errorMessage);
// left line
// line.x = child.absoluteTransform[0][2] - childX
// line.y = child.absoluteTransform[1][2] + (childHeight / 2)
// line.resize(childX,0)
// for (let i = 0; i < numberOfLines; i++) {
//     const line = figma.createLine()
//     line.x = 
//     // figma.currentPage.appendChild(line)
//     // nodes.push(line)
//     console.log(i)
// }
