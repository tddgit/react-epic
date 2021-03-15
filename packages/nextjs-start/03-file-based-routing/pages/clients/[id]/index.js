import React from 'react';
import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    /**
     * @example
     */
    function loadProjectHandler() {
        // ...load data...
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' },
        });
    }

    return (
        <div>
            <h1>Client Project Page</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    );
};

export default ClientProjectsPage;
