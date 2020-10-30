import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,MDBBtn  } from "mdbreact";
import { Button, Icon } from 'semantic-ui-react';

export default class Header extends React.Component {

    state = {
        isOpen: false
    };
    
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar style={{backgroundColor: '#52BE80'}} dark expand="md">
                <MDBNavbarBrand style={{fontWeight: 'bold', marginLeft: '10%', fontSize: 18}}>
                <strong className="white-text">DELTAZONE</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left style={{marginLeft: '13%'}}>
                    <MDBNavItem style={{marginTop: 8, color: 'white', fontSize: 14}} >
                    OpenDatasets
                    </MDBNavItem>
                    <MDBNavItem style={{margin: 8, marginLeft: '5%', color: 'white', fontSize: 14}} className="mr-2">
                    StatisticalRigor
                    </MDBNavItem>
                    <MDBNavItem style={{margin: 8, marginLeft: '5%', color: 'white', fontSize: 14}} className="mr-2">
                    Pricing
                    </MDBNavItem>
                    <MDBNavItem style={{margin: 8, marginLeft: '5%', color: 'white', fontSize: 14}} className="mr-2">
                    Consulting
                    </MDBNavItem>
                    <MDBNavItem >
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                        <span className="mr-2">Resources</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem>Fields</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem style={{ marginTop: 8, marginRight: '10%'}}>
                        <Icon inverted name='search' size='large' />
                    </MDBNavItem>
                    <MDBNavItem style={{ marginTop: 8, marginRight: '5%', marginLeft: '5%'}}>
                        <Icon inverted name='user' size='large' />
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }

}