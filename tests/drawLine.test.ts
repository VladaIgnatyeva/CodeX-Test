import { drawLine, generateCanvas, } from '../src/draw';

describe('draw line', () => {
    it('correct draw line 1', () => {
        const canvas = generateCanvas({ w: 4, h: 4 });
        const result1 = [
            ["-", "-", "-", "-", "-", "-"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", "x", " ", " ", "|"],
            ["|", " ", " ", " ", " ", "|"],
            ["-", "-", "-", "-", "-", "-"]
        ];

        expect(drawLine(canvas, {
            x1: 2,
            y1: 1,
            x2: 2,
            y2: 3
        })).toEqual(result1);

    });

    it('correct draw line 2', () => {
        const canvas = generateCanvas({ w: 4, h: 4 });

        const result = [
            ["-", "-", "-", "-", "-", "-"],
            ["|", " ", " ", " ", " ", "|"],
            ["|", " ", " ", " ", " ", "|"],
            ["|", " ", " ", " ", " ", "|"],
            ["|", " ", " ", " ", " ", "|"],
            ["-", "-", "-", "-", "-", "-"]
        ];

       /* expect(drawLine(canvas, {
            x1: 2,
            y1: 1,
            x2: 2,
            y2: 5
        })).toEqual(result);*/
    });
})