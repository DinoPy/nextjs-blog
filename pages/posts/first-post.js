import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title> First Post Page</title>
			</Head>

			{/* <Script
				src='https://connect.facebook.net/en_US/sdk.js'
				strategy='lazyOnload'
				onLoad={() => {
					console.log('script loaded');
				}}
			/> */}
			<div>First Post</div>
		</Layout>
	);
};

export default FirstPost;
