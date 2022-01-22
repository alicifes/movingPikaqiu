import writeString from "./string.js";

const player ={
    i:1,
    newString:undefined,
    time:100,
    id:undefined,
    table:{
        '.start':'start',
        '.stop':'pause',
        '.slow':'slow',
        '.normal':'normal',
        '.fast':'fast'
    },
    bindEvents:()=>{
        for (let key in player.table) {
            if(player.table.hasOwnProperty(key)){ //这里检查如果key是player的table里面的自身的属性，而不是其他的属性（后来添加的）
                const value = player.table[key]
                document.querySelector(key).onclick =player[value]
            }
        }
    },
    init:()=>{
        player.bindEvents()
    },
    run:()=>{
        if(player.i>writeString.length){
            window.clearInterval(player.id)
            return
        }
        player.newString = writeString.substr(0,player.i)
        player.i+=1
        document.querySelector("#styleTag").innerHTML= player.newString
        document.querySelector("#code").innerText=player.newString
        document.querySelector("#code").scrollTop=9999
    },
    play:(time)=>{
        player.id = setInterval(player.run,time)
    },
    pause:()=>{
        window.clearInterval(player.id)
    },
    slow:()=>{
        player.pause()
        player.play(500)
    },
    start:()=>{
        player.pause()
        player.play(300)
    },
    normal:()=>{
        player.pause()
        player.play(100)
    },
    fast:()=>{
        player.pause()
        player.play(0)
    }
}

player.init()





