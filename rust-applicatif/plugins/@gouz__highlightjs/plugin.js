// from : https://github.com/huytd/highlightjs-focus
class LineFocusPlugin {
  constructor(options) {
    this.currentAttribute = "";
    this.options = options;
  }
  'before:highlightElement'({ el, language }) {
    const classes = [...el.classList].filter((c) => c.startsWith(`language-${language}@`)).map((c) => c.replace(`language-${language}@`, ''))
    this.currentAttribute = classes.shift();
  }
  getStyle(style) {
    if (!style) return "";
    return Object.keys(style).reduce((acc, key) => `${acc + key.split(/(?=[A-Z])/).join('-').toLowerCase()}:${style[key]};`, '');
  }
  getFocusedLines(input) {
    const [command, param] = input.trim().split('=');
    let result = [];
    if (command === 'focus') param.split(",").forEach((num, _) => {
      if (num.indexOf(":") !== -1) {
        const [from_s, to_s] = num.split(":");
        const from = +from_s;
        const to = +to_s;
        result = result.concat(Array(to - from + 1).fill(0).map((_, i) => from + i));
      } else result.push(+num);
    });
    result = result.filter((n) => n > 0 && !Number.isNaN(n)).sort((a, b) => a - b);
    return [
      ...new Set(result)
    ];
  }
  'after:highlight'(result) {
    if (!result.value.includes('hljs-focus processed') && this.currentAttribute) {
      const focusedLines = this.getFocusedLines(this.currentAttribute);
      const lines = result.value.split("\n").map((line, num) => {
        const focused = focusedLines.indexOf(num + 1) !== -1;
        const focusState = focusedLines.length === 0 ? 'normal' : focused ? 'focused' : 'unfocused';
        const styles = this.getStyle(focusedLines.length === 0 ? this.options?.normalStyle : focused ? this.options?.focusedStyle : this.options?.unfocusedStyle);
        return `<span class="hljs-focus ${focusState}" style="${styles}">${line || " "}</span>`;
      });
      result.value = `${lines.join("\n").trim()}<i style='display: none' class='hljs-focus processed'></i>`;
    }
  }
}

hljs.addPlugin(new LineFocusPlugin());

setTimeout(() => {
  hljs.highlightAll();
}, 100);
