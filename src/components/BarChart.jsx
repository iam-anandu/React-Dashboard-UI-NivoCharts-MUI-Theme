import { useTheme } from "@mui/material";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveBarCanvas
            data={data}
            theme={{
                // added
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fontSize: 16,
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        background: "#ffffff",
                        color: "#333333",
                        fontSize: 12,
                    },
                },
            }}
            keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "donut",
                // "pizza",
                // "spaghetti",
                // "waffle",
                // "apple pie",
                // "tiramisu",
            ]}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            pixelRatio={1.25}
            padding={0.3} // changed
            innerPadding={0}
            minValue="auto"
            maxValue="auto"
            groupMode="stacked"
            layout="vertical"
            reverse={false}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "red_blue" }}
            colorBy="id"
            borderWidth={0}
            borderRadius={0}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "country", // changed
                legendPosition: "middle",
                legendOffset: 36,
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "food", // changed
                legendPosition: "middle",
                legendOffset: -40,
                truncateTickAt: 0,
            }}
            enableGridX={false} // changed
            enableGridY={false} // changed
            enableLabel={false} // changed
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            isInteractive={true} // changed
            legends={[
                // changed
                {
                    dataFrom: "keys",
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 120,
                    translateY: -10,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    symbolSize: 20,
                },
            ]}
        />
    );
};

export default BarChart;
