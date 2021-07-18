import { Layout } from 'antd'
import React from 'react'
import Coupon from '../../components/Coupon';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const { Content } = Layout;

const CouponPage = props => {
    return (
        <Layout style={{ maxHeight: '100vh' }}>
            <Header />
            <Layout>
                <Content style={{ background: '#fff', overflowY: 'scroll' }}>
                    <Coupon />
                </Content>
            </Layout>
            <Footer />
        </Layout>
    )
}

export default CouponPage