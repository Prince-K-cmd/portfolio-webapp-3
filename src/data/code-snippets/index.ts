export const codeSnippets = [
  {
    language: "typescript",
    category: "Frontend",
    title: "React State Management",
    code: `
  // React Custom Hook with Context
  function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);

    return { count, increment, decrement };
  }

  function CounterComponent() {
    const { count, increment, decrement } = useCounter();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
      `,
  },
  {
    language: "kotlin",
    category: "Android",
    title: "Jetpack Compose Counter",
    code: `
  @Composable
  fun CounterScreen() {
    var count by remember { mutableStateOf(0) }

    Column(
      horizontalAlignment = Alignment.CenterHorizontally,
      verticalArrangement = Arrangement.Center
    ) {
      Text(
        text = "Count: $count",
        style = MaterialTheme.typography.h4
      )
      Row {
        Button(onClick = { count++ }) {
          Text("Increment")
        }
        Spacer(modifier = Modifier.width(8.dp))
        Button(onClick = { count-- }) {
          Text("Decrement")
        }
      }
    }
  }
      `,
  },
  {
    language: "python",
    category: "Data Engineering",
    title: "PySpark Data Processing",
    code: `
  # Advanced Data Transformation with PySpark
  from pyspark.sql import SparkSession
  from pyspark.sql.functions import col, avg, sum

  def process_sales_data(spark, input_path):
      # Read sales data
      sales_df = spark.read.csv(
          input_path,
          header=True,
          inferSchema=True
      )

      # Perform complex aggregations
      result_df = (
          sales_df
          .groupBy("product_category")
          .agg(
              sum("total_sales").alias("total_category_sales"),
              avg("unit_price").alias("average_unit_price")
          )
          .orderBy(col("total_category_sales").desc())
      )

      result_df.show()
      return result_df
      `,
  },
  {
    language: "typescript",
    category: "Frontend",
    title: "React Advanced Hook",
    code: `
  // Custom useLocalStorage Hook
  function useLocalStorage<T>(
    key: string,
    initialValue: T
  ): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });

    const setValue = useCallback((value: T) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    }, [key]);

    return [storedValue, setValue];
  }
      `,
  },
  {
    language: "kotlin",
    category: "Android",
    title: "Jetpack Compose Navigation",
    code: `
  @Composable
  fun AppNavigation() {
    val navController = rememberNavController()

    NavHost(
      navController = navController,
      startDestination = "home"
    ) {
      composable("home") {
        HomeScreen(
          onNavigateToDetails = { id ->
            navController.navigate("details/$id")
          }
        )
      }

      composable(
        route = "details/{itemId}",
        arguments = listOf(
          navArgument("itemId") { type = NavType.StringType }
        )
      ) { backStackEntry ->
        val itemId = backStackEntry.arguments?.getString("itemId")
        DetailScreen(itemId)
      }
    }
  }
      `,
  },
  {
    language: "python",
    category: "Data Engineering",
    title: "Machine Learning Pipeline",
    code: `
  # ML Pipeline with PySpark and scikit-learn
  from pyspark.ml import Pipeline
  from pyspark.ml.feature import VectorAssembler, StandardScaler
  from pyspark.ml.classification import LogisticRegression

  def create_ml_pipeline(features):
      # Feature preparation stages
      assembler = VectorAssembler(
          inputCols=features,
          outputCol="features"
      )

      scaler = StandardScaler(
          inputCol="features",
          outputCol="scaled_features"
      )

      # Model training stage
      lr = LogisticRegression(
          featuresCol="scaled_features",
          labelCol="label"
      )

      # Combine stages into a pipeline
      pipeline = Pipeline(stages=[
          assembler,
          scaler,
          lr
      ])

      return pipeline
      `,
  },
  {
    language: "javascript",
    category: "Frontend",
    title: "JavaScript DOM Manipulation",
    code: `
  // JavaScript DOM Manipulation
  const button = document.createElement('button');
  button.textContent = 'Click me!';
  button.onclick = function() {
    alert('Button clicked!');
  };
  document.body.appendChild(button);
      `,
  },
  {
    language: "kotlin",
    category: "Android",
    title: "Kotlin Coroutines",
    code: `
  // Kotlin Coroutines
  suspend fun performNetworkRequest() {
    withContext(Dispatchers.IO) {
      // Perform network request
    }
  }
      `,
  },
  {
    language: "python",
    category: "Data Engineering",
    title: "Python Data Structures",
    code: `
  # Python Data Structures
  my_list = [1, 2, 3, 4, 5]
  my_dict = {'name': 'John', 'age': 30}
  print(my_list[0])  # Output: 1
  print(my_dict['name'])  # Output: John
      `,
  },
  {
    language: "typescript",
    category: "Frontend",
    title: "TypeScript Interfaces",
    code: `
  // TypeScript Interfaces
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: 'John',
    age: 30
  };
      `,
  },
  {
    language: "javascript",
    category: "Frontend",
    title: "JavaScript Closures",
    code: `
  // JavaScript Closures
  function outerFunction() {
    let counter = 0;
    function innerFunction() {
      counter++;
      console.log(counter);
    }
    return innerFunction;
  }

  const myFunction = outerFunction();
  myFunction();  // Output: 1
  myFunction();  // Output: 2
      `,
  },
];
