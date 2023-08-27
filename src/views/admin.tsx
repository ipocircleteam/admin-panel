import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IpoDetailsTab from "../components/tab/ipodetails";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Admin() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div id="admin-panel" className="flex justify-center items-start fixed top-[50px]">

      <Box sx={{ width: "100vw" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className=""
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Blog" {...a11yProps(1)} />
            <Tab label="Analytics" {...a11yProps(2)} />
            <Tab label="Marketing" {...a11yProps(3)} />
            <Tab label="Data" {...a11yProps(4)} />
          </Tabs>

        </Box>
        <CustomTabPanel value={value} index={0}>
          Overview Panel
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Blog
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Analytics
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Marketing
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <IpoDetailsTab />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
