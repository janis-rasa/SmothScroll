import { smoothScrollTo } from "../../src/smoothScrollTo.js"

const scrollToNextButtons = document.querySelectorAll(".to-next")
const scrollToPrevButtons = document.querySelectorAll(".to-prev")

const processScroll = (target) => {
	smoothScrollTo(target, 100, 10, 10)
		.then((successMsg) => {
			console.log("Success: " + successMsg)
		})
		.catch((errorMsg) => {
			console.error("Error: " + errorMsg)
		})
}

const scrollToNext = (event) => {
	const selector = "#" + event.target.parentElement.nextElementSibling.getAttribute("id")
	processScroll(document.querySelector(selector))
}

const scrollToPrev = (event) => {
	const selector = "#" + event.target.parentElement.previousElementSibling.getAttribute("id")
	processScroll(document.querySelector(selector))
}

window.addEventListener("load", (event) => {
	scrollToNextButtons.forEach((item) => item.addEventListener("click", scrollToNext))
	scrollToPrevButtons.forEach((item) => item.addEventListener("click", scrollToPrev))
})
