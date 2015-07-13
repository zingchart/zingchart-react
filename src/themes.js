var themes = {
    light: {
        palette: [
            //text-state, gradient1, gradient2, hover-state
            ["#FFFFFF", "#ea794d", "#ea794d", "#FF4800"], // First series palette...
            ["#FFFFFF", "#07BCDE", "#06A6C2", "#00D9FF"],
            ["#FFFFFF", "#7ABF30", "#5F9427", "#84c93a"],
            ["#FFFFFF", "#FFC107", "#DAA506", "#ffd65c"],
            ["#FFFFFF", "#bcc5fe", "#7488f9", "#536DFE"],
            ["#FFFFFF", "#D32F2F", "#F44336", "#FF5252"]
        ],
        graph: {
            backgroundColor: "#FFFFFF",
            title: {
                backgroundColor: "#FFFFFF",
                color: "#3F3F3F",
                bold: 0,
                fontSize: "18px"
            },
            plot: {
                aspect: 'spline',
                lineWidth: "1px",
                marker: {
                    borderColor: "white",
                    shadow: false
                },
                marginBottom: "100px"
            },
            legend: {
                backgroundColor: "#FFFFFF",
                borderColor: "#c9c9c9",
                shadow: false,
                marker: {
                    type: "circle",
                    borderColor: "none"
                }
            },
            tooltip: {
                shadow: "0"
            },
            scaleX: {
                lineColor: "#C7C7C7",
                lineWidth: "2px",
                tick: {
                    lineColor: "#C7C7C7",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#EBEBEB",
                    alpha: 1
                },
                item: {
                    color: "#3F3F3F"
                }
            },
            scaleY: {
                lineColor: "#C7C7C7",
                lineWidth: "2px",
                tick: {
                    lineColor: "#C7C7C7",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#EBEBEB",
                    alpha: 1
                },
                item: {
                    color: "#3F3F3F"
                }
            }
        },
        line: {
            plot: {
                lineWidth: 2
            },
            scaleY: {
                guide: {
                    lineStyle: 'solid'
                }
            }
        },
        area: {
            plot: {
                lineWidth: 2
            }
        }
    },
    slate: {
        palette: [
            //text-state, gradient1, gradient2, hover-state
            ["#FFFFFF", "#4ECDC4", "#4ECDC4", "#4ECDC4"], // First series palette...
            ["#FFFFFF", "#C7F464", "#C7F464", "#C7F464"],
            ["#FFFFFF", "#FF6B6B", "#FF6B6B", "#FF6B6B"],
            ["#FFFFFF", "#F6D681", "#F6D681", "#F6D681"],
            ["#FFFFFF", "#C44D58", "#C44D58", "#C44D58"],
            ["#FFFFFF", "#00D9FF", "#00D9FF", "#00D9FF"]
        ],
        graph: {
            backgroundColor: "#556270",
            title: {
                backgroundColor: "#556270",
                color: "#e7e7e7",
                bold: 0,
                fontSize: "18px"
            },
            plot: {
                aspect: 'spline',
                lineWidth: "1px",
                marker: {
                    borderColor: "#FFFFFF",
                    shadow: false
                },
                marginRight: "100px"
            },
            legend: {
                backgroundColor: "#556270",
                alpha: 1,
                borderColor: "#c9c9c9",
                shadow: false,
                marker: {
                    type: "circle",
                    borderColor: "none"
                },
                item: {
                    color: "#e7e7e7"
                },

            },
            tooltip: {
                shadow: "0"
            },
            scaleX: {
                lineColor: "#C7C7C7",
                lineWidth: "2px",
                tick: {
                    lineColor: "#C7C7C7",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#8195ab",
                    alpha: 1
                },
                item: {
                    color: "#e7e7e7"
                }
            },
            scaleY: {
                lineColor: "#C7C7C7",
                lineWidth: "2px",
                tick: {
                    lineColor: "#C7C7C7",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#8195ab",
                    alpha: 1
                },
                item: {
                    color: "#D1D1D1"
                }
            }
        },
        line: {
            plot: {
                lineWidth: 2,
                shadow: false
            },
            scaleY: {
                guide: {
                    lineStyle: 'solid'
                }
            }
        },
        area: {
            plot: {
                lineWidth: 2
            }
        }

    },
    dark: {
        palette: [
            //text-state, gradient1, gradient2, hover-state
            ["#FFFFFF", "#ea794d", "#ea794d", "#FF4800"], // First series palette...
            ["#FFFFFF", "#07BCDE", "#06A6C2", "#00D9FF"],
            ["#FFFFFF", "#7ABF30", "#5F9427", "#84c93a"],
            ["#FFFFFF", "#FFC107", "#DAA506", "#FFBF00"],
            ["#FFFFFF", "#bcc5fe", "#7488f9", "#536DFE"],
            ["#FFFFFF", "#D32F2F", "#F44336", "#FF5252"]
        ],
        graph: {
            backgroundColor: '#272822',
            plot: {
                aspect: 'spline',
                lineWidth: "1px",
                marker: {
                    borderColor: "c9c9c9",
                    shadow: false
                },
            },
            title: {
                backgroundColor: "#272822",
                color: "#D1D1D1",
                bold: 0,
                fontSize: "18px"
            },
            tooltip: {
                shadow: "0"
            },
            legend: {
                backgroundColor: "#272822",
                borderColor: "#707070",
                shadow: false,
                alpha: 1,
                marker: {
                    type: "circle"
                },
                item: {
                    color: "#D1D1D1"
                }
            },
            scaleX: {
                lineColor: "#A2A2A2",
                lineWidth: "2px",
                tick: {
                    lineColor: "#A2A2A2",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#3B3B3B",
                    alpha: 1
                },
                item: {
                    color: "#D1D1D1"
                }
            },
            scaleY: {
                lineColor: "#A2A2A2",
                lineWidth: "2px",
                tick: {
                    lineColor: "#A2A2A2",
                    lineWidth: "1px"
                },
                guide: {
                    lineStyle: 'solid',
                    lineColor: "#3B3B3B",
                    alpha: 1
                },
                item: {
                    color: "#D1D1D1"
                }
            }
        },
        line: {
            plot: {
                lineWidth: 2
            },
            scaleY: {
                guide: {
                    lineStyle: 'solid'
                }
            }
        },
        area: {
            plot: {
                lineWidth: 2
            }
        }
    }
};
