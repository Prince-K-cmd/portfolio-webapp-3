"use client"

import { motion } from "framer-motion"

export function CodeBlock() {
  return (
    <motion.div
      className="relative rounded-lg bg-background/95 border shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center space-x-2 p-4 border-b">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-sm text-muted-foreground">React Custom Hook</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">
          <span className="text-purple-500">function</span>{" "}
          <span className="text-blue-500">useLocalStorage</span>
          <span className="text-yellow-500">&lt;T&gt;</span>(
          {"\n"}
          {"  "}key: <span className="text-blue-500">string</span>,{"\n"}
          {"  "}initialValue: <span className="text-yellow-500">T</span>
          {"\n"}): [<span className="text-yellow-500">T</span>,{" "}
          <span className="text-yellow-500">(value: T) =&gt; void</span>] {"{"}
          {"\n"}
          {"  "}
          <span className="text-purple-500">const</span> [storedValue, setStoredValue] ={" "}
          <span className="text-blue-500">useState</span>
          <span className="text-yellow-500">&lt;T&gt;</span>(() =&gt; {"{"}
          {"\n"}
          {"    "}
          <span className="text-purple-500">try</span> {"{"}
          {"\n"}
          {"      "}
          <span className="text-purple-500">const</span> item ={" "}
          <span className="text-blue-500">window</span>.localStorage.
          <span className="text-blue-500">getItem</span>(key);{"\n"}
          {"      "}
          <span className="text-purple-500">return</span> item ?{" "}
          <span className="text-blue-500">JSON</span>.
          <span className="text-blue-500">parse</span>(item) : initialValue;{"\n"}
          {"    "}
          {"}"} <span className="text-purple-500">catch</span> (error) {"{"}
          {"\n"}
          {"      "}
          <span className="text-purple-500">return</span> initialValue;{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"  "}
          {"}"});{"\n"}
          {"\n"}
          {"  "}
          <span className="text-purple-500">const</span> setValue ={" "}
          <span className="text-blue-500">useCallback</span>((value:{" "}
          <span className="text-yellow-500">T</span>) =&gt; {"{"}
          {"\n"}
          {"    "}
          <span className="text-purple-500">try</span> {"{"}
          {"\n"}
          {"      "}setStoredValue(value);{"\n"}
          {"      "}
          <span className="text-blue-500">window</span>.localStorage.
          <span className="text-blue-500">setItem</span>(key,{" "}
          <span className="text-blue-500">JSON</span>.
          <span className="text-blue-500">stringify</span>(value));{"\n"}
          {"    "}
          {"}"} <span className="text-purple-500">catch</span> (error) {"{"}
          {"\n"}
          {"      "}
          <span className="text-blue-500">console</span>.
          <span className="text-red-500">error</span>(error);{"\n"}
          {"    "}
          {"}"}
          {"\n"}
          {"  "}
          {"}"}, [key]);{"\n"}
          {"\n"}
          {"  "}
          <span className="text-purple-500">return</span> [storedValue, setValue];{"\n"}
          {"}"}
        </code>
      </pre>
    </motion.div>
  )
}

