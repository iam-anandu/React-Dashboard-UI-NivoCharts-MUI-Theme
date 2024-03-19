const ColorBox = ({ color }) => {
    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: color,
                margin: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {color}
        </div>
    );
};

export default ColorBox;

{
    /* <div style={{ display: "flex", flexDirection: "column" }}>
    <ColorBox color="#666666" />
    <ColorBox color="#141b2d" />
    <ColorBox color="#4cceac" />
    <ColorBox color="#db4f4a" />
    <ColorBox color="#6870fa" />
</div>; */
}
