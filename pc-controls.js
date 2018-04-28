'use strict';

const cp = require('child_process');

class PcControls {

    constructor() {
        this.debug = false;

        this._commands = {
            shutdown: {
                win32: 'shutdown -s -t 0',
                darwin: 'sudo shutdown -h now',
                linux: 'sudo shutdown -h now'
            },
            sleep: {
                win32: 'rundll32.exe powrprof.dll,SetSuspendState 0,1,0',
                darwin: 'pmset sleepnow',
                linux: 'sudo pm-suspend'
            },
            lock: {
                win32: 'rundll32.exe user32.dll,LockWorkStation',
                darwin: '',
                linux: ''
            },
            logout: {
                win32: 'shutdown -l',
                darwin: '',
                linux: ''
            }
        };
    }

    _getOs() {
        return process.platform
    };

    run(command, callback) {
        if (this.debug) {
            console.log(`[pc-controls] Command executed: ${command}`);
            callback(true, false, false);
        } else {
            const os = this._getOs();
            console.log(command);
            console.log(os);

            try {
                const cmd = this._commands[command][os];
                console.log(cmd);
                cp.exec(cmd, (err, stdout, stderr) => callback(err, stdout, stderr));
            } catch (e) {
                callback(new Error('Unknown command or OS'));
            }
        }
    };
}

module.exports = new PcControls();
