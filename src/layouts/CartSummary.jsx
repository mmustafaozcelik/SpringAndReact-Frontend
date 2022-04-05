import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function Sepet() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>acer Laptop</Dropdown.Item>
                    <Dropdown.Item>asus laptop</Dropdown.Item>
                    <Dropdown.Item>hp laptop</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
