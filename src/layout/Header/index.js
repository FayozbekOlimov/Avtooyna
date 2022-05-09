import { EyeOutlined, PhoneOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Button, Col, Image, Row, Select, Typography } from 'antd'
import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    // const { Text } = Typography;
    // const { Option } = Select;
    return (
        <header className='header'>
            <div className="container">
                <Row gutter={[16,16]}>
                    <Col span={16}>
                        <div className="header__left-item">
                            <Button 
                                type='link'
                                icon={<PhoneOutlined />}
                            />
                            <Link to='/'>
                                <img src="./assets/img/logo.svg" alt="logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        </header>
    )
}

export default Header

    // <Row >
    //                 <Col span={16} style={{ border: '1px solid red' }}>
    //                     <Row gutter={16}>
    //                         <Col span={8}>
    //                             <Button
    //                                 type='link'
    //                                 icon={<UnorderedListOutlined />}
    //                             />
    //                             <Image
    //                                 width={50}
    //                                 alt='logo'
    //                                 src='../../../public/assets/img/logo.svg'
    //                             />
    //                         </Col>
    //                         <Col span={8}>
    //                             <Row gutter={8} align='middle'>
    //                                 <Col span={4}>
    //                                     <Button
    //                                         type='primary'
    //                                         shape='circle'
    //                                         icon={<PhoneOutlined />}
    //                                         className='header__icon-button'
    //                                     />
    //                                 </Col>
    //                                 <Col span={20}>
    //                                     <Row>
    //                                         <Col span={24}>
    //                                             <a href="tel:+998 73 249-75-75">+998 73 249-75-75</a>
    //                                         </Col>
    //                                     </Row>
    //                                     <Row>
    //                                         <Col span={24}>
    //                                             <a href="tel:+998 73 243-08-35">+998 73 243-08-35</a>
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                             </Row>
    //                         </Col>
    //                         <Col span={8}>
    //                             <Row gutter={8} align='middle'>
    //                                 <Col span={4}>
    //                                     <Button
    //                                         type='primary'
    //                                         shape='circle'
    //                                         icon={<HiLocationMarker />}
    //                                     />
    //                                 </Col>
    //                                 <Col span={20}>
    //                                     <Row>
    //                                         <Col>
    //                                             <Text>Farg’ona sh, Istiqlol 1A uy</Text>
    //                                         </Col>
    //                                     </Row>
    //                                     <Row>
    //                                         <Col>
    //                                             <Text type='secondary'>Bizning manzil</Text>
    //                                         </Col>
    //                                     </Row>
    //                                 </Col>
    //                             </Row>
    //                         </Col>
    //                     </Row>
    //                 </Col>
    //                 <Col span={8} style={{ border: '1px solid red' }}>
    //                     <Row gutter={8} align='middle' style={{width: '100%', height: '100%'}}>
    //                         <Col span={12}>
    //                             <Button
    //                                 type='ghost'
    //                             >
    //                                 Konsultatsiya olish
    //                             </Button>
    //                         </Col>
    //                         <Col span={8}>
    //                             <Select defaultValue='uz'>
    //                                 <Option value='uz'>UZ</Option>
    //                                 <Option value='ru'>РУ</Option>
    //                             </Select>
    //                         </Col>
    //                         <Col span={4}>
    //                             <Button
    //                                 type='primary'
    //                                 icon={<EyeOutlined />}
    //                             />
    //                         </Col>
    //                     </Row>
    //                 </Col>
    //             </Row >