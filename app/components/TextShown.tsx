import React from 'react';


interface TextShownProps {
    oldstate: any;
}


const TextShown: React.FC<TextShownProps> = ({ oldstate }) => {
  
    return (
        <div className="flex justify-center ">
        <div className="p-4 border rounded-md bg-amber-100 shadow-lg inline-block">
            <p className="text-lg font-semibold text-gray-800">{oldstate}</p>
        </div>
        </div>
    );
};

export default TextShown;