import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "overlay": {
        "height": "100%",
        "width": 0,
        "position": "fixed",
        "zIndex": 1,
        "top": 0,
        "left": 0,
        "backgroundColor": "rgba(0, 0, 0, 0.9)",
        "overflowX": "hidden",
        "transition": "0.5s"
    },
    "overlay-content": {
        "position": "relative",
        "top": "25%",
        "width": "100%",
        "textAlign": "center",
        "marginTop": 30
    },
    "overlay a": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "textDecoration": "none",
        "fontSize": 36,
        "color": "#818181",
        "display": "block",
        "transition": "0.3s"
    },
    "overlay a:hover": {
        "color": "#f1f1f1"
    },
    "overlay a:focus": {
        "color": "#f1f1f1"
    },
    "overlay closebtn": {
        "position": "absolute",
        "top": 20,
        "right": 45,
        "fontSize": 60
    }
});