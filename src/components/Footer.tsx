import React from "react";
import { Col, Row } from "reactstrap";

class Footer extends React.Component<{}, {}>{
    constructor(props: any) {
        super(props);
    }
    render() {
        console.log('render footer');
        return (
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <div className="ml-5 leading-9">
                            <a>
                                <img width="70px" height="auto" src="img/logo_2.png" />
                            </a>
                            <p className="leading-9 mt-4">
                                Công ty TNHH Thương mại Minh Tứ
                                <br />
                                Tầng 3, Lầy 5, Mỹ Thành City
                                <br />
                                ngothiminhtu@gmail.com
                                <br />
                                Mã số thuế: 123456789
                                <br />
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mt-5">
                            <p className="leading-9">
                                Điều lệ - Điều khoản
                                <br />
                                Liên hệ
                                <br />
                            </p>
                            <a>
                                <img src="img/BCT_register.png" />
                            </a>
                            <a>
                                <img src="img/BCT_notify.png" />
                            </a>

                        </div>

                    </Col>

                </Row>
            </div>
        );

    }
}

export default Footer;