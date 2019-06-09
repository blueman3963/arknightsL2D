import { appControl } from './_AppCtrl';

let trust: any

function trustSetup() {
    trust = new appControl.trust
}

export { trust, trustSetup }