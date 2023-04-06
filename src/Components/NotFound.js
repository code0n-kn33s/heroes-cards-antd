import React from 'react';
import { BackButton } from '../Elements';
export function NotFound() {
    return (
        <div className='not-found-page'>
            <h1>404</h1>
            <h2>
                <BackButton/>
                NotFound
            </h2>



        </div>
    )
}
