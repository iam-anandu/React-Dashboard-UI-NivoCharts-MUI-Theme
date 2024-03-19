import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <ResponsiveLine
            data={data}
            theme={{
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
                        fill: colors.grey[100],
                    },
                },
                tooltip: {
                    container: {
                        background: "#ffffff",
                        color: colors.primary[500],
                        fontSize: 12,
                    },
                },
            }}
            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 0,
                tickValues: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: isDashboard ? undefined : "transportation", // changed
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickValues: 5, // changed
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                format: ".2s",
                legend: isDashboard ? undefined : "count", // added
                legendOffset: -40,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // changed
            lineWidth={1}
            pointSize={8}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 140,
                    translateY: 0,
                    itemsSpacing: 8,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 18,
                    itemOpacity: 0.75,
                    symbolSize: 16,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default LineChart;
