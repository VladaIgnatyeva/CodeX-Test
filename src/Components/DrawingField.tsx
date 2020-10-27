import React from 'react';
import { IDrawingField, } from '../utils/types'
import './DrawingField.css';
import { getRandomInt } from '../utils/randomInt'

interface DrawingFieldProps {
    drawingField?: IDrawingField,
    canvas?: any
}

export const DrawingField = ({ drawingField, canvas }: DrawingFieldProps) => {
    console.log('canvas ', canvas);
    return (
        <div className='drawingField-container'>
            {
                canvas.map((row: Array<string>) => {
                    return <div className='row' key={getRandomInt(12345)}>
                        {row.map((col: string) => {
                            return <span key={getRandomInt(6789)}>{col}</span>
                        })}
                    </div>
                })
            }
        </div>
    )
}