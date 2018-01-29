/**
 * 
 * @authors wanglifeng
 * @date    2018-01-29 21:51:22
 * @version $Id$
 */
!function(){
 	function writeCode(prefix,code,fn){
 		let container=document.querySelector('#code')
 		let styleTag=document.querySelector('#styleTag')
 		let n=0
 		setInterval(()=>{
 			n+=1
 			container.innerHTML=code.substring(0,n);
 			styleTag.innerHTML=code.substring(0,n)
 			container.scrollTop=container.scrollHeight
 			if(n>=code.length){
 				window.clearInterval()
 				fn&&fn.call()
 			}
 		},10)
 	}
 	let code=
`.preview{
	/*
	 *首先，需要准备皮卡丘的皮
	 */
	height:100%;
 	border:1px solid green;
 	display: flex;
 	justify-content: center;
 	align-items:center;
 	background: #fee433;
}
.wrapper{
	width:100%;
	height:165px;
	position:relative;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
	width:0px;
	height:0px;
	border-style:solid;
	border-width:12px;
	border-color: black transparent transparent transparent;
	border-radius: 11px;
	position:absolute;
	left:50%;
	top:28px;
	margin-left:-12px;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
	width:49px;
	height:49px;
	background: #2e2e2e;
	position: absolute;
	border-radius: 50%;
	border:2px solid #000;
}
/*
 * 画皮卡丘的眼珠
 */
.eye::before{
	content:'';
	display: block;
	height:24px;
	width:24px;
	background: #fff;
	position:absolute;
	border-radius:50%;
	left:0;
	top:-1px;
	border: :2px solid #000;
}
/*
 * 左眼在左边（废话）
 */
.eye.left{
	right:50%;
	margin-right:90px;
}
/*
 * 右眼在右边（废话）
 */
.eye.right{
	left:50%;
	margin-left:90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face{
	width:68px;
	height:68px;
	background:#fc0d1c;
	border:2px solid black;
	border-radius:50%;
	position: absolute;
	top:85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left{
	right: 50%;
	margin-right:116px;
}
.face.right{
	left: 50%;
	margin-left:116px;
}
/*
 * 上嘴唇
 */
.upperLip{
	height:25px;
	width:80px;
	border:2px solid black;
	position: absolute;
	top:50px;
	background: #fde348;
}
.upperLip.left{
	right:50%;
	border-bottom-left-radius: 40px 25px;
	border-top:none;
	border-right:none;
	transform: rotate(-20deg);
}
.upperLip.right{
	left:50%;
	border-bottom-right-radius: 40px 25px;
	border-top:none;
	border-left:none;
	transform: rotate(20deg);
}
.lowerLip-wrapper{
	bottom:0;
	position: absolute;;
	left:50%;
	margin-left:-150px;
	height:110px;
	overflow: hidden;;
	width:300px;
}
/*
 * 下嘴唇
 */
.lowerLip{
	width:300px;
	height:3500px;
	background: #990513;
	border-radius: 200px/2000px;
	border:2px solid black;
	position: absolute;;
	bottom:0;
	overflow: hidden;;
}
/*
 * 最后，画皮卡丘的舌头
 */
.lowerLip::after{
	content:'';
	position:absolute;
	bottom:-20px;
	width:100px;
	height:100px;
	background: #fc4a62;
	left:50%;
	margin-left:-50px;
	border-radius: 50px;
}`
 	writeCode('',code)
 }.call()

