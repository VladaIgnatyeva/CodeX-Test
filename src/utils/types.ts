export interface ICanvas {
    w: number,
    h: number
}

export interface ILine {
    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface IRectangle {
    x1: number,
    y1: number,
    x2: number,
    y2: number
}

export interface IBucketFill {
    x: number,
    y: number,
    color: string,
}

export interface IDrawingField {
    canvas?: ICanvas,
    line?: Array<ILine>,
    rectangle?: IRectangle[],
    bucketFill?: IBucketFill[]
}