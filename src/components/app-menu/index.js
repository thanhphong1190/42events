import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";
import { toggleAppMenu } from "../../redux/master/actions";

import "./style.scss";

const languages = [
  "English",
  "简体中文",
  "Bahasa Indonesia",
  "ภาษาไทย",
  "Tiếng Việt",
];
const menus = [
  {
    icon: "fa fa-sign-in",
    label: "Log in",
    onClick: () => {},
  },
  {
    icon: "fa fa-registered",
    label: "Register",
    onClick: () => {},
  },
  {
    icon: "fa fa-question-circle-o",
    label: "Guides and FAQ",
    onClick: () => {},
  },
  {
    icon: "fa fa-headphones",
    label: "Contact Us",
    onClick: () => {},
  },
];

const MenuRow = ({ icon, label, onClick }) => (
  <div className="__row" onClick={onClick}>
    <div className="__row--left">
      <i className={`menu-icon ${icon}`} aria-hidden="true"></i>
      <span className="menu-label">{label}</span>
    </div>
    <div className="__row--right">
      <i className="btn-icon fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
);
const AppMenu = ({ isOpen, toggleAppMenu }) => {
  const [language, setLanguage] = React.useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  return (
    <div className={classnames("app-menu-container", {
      "fade-in": isOpen,
      "fade-out": !isOpen
    })}>
      <div className="app-menu" onClick={toggleAppMenu}>
        <div className="__modal" onClick={(e) => e.stopPropagation()}>
          {menus.map((item, index) => (
            <MenuRow
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
          <hr className="menu-seperate-line" />
          <div className="__row" onClick={() => {}}>
            <div className="__row--left">
              <i className={`menu-icon fa fa-language`} aria-hidden="true"></i>
              <span className="menu-label">Language</span>
            </div>
            <div className="__row--right">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag="div" data-toggle="dropdown">
                  <span className="selected-language">{language}</span>
                  <i
                    className={classnames("btn-icon", {
                      "fa fa-chevron-right": !dropdownOpen,
                      "fa fa-chevron-down": dropdownOpen,
                    })}
                    aria-hidden="true"
                  ></i>
                </DropdownToggle>
                <DropdownMenu>
                  {languages.map((item, index) => (
                    <DropdownItem key={index} onClick={() => setLanguage(item)}>
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
      <div className="app-menu-backdrop" />
    </div>
  );
};

export default connect(null, { toggleAppMenu })(AppMenu);
