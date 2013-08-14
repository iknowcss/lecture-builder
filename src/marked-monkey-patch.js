function MarkedMonkeyPatch (marked) {
  
  var LANG_REGEX = /^exec-(.+)$/

    , tok = marked.Parser.prototype.tok
    , token = marked.Lexer.prototype.token;

  // Patch Parser.prototype.tok()
  marked.Parser.prototype.tok = function () {
    var langMatch
      , execLang;

    if (this.token.type == 'code' &&
        (langMatch = this.token.lang.match(LANG_REGEX)) ) {

      switch (langMatch[1]) {

        case 'javascript':
          return '<script type="text/javascript">'
            + this.token.text
            + '</script>';

      }

    }

    return tok.apply(this, arguments);
  };

  // Patch Lexer.prototype.token()
  marked.Lexer.prototype.token = function () {
    return token.apply(this, arguments);
  };

}

module.exports = MarkedMonkeyPatch;