import React from 'react';
import { clients } from './data';

function ClientStrip() {
    return (
        <section className="border-b border-base-300 py-12">
            <h2 className="mb-6 text-center text-lg font-bold text-base-content/75">
                Building practical digital experiences for ambitious teams and growing businesses
            </h2>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {clients.map((client) => (
                    <div
                        key={client}
                        className="rounded-xl border border-base-300 bg-base-200/55 p-4 text-center text-sm font-bold text-base-content/55"
                    >
                        {client}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ClientStrip;
