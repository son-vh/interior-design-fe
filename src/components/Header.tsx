import React from "react";
import '../css/custom.css'


import {
  Collapse,
  Navbar,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

type mProps = {
  // hideDialog: () => void

}

type mstate = {
  activeIndex: number,
  animating: boolean,
  items: Array<{ src: string, altText: string, caption: string }>

}

class Header extends React.Component<mProps, mstate> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
      items: [
        {
          src: 'https://mdbootstrap.com/img/new/slides/041.jpg',
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: 'https://mdbootstrap.com/img/new/slides/042.jpg',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: 'https://mdbootstrap.com/img/new/slides/043.jpg',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ]

    }
  }
  render() {
    console.log('render');
    return (
      <div>
        <div className="nav-bar">
          <Navbar light expand="md">
            <img width="70px" height="auto" src={'img/logo_2.png'} alt="logo" />
            <Collapse isOpen={true} navbar>
              <Nav className="ms-auto" navbar >
                <NavLink href="/about" className="nav">
                  About
                </NavLink>
                <NavLink href="/blog" className="nav">
                  Blog
                </NavLink>
                <NavLink href="/album" className="nav">
                  Album
                </NavLink>
                <UncontrolledDropdown nav inNavbar >
                  <DropdownToggle nav className="nav">
                    <span>Thi công nội thất </span>
                    <i className="fa fa-angle-down ms-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Thi công chung cư
                    </DropdownItem>
                    <DropdownItem>
                      Thi công biệt thự
                    </DropdownItem>
                    <DropdownItem>
                      Thi công công viên
                    </DropdownItem>
                    <DropdownItem>
                      Thi công nhà lầu
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav className="nav">
                    Thiết kế nội thất
                    <i className="fa fa-angle-down ms-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Thiết kế biệt thự
                    </DropdownItem>
                    <DropdownItem>
                      Thiết kế chung cư
                    </DropdownItem>
                    <DropdownItem>
                      Thiết kế công viên
                    </DropdownItem>
                    <DropdownItem>
                      Thiết kế nhà lầu
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>


      </div>

    );

  }

}

export default Header;