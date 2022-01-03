import { Table, Popconfirm } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Coupon.module.css'
import { connect } from "react-redux";
import { getCouponList } from '../../actions/coupon';
import datetimeUtil from '../../utils/datetime-util';
import Image from 'next/image'
import { CaretDownOutlined } from '@ant-design/icons';


const Coupon = props => {
    const { dispatch, coupon_list } = props
    const [coupons, setCoupons] = useState([])
    // const [couponCounts, setCouponCounts] = useState(0)
    const [isColDescendSort, setIsColDescendSort] = useState(
        {
            couponCode: false,
            discount: false,
            maxRedemption: false,
            startDate: false,
            status: false
        }
    )

    const columns = [
        {
            title: "Coupon Details",
            // eslint-disable-next-line react/display-name
            render: (record) => (
                <React.Fragment>
                    <div>
                        <span className={styles.table_label}>Coupon:</span>
                        <span>{record.couponCode}</span>
                    </div>
                    <div>
                        <span className={styles.table_label}>Discount:</span>
                        <span>{`$ ${record.discount} (${record.comment})`}</span>
                    </div>
                    <div>
                        <span className={styles.table_label}>Limit:</span>
                        <span>{`${record.maxRedemption} per user`}</span>
                    </div>
                    <div>
                        <span className={styles.table_label}>Validity:</span>
                        <span>{datetimeUtil.format(record.startDate, datetimeUtil.TYPE_DoMMMYYYY)}-{datetimeUtil.format(record.expiryDate, datetimeUtil.TYPE_DoMMMYYYY)}</span>
                    </div>
                    <div>
                        <span className={styles.table_label}>Status:</span>
                        <span>{record.status}</span>
                    </div>
                </React.Fragment>
            ),
            responsive: ["xs"]
        },
        {
            title: (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Coupon</span>
                    <span>
                        <CaretDownOutlined
                            style={isColDescendSort.couponCode ? { color: '#355ae0' } : { color: '#bbb' }}
                            onClick={() => handleColSort('couponCode', isColDescendSort.couponCode)}
                        />
                    </span>
                </div>
            ),
            dataIndex: 'couponCode',
            responsive: ['sm'],
        },
        {
            title: (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Discount</span>
                    <span>
                        <CaretDownOutlined
                            style={isColDescendSort.discount ? { color: '#355ae0' } : { color: '#bbb' }}
                            onClick={() => handleColSort('discount', isColDescendSort.discount)}
                        />
                    </span>
                </div>
            ),
            dataIndex: 'discount',
            responsive: ['sm'],
            // eslint-disable-next-line react/display-name
            render: (val, record) => {
                return (
                    <div>
                        <div>{`$ ${record.discount}`}</div>
                        <div style={{ fontSize: '12px', color: '#bbb' }}>{record.comment}</div>
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Limit</span>
                    <span>
                        <CaretDownOutlined
                            style={isColDescendSort.maxRedemption ? { color: '#355ae0' } : { color: '#bbb' }}
                            onClick={() => handleColSort('maxRedemption', isColDescendSort.maxRedemption)}
                        />
                    </span>
                </div>
            ),
            dataIndex: 'maxRedemption',
            responsive: ['sm'],
            // eslint-disable-next-line react/display-name
            render: (val) => <span style={{ color: '#bbb' }}>{`${val} per user`}</span>
        },
        {
            title: (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Validity</span>
                    <span>
                        <CaretDownOutlined
                            style={isColDescendSort.startDate ? { color: '#355ae0' } : { color: '#bbb' }}
                            onClick={() => handleColSort('startDate', isColDescendSort.startDate)}
                        />
                    </span>
                </div>
            ),
            dataIndex: 'startDate',
            responsive: ['sm'],
            // eslint-disable-next-line react/display-name
            render: (val, record) => {
                return (
                    <div>
                        <div>{datetimeUtil.format(record.startDate, datetimeUtil.TYPE_DoMMMYYYY)}</div>
                        <div style={{ fontSize: '12px', color: '#bbb' }}>{datetimeUtil.format(record.expiryDate, datetimeUtil.TYPE_DoMMMYYYY)}</div>
                    </div>
                )
            }
        },
        {
            title: (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Status</span>
                    <span>
                        <CaretDownOutlined
                            style={isColDescendSort.status ? { color: '#355ae0' } : { color: '#bbb' }}
                            onClick={() => handleColSort('status', isColDescendSort.status)}
                        />
                    </span>
                </div>
            ),
            dataIndex: 'status',
            responsive: ['sm'],
        },
        {
            title: 'Actions',
            align: 'right',
            // eslint-disable-next-line react/display-name
            render: (val, record) => {
                return (
                    <div>
                        <Popconfirm
                            title="Are you sure delete this record?"
                            onConfirm={() => handleDelete(record.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Image src="/vertical-ellipsis.svg" height={20} width={20} className={styles.icon} />
                        </Popconfirm>

                    </div>
                )
            }
        },
    ];

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        initData()
        // eslint-disable-next-line
    }, [coupon_list])

    const getData = () => {
        dispatch(getCouponList())

    }

    const initData = () => {
        if (coupon_list && coupon_list.length > 0) {
            setCoupons(coupon_list)
            // setCouponCounts(coupon_count)
        }
    }

    const handleColSort = (key, isSort) => {
        let newSort = { ...isColDescendSort }
        newSort[key] = !isSort
        for (let inKey in newSort) {
            if (inKey !== key) {
                newSort[inKey] = false
            }
        }
        setIsColDescendSort(newSort)
        let newDatas = JSON.parse(JSON.stringify(coupons))
        newDatas = !isSort ?
            newDatas.sort((a, b) => (a[key] == b[key] ? 0 : a[key] > b[key] ? -1 : 1)) :
            newDatas.sort((a, b) => (a.id == b.id ? 0 : a.id > b.id ? -1 : 1))
        setCoupons(newDatas)
    }

    const handleDelete = id => {
        let newDatas = coupons && coupons.length > 0 && coupons.filter(coupon => coupon.id !== id)
        setCoupons(newDatas)
    }

    // const onChange = (pagination, filters, sorter, extra) => {
    //     console.log('params===>', pagination, filters, sorter, extra);
    // }

    const renderShowTotal = (pageSize, pageRange) => {
        let pageStart = pageRange && pageRange[0]
        let pageEnd = pageRange && pageRange[1]
        return `Showing ${pageStart} - ${pageEnd} of ${pageSize}`
    }

    const renderTable = () => {
        console.log('1')
        console.log('2')
        console.log('3')
        if (coupons && coupons.length > 0) {
            return (
                <Table
                    size="small"
                    rowKey="id"
                    rowClassName={(record, index) => index % 2 === 0 ? styles.table_row_light : styles.table_row_dark}
                    columns={columns}
                    dataSource={coupons}
                    // onChange={onChange}
                    pagination={{
                        pageSize: 20,
                        showTotal: renderShowTotal,
                    }}
                />
            )
        }
    }
    return (
        <div className={styles.main}>
            {renderTable()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coupon_list: state.coupon.coupon_list,
        coupon_count: state.coupon.coupon_count
    };
};

export default connect(mapStateToProps, null)(Coupon);
