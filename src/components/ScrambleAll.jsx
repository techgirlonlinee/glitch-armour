import React, { isValidElement, cloneElement } from "react";
import { ScrambledText } from "./ScrambleProvider";

// Recursively wrap all text nodes
function wrapTextNodes(node) {
  if (typeof node === "string") {
    return <ScrambledText>{node}</ScrambledText>;
  }
  if (Array.isArray(node)) {
    return node.map(wrapTextNodes);
  }
  if (isValidElement(node)) {
    // Recursively wrap children
    return cloneElement(
      node,
      node.props,
      wrapTextNodes(node.props.children)
    );
  }
  return node;
}

// Usage: Wrap your app in this
export function ScrambleAll({ children }) {
  return <>{wrapTextNodes(children)}</>;
}
