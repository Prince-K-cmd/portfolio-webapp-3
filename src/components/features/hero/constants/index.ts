// src/features/hero/constants/index.ts
import {
  Smartphone,
  Code2,
  Database,
  MessageCircle,
  Download,
} from "lucide-react";
import {
  LanguageBadge,
  HeroCTAButton,
  CodeSnippet,
  HeroMetadata,
} from "../types/hero";
import { resumeLink } from "@/src/data/resume/resume";

export const HERO_METADATA: HeroMetadata = {
  name: "Prince Kyeremeh",
  jobTitle: ["Android Developer", "Frontend Engineer", "Data Scientist"],
  shortBio:
    "Innovative software engineer transforming complex challenges into elegant solutions through cutting-edge technology.",
  skills: ["Kotlin", "React", "TypeScript", "Python", "Machine Learning"],
};

export const LANGUAGE_BADGES: LanguageBadge[] = [
  {
    text: "Android Developer",
    icon: Smartphone,
    description:
      "Crafting innovative mobile experiences with Kotlin and Jetpack Compose",
    ariaLabel: "Android Development Expertise",
    semantic_meaning: "Mobile Application Development",
  },
  {
    text: "Frontend Developer",
    icon: Code2,
    description: " Building responsive and interactive web applications ",
    ariaLabel: "Web Development Expertise",
    semantic_meaning: "Web Application Development",
  },
  {
    text: "Data Engineer",
    icon: Database,
    description:
      "Designing scalable data solutions and machine learning pipelines",
    ariaLabel: "Data Engineering Expertise",
    semantic_meaning: "Data Engineering",
  },
];

export const HERO_CTA_BUTTONS: HeroCTAButton[] = [
  {
    text: "Contact Me",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    textColor: "text-white",
    href: "#contact",
    icon: MessageCircle,
    ariaLabel: "Open contact section to get in touch",
    analyticsEvent: "hero_contact_initiated",
  },
  {
    text: "View CV",
    color: "bg-muted/20 border border-muted-foreground/30",
    textColor: "text-foreground",
    href: resumeLink[0].href,
    icon: Download,
    ariaLabel: "Download professional resume PDF",
    analyticsEvent: "hero_cv_download_initiated",
  },
];

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: "python-data-processing",
    language: "python",
    category: "Data Engineering",
    title: "Data Processing with Pandas",
    code: `
  import pandas as pd
  
  def process_data(df):
    # Clean and preprocess data
    df = df.dropna()
    df = df.apply(lambda x: x.astype(str).str.lower())
  
    return df
  
  # Example usage
  df = pd.DataFrame({
    'Name': ['John', 'Mary', 'David'],
    'Age': [25, 31, 42]
  })
  
  processed_df = process_data(df)
  print(processed_df)
  `,
    description:
      "This snippet demonstrates data cleaning and preprocessing using pandas.",
    keywords: ["pandas", "data processing", "cleaning", "preprocessing"],
  },
  {
    id: "kotlin-compose-ui",
    language: "kotlin",
    category: "Android Development",
    title: "Jetpack Compose UI Component",
    code: `
  import androidx.compose.foundation.layout.*
  import androidx.compose.material.*
  import androidx.compose.runtime.Composable
  
  @Composable
  fun GreetingCard(name: String) {
    Card(
      modifier = Modifier.padding(16.dp),
      elevation = 8.dp
    ) {
      Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.Center
      ) {
        Text(text = "Hello, $name!")
        Button(onClick = { /* Handle button click */ }) {
          Text(text = "Click me!")
        }
      }
    }
  }
  `,
    description:
      "An example of a Jetpack Compose UI component for Android development.",
    keywords: ["Jetpack Compose", "UI component", "Android"],
  },
  {
    id: "react-api-hooks",
    language: "javascript",
    category: "Frontend Development",
    title: "React Hooks for API Calls",
    code: `
  import { useState, useEffect } from 'react';
  
  function useApiData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error));
    }, [url]);
  
    return { data, error };
  }
  
  // Example usage
  function MyComponent() {
    const { data, error } = useApiData('https://api.example.com/data');
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <div>Data: {data}</div>;
  }
  `,
    description:
      "Custom React hook for handling API calls and managing loading states.",
    keywords: ["React hooks", "API calls", "state management"],
  },
  {
    id: "scikit-learn-machine-learning",
    language: "python",
    category: "Data Engineering",
    title: "Machine Learning with Scikit-Learn",
    code: `
  from sklearn.datasets import load_iris
  from sklearn.model_selection import train_test_split
  from sklearn.linear_model import LogisticRegression
  
  # Load iris dataset
  iris = load_iris()
  X = iris.data
  y = iris.target
  
  # Split data into training and testing sets
  X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
  
  # Train logistic regression model
  model = LogisticRegression()
  model.fit(X_train, y_train)
  
  # Make predictions on test set
  y_pred = model.predict(X_test)
  `,
    description:
      "Basic machine learning example using scikit-learn library for classification.",
    keywords: ["machine learning", "scikit-learn", "logistic regression"],
  },
  {
    id: "compose-navigation",
    language: "kotlin",
    category: "Android Development",
    title: "Jetpack Compose Navigation",
    code: `
  import androidx.compose.foundation.layout.*
  import androidx.compose.material.*
  import androidx.compose.runtime.Composable
  import androidx.navigation.compose.*
  
  @Composable
  fun MyApp() {
    NavHost(navController = rememberNavController(), startDestination = "home") {
      composable("home") { HomeScreen() }
      composable("details") { DetailsScreen() }
    }
  }
  
  @Composable
  fun HomeScreen() {
    Column {
      Text(text = "Home Screen")
      Button(onClick = { /* Navigate to details screen */ }) {
        Text(text = "Go to details")
      }
    }
  }
  
  @Composable
  fun DetailsScreen() {
    Column {
      Text(text = "Details Screen")
    }
  }
  `,
    description:
      "Navigation setup in Jetpack Compose for Android applications.",
    keywords: ["Jetpack Compose", "navigation", "Android"],
  },
  {
    id: "react-context-api",
    language: "javascript",
    category: "Frontend Development",
    title: "React Context API",
    code: `
  import { createContext, useState } from 'react';
  
  const ThemeContext = createContext();
  
  function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  
  function MyComponent() {
    const { theme, setTheme } = useContext(ThemeContext);
  
    return (
      <div>
        <p>Current theme: {theme}</p>
        <button onClick={() => setTheme('dark')}>Switch to dark theme</button>
      </div>
    );
  }
  `,
    description:
      "Implementation of React Context API for global state management.",
    keywords: ["React Context API", "global state", "theming"],
  },
  {
    id: "matplotlib-visualization",
    language: "python",
    category: "Data Engineering",
    title: "Data Visualization with Matplotlib",
    code: `
  import matplotlib.pyplot as plt
  
  # Sample data
  x = [1, 2, 3, 4, 5]
  y = [2, 4, 6, 8, 10]
  
  # Create line plot
  plt.plot(x, y)
  
  # Add title and labels
  plt.title('Line Plot Example')
  plt.xlabel('X Axis')
  plt.ylabel('Y Axis')
  
  # Show plot
  plt.show()
  `,
    description:
      "Simple line plot creation using Matplotlib for data visualization.",
    keywords: ["Matplotlib", "data visualization", "line plot"],
  },
  {
    id: "compose-state-management",
    language: "kotlin",
    category: "Android Development",
    title: "Jetpack Compose State Management",
    code: `
    import androidx.compose.foundation.layout.*
    import androidx.compose.material.*
    import androidx.compose.runtime.*
    
    @Composable
    fun MyComponent() {
      var counter by remember { mutableStateOf(0) }
    
      Column {
        Text(text = "Counter: $counter")
        Button(onClick = { counter++ }) {
          Text(text = "Increment")
        }
      }
    }
    `,
    description: "State management in Jetpack Compose using mutableStateOf.",
    keywords: ["Jetpack Compose", "state management", "mutableStateOf"],
  },
  {
    id: "redux-state-management",
    language: "javascript",
    category: "Frontend Development",
    title: "React Redux for State Management",
    code: `
    import { createStore, combineReducers } from 'redux';
    import { Provider, useSelector, useDispatch } from 'react-redux';
    
    // Reducer function
    function counterReducer(state = 0, action) {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }
    
    // Create store
    const store = createStore(combineReducers({ counter: counterReducer }));
    
    // React component
    function MyComponent() {
      const counter = useSelector(state => state.counter);
      const dispatch = useDispatch();
    
      return (
        <div>
          <p>Counter: {counter}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
      );
    }
    `,
    description: "State management using Redux with React.",
    keywords: ["Redux", "state management", "React"],
  },
  {
    id: "nltk-nlp",
    language: "python",
    category: "Data Engineering",
    title: "Natural Language Processing with NLTK",
    code: `
    import nltk
    from nltk.tokenize import word_tokenize
    
    # Sample text
    text = "This is a sample sentence for natural language processing."
    
    # Tokenize text
    tokens = word_tokenize(text)
    
    # Print tokens
    print(tokens)
    `,
    description:
      "Basic text tokenization using Natural Language Toolkit (NLTK).",
    keywords: ["NLTK", "natural language processing", "tokenization"],
  },
  // Add more code snippets as needed
];
