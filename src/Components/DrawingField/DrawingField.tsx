import React from 'react';
import { CanvasType } from '../../utils/types';
import './DrawingField.css';
import Counter from '../../utils/Counter'

interface DrawingFieldProps {
    canvas?: CanvasType
}

export const DrawingField = ({ canvas }: DrawingFieldProps) => (
    <div className='drawingField-container'>
        {
            canvas?.map((row: Array<string>) => (
                <div className='row' key={Counter.getCount()}>
                    {
                        row.map((col: string) => (
                            <span key={Counter.getCount()}>{col}</span>
                        ))
                    }
                </div>
            ))
        }
    </div>
)