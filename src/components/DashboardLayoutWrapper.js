// components/DashboardLayoutWrapper.js

import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
// import StarIcon from "@mui/icons-material/Star";
import InfoIcon from '@mui/icons-material/Info';
import PassPic from "../assets/n@A.jpg"
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';

const NAVIGATION = [
  { kind: "header", title: "Main" },
  { segment: "", title: "Home", icon: <DashboardIcon /> },
  { segment: "experience", title: "Experience", icon: <WorkIcon /> },
  { segment: "education", title: "Education", icon: <SchoolIcon /> },
  {
    segment: "projects",
    title: "Projects",
    icon: <FolderIcon />,
    children: [
      { segment: "academic", title: "Academic Projects", icon: <FolderIcon /> },
      { segment: "industry", title: "Industry Projects", icon: <FolderIcon /> },
    ],
  },
  { segment: "aboutme", title: "About Me", icon: <InfoIcon /> },
  { segment: "contactme", title: "Contact Me", icon: <ContactsRoundedIcon /> },
];

const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: { colorSchemeSelector: "class" },
});

function useDemoRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path),
  };
}

export default function DashboardLayoutWrapper() {
  const router = useDemoRouter();

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout
      branding={{
  logo: (
    <div
      style={{
        width: 32,
        height: 32,
        overflow: 'hidden',
        borderRadius: '50%', // optional, for circular crop
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        src={PassPic}
        alt="Nidhin Dashboard"
        style={{
          height: '48px', // bigger than container to crop
          width: 'auto',
        }}
      />
    </div>
  ),
  title: 'NIDHIN BABU',
}}

      >
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
