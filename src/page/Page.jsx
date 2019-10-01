import React from 'react';

import '../sass/components/page.scss';

const Page = (props) => {
    return (
        <div className="page">
            <h1>This is a second route to test React Router!</h1>
            <div>
                <p>If you're seeing this page you successfully loaded multiple routes with React-router</p>
            </div>
        </div>
    );
}

export default Page;