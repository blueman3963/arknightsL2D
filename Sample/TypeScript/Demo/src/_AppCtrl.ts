export namespace appControl 
{

    export class loadingProgress
    {

        Progress: number = 0; 
        Ready: boolean = false;
        log: string

        updatedLog() {
            if(document.querySelector('.log')){
                document.querySelector('.log').innerHTML = this.log
            }
        }

        public startload(name: string): void {
            console.log( name, '载入中' )
            this.log += name + '载入中' + '<br/>'
            this.updatedLog()
        }

        public loaded(name: string): void {
            this.log += name + '载入成功' + '<br/>'
            this.updatedLog()

            this.Progress ++
            if(this.Progress == 10) {
                this.Ready = true;

                this.log += '系统载入完毕' + '<br/>'
                this.updatedLog()
                document.querySelector('.loadscreen').classList.add('hide');
                setTimeout(function(){document.querySelector('.loadscreen').style.display = 'none'},1000);
                document.querySelector('.bgm').play();
            }
        }
        
    }


    export class figureCtrl 
    {
        fParams = {
            'default': true,
            "headX": "0"
        }


    }

}