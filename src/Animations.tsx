export const Animations = ()=> {
    const transition = {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.9]
    }

    const maskAnimation = {
        initial: {
            width: "100%"
        },
        animate: {
            width: "0%"
        }
    }

    const worksTitleParent = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity:1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
                delayChildren: 1.5,
            }
        }
    }

    const parent = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity:1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 5.8,
            }
        }
    }

    const angleTextReveal = {
        initial: {
            rotate: 10,
            y: "200%",
        },
        animate: {
            rotate: 0,
            y: "0%",
        }
    }

    const textReveal = {
        initial: {
            opacity: 0,
            x: "190%",
        },
        animate: {
            opacity: 1,
            x: "0%",
            transition: {
                duration: 0.9
            }
        }
    }

    const opacityReveal = {
        initial: {
            y: "120%",
            opacity: 0
        },
        animate: {
            y: "0",
            opacity: 1
        }
    }

    return {
        transition,
        maskAnimation,
        parent,
        textReveal,
        opacityReveal,
        worksTitleParent,
        angleTextReveal
    }
}