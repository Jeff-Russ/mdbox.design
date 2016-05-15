//= require ace/theme-monokai
//= require ace/mode-html

$(document).ready(function() {
    var editor = ace.edit("my_ace_editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/javascript");
});