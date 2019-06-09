import { appControl } from './_AppCtrl';

let Loading = new appControl.loadingProgress


function audioPreload () {
    
    document.addEventListener("DOMContentLoaded", preload, false)

    function preload() {
        document.querySelector('.sound').addEventListener('click', function() {
            document.querySelector('.sound').style.display = 'none';
            let allAudios = document.querySelectorAll("audio")


            allAudios.forEach((a, key) => {


                
                Loading.startload('波形'+key)
                a.load()
                
                a.addEventListener("canplaythrough", checkplaythrough)
                
                function checkplaythrough() {
                    Loading.loaded('波形' + key)
                    a.classList.remove('loading')
                    a.removeEventListener("canplaythrough", checkplaythrough, false)

                    if(document.querySelector(".loading") == null) {
                        console.log('全波形载入完成')
                    }
                }


            })
        
        })
    }

}

export { Loading, audioPreload }