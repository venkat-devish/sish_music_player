import logoIcon from "../assets/sish-logo.png";
import "../styles/side_bar.scss";
import { Link } from "react-router-dom";
import { primaryButtons } from "../utilities/sidebar-buttons";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

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
      <div className="sidebar__content">
        {primaryButtons.map(({ Title, Path, Icon }: PrimaryButtonProps) => {
          return (
            <div className="sidebar__actions">
              <Link to={`${Path}`} className="sidebar__button">
                <Icon />
                <p>{Title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
