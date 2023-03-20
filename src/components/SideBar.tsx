import logoIcon from "../assets/logo.png";
import "../styles/side_bar.scss";
import { NavLink } from "react-router-dom";
import { primaryButtons, secondaryButtons } from "../utilities/sidebar-buttons";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { Divider } from "../organisms";

type PrimaryButtonProps = {
  Title: string;
  Path: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={logoIcon} alt="Logo" />
      <h1>sish</h1>
      <div className="sidebar__content">
        <div className="sidebar__content--primary">
          {primaryButtons.map(({ Title, Path, Icon }: PrimaryButtonProps) => {
            return (
              <div key={Path} className="sidebar__actions">
                <NavLink to={`${Path}`} className="sidebar__button">
                  <Icon />
                  <p>{Title}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="sidebar__content--secondary">
          {secondaryButtons.map(({ Title, Path, Icon }: PrimaryButtonProps) => {
            return (
              <div key={Path} className="sidebar__actions">
                <NavLink to={`${Path}`} className="sidebar__button">
                  <Icon />
                  <p>{Title}</p>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default SideBar;
