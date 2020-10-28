import { fill, generateCanvas, drawRectangle, drawLine } from '../src/draw';

let canvas = generateCanvas({ w: 15, h: 9 });
canvas = drawRectangle(canvas, {
    x1: 10,
    y1: 5,
    x2: 14,
    y2: 7
});

canvas = drawLine(canvas, {
    x1: 3,
    y1: 1,
    x2: 3,
    y2: 5
});

canvas = drawLine(canvas, {
    x1: 1,
    y1: 5,
    x2: 3,
    y2: 5
});

const result = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["|", "e", "e", "x", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["|", "e", "e", "x", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["|", "e", "e", "x", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["|", "e", "e", "x", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["|", "x", "x", "x", "w", "w", "w", "w", "w", "w", "x", "x", "x", "x", "x", "w", "|"],
    ["|", "w", "w", "w", "w", "w", "w", "w", "w", "w", "x", " ", " ", " ", "x", "w", "|"],
    ["|", "w", "w", "w", "w", "w", "w", "w", "w", "w", "x", "x", "x", "x", "x", "w", "|"],
    ["|", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["|", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "|"],
    ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
]


describe('fill', () => {
    it('correct fill canvas', () => {
        let canvasLocal = fill(canvas, 13, 9, 'w');
        expect(canvasLocal[1][1]).toBe(' ');
        //expect(fill(canvas, 13, 9, 'i')[7][7]).toBe('i');
        canvasLocal = fill(canvasLocal, 1, 2, 'e');
        expect(canvasLocal).toEqual(result);
        expect(canvasLocal[7][7]).toBe('w');
        //expect(canvas[6][12]).toBe(' ');
    });
})