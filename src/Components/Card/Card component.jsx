import React from 'react';
import description from './description';

const Card = ({ title, description, avatarUrls }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            {/* Card Header */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>

            {/* Card Icons */}
            <div className="px-6 py-4">
                <div className="flex justify-between">
                    {avatarUrls.map((url, index) => (
                        <div key={index} className="relative">
                            <img
                                src={url}
                                alt={`Icon ${index + 1}`}
                                className="w-12 h-12 rounded-full cursor-pointer"
                            />
                            <div className="absolute top-0 left-0 w-full h-full rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <div className="w-full h-full bg-black opacity-50 rounded-full"></div>
                                <img
                                    src={url}
                                    alt={`Icon ${index + 1}`}
                                    className="w-12 h-12 rounded-full absolute top-0 left-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
