import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

const Input = ({ left, right, ...rest }: InputProps ) => {
    return (
        <div className={'flex items-center gap-4 rounded-base bg-secondary w-full h-[var(--input-height)] px-4'}>
            {left}
            <input
                className={'w-full border-none outline-none placeholder:opacity-70 text-sm'}
                {...rest}
            />
            {right}
        </div>
    );
};

export default Input;
