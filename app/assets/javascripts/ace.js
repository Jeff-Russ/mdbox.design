//= require ace-rails-ap
//= require ace/theme-monokai
//= require ace/mode-html

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
