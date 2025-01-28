'use client'
import React from 'react';
import Layout from '../../../lib/components/Layout';
import PageHeading from '../components/PageHeading';
import { Client } from '@notionhq/client';

const HomePage = () => {
    return (
        <Layout>
            <div> <PageHeading text="WALLPAPERS" /> </div>
        <div>
            <h1>Hello, World!</h1>
        </div>
        </Layout>
    );
};

export default HomePage;