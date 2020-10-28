import { ICanvas, ILine, IRectangle, IBucketFill, CanvasType } from './utils/types';

export const generateCanvas = ({ w, h }: ICanvas): CanvasType => {
    if (h && w) {
        if (h > 0 && w > 0) {
            const place = Array.from(Array(h), () => Array.from(Array(w + 2).keys(), (key) => {
                if (key === 0 || key === w + 1) {
                    return '|';
                }

                return ' ';
            }));

            return [Array(w + 2).fill('-'), ...place, Array(w + 2).fill('-')];
        } else {
            throw 'Canvas width and height cannot be negative.'
        }
    } else {
        throw 'Width or height of canvas is not specified.'
    }
}

const validateLineParams = (canvasWidth: number, canvasHeight: number, line: ILine) => {
    if (!line.x1 || !line.y1 || !line.x2 || !line.y2) {
        throw 'Not all parameters are specified.'
    }

    if (line.x1 < 0 || line.y1 < 0 || line.x2 < 0 || line.y2 < 0) {
        throw 'Parameters for drawing a line cannot be negative.'
    }
    //debugger;
    if (line.x2 > canvasHeight - 2 || line.y2 > canvasWidth - 2) {
        throw 'The line cannot go beyond the boundaries of the canvas.'
    }

    const isVerticalLine = line.x1 === line.x2 ? true : false;
    const isHorizontalLine = line.y1 === line.y2 ? true : false;

    if (!isVerticalLine && !isHorizontalLine) {
        throw 'Only horizontal and vertical lines can be drawn.'
    }
}

export const drawLine = (canvas: CanvasType, line: ILine): CanvasType => {
    const canvasLocal = canvas;

    validateLineParams(canvas.length, canvas[0].length, line);

    if (line.x1 === line.x2) {
        const direction = line.y1 > line.y2 ? { start: line.y2, end: line.y1 } : { start: line.y1, end: line.y2 };
        for (let i = direction.start; i < direction.end + 1; i++) {
            canvasLocal[i][line.x1] = 'x';
        }
    } else {
        const direction = line.x1 > line.x2 ? { start: line.x2, end: line.x1 } : { start: line.x1, end: line.x2 };
        canvasLocal[line.y1].fill('x', direction.start, direction.end + 1);
    }

    return canvasLocal;
}

const validateRectangleProps = (canvasWidth: number, canvasHeight: number, { x1, y1, x2, y2 }: IRectangle) => {
    if (!x1 || !y1 || !x2 || !y2) {
        throw 'Not all parameters are specified.'
    }

    if (x1 < 0 || y1 < 0 || x2 < 0 || y2 < 0) {
        throw 'Parameters for drawing a rectangle cannot be negative.'
    }

    if (x2 > canvasWidth && y2 > canvasHeight) {
        throw 'The line cannot go beyond the boundaries of the canvas.'
    }
}

export const drawRectangle = (canvas: CanvasType, rectangle: IRectangle): CanvasType => {

    validateRectangleProps(canvas.length, canvas[0].length, rectangle);

    const lineTop = {
        x1: rectangle.x1,
        y1: rectangle.y1,
        x2: rectangle.x2,
        y2: rectangle.y1,
    } as ILine;

    const lineBottom = {
        x1: rectangle.x1,
        y1: rectangle.y2,
        x2: rectangle.x2,
        y2: rectangle.y2,
    } as ILine;

    const lineLeft = {
        x1: rectangle.x1,
        y1: rectangle.y1,
        x2: rectangle.x1,
        y2: rectangle.y2,
    } as ILine;

    const lineRight = {
        x1: rectangle.x2,
        y1: rectangle.y1,
        x2: rectangle.x2,
        y2: rectangle.y2,
    } as ILine;

    let canvasLocal = drawLine(canvas, lineBottom);
    canvasLocal = drawLine(canvasLocal, lineTop);
    canvasLocal = drawLine(canvasLocal, lineLeft);
    canvasLocal = drawLine(canvasLocal, lineRight);

    return canvasLocal;
}

export const fill = (canvas: CanvasType, x: number, y: number, color: string): CanvasType => {
    let canvasLocal = canvas;
    const colorLocal = canvasLocal[y][x];
    if (colorLocal !== color && colorLocal !== 'x' && colorLocal !== '-' && colorLocal !== '|') {
        canvasLocal[y][x] = color;
        fill(canvasLocal, x, y + 1, color);
        fill(canvasLocal, x + 1, y, color);
        fill(canvasLocal, x, y - 1, color);
        fill(canvasLocal, x - 1, y, color);
    }
    return canvasLocal;
}

export const draw = (input: string[]): CanvasType => {

    const drawingField = {} as ICanvas;
    const lines = [] as Array<ILine>;
    const rectangles = [] as Array<IRectangle>;
    const bucketfilles = [] as Array<IBucketFill>;

    input.map((item: string) => {
        const command = item.split(' ');
        switch (command[0].toUpperCase()) {
            case 'C':
                if (command[1] && command[2]) {
                    drawingField.w = Number(command[1]);
                    drawingField.h = +command[2];
                }
                break;
            case 'L':
                if (command[1] && command[2] && command[3] && command[4]) {
                    const line = {
                        x1: +command[1],
                        y1: +command[2],
                        x2: +command[3],
                        y2: +command[4]
                    } as ILine;

                    lines.push(line)
                }
                break;
            case 'R':
                if (command[1] && command[2] && command[3] && command[4]) {
                    const rectangle = {
                        x1: +command[1],
                        y1: +command[2],
                        x2: +command[3],
                        y2: +command[4]
                    } as IRectangle;

                    rectangles.push(rectangle)
                }
                break;
            case 'B':
                if (command[1] && command[2] && command[3]) {
                    const bucketfill = {
                        x: +command[1],
                        y: +command[2],
                        color: command[3]
                    } as IBucketFill;

                    bucketfilles.push(bucketfill)
                }
                break;
            default: break;
        }
    })

    try {
        if (drawingField.h && drawingField.w) {
            let canvasLocal = generateCanvas(drawingField);
            // console.log(canvasLocal)
            lines.map((line: ILine) => canvasLocal = drawLine(canvasLocal, line));
            rectangles.map((rectangle: IRectangle) => canvasLocal = drawRectangle(canvasLocal, rectangle));
            bucketfilles.map((bucketFill: IBucketFill) => canvasLocal = fill(canvasLocal, bucketFill.x, bucketFill.y, bucketFill.color))
            return canvasLocal;
        } else throw 'Canvas not created.'
    } catch (error) {
        console.log('Error: ' + error)
    }


    return [[]];
}
