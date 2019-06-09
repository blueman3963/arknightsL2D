import {Live2DCubismFramework as cubismusermodel} from "../../../../Framework/model/cubismusermodel";
import {Live2DCubismFramework as live2dcubismframework} from "../../../../Framework/live2dcubismframework";

import {Live2DCubismFramework as live2dcubismframework} from "../../../../Framework/live2dcubismframework";
import {Live2DCubismFramework as cubismid} from "../../../../Framework/id/cubismid";
import {Live2DCubismFramework as cubismusermodel} from "../../../../Framework/model/cubismusermodel";
import {Live2DCubismFramework as icubismmodelsetting} from "../../../../Framework/icubismmodelsetting";
import {Live2DCubismFramework as cubismmodelsettingjson} from "../../../../Framework/cubismmodelsettingjson";
import {Live2DCubismFramework as cubismdefaultparameterid} from "../../../../Framework/cubismdefaultparameterid";
import {Live2DCubismFramework as acubismmotion} from "../../../../Framework/motion/acubismmotion";
import {Live2DCubismFramework as cubismeyeblink} from "../../../../Framework/effect/cubismeyeblink";
import {Live2DCubismFramework as cubismbreath} from "../../../../Framework/effect/cubismbreath";
import {Live2DCubismFramework as csmvector} from "../../../../Framework/type/csmvector";
import {Live2DCubismFramework as csmmap} from "../../../../Framework/type/csmmap";
import {Live2DCubismFramework as cubismmatrix44} from "../../../../Framework/math/cubismmatrix44";
import {Live2DCubismFramework as cubismstring} from "../../../../Framework/utils/cubismstring";
import {Live2DCubismFramework as cubismmotion} from "../../../../Framework/motion/cubismmotion";
import {Live2DCubismFramework as cubismmotionqueuemanager} from "../../../../Framework/motion/cubismmotionqueuemanager";
import {Live2DCubismFramework as csmstring} from "../../../../Framework/type/csmstring";
import {Live2DCubismFramework as csmrect } from "../../../../Framework/type/csmrectf";
import {CubismLogInfo} from "../../../../Framework/utils/cubismdebug";
import csmRect = csmrect.csmRect;
import csmString = csmstring.csmString;
import InvalidMotionQueueEntryHandleValue = cubismmotionqueuemanager.InvalidMotionQueueEntryHandleValue;
import CubismMotionQueueEntryHandle = cubismmotionqueuemanager.CubismMotionQueueEntryHandle;
import CubismMotion = cubismmotion.CubismMotion;
import CubismString = cubismstring.CubismString;
import CubismMatrix44 = cubismmatrix44.CubismMatrix44;
import csmMap = csmmap.csmMap;
import csmVector = csmvector.csmVector;
import CubismBreath = cubismbreath.CubismBreath;
import BreathParameterData = cubismbreath.BreathParameterData;
import CubismEyeBlink = cubismeyeblink.CubismEyeBlink;
import ACubismMotion = acubismmotion.ACubismMotion;
import CubismFramework = live2dcubismframework.CubismFramework;
import CubismIdHandle = cubismid.CubismIdHandle;
import CubismUserModel = cubismusermodel.CubismUserModel;
import ICubismModelSetting = icubismmodelsetting.ICubismModelSetting;
import CubismModelSettingJson = cubismmodelsettingjson.CubismModelSettingJson;
import CubismDefaultParameterId = cubismdefaultparameterid;
import CubismUserModel = cubismusermodel.CubismUserModel;
import CubismFramework = live2dcubismframework.CubismFramework;




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


    export class trust 
    {
        trustLevel: number = 0;

        showTrust() {
            let num = '0' + this.trustLevel
            document.querySelector('.trustlv').innerHTML = num.slice(-2) + '%'
            document.querySelector('#fill1').style.width = (this.trustLevel > 25 ? 25 : this.trustLevel)/0.25+ '%'
            document.querySelector('#fill2').style.width = (this.trustLevel-25 < 0?0:this.trustLevel-25 > 25? 25 : this.trustLevel-25)/0.25 + '%'
            document.querySelector('#fill3').style.width = (this.trustLevel-50< 0 ?0:this.trustLevel-50 > 50 ? 50: this.trustLevel-50)/0.5 + '%'
        }

        trustGrow() {
            this.intervalID = setInterval(
                () => {
                    if(this.trustLevel < 99) {
                        this.trustLevel++
                    } else {
                        this.trustLevel = 99
                    }
                    this.showTrust()
                }, 2000);
        }

        trustPhase() {
            if( 50 < this.trustLevel ) {
                return 3
            } else if( 25 < this.trustLevel ) {
                return 2
            } else {
                return 1
            }
        }

        burstTrust(n:string) {
            if(this.trustLevel < 99) {
                if(50 < this.trustLevel) {
                    if(n == 'head') {
                        this.trustLevel += 10
                    }
                    if(n == 'body') {
                        this.trustLevel += 20
                    }
                }
                else if(25 < this.trustLevel) {
                    if(n == 'head') {
                        this.trustLevel += 8
                    }
                    if(n == 'body') {
                        this.trustLevel -= 5
                    }
                }
                else {
                    if(n == 'head') {
                        this.trustLevel += 5
                    }
                    if(n == 'body') {
                        this.trustLevel -= 20
                        if(this.trustLevel < 0 ) {
                            this.trustLevel = 0
                        }
                    }
                }
                this.showTrust()
            }
        }

    }

}