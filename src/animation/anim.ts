const empty = {
        name: "",
        duration: "",
        easing: "",
        fillMode: 'forwards',
}

const SlideInAnim = {
	old: empty,
	new: {
		name: "slide-in",
		delay: "0.2s",
		duration: "0.5s",
		easing: "ease-in-out",
	},
};

export const slideIn = {
	forwards: SlideInAnim,
	backwards: SlideInAnim,
};

const ScaleOutAnim = {
    old:{
        name: "scale-out",
        duration: "0.5s",
        easing: "ease-in-out",
        fillMode: 'forwards',        
    }, 
    new: 
    empty,
};

export const scaleOut = {
	forwards: ScaleOutAnim,
	backwards: ScaleOutAnim,
};

const ScaleInAnim = {
    old:empty,
    new:{
        name: "scale-in",
        duration: "0.5s",
        easing: "ease-in-out",
        fillMode: 'backwards',        
    },  
};

export const scaleIn = {
	forwards: ScaleInAnim,
	backwards: ScaleInAnim,
};

