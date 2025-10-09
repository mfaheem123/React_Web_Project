import * as React from "react";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";

// Utility functions
function not(a, b) {
    return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
    return a.filter((value) => b.includes(value));
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

export default function ResponsiveTransferList() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([
        { key: 1, area: "Downtown", postcode: "D123" },
        { key: 2, area: "West End", postcode: "W456" },
        { key: 3, area: "North Ridge", postcode: "N789" },
    ]);
    const [right, setRight] = React.useState([
        { key: 4, area: "East Bay", postcode: "E101" },
    ]);

    const leftChecked = intersection(checked, left.map((i) => i.key));
    const rightChecked = intersection(checked, right.map((i) => i.key));

    const handleToggle = (key) => () => {
        const currentIndex = checked.indexOf(key);
        const newChecked = [...checked];

        if (currentIndex === -1) newChecked.push(key);
        else newChecked.splice(currentIndex, 1);

        setChecked(newChecked);
    };

    const numberOfChecked = (items) =>
        intersection(checked, items.map((i) => i.key)).length;

    const handleSelectAll = (items) => () => {
        const allKeys = items.map((i) => i.key);
        if (numberOfChecked(items) === items.length)
            setChecked(not(checked, allKeys));
        else setChecked(union(checked, allKeys));
    };

    // ➤ Move selected left → right
    const handleMoveRight = () => {
        const moveItems = left.filter((i) => leftChecked.includes(i.key));
        setRight([...right, ...moveItems]);
        setLeft(left.filter((i) => !leftChecked.includes(i.key)));
        setChecked(not(checked, leftChecked));
    };

    // ➤ Move selected right → left
    const handleCheckedLeft = () => {
        const moveItems = right.filter((i) => rightChecked.includes(i.key));
        setLeft([...left, ...moveItems]);
        setRight(right.filter((i) => !rightChecked.includes(i.key)));
        setChecked(not(checked, rightChecked));
    };

    // ➤ Move all left → right
    const handleAllRight = () => {
        setRight([...right, ...left]);
        setLeft([]);
        setChecked(not(checked, left.map((i) => i.key)));
    };

    // ➤ Move all right → left
    const handleMoveLeft = () => {
        setLeft([...left, ...right]);
        setRight([]);
        setChecked(not(checked, right.map((i) => i.key)));
    };

    const renderList = (title, items) => (
        <Card className="h-[70vh] w-[100%]">
            <CardHeader
                className="bg-[#424899] text-white"
                title={title}
                sx={{ px: 2, py: 1 }}
                titleTypographyProps={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    // color: "#000",
                }}
                avatar={
                    <Checkbox
                        onClick={handleSelectAll(items)}
                        checked={
                            numberOfChecked(items) === items.length && items.length !== 0
                        }
                        indeterminate={
                            numberOfChecked(items) !== items.length &&
                            numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                    />
                }
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
                subheaderTypographyProps={{
                    fontSize: "0.9rem",     // smaller subheader text
                    color: "white",
                }}
            />

            <Divider />
            <List
                sx={{
                    width: 'full',
                    height: 'full',
                    overflow: "auto",
                    bgcolor: "background.paper",
                }}
            >
                <div className="w-[100%] flex items-center justify-between p-2 h-full">
                    <div className="w-[70%] text-center bg-gray-300 h-full">
                        <h2>Area </h2>
                    </div>
                    <div className="w-[30%] text-center bg-gray-300">
                        <h2>PostCode</h2>
                    </div>
                </div>
                {items.map((item) => (
                    <div key={item.key}>
                        <ListItemButton onClick={handleToggle(item.key)}>
                            <ListItemIcon>
                                <Checkbox checked={checked.includes(item.key)} />
                            </ListItemIcon>

                            {/* Flex container for table-like layout */}
                            <div className="flex w-full justify-between px-2">
                                <span className="w-1/2 font-medium">{item.area}</span>
                                <span className="w-1/2 text-gray-600 text-right">{item.postcode}</span>
                            </div>
                        </ListItemButton>

                        {/* Horizontal line */}
                        <hr className="border-gray-300 mx-6" />
                    </div>
                ))}
            </List>
        </Card>
    );

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="p-5 w-full flex flex-col md:flex-row gap-5">
                {/* Left List */}
                <div className="w-full md:w-2/3 h-[50vh] md:h-[70vh] overflow-y-auto p-2 bg-white rounded-lg shadow">
                    {renderList("Available Areas", left)}
                </div>

                {/* Buttons Section */}
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:w-1/6 gap-2">
                    <Button
                        title="Drop All"
                        style={{
                            backgroundColor: '#424899',
                            color: 'white'
                        }}
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                    >
                        ≫
                    </Button>
                    <Button
                        title="Move One"
                        style={{
                            backgroundColor: '#D3D3D3',
                            color: 'black'
                        }}
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={handleMoveRight}
                        disabled={leftChecked.length === 0}
                    >
                        &gt;
                    </Button>
                    <Button
                        title="Return One"
                        style={{
                            backgroundColor: '#D3D3D3',
                            color: 'black'
                        }}
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                    >
                        &lt;
                    </Button>
                    <Button
                        title="Return All"
                        style={{
                            backgroundColor: '#424899',
                            color: 'white'
                        }}
                        fullWidth
                        variant="outlined"
                        size="large"
                        onClick={handleMoveLeft}
                        disabled={right.length === 0}
                    >
                        ≪
                    </Button>
                </div>

                {/* Right List */}
                <div className="w-full md:w-2/3 h-[50vh] md:h-[70vh] overflow-y-auto p-2 bg-white rounded-lg shadow">
                    {renderList("Selected Areas", right)}
                </div>
            </div>

            {/* Add Location Button */}
            <div className="flex justify-center items-center p-4">
                <Button style={{
                    backgroundColor: '#424899',
                    color: 'white'
                }} className="w-3/4 sm:w-2/3 md:w-2/5 bg-[#424899] text-white py-2 rouded-full">
                    Add Location
                </Button>
            </div>





        </div>

    );
}
