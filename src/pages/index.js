import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <h1>Index page</h1>
    <p>Image:</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
