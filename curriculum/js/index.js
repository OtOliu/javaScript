"use strict"
const divDom = window.Ayi.$('table-data-wrap')
const tableDom = window.Ayi.createEl('table')

let styles = {
	width: '100%',
	border:'0',
	cellpadding:'0',
	cellspacing:'0',
	id:'table-data-wrap'
}
window.Ayi.setAttr(tableDom, styles)


let thHtml = `<thead><tr>`
tableThead.forEach((item, index, arr) => {
	let width = item.width ? ` width="${item.width}"`: ''
	thHtml += `<th${width}>${item.lable}</th>`
})
thHtml+= `</tr></thead>`

let tbodyHtml = `<tbody>`;

let trHtml = ``
for(let i=0; i<tableData.length; i++) {
	trHtml += `<tr>`
	trHtml +=  `<td>
					<div class="face">
						<span class="gender icon-${tableData[i].face.gender}"></span>
						<img src="${tableData[i].face.img}" alt="">
					</div>
				</td>`
				
	trHtml += 	`<td>
				    <div class="people-name">
				        <h4 class="name">${tableData[i].name.trueName}</h4>
				        <span class="nickname option-05 fs-12">昵称：${tableData[i].name.nickname}</span>
				    </div>
				</td>`
				
	trHtml +=	`<td>
				    <div class="gender-wrap">
				        <span class="gender icon-girl ${tableData[i].face.gender === 'girl' ? '' : 'option-05'}"></span>
				        <span class="gender icon-boy ${tableData[i].face.gender === 'boy' ? '' : 'option-05'}""></span>
				    </div>
				</td>`
				
	trHtml +=   `<td>
					<div class="age text-center">
						<p>${tableData[i].age.number}</p>
						<span class="option-05 fs-12">（单身狗）</span>
					</div>
				</td>`
				
	trHtml +=   `<td>
					<div class="phone">
						${tableData[i].phone.code}<span class="option-05">（中国）</span><br />
						${tableData[i].phone.number}
					</div>
                </td>`
				
	trHtml +=   `<td>
					<div>
						<img src="${tableData[i].country.flag}" alt="${tableData[i].country.name}">
						<p class="country-name" style="color: red;">${tableData[i].country.name}</p>
					</div>
				</td>`
	let likeHtml = ``
	tableData[i].like.forEach((item) => {
		likeHtml += ` <span style="background-color: ${item.color};">${item.tag}</span>`
	})
	
	trHtml +=  `<td>
				    <div class="likes">${likeHtml}</div>
				</td>`
				
	trHtml +=  `<td>
					<div class="grade">
						<span class="role-name">${tableData[i].rank.name}</span>
						<div class="grade-wrap icon-grade">
							<div class="grade-high icon-grade" style="width: ${ tableData[i].rank.level * 16 }%;"></div>
						</div>
					</div>
				</td>`
				
	trHtml +=  `<td>
					<div class="operation">
						<a href="javascript: void(0);" class="operation-btn">设置</a>
						<ul class="links">
							<a href="javascript: void(0);">编辑</a>
							<a href="javascript: void(0);">删除</a>
							<a href="javascript: void(0);">锁定</a>
							<a href="javascript: void(0);">收起</a>
						</ul>
					</div>
				</td>`
				
	trHtml += `</tr>`
}
tbodyHtml += `${trHtml}</tbody>`

tableDom.innerHTML = thHtml + tbodyHtml			
divDom.appendChild(tableDom)
