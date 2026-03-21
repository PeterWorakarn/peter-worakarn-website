export type MarkdownLine =
  | { type: 'bullet'; text: string }
  | { type: 'paragraph'; text: string };

export function parseMarkdownToLines(markdown: string): MarkdownLine[] {
  return markdown
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return { type: 'bullet', text: line.slice(2) };
      }
      return { type: 'paragraph', text: line };
    });
}
