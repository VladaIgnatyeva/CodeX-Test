import { drawRectangle, generateCanvas, } from '../src/draw';

describe('draw rectangle', () => {

    it('correct line props', () => {
        const canvas = generateCanvas({ w: 10, h: 15 });
        expect(() => {
            drawRectangle(canvas, {
                x1: -3,
                y1: -1,
                x2: 3,
                y2: 5
            })
        }).toThrow('Parameters for drawing a rectangle cannot be negative.');

        expect(() => {
            drawRectangle(canvas, {
                x1: 6,
                y1: 2,
                x2: 17,
                y2: 5
            })
        }).toThrow('The line cannot go beyond the boundaries of the canvas.');
    })

    it('correct drawing of two intersecting rectangles', () => {
        let canvas = generateCanvas({ w: 8, h: 8 });
        const result = [
            ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
            ["|", "x", "x", "x", "x", "x", " ", " ", " ", "|"],
            ["|", "x", " ", " ", " ", "x", " ", " ", " ", "|"],
            ["|", "x", " ", "x", "x", "x", "x", "x", " ", "|"],
            ["|", "x", "x", "x", "x", "x", " ", "x", " ", "|"],
            ["|", " ", " ", "x", " ", " ", " ", "x", " ", "|"],
            ["|", " ", " ", "x", " ", " ", " ", "x", " ", "|"],
            ["|", " ", " ", "x", "x", "x", "x", "x", " ", "|"],
            ["|", " ", " ", " ", " ", " ", " ", " ", " ", "|"],
            ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
        ];

        canvas = drawRectangle(canvas, {
            x1: 1,
            y1: 1,
            x2: 5,
            y2: 4
        });

        canvas = drawRectangle(canvas, {
            x1: 3,
            y1: 3,
            x2: 7,
            y2: 7
        });

        expect(canvas).toEqual(result);

    });

})
