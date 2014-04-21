var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
    id: "github-link",
    label: "Visit GitHub",
    icon: {
	"32": "./GitHub-Mark-32px.png",
	"64": "./GitHub-Mark-64px.png",
	"120": "./GitHub-Mark-120px-plus.png"
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.open("https://github.com/");
}
