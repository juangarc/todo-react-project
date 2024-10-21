import React from "react";
import { TodoIcon } from ".";

function CompleteIcon({completed, onChange}) {
    return (
        <TodoIcon
        type="check"
        color={completed ? 'green' : 'gray'}
        onClick={onChange} />
    );
}

export { CompleteIcon };
