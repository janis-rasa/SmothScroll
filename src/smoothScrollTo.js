/**
 * Smooth scrolling with Promise to the selected target using small instantaneous jumps of the scrollTo method
 *
 * @param {string} targetSelector                 Target querySelector string. Required
 * @param {number} [scrollOffset = 0]             Optional offset from Target in pixels. Default is 0
 * @param {string} [scrollableSelector = "html"]  Optional Scrollable element querySelector string. Default is html
 * @param {number} [scrollStep = 15]              Optional step size in pixels for the Scroll instant jump. Default is 15
 * @param {number} [scrollDelay = 15]             Optional scroll delay in milliseconds between instant jumps. Default is 15
 * @returns {Promise}                             Promise object represents the end of the Scroll
 */

export const smoothScrollTo = (
	targetSelector,
	scrollOffset = 0,
	scrollableSelector = "html",
	scrollStep = 15,
	scrollDelay = 15
) => {
	return new Promise((resolve, reject) =>
		_smoothScrollTo(
			resolve,
			reject,
			targetSelector,
			scrollOffset,
			scrollableSelector,
			scrollStep,
			scrollDelay
		)
	)
}

const _smoothScrollTo = (
	resolve,
	reject,
	targetSelector,
	scrollOffset,
	scrollableSelector,
	scrollStep,
	scrollDelay
) => {
	const scrollable = document.querySelector(scrollableSelector)
	const target = document.querySelector(targetSelector)

	if (!document.contains(target)) {
		reject("The Scroll target does not exist!")
	} else if (!document.contains(scrollable)) {
		reject("The Scrollable element does not exist!")
	} else if (
		!(
			scrollable.scrollWidth > scrollable.clientWidth ||
			scrollable.scrollHeight > scrollable.clientHeight
		)
	) {
		reject("The Scrollable element cannot scroll right now!")
	}

	let i = scrollable.scrollTop
	const targetPosition = target.getBoundingClientRect().top + i - scrollOffset
	let isScrollDown = false
	if (i < targetPosition) {
		isScrollDown = true
	}

	const id = setInterval(function () {
		scrollable.scrollTo({
			left: 0,
			top: i,
			behavior: "instant",
		})
		if (isScrollDown) {
			i = i + scrollStep
		} else {
			i = i - scrollStep
		}

		if (
			(i > targetPosition && isScrollDown) ||
			(i < targetPosition && !isScrollDown)
		) {
			clearInterval(id)
			resolve("Scrolling is done!")
		}
	}, scrollDelay)
}
