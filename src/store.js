import { writable } from 'svelte/store';

const storedSettings = localStorage.getItem("settings");

export const default_settings = {
    darkMode: false,
}

var se = (storedSettings === null ? default_settings : JSON.parse(storedSettings))

export const Settings = writable(se);

Settings.subscribe(value => {
    console.log("Setting localstorage settings to", value);
    localStorage.setItem("settings", JSON.stringify(value));
})
