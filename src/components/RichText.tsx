
export const RichText = ({ content }: { content: any }) => {
  if (!content) return null

  // Handle simple string fallback if data wasn't migrated
  if (typeof content === 'string') {
    return <p>{content}</p>
  }

  // Basic Lexical JSON to HTML/JSX conversion
  // For a production app, use a proper Lexical renderer
  const renderNodes = (nodes: any[]) => {
    return nodes.map((node, i) => {
      if (node.type === 'text') {
        let text = node.text
        if (node.format & 1) text = <strong key={i}>{text}</strong>
        if (node.format & 2) text = <em key={i}>{text}</em>
        return text
      }

      if (node.children) {
        const children = renderNodes(node.children)
        switch (node.type) {
          case 'paragraph':
            return <p key={i}>{children}</p>
          case 'list':
            return node.tag === 'ol' ? <ol key={i}>{children}</ol> : <ul key={i}>{children}</ul>
          case 'listitem':
            return <li key={i}>{children}</li>
          case 'heading':
            const Tag = `h${node.tag || 3}` as any
            return <Tag key={i}>{children}</Tag>
          default:
            return <div key={i}>{children}</div>
        }
      }
      return null
    })
  }

  return <div className="rich-text">{renderNodes(content.root?.children || [])}</div>
}
