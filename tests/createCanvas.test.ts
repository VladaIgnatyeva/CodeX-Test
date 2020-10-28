import { generateCanvas } from '../src/draw';

describe('create canvas', () => {

    it('correct canvas height', () => {
        //expect(generateCanvas({ w: 10, h: null })).toThrow('Width or height of canvas is not specified.');
        //expect(generateCanvas({ w: 10, h: -10 })).toThrow('Canvas width and height cannot be negative.');
        expect(generateCanvas({ w: 10, h: 10 })).toHaveLength(12);
        expect(generateCanvas({ w: 10, h: 10 })).not.toHaveLength(10);
    });

    it('correct canvas width', () => {
        //expect(generateCanvas({ w: 0, h: 0 })).toThrow('Canvas not created.');
        //expect(generateCanvas({ w: 0, h: 12 })).toThrow('Canvas not created.');
        //expect(generateCanvas({ w: -10, h: 2 })).toThrow('Canvas width and height cannot be negative.');
        expect(generateCanvas({ w: 10, h: 10 })[0]).toHaveLength(12);
        expect(generateCanvas({ w: 12, h: 4 })[0]).toHaveLength(14);
        expect(generateCanvas({ w: 3, h: 10 })[0]).not.toHaveLength(8);
    })

    it('correct fill of the canvas border', () => {
        expect(generateCanvas({ w: 10, h: 10 })[0][2]).toBe('-');
        expect(generateCanvas({ w: 10, h: 10 })[2][0]).toBe('|');
        expect(generateCanvas({ w: 10, h: 10 })[1][1]).toBe(' ');
    })

})
