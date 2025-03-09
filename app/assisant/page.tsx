import "../globals.css"
import Input from "../components/Input";


const Assiant = () => {
   
    

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500">
                <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">Assisant</h1>
                <div className="w-full max-w-md">
                    <Input className="p-4 border border-transparent rounded-lg shadow-lg focus:outline-none focus:ring-4 ring-green-300 focus:border-transparent w-full text-gray-900" />
                </div>
            </div>
        </>
    );
}

export default Assiant;
