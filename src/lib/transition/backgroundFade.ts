import { linear } from "svelte/easing"

export const MAX_OPACITY = 0.5

type BackgroundOptions = { duration: number, }
export const backgroundFade = (node: HTMLElement, { duration }: BackgroundOptions) => {
	return {
		duration,
		css: (t: number) => { 
			const opacitiy = linear(t)
			return `
			background: rgba(0,0,0,${opacitiy * MAX_OPACITY});
			`
		}
	}
}
