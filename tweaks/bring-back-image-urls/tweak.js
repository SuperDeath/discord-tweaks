/*
 Credits: Juby210 <https://github.com/Juby210>
*/
const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
    enable: async () => {
        const mod = await getModule(['renderMessageMarkupToAST']);

        inject('discord-tweaks-imageurls', mod, 'default', args => {
            args[1] = false;
            return args;
        }, true);
    },
    disable: () => {
        uninject('discord-tweaks-imageurls');
    }
};
