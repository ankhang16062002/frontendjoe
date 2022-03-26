import {
  Person,
  Settings,
  Visibility,
  DarkMode,
  ManageAccounts,
  Security,
  MoveToInbox,
  SupportAgent,
} from "@mui/icons-material";
const motchDatas = [
  {
    name: "My Profile",
    icon: <Person />,
  },
  {
    name: "Settings",
    icon: <Settings />,
    menu: [
      {
        name: "Apperance",
        icon: <Visibility />,
      },
      {
        name: "Interface",
        icon: <DarkMode />,
      },
    ],
  },
  {
    name: "Accounts",
    icon: <ManageAccounts />,
    menu: [
      {
        name: "Security",
        icon: <Security />,
      },
      {
        name: "Archive",
        icon: <MoveToInbox />,
      },
    ],
  },
  {
    name: "Support",
    icon: <SupportAgent />,
  },
];

export default motchDatas;
