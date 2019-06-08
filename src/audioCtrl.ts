export function Audio (n:string) {
    let all = document.querySelectorAll('audio');
    all.forEach(a => {
        if(!a.paused) {
            a.pause()
            a.currentTime = 0
        }
    })
    let id = n.split('line')[1].substr(0,1);
    let audioName = '#v_0' + id;
    let audio = <HTMLVideoElement> document.querySelector(audioName);

    let subtitle = document.querySelector('.subtitle');
    let script = [
        "我的头发很长，很好看？ 啊，嗯，谢谢......要不要摸摸看？",
        "我也会很难办的。",
        "睡着了？睡吧多克塔，得做个干燥的好梦。",
        "别眨眼，你会错过自己的死状。", 
        "离我这么近......我，我可没有能完全保护你的自信！",
        "注意安全，多克塔",
        "呼呼地冲过去，咚地打倒敌人，啪地解决掉--原来你们是这么战斗的，我记住啦。"
    ]

    audio.play();
    subtitle.innerHTML = script[<any>id-1];
    
    audio.onended = function() {
        subtitle.innerHTML = '';
    };



}