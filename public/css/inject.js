import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "bodyWrapper:before": {
        "content": "",
        "position": "fixed",
        "left": 0,
        "right": 0,
        "zIndex": -1,
        "display": "block",
        "backgroundImage": "url('https://cdn3.vox-cdn.com/uploads/chorus_asset/file/4387649/Golden-Gate-Bridge_-San-Francisco_-CA.-Creative-Commons-by-Thomas-Hawk..0.jpg')",
        "width": "100%",
        "height": "100%",
        "backgroundSize": "cover"
    },
    "bodyWrapper": {
        "position": "relative",
        "zIndex": 0,
        "color": "#fff",
        "fontFamily": "'Roboto', sans-serif",
        "background": "#1e5799",
        "alignItems": "center",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "navWrapper": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "hamburger-menu": {
        "fontSize": 25,
        "cursor": "pointer",
        "color": "#000",
        "border": "1px solid #fff",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "backgroundColor": "#fff"
    },
    "navbar-toggle": {
        "background": "none",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0,
        "marginTop": 28,
        "marginRight": 6,
        "marginBottom": 10,
        "marginLeft": 6,
        "paddingTop": 12,
        "paddingRight": 14,
        "paddingBottom": 12,
        "paddingLeft": 14,
        "border": "2px solid black",
        "color": "#000"
    }
});