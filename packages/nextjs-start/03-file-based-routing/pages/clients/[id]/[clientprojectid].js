import React from 'react';
import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
    const router = useRouter();
    console.log(router.query);
    console.log(router.pathname);

    return (
        <div>
            <h1>Selected Client Project Page</h1>
        </div>
    );
};

export default SelectedClientProjectPage;
