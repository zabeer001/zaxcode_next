import React from 'react';

function SectionHeader({ title, text, action }) {
    return (
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
                <h2 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
                {text ? <p className="mt-5 max-w-2xl leading-8 opacity-60">{text}</p> : null}
            </div>
            {action}
        </div>
    );
}

export default SectionHeader;

