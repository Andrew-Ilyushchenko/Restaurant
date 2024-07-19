import React from "react";

interface IInputProps{
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fieldName?: string;
    className?: string;
    classNameBtn?: string;
    btnText?: string;
}

const Input = ({value, onChange, fieldName, className, btnText, classNameBtn}: IInputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <>
            <input className={className} placeholder="Enter Your Email Address" />
            <button className={classNameBtn}>subscribe</button>
        </>
    )
}

export default Input;