"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import courseData from "@/data/music_courses.json";

interface Course {
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
        image: string 
}

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course: Course) => (
 
          <CardContainer className="inter-var m-4" key={course.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;

/*
That's a great question — and yes, the issue is because of the incorrect type String (capital S) instead of string (lowercase s).

✅ Fix:
Your current code:

ts
Copy
Edit
image: String  // ❌ Incorrect type (capital S — this refers to the JavaScript String constructor)
Should be:

ts
Copy
Edit
image: string  // ✅ Correct primitive type
Why?
string (lowercase) is a TypeScript primitive type.

String (uppercase) refers to the JavaScript String constructor, which is not meant to be used as a type in TypeScript.

Using String as a type may lead to weird behavior like undefined, type mismatches, or JSX runtime errors — especially when used in <img src={...} />.

✅ Correct Interface:
ts
Copy
Edit
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string; // ✅ lowercase string
}
Now, using it like this will work fine:

tsx
Copy
Edit
<img src={course.image} alt={course.title} />
Let me know if you're loading images from a local folder, public assets, or external URLs — I can guide you based on that too.









Ask ChatGPT
You said:
So what is String then and when should i use it


ChatGPT said:
Great question!

🔍 string vs String in TypeScript:
Type	What it is	Use case
string	A primitive type	✅ Use this for typing
String	A JavaScript wrapper object	⚠️ Rarely needed

✅ Use string (lowercase) — almost always:
ts
Copy
Edit
let name: string = "Chinmoy";
This is the correct TypeScript type for string values.

It works cleanly with JSX, JSON, APIs, and TypeScript tooling.

⚠️ What is String (capital S)?
ts
Copy
Edit
let name: String = new String("Chinmoy");
String is a constructor in JavaScript.

It creates a string object (not a primitive).

Rarely used because it's heavier and not needed in most code.

Can cause unexpected behavior or errors in comparisons and rendering.

🧪 Example:
ts
Copy
Edit
let a: string = "hello";
let b: String = new String("hello");

console.log(typeof a); // "string"
console.log(typeof b); // "object"

console.log(a === b); // false ❌
✅ Summary:
Use string for all variable and property types.

Avoid using String unless you intentionally need to create string objects (which is very rare).

Let me know if you'd like to see where using String can break JSX or data processing — I can show real examples.








You said:
if i console.log b what it will give


ChatGPT said:
Great follow-up!

Let's break it down:

🔍 Code:
ts
Copy
Edit
let b: String = new String("hello");
console.log(b);
✅ Output:
js
Copy
Edit
[String: 'hello']
Or in browser dev tools / Node.js it looks like:

js
Copy
Edit
[String: 'hello'] {
  0: 'h',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
  length: 5,
  [[PrimitiveValue]]: 'hello'
}
Explanation:
You're creating a String object, not a primitive.

It behaves like an object with properties, not a regular string.

Internally it wraps the primitive 'hello'.

✅ If you do this:
ts
Copy
Edit
let b: String = new String("hello");
console.log(typeof b);  // "object"
console.log(b === "hello");  // false ❌ (because object ≠ primitive)
✅ Correct usage:
Instead, use:

ts
Copy
Edit
let a: string = "hello";
console.log(a); // "hello"
console.log(typeof a); // "string"
console.log(a === "hello"); // true ✅
🚫 Don't use new String(...) unless you really need an object (which you almost never do in frontend or backend dev).
Let me know if you want a demo showing how this breaks JSX like <img src={b} />.








You said:
but it is like an array [String: 'hello'] so why type of it is object


ChatGPT said:
Awesome observation — you're absolutely right to wonder why new String("hello") logs like an array-like object but has typeof "object".

Let’s break it down clearly:

✅ Why is typeof new String("hello") → "object"?
Because new String("hello") creates an object wrapper around the primitive string.

This is part of JavaScript's "wrapper object" behavior:

new String("...") → creates a String object

new Number(...) → creates a Number object

new Boolean(...) → creates a Boolean object

🧪 Example:
ts
Copy
Edit
let b = new String("hello");
console.log(typeof b); // "object"
console.log(b); 
Output:
js
Copy
Edit
[String: 'hello'] {
  0: 'h',
  1: 'e',
  2: 'l',
  3: 'l',
  4: 'o',
  length: 5,
  [[PrimitiveValue]]: 'hello'
}
This looks like an array because:

The String object is array-like: it has indexed properties (b[0], b[1], etc.)

It also has a length property.

But under the hood, it’s still an object, not a real array or primitive.

🧠 Why this happens:
ts
Copy
Edit
let b = new String("hello");

console.log(b[0]); // "h"
console.log(b.length); // 5
console.log(b.toUpperCase()); // "HELLO"
These work because JavaScript's String object gives you methods and array-like access.

But it's still an object — not a primitive string.

⚠️ Key Difference:
ts
Copy
Edit
let s1 = "hello";              // primitive string
let s2 = new String("hello");  // String object

console.log(s1 === s2); // false ❌
console.log(s1 == s2);  // true (coerced) ✅
=== fails because they’re different types.

== coerces the object to primitive, so it passes.

✅ Conclusion:
It looks array-like, but it’s still an object.

Always use primitive string, not new String() — unless you're doing something super low-level (rare).

Let me know if you'd like a real-world example where new String() breaks JSX or API data!









*/
