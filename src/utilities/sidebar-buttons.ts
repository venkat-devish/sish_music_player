import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export type PrimaryButtonsType = {
    Title: string;
    Path: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}[]

export const primaryButtons: PrimaryButtonsType = [
    { Title: 'Home', Path: "/", Icon: HomeIcon },
    { Title: 'Search', Path: "/search", Icon: SearchIcon },
    { Title: 'Trending Artists', Path: "/artists", Icon: WhatshotIcon },
    { Title: 'Podcasts', Path: "/podcasts", Icon: PodcastsIcon },
]