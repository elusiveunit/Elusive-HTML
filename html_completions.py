import sublime, sublime_plugin
import re

def match(rex, str):
    m = rex.match(str)
    if m:
        return m.group(0)
    else:
        return None

# This responds to on_query_completions, but conceptually it's expanding
# expressions, rather than completing words.
#
# It expands these simple expressions:
# tag.class
# tag#id
class HtmlCompletions(sublime_plugin.EventListener):
    def on_query_completions(self, view, prefix, locations):
        # Only trigger within HTML
        if not view.match_selector(locations[0],
                "text.html - source - meta.tag, punctuation.definition.tag.begin"):
            return []

        # Get the contents of each line, from the beginning of the line to
        # each point
        lines = [view.substr(sublime.Region(view.line(l).a, l))
            for l in locations]

        # Reverse the contents of each line, to simulate having the regex
        # match backwards
        lines = [l[::-1] for l in lines]

        # Check the first location looks like an expression
        rex = re.compile("([\w-]+)([.#])(\w+)")
        expr = match(rex, lines[0])
        if not expr:
            return []

        # Ensure that all other lines have identical expressions
        for i in xrange(1, len(lines)):
            ex = match(rex, lines[i])
            if ex != expr:
                return []

        # Return the completions
        arg, op, tag = rex.match(expr).groups()

        arg = arg[::-1]
        tag = tag[::-1]
        expr = expr[::-1]

        if op == '.':
            snippet = "<{0} class=\"{1}\">$0</{0}>".format(tag, arg)
        else:
            snippet = "<{0} id=\"{1}\">$0</{0}>".format(tag, arg)

        return [(expr, snippet)]


# Provide completions that match just after typing an opening angle bracket
class TagCompletions(sublime_plugin.EventListener):
    def on_query_completions(self, view, prefix, locations):
        # Only trigger within HTML
        if not view.match_selector(locations[0],
                "text.html - source"):
            return []

        pt = locations[0] - len(prefix) - 1
        ch = view.substr(sublime.Region(pt, pt + 1))
        if ch != '<':
            return []
        
        return ([
            ("a\tTag", "a href=\"$0\"></a>"),
            ("abbr\tTag", "abbr>$1</abbr>"),
            ("acronym\tTag", "acronym>$1</acronym>"),
            ("address\tTag", "address>$1</address>"),
            ("applet\tTag", "applet>$1</applet>"),
            ("area\tTag", "area>$1</area>"),
            ("b\tTag", "b>$1</b>"),
            ("base\tTag", "base>$1</base>"),
            ("big\tTag", "big>$1</big>"),
            ("blockquote\tTag", "blockquote>$0</blockquote>"),
            ("body\tTag", "body>$0</body>"),
            ("button\tTag", "button>$1</button>"),
            ("center\tTag", "center>$0</center>"),
            ("caption\tTag", "caption>$1</caption>"),
            ("cdata\tTag", "cdata>$1</cdata>"),
            ("cite\tTag", "cite>$1</cite>"),
            ("col\tTag", "col>$1</col>"),
            ("colgroup\tTag", "colgroup>$1</colgroup>"),
            ("code\tTag", "code>$0</code>"),
            ("div\tTag", "div>$0</div>"),
            ("dd\tTag", "dd>$1</dd>"),
            ("del\tTag", "del>$1</del>"),
            ("dfn\tTag", "dfn>$1</dfn>"),
            ("dl\tTag", "dl>$1</dl>"),
            ("dt\tTag", "dt>$1</dt>"),
            ("em\tTag", "em>$1</em>"),
            ("fieldset\tTag", "fieldset>$0</fieldset>"),
            ("font\tTag", "font>$0</font>"),
            ("form\tTag", "form>$0</form>"),
            ("frame\tTag", "frame>$1</frame>"),
            ("frameset\tTag", "frameset>$1</frameset>"),
            ("head\tTag", "head>$0</head>"),
            ("h1\tTag", "h1>$0</h1>"),
            ("h2\tTag", "h2>$0</h2>"),
            ("h3\tTag", "h3>$0</h3>"),
            ("h4\tTag", "h4>$0</h4>"),
            ("h5\tTag", "h5>$0</h5>"),
            ("h6\tTag", "h6>$0</h6>"),
            ("i\tTag", "i>$1</i>"),
            ("iframe\tTag", "iframe src=\"$1\">$0</iframe>"),
            ("ins\tTag", "ins>$1</ins>"),
            ("kbd\tTag", "kbd>$1</kbd>"),
            ("li\tTag", "li>$0</li>"),
            ("label\tTag", "label>$1</label>"),
            ("legend\tTag", "legend>$1</legend>"),
            ("link\tTag", "link rel=\"stylesheet\" href=\"$1\">"),
            ("map\tTag", "map>$1</map>"),
            ("noframes\tTag", "noframes>$1</noframes>"),
            ("object\tTag", "object>$1</object>"),
            ("ol\tTag", "ol>$0</ol>"),
            ("optgroup\tTag", "optgroup>$1</optgroup>"),
            ("option\tTag", "option>$0</option>"),
            ("p\tTag", "p>$0</p>"),
            ("pre\tTag", "pre>$0</pre>"),
            ("span\tTag", "span>$0</span>"),
            ("samp\tTag", "samp>$1</samp>"),
            ("script\tTag", "script>$0</script>"),
            ("style\tTag", "style>$0</style>"),
            ("select\tTag", "select>$0</select>"),
            ("small\tTag", "small>$1</small>"),
            ("strong\tTag", "strong>$1</strong>"),
            ("sub\tTag", "sub>$1</sub>"),
            ("sup\tTag", "sup>$1</sup>"),
            ("table\tTag", "table>$0</table>"),
            ("tbody\tTag", "tbody>$0</tbody>"),
            ("td\tTag", "td>$0</td>"),
            ("textarea\tTag", "textarea>$0</textarea>"),
            ("tfoot\tTag", "tfoot>$0</tfoot>"),
            ("th\tTag", "th>$0</th>"),
            ("thead\tTag", "thead>$0</thead>"),
            ("title\tTag", "title>$0</title>"),
            ("tr\tTag", "tr>$0</tr>"),
            ("tt\tTag", "tt>$1</tt>"),
            ("u\tTag", "u>$1</u>"),
            ("ul\tTag", "ul>$0</ul>"),
            ("var\tTag", "var>$1</var>"),

            ("br\tTag", "br>"),
            ("embed\tTag", "embed>"),
            ("hr\tTag", "hr>"),
            ("img\tTag", "img src=\"$0\">"),
            ("input\tTag", "input>"),
            ("meta\tTag", "meta>"),
            ("param\tTag", "param name=\"$1\" value=\"$2\">"),

            ("article\tTag", "article>$0</article>"),
            ("aside\tTag", "aside>$0</aside>"),
            ("audio\tTag", "audio>$0</audio>"),
            ("canvas\tTag", "canvas>$0</canvas>"),
            ("footer\tTag", "footer>$0</footer>"),
            ("header\tTag", "header>$0</header>"),
            ("nav\tTag", "nav>$0</nav>"),
            ("section\tTag", "section>$0</section>"),
            ("video\tTag", "video>$0</video>")
        ], sublime.INHIBIT_WORD_COMPLETIONS | sublime.INHIBIT_EXPLICIT_COMPLETIONS)
