"use client";
import React from 'react';

import Button from './Button';

interface Params {
    className?: string
}


const Input: React.FC<Params> = ({ className }) => {
    const [prompts, setPrompts] = React.useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompts(event.target.value);
        console.log(prompts);
    };
    

    return (
        <>
        <input 
        placeholder="Enter your text here" 
        onChange={onChange} 
        className={className}   
        value={prompts}
        />
          <Button prompt={prompts}>Click me</Button>
        </>
    );
};
export default Input;


