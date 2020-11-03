(function () {
	"use strict"
	window.Ayi = {}
	
	function $(id) {
		if(typeof id != 'string') {
			throw new Error('参数ID必须是一个字符串')
		}
		const dom = document.getElementById(id)
		if(!dom) {
			throw new Error('dom 对象未找到')
		}
		return dom
	}
	window.Ayi.$ = $
	
	function createEl(node) {
		return document.createElement(node)
	}
	window.Ayi.createEl = createEl
	
	function setAttr(node, styles) {
		for(let key in styles) {
			node.setAttribute(key, styles[key])
		}
	}
	window.Ayi.setAttr = setAttr
})()
