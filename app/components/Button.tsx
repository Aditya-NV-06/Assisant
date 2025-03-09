"use client"
import { GoogleGenerativeAI } from '@google/generative-ai';
import TextShown from './TextShown';
import { useState } from 'react';

async function on(prompt: string) {
    const apiKey = process.env.NEXT_PUBLIC_APIKEY as string;
  
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are Senior developer at a software company. You are working on a project with a team of developers. You are responsible for the development of the project. You have to write a code for the project. Write a code for the project. Explain only up to 150 words and write the code in the code block.",
    });

    const result = await model.generateContent({
        contents: [
            {
                role: 'user',
                parts: [
                    {
                        text: prompt,
                    }
                ],
            }
        ],
    });

    console.log(result.response.text());
    return result.response.text();
}

const Button = ({ prompt, children }: { prompt: string, children: React.ReactNode }) => {
    const [answer, setAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = async () => {
        setLoading(true);
        const result = await on(prompt);
        setAnswer(result);
        setLoading(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <button
                onClick={handleClick}
                style={{
                    marginTop: '10px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007BFF',
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
            >
                {children}
            </button>
            {loading && <p>Loading...</p>}
            {answer && <TextShown oldstate={answer} />}
        </div>
    );
};

export default Button;