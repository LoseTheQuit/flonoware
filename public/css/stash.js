import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "bodyOverlay": {
        "marginTop": 100,
        "position": "sticky",
        "WebkitAnimation": "fgMove 500s infinite",
        "animation": "fgMove 500s infinite",
        "background": "url('../img/customJumbotronoverlay.svg')",
        "backgroundSize": "cover",
        "width": "100%",
        "height": "auto",
        "minHeight": 1500
    },
    "h2": {
        "fontWeight": "300",
        "fontSize": 67
    },
    "hold_off_on_that": {
        "background": "linear-gradient(to bottom, #1e5799 0%, #27a2f4 21%, #2085c9 48%, #21b8d3 77%, #017bbc 100%)",
        "filter": "progid: DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#017bbc', GradientType=0)"
    },
    "robotoh1": {
        "fontWeight": "300",
        "fontSize": 67
    },
    "robotoh2": {
        "fontWeight": "300",
        "fontSize": 37,
        "paddingBottom": 30
    },
    "robotoh3": {
        "fontWeight": "300",
        "fontSize": 33,
        "marginTop": 200
    },
    "robotoHeader": {
        "fontWeight": "700",
        "fontSize": "25x"
    },
    "cardStyle": {
        "paddingTop": "3%",
        "paddingRight": "3%",
        "paddingBottom": "3%",
        "paddingLeft": "3%",
        "color": "#fff",
        "wordWrap": "break-word"
    },
    "cardOverlay1": {
        "background": "rgba(0, 107, 148, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay2": {
        "background": "rgba(0, 126, 173, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay3": {
        "background": "rgba(0, 144, 199, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay4": {
        "background": "rgba(0, 163, 224, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay5": {
        "background": "rgba(0, 182, 250, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay6": {
        "background": "rgba(20, 191, 255, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "cardOverlay7": {
        "background": "rgba(46, 198, 255, .75)",
        "border": 1,
        "borderStyle": "solid",
        "borderColor": "rgba(256, 256, 256, .25)"
    },
    "_blur": {
        "WebkitFilter": "blur(5px)",
        "MozFilter": "blur(5px)",
        "OFilter": "blur(5px)",
        "MsFilter": "blur(5px)",
        "filter": "blur(5px)"
    },
    "thta_missing_padding": {
        "paddingTop": 100,
        "paddingRight": 10,
        "paddingBottom": 100,
        "paddingLeft": 10
    },
    "theDividingLine": {
        "display": "block",
        "height": 3,
        "width": "90%",
        "background": "#fff"
    },
    "cardOverRide": {
        "paddingTop": "3%",
        "paddingRight": "3%",
        "paddingBottom": "3%",
        "paddingLeft": "3%",
        "background": "rgba(0, 0, 0, .005)"
    },
    "theWire": {
        "background": "rgba(0, 172, 0, .5)",
        "width": "100%",
        "height": "100%"
    },
    "theExceptionalP": {
        "lineHeight": 10
    }
});