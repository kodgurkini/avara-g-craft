import { Link, useLocation } from "react-router-dom";
import React from "react";

interface NavItemProps extends React.ComponentPropsWithoutRef<typeof Link> {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const NavItem = ({ to, children, icon, ...props }: NavItemProps) => {
  const location = useLocation();

  // Function to determine if the link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Link
      to={to}
      className={isActive(to) ? "active" : ""}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        textDecoration: "none",
      }}
      draggable={false}
      data-state={isActive(to) ? "active" : "inactive"}
      {...props}
    >
      <div
        className="nav-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "5px",
          width: "26px",
          height: "26px",
        }}
      >
        {icon}
      </div>
      <p
        className="nav-text"
        style={{
          color: isActive(to) ? "#2C2D30" : "#808183",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
          letterSpacing: "-0.09px",
        }}
      >
        {children}
      </p>
    </Link>
  );
};

export default NavItem;
