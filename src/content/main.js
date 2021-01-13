/*
 * @description: 
 * @author: 小羽
 * @Date: 2021-01-12 18:40:53
 * @LastEditTime: 2021-01-13 10:14:40
 * @Copyright: 1.0.0
 */
import { createApp } from 'vue'
import app from './components/app.vue'

joinContent(app)
injectJsInsert()

function joinContent (element) {
	const div = document.createElement('div')
	div.id = 'joinContentApp'
	document.body.appendChild(div)
	console.log(div)
	createApp(element).mount('#joinContentApp')
}

function injectJsInsert () {
	document.addEventListener('readystatechange', () => {
		const injectPath = 'js/inject.js'
		const script = document.createElement('script')

		script.setAttribute('type', 'text/javascript')
		script.src = chrome.extension.getURL(injectPath)
		document.body.appendChild(script)
	})
}
