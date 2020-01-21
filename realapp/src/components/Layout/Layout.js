import React from 'react';
import './Layout.css';

const layout = (props) => (
    <>
        <div>
            Toolbar
        </div>
        <main className="mt-16">
            { props.children }
        </main>
    </>
);

export default layout;
