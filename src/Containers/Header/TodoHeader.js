import React from 'react';
import './TodoHeader.css';

const TodoHeader = ({children, loading}) => {
    return (
        <header className="TodoHeader">
            <h1 className="TodoTitle">To-Do App</h1>

            {/* React.Children que nos ayuda a que CloneElement entienda sin importar cuantos elementos vienen en el props.children. */}
            {React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))}
        </header>
    );
}

export {TodoHeader};