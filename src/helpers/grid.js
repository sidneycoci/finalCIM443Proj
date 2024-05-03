// export const gridCells = n => {
//     return n * 16;
// }
export const gridCells = n => n *16;

export const isSpaceFree = (walls, x, y) => {

    // const x = gridCells(gridX);
    // const y = gridCells(gridY);


    const str = `${x},${y}`;
    return !walls.has(str);
}