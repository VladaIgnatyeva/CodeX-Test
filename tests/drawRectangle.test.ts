import { drawRectangle, generateCanvas, } from '../src/draw';

describe('draw rectangle', () => {
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