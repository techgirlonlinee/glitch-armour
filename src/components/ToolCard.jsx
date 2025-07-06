import React from "react";

export default function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <div className="tool-card-header">
        {tool.labels.map(label => (
          <span className="tool-label" key={label}>{label}</span>
        ))}
      </div>
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="tool-name"
      >
        {tool.name}
      </a>
      <p className="tool-desc">{tool.description}</p>
      {tool.pros && (
        <ul className="tool-pros">
          {tool.pros.map((pro, i) => (
            <li key={i} className="pro">{pro}</li>
          ))}
        </ul>
      )}
      {tool.cons && (
        <ul className="tool-cons">
          {tool.cons.map((con, i) => (
            <li key={i} className="con">{con}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
