import { ICanvas, ILine, IRectangle, IBucketFill, CanvasType } from './utils/types';

const generateCanvas = (canvas: ICanvas): CanvasType => {
    const place = [] as any;
    for (var i = 0; i < canvas.h + 2; i++) {
        place[i] = [];
        for (var j = 0; j < canvas.w + 2; j++) {
            if (i === 0 || i === canvas.h + 1) {
                place[i][j] = '-';
            } else if (j === 0 || j === canvas.w + 1) {
                place[i][j] = '|';
            }
            else place[i][j] = ' ';
        }
    }
    return place;
}

const drawLine = (canvas: CanvasType, line: ILine): CanvasType => {
    const canvasLocal = canvas;
    if (line.x1 === line.x2) {
        for (let i = line.y1; i < line.y2 + 1; i++) {
            canvasLocal[i][line.x1] = 'x';
        }
    } else if (line.y1 === line.y2) {
        for (let i = line.x1; i < line.x2 + 1; i++) {
            canvasLocal[line.y1][i] = 'x';
        }
    }
    return canvasLocal;
}

const drawRectangle = (canvas: CanvasType, rectangle: IRectangle): CanvasType => {
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

const fill = (canvas: CanvasType, y: number, x: number, color: string): CanvasType => {
    let canvasLocal = canvas;
    const colorLocal = canvasLocal[x][y];
    if (colorLocal !== color && colorLocal !== 'x' && colorLocal !== '-' && colorLocal !== '|') {
        canvasLocal[x][y] = color;
        fill(canvasLocal, y + 1, x, color);
        fill(canvasLocal, y, x + 1, color);
        fill(canvasLocal, y - 1, x, color);
        fill(canvasLocal, y, x - 1, color);
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

    if (drawingField.w) {
        let canvasLocal = generateCanvas(drawingField);
        lines.map((line: ILine) => canvasLocal = drawLine(canvasLocal, line));
        rectangles.map((rectangle: IRectangle) => canvasLocal = drawRectangle(canvasLocal, rectangle));
        bucketfilles.map((bucketFill: IBucketFill) => canvasLocal = fill(canvasLocal, bucketFill.x, bucketFill.y, bucketFill.color))

        return canvasLocal;
    }

    return [[]];
}
