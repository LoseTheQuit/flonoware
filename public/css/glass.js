import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "jumbo_text": {
        "fontSize": 182,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 100,
        "marginLeft": 0
    },
    "poll_question_container": {
        "border": "1px solid #d4d4d4",
        "color": "white",
        "display": "block",
        "backgroundImage": "url('https://cdn3.vox-cdn.com/uploads/chorus_asset/file/4387649/Golden-Gate-Bridge_-San-Francisco_-CA.-Creative-Commons-by-Thomas-Hawk..0.jpg')",
        "backgroundSize": "cover"
    },
    "card": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "border": "1px solid",
        "display": "inline-block",
        "flexDirection": "column",
        "background": "rgba(0, 107, 148, .25)",
        "borderRadius": 0
    },
    "card-overlay": {
        "backgroundColor": "rgba(0, 0, 0, .750)",
        "width": "100%",
        "height": "100%"
    },
    "background_overlay": {
        "backgroundColor": "rgba(0, 0, 0, .750)",
        "width": "100%",
        "minHeight": 100 * vh
    },
    "ghost-botton": {
        "border": "1px solid #fff",
        "paddingTop": 10,
        "paddingRight": 40,
        "paddingBottom": 10,
        "paddingLeft": 40,
        "color": "white",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "poll-response": {
        "display": "flex",
        "flexWrap": "wrap"
    },
    "poll-question": {
        "textAlign": "left",
        "fontSize": 34
    },
    "stats_container": {
        "display": "inline-block",
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 250,
        "marginLeft": 0
    },
    "hide": {
        "display": "none"
    },
    "the_other_hide": {
        "width": 0,
        "height": 0
    }
});