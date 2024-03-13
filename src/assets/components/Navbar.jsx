import React from "react";
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <div className="min-w-full h-8 bg-gray-900 flex flex-wrap flex-row-reverse gap-4">
                <NavLink
                    className="text-white"
                    style={({ isActive }) => {
                        return isActive ? { color: '#FDE68A' } : {}
                    }}
                    end to="Contact"
                >Contact Us
                </NavLink>
                <NavLink
                    className="text-white"
                    style={({ isActive }) => {
                        return isActive ? { color: '#FDE68A' } : {}
                    }}
                    end to="Menu"
                >Menu
                </NavLink>
                <NavLink
                    className="text-white"
                    style={({ isActive }) => {
                        return isActive ? { color: '#FDE68A' } : {}
                    }}
                    end to="/"
                >Home
                </NavLink>

            </div>
        </div>
    )
}

export default Navbar