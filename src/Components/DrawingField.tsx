import React from 'react';
import { IDrawingField, } from '../utils/types'
import './DrawingField.css'

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
                   // debugger;
                    return <div className='row'>
                        {row.map((col: string) => {
                            if(col === ' '){
                                return <span>  </span>
                            } else return <span>{col}</span>
                        })}</div>
                })
            }
        </div>
    )
}