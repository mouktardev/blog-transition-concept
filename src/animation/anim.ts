const empty = {
        name: "",
        duration: "",
        easing: "",
        fillMode: 'forwards',
}
const SlideAnim = {
	old: {
		name: "",
		duration: "",
		easing: "",
	},
	new: {
		name: "slide-in",
		delay: "0.2s",
		duration: "0.5s",
		easing: "ease-in-out",
	},
};

export const slideIn = {
	forwards: SlideAnim,
	backwards: SlideAnim,
};

const ScaleAnim = {
    old: 
    // {
        // name: "scale-in",
        // duration: "2s",
        // easing: "ease-in-out",
        // fillMode: 'forwards',
    // }
    empty
    ,
    new: {
        name: "scale-out",
        duration: "2s",
        easing: "ease-in-out",
        fillMode: 'forwards',
	},
};
export const scaleOut = {
	forwards: ScaleAnim,
	backwards: ScaleAnim,
};
