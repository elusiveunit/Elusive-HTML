/*
 * Comments are technically disallowed in JSON, even if Sublime doesn't care,
 * so I keep things neat and organized in this separate JavaScript file
 * instead.
 */
{
	"scope": "text.html - source - meta.tag, punctuation.definition.tag.begin, meta.tag.other.html",
	"completions":
	[
		// For a complete copy->paste to a .sublime-completions file, these
		// regexes clean up the code. Don't include the quotes.
		// 1. Remove all comments: (/\*(?>(?:(?>[^*]+)|\*(?!/))*)\*/|//.+) to ''
		// 2. Remove extra line breaks and indentation: \s+\n to \n
		// 3. Remove alignment spaces: ', +' to ', '

		/* ---------- General elements ---------- */

		{ "trigger": "a",          "contents": "<a href=\"$0\"></a>" },
		{ "trigger": "abbr",       "contents": "<abbr title=\"$0\">$0</abbr>" },
		{ "trigger": "address",    "contents": "<address>$0</address>" },
		{ "trigger": "area",       "contents": "<area>$0</area>" },
		{ "trigger": "article",    "contents": "<article>$0</article>" },
		{ "trigger": "aside",      "contents": "<aside>$0</aside>" },
		{ "trigger": "audio",      "contents": "<audio>$0</audio>" },
		{ "trigger": "b",          "contents": "<b>$0</b>" },
		{ "trigger": "blockquote", "contents": "<blockquote>$0</blockquote>" },
		{ "trigger": "body",       "contents": "<body>$0</body>" },
		{ "trigger": "button",     "contents": "<button>$0</button>" },
		{ "trigger": "canvas",     "contents": "<canvas>$0</canvas>" },
		{ "trigger": "cite",       "contents": "<cite>$0</cite>" },
		{ "trigger": "code",       "contents": "<code>$0</code>" },
		{ "trigger": "div",        "contents": "<div>$0</div>" },
		{ "trigger": "dd",         "contents": "<dd>$0</dd>" },
		{ "trigger": "del",        "contents": "<del>$0</del>" },
		{ "trigger": "dfn",        "contents": "<dfn>$0</dfn>" },
		{ "trigger": "dl",         "contents": "<dl>$0</dl>" },
		{ "trigger": "dt",         "contents": "<dt>$0</dt>" },
		{ "trigger": "em",         "contents": "<em>$0</em>" },
		{ "trigger": "footer",     "contents": "<footer>$0</footer>" },
		{ "trigger": "head",       "contents": "<head>$0</head>" },
		{ "trigger": "header",     "contents": "<header>$0</header>" },
		{ "trigger": "h1",         "contents": "<h1>$0</h1>" },
		{ "trigger": "h2",         "contents": "<h2>$0</h2>" },
		{ "trigger": "h3",         "contents": "<h3>$0</h3>" },
		{ "trigger": "h4",         "contents": "<h4>$0</h4>" },
		{ "trigger": "h5",         "contents": "<h5>$0</h5>" },
		{ "trigger": "h6",         "contents": "<h6>$0</h6>" },
		{ "trigger": "i",          "contents": "<i>$0</i>" },
		{ "trigger": "ins",        "contents": "<ins>$0</ins>" },
		{ "trigger": "kbd",        "contents": "<kbd>$0</kbd>" },
		{ "trigger": "li",         "contents": "<li>$0</li>" },
		{ "trigger": "map",        "contents": "<map>$0</map>" },
		{ "trigger": "nav",        "contents": "<nav>$0</nav>" },
		{ "trigger": "ol",         "contents": "<ol>$0</ol>" },
		{ "trigger": "p",          "contents": "<p>$0</p>" },
		{ "trigger": "pre",        "contents": "<pre>$0</pre>" },
		{ "trigger": "section",    "contents": "<section>$0</section>" },
		{ "trigger": "span",       "contents": "<span>$0</span>" },
		{ "trigger": "samp",       "contents": "<samp>$0</samp>" },
		{ "trigger": "style",      "contents": "<style>$0</style>" },
		{ "trigger": "small",      "contents": "<small>$0</small>" },
		{ "trigger": "strong",     "contents": "<strong>$0</strong>" },
		{ "trigger": "sub",        "contents": "<sub>$0</sub>" },
		{ "trigger": "sup",        "contents": "<sup>$0</sup>" },
		{ "trigger": "title",      "contents": "<title>$0</title>" },
		{ "trigger": "tt",         "contents": "<tt>$0</tt>" },
		{ "trigger": "u",          "contents": "<u>$0</u>" },
		{ "trigger": "ul",         "contents": "<ul>$0</ul>" },
		{ "trigger": "var",        "contents": "<var>$0</var>" },
		{ "trigger": "video",      "contents": "<video>$0</video>" },



		/* ---------- Table elements ---------- */

		{ "trigger": "caption",    "contents": "<caption>$0</caption>" },
		{ "trigger": "col",        "contents": "<col>$0</col>" },
		{ "trigger": "colgroup",   "contents": "<colgroup>$0</colgroup>" },
		{ "trigger": "table",      "contents": "<table>$0</table>" },
		{ "trigger": "tbody",      "contents": "<tbody>$0</tbody>" },
		{ "trigger": "td",         "contents": "<td>$0</td>" },
		{ "trigger": "tfoot",      "contents": "<tfoot>$0</tfoot>" },
		{ "trigger": "th",         "contents": "<th>$0</th>" },
		{ "trigger": "thead",      "contents": "<thead>$0</thead>" },
		{ "trigger": "tr",         "contents": "<tr>$0</tr>" },



		/* ---------- Linked elements ---------- */

		{ "trigger": "iframe", "contents": "<iframe src=\"$0\"></iframe>" },
		{ "trigger": "img", "contents": "<img src=\"$0\" alt=\"\">" },
		{ "trigger": "link", "contents": "<link rel=\"${1:stylesheet}\" href=\"$0\">" },
		{ "trigger": "object", "contents": "<object>$0</object>" },
		{ "trigger": "param", "contents": "<param name=\"$1\" value=\"$2\">" },
		{ "trigger": "scr|script", "contents": "<script>$0</script>" },
		{ "trigger": "scrs|scriptsrc", "contents": "<script src=\"$0\"></script>" },



		/* ---------- Void elements ---------- */

		{ "trigger": "base", "contents": "<base href=\"$0\">" },
		{ "trigger": "br", "contents": "<br>" },
		{ "trigger": "embed", "contents": "<embed type=\"${1:video/quicktime}\" src=\"${2:movie.mov}\" width=\"${3:640}\" height=\"${4:480}\">" },
		{ "trigger": "hr", "contents": "<hr>" },
		{ "trigger": "meta", "contents": "<meta ${1:name=\"${2:description}\"} content=\"${3:value}\">" },
		{ "trigger": "metachar", "contents": "<meta charset=\"utf-8\">" },
		{ "trigger": "metaview", "contents": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" },
		{ "trigger": "metadesc", "contents": "<meta name=\"description\" content=\"${0:description}\">" },



		/* ---------- Form elements ---------- */

		{ "trigger": "form", "contents": "<form method=\"${1:[p]ost/[g]et}${1/(p$)|(g$)|.*/?1:ost:?2:et/i}\" action=\"$0\"></form>" },
		{ "trigger": "fieldset", "contents": "<fieldset>$0</fieldset>" },
		{ "trigger": "legend", "contents": "<legend>$0</legend>" },
		{ "trigger": "label", "contents": "<label for=\"${1:id}\">$0</label>" },

		{ "trigger": "inp|input", "contents": "<input type=\"${1:[t]ext/[c]heckbox/[r]adio/[e]mail/[te]l/[s]ubmit/[se]arch/[h]idden/[u]rl}${1/(t$)|(c$)|(r$)|(e$)|(s$)|(te$)|(se$)|(h$)|(u$)|.*/?1:ext:?2:heckbox:?3:adio:?4:mail:?5:ubmit:?6:l:?7:arch:?8:idden:?9:rl/i}\">" },
		{ "trigger": "ibut", "contents": "<input type=\"button\" name=\"${1:name}\" id=\"${1:name}\" value=\"$0\">" },
		{ "trigger": "iche", "contents": "<input type=\"checkbox\" name=\"${1:name}\" id=\"${1:name}\" value=\"$0\">" },
		{ "trigger": "idat", "contents": "<input type=\"date\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "iema", "contents": "<input type=\"email\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "ifil", "contents": "<input type=\"file\">" },
		{ "trigger": "ihid", "contents": "<input type=\"hidden\" name=\"${1:name}\" value=\"$0\">" },
		{ "trigger": "inum", "contents": "<input type=\"number\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "ipas", "contents": "<input type=\"password\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "irad", "contents": "<input type=\"radio\" name=\"${1:name}\" id=\"${1:name}\" value=\"$0\">" },
		{ "trigger": "iran", "contents": "<input type=\"range\" min=\"${1:0}\" max=\"${2:100}\" step=\"${3:1}\">$0" },
		{ "trigger": "ires", "contents": "<input type=\"reset\">" },
		{ "trigger": "isea", "contents": "<input type=\"search\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "isub", "contents": "<input type=\"submit\" value=\"$0\">" },
		{ "trigger": "itel", "contents": "<input type=\"tel\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "itex", "contents": "<input type=\"text\" name=\"${1:name}\" id=\"${1:name}\">" },
		{ "trigger": "iurl", "contents": "<input type=\"url\" name=\"${1:name}\" id=\"${1:name}\">" },

		{ "trigger": "textarea", "contents": "<textarea name=\"${1:name}\">$0</textarea>" },
		{ "trigger": "select", "contents": "<select name=\"${1:name}\">$0</select>" },
		{ "trigger": "option", "contents": "<option value=\"${1:value}\">$0</option>" },
		{ "trigger": "optgroup", "contents": "<optgroup label=\"${1:label}\">$0</optgroup>" },



		/* ---------- Attributes ---------- */

		{ "trigger": "id", "contents": "id=\"$0\"" },
		{ "trigger": "na", "contents": "name=\"$0\"" },
		{ "trigger": "cl", "contents": "class=\"$0\"" },
		{ "trigger": "hre", "contents": "href=\"$0\"" },
		{ "trigger": "va|val", "contents": "value=\"$0\"" },
		{ "trigger": "ti", "contents": "title=\"$0\"" },
		{ "trigger": "ph", "contents": "placeholder=\"$0\"" },
		{ "trigger": "ro", "contents": "role=\"${1:[a]pplication/[b]anner/[c]omplementary/[co]ntentinfo/[f]orm/[m]ain/[n]avigation/[s]earch}${1/(a$)|(b$)|(c$)|(co$)|(f$)|(m$)|(n$)|(s$)|.*/?1:pplication:?2:anner:?3:omplementary:?4:ntentinfo:?5:orm:?6:ain:?7:avigation:?8:earch/i}\"$0" },
		{ "trigger": "check|checked", "contents": "checked=\"checked\"$0" },
		{ "trigger": "dis|disabled", "contents": "disabled=\"disabled\"$0" },
		{ "trigger": "dat", "contents": "data-$1=\"$0\"" },
		{ "trigger": "sty", "contents": "style=\"$0\"" },



		/* ---------- Misc. ---------- */

		{ "trigger": "doc", "contents": "<!DOCTYPE html>" },
		{ "trigger": "ifie7", "contents": "<!--[if IE 7 ]> <html lang=\"sv\" dir=\"ltr\" class=\"no-js ie7 oldie\"> <![endif]-->" },
		{ "trigger": "ifie8", "contents": "<!--[if IE 8 ]> <html lang=\"sv\" dir=\"ltr\" class=\"no-js ie8 oldie\"> <![endif]-->" },
		{ "trigger": "ifie9", "contents": "<!--[if IE 9 ]> <html lang=\"sv\" dir=\"ltr\" class=\"no-js ie9\"> <![endif]-->" },
		{ "trigger": "ifgtie", "contents": "<!--[if (gt IE ${1:8})|!(IE)]><!--> <html lang=\"sv\" dir=\"ltr\" class=\"no-js\"> <!--<![endif]-->$0" },


		
		/* ---------- Deprecated/discouraged ---------- */

		{ "trigger": "acronym",  "contents": "<acronym>$0</acronym>" },
		{ "trigger": "applet",   "contents": "<applet>$0</applet>" },
		{ "trigger": "big",      "contents": "<big>$0</big>" },
		{ "trigger": "center",   "contents": "<center>$0</center>" },
		{ "trigger": "font",     "contents": "<font>$0</font>" },
		{ "trigger": "frame",    "contents": "<frame>$0</frame>" },
		{ "trigger": "frameset", "contents": "<frameset>$0</frameset>" },
		{ "trigger": "noframes", "contents": "<noframes>$0</noframes>" }
	]
}