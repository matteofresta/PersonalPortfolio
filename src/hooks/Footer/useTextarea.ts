import {useState} from "react";

export const useTextarea = () => {
    const [inputValue, setInputValue] = useState('');
    const [isTextarea, setIsTextarea] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.length > 40) {
            setIsTextarea(true);
        } else {
            setIsTextarea(false);
        }
    };

    return {inputValue, handleInputChange, isTextarea};
};
