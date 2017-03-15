import React, { Component } from 'react'
import { MemoListContainer } from './MemosListContainer'
import { ShownTypeTogglerContainer } from './ShownTypeTogglerContainer'

export default class MemoListApp extends Component {
    render() {
        return (
            <div>
                <ShownTypeTogglerContainer/>
                <MemoListContainer/>
            </div>
        );
    }
}