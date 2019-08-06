// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

const selection = figma.currentPage.selection
const nodes = []
const numberOfLines = 4
let errorMessage: string = "Please select 1 object with a parent."

if (selection.length == 1) {
    const child = selection[0];

    let childWidth: number = child.width
    let childHeight: number = child.height
    let childX: number = child.x
    let childY: number = child.y

    let parentWidth = child.parent.width
    let parentHeight = child.parent.height

    let obj: { t?: number; r?: number; b?: number; l?: number; } = {};
    
    obj.l = childX
    obj.t = childY
    obj.r = parentWidth - (childX + childWidth)
    obj.b = parentHeight - (childY + childHeight)

    // let objCenter = getAllCenterPoints(child)

    // let line = figma.createLine()

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

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }

    
    // figma.group(nodes, child.parent)

    errorMessage = ''
}

// Returns all possible center points
function getAllCenterPoints(obj) {
    let objCenter: { t?: number[]; r?: number[]; b?: number[]; l?: number[]; } = {};

    objCenter.t = [obj.x + obj.width * 0.5, obj.y]
    objCenter.r = [obj.x + obj.width, obj.y + obj.height * 0.5]
    objCenter.b = [obj.x + obj.width * 0.5, obj.y + obj.height]
    objCenter.l = [obj.x, obj.y + obj.height * 0.5]
    
    return objCenter;
}

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin(errorMessage);
