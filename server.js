let WebSocket=require('ws').Server
let wss=new WebSocket({
	port:8000
})
let wsArr=[]
wss.on('connection',(ws)=>{
	console.log('server has connected!')
	wsArr.push(ws)
	ws.on('message',(msg)=>{
		for(let ws of wsArr){
			ws.send(msg)
		}
	})

})
wss.on('close',()=>{
	for(let i=0;i<wsArr.length;i++){
		if(wsArr[i]===this){
			wsArr.splice(i,1)
		}
	}
})

console.log('server is running at 8000...')