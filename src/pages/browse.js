import React from 'react';
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

export default function Browse( props ) {
    const { series } = useContent( 'series' )
    const { films } = useContent( 'films' )
    const slides = selectionFilter( { series, films });

    // console.log(slides)
    return (
        <div>
            Hello from Browse
        </div>
    );
}
