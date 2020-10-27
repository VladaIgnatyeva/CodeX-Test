import React from 'react';
import { IDrawingField, } from '../utils/types'
import './DrawingField.css';
import { getRandomInt } from '../utils/randomInt'

interface DrawingFieldProps {
    canvas?: []
}

export const DrawingField = ({ canvas }: DrawingFieldProps) => {
    return (
        <div className='drawingField-container'>
            {
                canvas ? canvas.map((row: Array<string>) => {
                    return <div className='row' key={getRandomInt(12435345)}>
                        {row.map((col: string) => {
                            return <span key={getRandomInt(678769)}>{col}</span>
                        })}
                    </div>
                }) : null
            }
        </div>
    )
}