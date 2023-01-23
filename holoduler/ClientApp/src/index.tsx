import { createRoot } from "react-dom/client";

// 非nullアサーション演算子「!」をdocument.getElementById(“root”)の末尾に付与
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(<h1>ToDoアプリ</h1>);
