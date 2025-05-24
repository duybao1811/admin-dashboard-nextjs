import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const Button = ({ disabled, onClick, children, className }: ButtonProps) => {
    return (
        <button
            className={`flex items-center justify-center rounded-base bg-primary w-full h-[var(--button-height)] cursor-pointer text-white ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
