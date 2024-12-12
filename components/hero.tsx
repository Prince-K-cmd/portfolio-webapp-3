// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CodeBlock } from "@/components/code-block";
// import { BubblesBackground } from "@/components/bubbles-background";

// const codeSnippets = [
//   {
//     language: "typescript",
//     code: `
// // React Component
// const App: React.FC = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// };
//     `,
//   },
//   {
//     language: "kotlin",
//     code: `
// // Android Jetpack Compose
// @Composable
// fun Counter() {
//     var count by remember { mutableStateOf(0) }
//     Column {
//         Text(text = "Count: $count")
//         Button(onClick = { count++ }) {
//             Text("Increment")
//         }
//     }
// }
//     `,
//   },
//   {
//     language: "python",
//     code: `
// # Data Engineering with PySpark
// from pyspark.sql import SparkSession

// spark = SparkSession.builder.appName("DataProcessing").getOrCreate()

// df = spark.read.csv("data.csv", header=True)
// result = df.groupBy("category").agg({"amount": "sum"})
// result.show()
//     `,
//   },
// ];

// export function Hero() {
//   const [currentSnippet, setCurrentSnippet] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center pt-16 relative overflow-hidden"
//     >
//       <div className="absolute inset-0 z-0">
//         <BubblesBackground />
//       </div>
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="text-muted-foreground">Hi, I&apos;m</span>{" "}
//               <span className="gradient-text">Prince Kyeremeh</span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               A passionate developer specializing in Android development,
//               frontend engineering, and data engineering. I create elegant
//               solutions to complex problems.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
//                 Android Developer
//               </span>
//               <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400">
//                 Frontend Developer
//               </span>
//               <span className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400">
//                 Data Engineer
//               </span>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="hidden lg:block relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl rounded-lg"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "@/components/code-block";
import { BubblesBackground } from "@/components/bubbles-background";
import { codeSnippets } from "@/data/code-snippets";

export function Hero() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[currentSnippetIndex];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <BubblesBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-muted-foreground">Hi, I&apos;m</span>{" "}
              <span className="gradient-text">Prince Kyeremeh</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate developer specializing in Android development,
              frontend engineering, and data engineering. I create elegant
              solutions to complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
                Android Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400">
                Frontend Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400">
                Data Engineer
              </span>
            </div>
          </motion.div>

          {/* Code Snippet Section */}
          <motion.div
            key={currentSnippetIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="group neon-glow relative"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 shadow-lg relative z-10">
              <div className="flex items-center mb-4">
                <span className="mr-2 text-sm font-medium text-muted-foreground">
                  {currentSnippet.category} | {currentSnippet.language}
                </span>
                <div className="flex-grow border-t border-dashed border-blue-500/30 mx-4"></div>
                <span className="text-xs text-muted-foreground">
                  {currentSnippet.title}
                </span>
              </div>
              <CodeBlock
                code={currentSnippet.code}
                language={currentSnippet.language}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
