Currently, this isn't much more than a modified version of the default package; the only change is autpcompletion.

By default, tabbing to get autocompletion sets the cursor between the inserted tag, great. If I now want something else autocompleted, hitting tab throws the cursor outside the tag instead, not great. This package removes that behavior (replacing <tag>$1</tag> with <tag>$0</tag>).

For it to take precedence over the default package, go to `View > Syntax > Open all with current extention as... > Elusive HTML` while in an HTML file. Alternatively if that doesn't seem to work, manually add to User/Elusive HTML.sublime-settings:

	{
		"extensions":
		[
			"html"
		]
	}