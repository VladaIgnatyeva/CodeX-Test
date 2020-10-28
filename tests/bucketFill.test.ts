import { fill, generateCanvas, drawRectangle, drawLine } from '../src/draw';

let canvas = generateCanvas({ w: 15, h: 10 });
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

describe('fill', () => {
    it('correct fill canvas', () => {
        expect(fill(canvas, 13, 9, 'w')[1][1]).toBe(' ');
        expect(fill(canvas, 13, 9, 'i')[7][7]).toBe('i');
        expect(fill(canvas, 1, 2, 'e')[7][7]).toBe('i');
        expect(canvas[6][11]).toBe(' ');
    });
})