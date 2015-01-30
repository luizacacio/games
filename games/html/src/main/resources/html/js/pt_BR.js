var errorMap = {
  "ATTRIBUTE_IN_CLOSING_TAG": "<p>A tag de fechamento <code>&lt;/[[closeTag.name]]&gt;</code> não pode conter atributos.</p>",
  "CLOSE_TAG_FOR_VOID_ELEMENT": "<p>A tag de fechamento <code>&lt;/[[closeTag.name]]&gt;</code> é para um elemento vazio (isto é, um elemento que não precisa ser fechado).</p>",
  "CSS_MIXED_ACTIVECONTENT": "<p>A propriedade css <em>[[cssProperty.property]]</em> tem o valor de um url() que atualmente aponta para um recurso inseguro.</p>",
  "EVENT_HANDLER_ATTR_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the JavaScript event handler attribute <em data-highlight='[[name.start]],[[name.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
  "HTML_CODE_IN_CSS_BLOCK": "<p>Código HTML foi detectado em um contexto CSS</p>",
  "HTTP_LINK_FROM_HTTPS_PAGE": "<p>O atributo <code>&lt;[[attribute.name.value]]&gt;</code> da tag <code>[[openTag.name]]</code> atualmente aponta para um recurso inseguro.</p>",
  "INVALID_ATTR_NAME": "<p>Algum atributo possui um nome que não é permitido pelas convenções de nome de HTML5.</p>",
  "UNSUPPORTED_ATTR_NAMESPACE": "<p>Algum atributo utiliza um namespace que não é permitido em HTML5.</p>",
  "MULTIPLE_ATTR_NAMESPACES": "<p>Algum atributo possui multiplos namespaces.</p>",
  "INVALID_CSS_DECLARATION": "<p>Declaração CSS não foi fechada.</p>",
  "INVALID_CSS_PROPERTY_NAME": "<p>A propriedade CSS <em>[[cssProperty.property]]</em> não existe.</p>",
  "INVALID_CSS_RULE": "<p>Alguma regra CSS não é válida.</p>",
  "INVALID_TAG_NAME": "<p>O caractere <code>&lt;</code> parece ser o início de uma tag, mas não é seguido por um nome válido de tag.</p><p> Se você apenas deseja que um <code>&lt;</code> apareça na sua página, utilize <code>&amp;lt;</code>.</p>",
  "JAVASCRIPT_URL_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the <code>javascript:</code> URL <em data-highlight='[[value.start]],[[value.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
  "MISMATCHED_CLOSE_TAG": "<p>A tag de fechamento<code>&lt;/[[closeTag.name]]&gt;</code> não forma um par com a tag de abertura <code>&lt;[[openTag.name]]&gt;</code>. Provavelmente isso aconteceu por causa de uma tag <code>&lt;/[[openTag.name]]&gt;</code> que está faltando ou foi colocada no lugar errado.",
  "MISSING_CSS_BLOCK_CLOSER": "<p>Não encontrado encerramento de bloco ou próximo par propriedade:valor; seguindo <em>[[cssValue.value]]</em>.</p>",
  "MISSING_CSS_BLOCK_OPENER": "<p>Não encontrada abertura de block após <em>[[cssSelector.selector]]</em>.</p>",
  "MISSING_CSS_PROPERTY": "<p>Não encontrada propriedade para <em>[[cssSelector.selector]]</em>.</p>",
  "MISSING_CSS_SELECTOR": "<p>Não encontrado um novo seletor css ou a tag &lt;/style&gt;.</p>",
  "MISSING_CSS_VALUE": "<p>Não encontrado valor para propriedade <em>[[cssProperty.property]]</em>.</p>",
  "SCRIPT_ELEMENT_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using <code>&lt;script&gt;</code> tags <em data-highlight='[[openTag.start]],[[closeTag.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
  "SELF_CLOSING_NON_VOID_ELEMENT": "<p>A tag <code>&lt;[[name]]&gt;</code> não pode ser self-closed, porque <code>&lt;[[name]]&gt;</code> não é um elemento vazio e precisa ser fechado com uma tag <code>&lt;/[[name]]&gt;</code>.</p>",
  "UNCAUGHT_CSS_PARSE_ERROR": "<p>Um erro de parsing fora das espectativas aconteceu.<em>[[error.msg]]</em></p>",
  "UNCLOSED_TAG": "<p>A tag <code>&lt;[[openTag.name]]&gt;</code> não foi fechada.</p>",
  "UNEXPECTED_CLOSE_TAG": "<p>A tag de fechamento <code>&lt;/[[closeTag.name]]&gt;</code> não forma par com nada porque não existe uma tag de abertura que precise ser fechada.</p>",
  "UNFINISHED_CSS_PROPERTY": "<p>A propriedade CSS <em>[[cssProperty.property]]</em> precisa ser encerrada com :</p>",
  "UNFINISHED_CSS_SELECTOR": "<p>O seletor CSS <em>[[cssSelector.selector]]</em> precisa ser encerrado com {</p>",
  "UNFINISHED_CSS_VALUE": "<p>O Valor CSS <em>[[cssValue.value]]</em> precisa ser encerrado com ;</p>",
  "UNKOWN_CSS_KEYWORD": "<p>A @palavra-chave CSS <em>[[cssKeyword.value]]</em> não é conhecida.</p>",
  "UNQUOTED_ATTR_VALUE": "<p>O valor de um atributo deve começar com aspas duplas.</p>",
  "UNTERMINATED_ATTR_VALUE": "<p>O atributo <code>&lt;[[attribute.name.value]]&gt;</code> da tag <code>[[openTag.name]]</code> possui um valor que não é fechado com aspas duplas.</p>",
  "UNTERMINATED_CLOSE_TAG": "<p>A tag de fechamento <code>&lt;/[[closeTag.name]]&gt;</code> não termina com <code>&gt;</code>.</p>",
  "UNTERMINATED_COMMENT": "<p>Algum comentário não foi encerrado com <code>--&gt;</code>.</p>",
  "UNTERMINATED_CSS_COMMENT": "<p>Algum comentário CSS não termina com <code>*/</code>.</p>",
  "UNBOUND_ATTRIBUTE_VALUE": "<p>O valor do atributo <code>[[value]]</code> não parece estar ligado a um atributo. Talvez você tenha esquecido de um sinal de '='.</p>",
  "UNTERMINATED_OPEN_TAG": "<p>A tag de abertura <code>&lt;[[openTag.name]]&gt;</code> não termina com um <code>&gt;</code>.</p>"
}
