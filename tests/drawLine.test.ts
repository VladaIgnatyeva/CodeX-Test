import { drawLine, generateCanvas, } from '../src/draw';

describe('draw line', () => {
    const canvas = generateCanvas({ w: 10, h: 15 });
    it('correct line props', () => {
        expect(() => {
            drawLine(canvas, {
                x1: -3,
                y1: -1,
                x2: 3,
                y2: 5
            })
        }).toThrow('Parameters for drawing a line cannot be negative.');

        expect(() => {
            drawLine(canvas, {
                x1: 3,
                y1: 1,
                x2: 3,
                y2: -5
            })
        }).toThrow('Parameters for drawing a line cannot be negative.');

        expect(() => {
            drawLine(canvas, {
                x1: 0,
                y1: 1,
                x2: 3,
                y2: 5
            })
        }).toThrow('Not all parameters are specified.');

        expect(() => {
            drawLine(canvas, {
                x1: 2,
                y1: 1,
                x2: 13,
                y2: 5
            })
        }).toThrow('The line cannot go beyond the boundaries of the canvas.');

        expect(() => {
            drawLine(canvas, {
                x1: 2,
                y1: 2,
                x2: 6,
                y2: 5
            })
        }).toThrow('Only horizontal and vertical lines can be drawn.');

        expect(generateCanvas({ w: 10, h: 10 })).toHaveLength(12);

    });

    it('correct draw line', () => {
        const canvas = generateCanvas({ w: 4, h: 4 });
        const result = [
            ["-", "-", "-", "-", "-", "-"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", " ", " ", " ", "|"],
            ["-", "-", "-", "-", "-", "-"]
        ];

        expect(drawLine(canvas, {
            x1: 2,
            y1: 3,
            x2: 2,
            y2: 1
        })).toEqual(result);

    });

})