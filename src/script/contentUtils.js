const trimContent = (content) => content.trim();

const safeContent = (content) => {
  const temporary = document.createElement("div");
  temporary.textContent = content;
  return temporary.innerHTML;
}

export const formatContent = (content) => {
  return trimContent(safeContent(content));
}