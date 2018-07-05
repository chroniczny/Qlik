(function () {
    var files = ["https://code.highcharts.com/stock/highstock.js", "https://code.highcharts.com/highcharts-more.js", "https://code.highcharts.com/highcharts-3d.js", "https://code.highcharts.com/modules/data.js", "https://code.highcharts.com/modules/exporting.js", "https://code.highcharts.com/modules/funnel.js", "https://code.highcharts.com/modules/annotations.js", "https://code.highcharts.com/modules/solid-gauge.js"], loaded = 0;
    if (typeof window["HighchartsEditor"] === "undefined") {
        window.HighchartsEditor = {ondone: [cl], hasWrapped: false, hasLoaded: false};
        include(files[0]);
    } else {
        if (window.HighchartsEditor.hasLoaded) {
            cl();
        } else {
            window.HighchartsEditor.ondone.push(cl);
        }
    }
    function isScriptAlreadyIncluded(src) {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].hasAttribute("src")) {
                if ((scripts[i].getAttribute("src") || "").indexOf(src) >= 0 || (scripts[i].getAttribute("src") === "http://code.highcharts.com/highcharts.js" && src === "https://code.highcharts.com/stock/highstock.js")) {
                    return true;
                }
            }
        }
        return false;
    }

    function check() {
        if (loaded === files.length) {
            for (var i = 0; i < window.HighchartsEditor.ondone.length; i++) {
                try {
                    window.HighchartsEditor.ondone[i]();
                } catch (e) {
                    console.error(e);
                }
            }
            window.HighchartsEditor.hasLoaded = true;
        }
    }

    function include(script) {
        function next() {
            ++loaded;
            if (loaded < files.length) {
                include(files[loaded]);
            }
            check();
        }

        if (isScriptAlreadyIncluded(script)) {
            return next();
        }
        var sc = document.createElement("script");
        sc.src = script;
        sc.type = "text/javascript";
        sc.onload = function () {
            next();
        };
        document.head.appendChild(sc);
    }

    function each(a, fn) {
        if (typeof a.forEach !== "undefined") {
            a.forEach(fn);
        } else {
            for (var i = 0; i < a.length; i++) {
                if (fn) {
                    fn(a[i]);
                }
            }
        }
    }

    var inc = {}, incl = [];
    each(document.querySelectorAll("script"), function (t) {
        inc[t.src.substr(0, t.src.indexOf("?"))] = 1;
    });
    function cl() {
        if (typeof window["Highcharts"] !== "undefined") {
            var options = {
                "chart": {
                    "type": "spline",
                    "polar": false,
                    "scrollablePlotArea": {"minWidth": 600, "scrollPositionX": 1}
                },
                "series[0]": {"negativeColor": "#0088FF", "color": "#FF0000"},
                "title": {"text": "Wind speed during two days"},
                "subtitle": {"text": "13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway"},
                "tooltip": {"valueSuffix": " m/s"},
                "plotOptions": {
                    "spline": {
                        "lineWidth": 4,
                        "states": {"hover": {"lineWidth": 5}},
                        "marker": {"enabled": false},
                        "pointInterval": 3600000,
                        "pointStart": 1518480000000
                    }, "series": {"animation": false}
                },
                "series": [{"name": "Hestavollane", "_colorIndex": 0, "_symbolIndex": 0}, {
                    "name": "Vik",
                    "_colorIndex": 1,
                    "_symbolIndex": 1
                }],
                "navigation": {"menuItemStyle": {"fontSize": "10px"}},
                "data": {
                    "csv": "\"DateTime\";\"Hestavollane\";\"Vik\"\n\"2018-02-13 00:00:00\";3.7;0.2\n\"2018-02-13 01:00:00\";3.3;0.1\n\"2018-02-13 02:00:00\";3.9;0.1\n\"2018-02-13 03:00:00\";5.1;0.1\n\"2018-02-13 04:00:00\";3.5;0.3\n\"2018-02-13 05:00:00\";3.8;0.2\n\"2018-02-13 06:00:00\";4;0.3\n\"2018-02-13 07:00:00\";5;0.1\n\"2018-02-13 08:00:00\";6.1;0.7\n\"2018-02-13 09:00:00\";3.7;0.3\n\"2018-02-13 10:00:00\";3.3;0.2\n\"2018-02-13 11:00:00\";6.4;0.2\n\"2018-02-13 12:00:00\";6.9;0.3\n\"2018-02-13 13:00:00\";6;0.1\n\"2018-02-13 14:00:00\";6.8;0.3\n\"2018-02-13 15:00:00\";4.4;0.4\n\"2018-02-13 16:00:00\";4;0.3\n\"2018-02-13 17:00:00\";3.8;0.2\n\"2018-02-13 18:00:00\";5;0.3\n\"2018-02-13 19:00:00\";4.9;0.2\n\"2018-02-13 20:00:00\";9.2;0.4\n\"2018-02-13 21:00:00\";9.6;0\n\"2018-02-13 22:00:00\";9.5;0.9\n\"2018-02-13 23:00:00\";6.3;0.3\n\"2018-02-14 00:00:00\";9.5;0.7\n\"2018-02-14 01:00:00\";10.8;1.1\n\"2018-02-14 02:00:00\";14;1.8\n\"2018-02-14 03:00:00\";11.5;1.2\n\"2018-02-14 04:00:00\";10;1.4\n\"2018-02-14 05:00:00\";10.2;1.2\n\"2018-02-14 06:00:00\";10.3;0.9\n\"2018-02-14 07:00:00\";9.4;0.8\n\"2018-02-14 08:00:00\";8.9;0.9\n\"2018-02-14 09:00:00\";10.6;0.2\n\"2018-02-14 10:00:00\";10.5;0.4\n\"2018-02-14 11:00:00\";11.1;1.2\n\"2018-02-14 12:00:00\";10.4;0.3\n\"2018-02-14 13:00:00\";10.7;2.3\n\"2018-02-14 14:00:00\";11.3;1\n\"2018-02-14 15:00:00\";10.2;0.7\n\"2018-02-14 16:00:00\";9.6;1\n\"2018-02-14 17:00:00\";10.2;0.8\n\"2018-02-14 18:00:00\";11.1;2\n\"2018-02-14 19:00:00\";10.8;1.2\n\"2018-02-14 20:00:00\";13;1.4\n\"2018-02-14 21:00:00\";12.5;3.7\n\"2018-02-14 22:00:00\";12.5;2.1\n\"2018-02-14 23:00:00\";11.3;2\n\"2018-02-15 00:00:00\";10.1;1.5",
                    "googleSpreadsheetKey": false,
                    "googleSpreadsheetWorksheet": false
                }
            };
            new Highcharts.Chart("highcharts-61a67430-150c-47ba-b6bb-0f7c7ba2f9ad", options);
        }
    }
})();