document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
          {
  "question": "Reverse an array.",
  "description": "Given an array, reverse the order of its elements in-place.",
  "hint": "Consider using two pointers, one starting at the beginning and one at the end of the array.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Initialize a <code>left</code> pointer to 0 and a <code>right</code> pointer to the last index of the array.</li>
          <li>While <code>left</code> is less than <code>right</code>, swap the elements at the <code>left</code> and <code>right</code> indices.</li>
          <li>Increment the <code>left</code> pointer and decrement the <code>right</code> pointer.</li>
        </ol>

        <pre><code class="language-javascript">function reverseArrayInPlace(arr) {
          let left = 0;
          let right = arr.length - 1;
          while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
          }
          return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n)</p>
        <p><strong>Space Complexity:</strong> O(1)</p>
      `
},
{
  "question": "Check if a string is a palindrome.",
  "description": "Given a string, determine if it reads the same forwards and backward. Case should be ignored.",
  "hint": "Convert the input string to a consistent case (either lowercase or uppercase) and then compare it with its reversed version.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Convert the input string to lowercase (or uppercase) to ignore case sensitivity.</li>
          <li>Create a reversed version of the lowercase string.</li>
          <li>Compare the original lowercase string with its reversed version. If they are identical, the original string is a palindrome.</li>
        </ol>

        <pre><code class="language-javascript">function isPalindrome(str) {
          const lowerCaseStr = str.toLowerCase();
          const reversedStr = lowerCaseStr.split('').reverse().join('');
          return lowerCaseStr === reversedStr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (due to string reversal).</p>
        <p><strong>Space Complexity:</strong> O(n) - in some implementations of <code>reverse()</code> or <code>join()</code>, a new string might be created.</p>
      `
},
{
  "question": "Find the factorial of a number.",
  "description": "Given a non-negative integer, calculate its factorial.",
  "hint": "The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120. The factorial of 0 is 1.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Handle the base case: if the input number <code>n</code> is 0, return 1.</li>
          <li>Initialize a variable, say <code>result</code>, to 1.</li>
          <li>Iterate from 1 up to <code>n</code> (inclusive).</li>
          <li>In each iteration, multiply <code>result</code> by the current iteration number.</li>
          <li>After the loop finishes, return the final value of <code>result</code>.</li>
        </ol>

        <pre><code class="language-javascript">function factorial(n) {
          if (n === 0) {
            return 1;
          }
          let result = 1;
          for (let i = 1; i <= n; i++) {
            result *= i;
          }
          return result;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - the loop runs n times.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Generate the Fibonacci sequence up to a given number of terms.",
  "description": "Given a positive integer 'n', generate the first 'n' numbers in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.",
  "hint": "You can use an iterative approach, keeping track of the last two numbers in the sequence to generate the next one.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Handle the base cases:
            <ul>
              <li>If <code>n</code> is 0, return an empty array.</li>
              <li>If <code>n</code> is 1, return an array containing only 0.</li>
              <li>If <code>n</code> is 2, return an array containing 0 and 1.</li>
            </ul>
          </li>
          <li>Initialize an array, say <code>fibSequence</code>, with the first two Fibonacci numbers: [0, 1].</li>
          <li>Iterate from 2 up to <code>n-1</code>. In each iteration:
            <ul>
              <li>Calculate the next Fibonacci number by adding the last two numbers in the <code>fibSequence</code> array.</li>
              <li>Push this new number into the <code>fibSequence</code> array.</li>
            </ul>
          </li>
          <li>Return the <code>fibSequence</code> array.</li>
        </ol>

        <pre><code class="language-javascript">function fibonacciSequence(n) {
          if (n === 0) {
            return [];
          } else if (n === 1) {
            return [0];
          } else if (n === 2) {
            return [0, 1];
          }
          const fibSequence = [0, 1];
          for (let i = 2; i < n; i++) {
            const nextFib = fibSequence[i - 1] + fibSequence[i - 2];
            fibSequence.push(nextFib);
          }
          return fibSequence;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - the loop runs n-2 times.</p>
        <p><strong>Space Complexity:</strong> O(n) - to store the Fibonacci sequence in the array.</p>
      `
},
{
  "question": "Implement Linear Search.",
  "description": "Given an array and a target value, implement the linear search algorithm to find the index of the target value in the array. If the target is not found, return -1.",
  "hint": "Iterate through each element of the array and compare it with the target value. If a match is found, return the current index.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Iterate through the input array from the first element to the last element.</li>
          <li>In each iteration, compare the current element with the <code>target</code> value.</li>
          <li>If the current element is equal to the <code>target</code>, return the current index.</li>
          <li>If the loop completes without finding the <code>target</code>, return -1.</li>
        </ol>

        <pre><code class="language-javascript">function linearSearch(arr, target) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
              return i;
            }
          }
          return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - in the worst case, we might need to iterate through the entire array.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Count the number of occurrences of a specific character in a string.",
  "description": "Given a string and a character, count how many times that specific character appears in the string.",
  "hint": "Iterate through the string, and for each character, check if it matches the given character. Maintain a counter.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Initialize a counter variable to 0.</li>
          <li>Iterate through each character of the input string.</li>
          <li>For each character in the string, compare it with the given target character.</li>
          <li>If the characters match, increment the counter.</li>
          <li>After iterating through the entire string, return the final value of the counter.</li>
        </ol>

        <pre><code class="language-javascript">function countCharacter(str, char) {
          let count = 0;
          for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
              count++;
            }
          }
          return count;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (we iterate through it once).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the counter.</p>
      `
},
{
  "question": "Implement Bubble Sort.",
  "description": "Implement the Bubble Sort algorithm to sort an array of numbers in ascending order.",
  "hint": "Repeatedly step through the list, compare adjacent elements and swap them if they are in the wrong order. The pass through the list is repeated until no swaps are needed.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Iterate through the array <code>n-1</code> times, where <code>n</code> is the length of the array. The largest element 'bubbles' to its correct position at the end of each pass.</li>
          <li>In each pass (from the beginning up to the unsorted part of the array), compare adjacent elements.</li>
          <li>If two adjacent elements are in the wrong order (the left element is greater than the right element for ascending order), swap them.</li>
          <li>After each pass, the largest unsorted element is in its correct sorted position.</li>
          <li>The process continues until the entire array is sorted, which occurs when no more swaps are made in a pass.</li>
        </ol>

        <pre><code class="language-javascript">function bubbleSort(arr) {
          const n = arr.length;
          for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
              if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              }
            }
          }
          return arr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n^2) - in the worst and average case.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for swapping.</p>
      `
},
{
  "question": "Reverse a string.",
  "description": "Given a string, return a new string with the characters in reverse order.",
  "hint": "Consider different ways to iterate through the string and build the reversed string.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize an empty string, say <code>reversedStr</code>.</li>
          <li>Iterate through the input string from the last character to the first character.</li>
          <li>In each iteration, append the current character to the <code>reversedStr</code>.</li>
          <li>After iterating through the entire string, return <code>reversedStr</code>.</li>
        </ol>

        <pre><code class="language-javascript">function reverseString(str) {
          let reversedStr = "";
          for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
          }
          return reversedStr;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the string (we iterate through it once).</p>
        <p><strong>Space Complexity:</strong> O(n) - to store the reversed string.</p>
      `
},
{
  "question": "Check if two strings are anagrams.",
  "description": "Given two strings, determine if they are anagrams of each other. Anagrams are strings that contain the same characters with the same frequencies, but in a different order. Case should be ignored.",
  "hint": "One approach is to count the frequency of each character in both strings after converting them to the same case. If the frequency maps are identical, they are anagrams.",
  "answer": `
        <p><strong>Sample Solution Approach (Character Counting):</strong></p>
        <ol>
          <li>Convert both input strings to lowercase (or uppercase).</li>
          <li>If the lengths of the two strings are different, they cannot be anagrams, so return <code>false</code>.</li>
          <li>Create a frequency map (e.g., an object or a Map) to store the count of each character in the first string.</li>
          <li>Iterate through the first string, and for each character, increment its count in the frequency map.</li>
          <li>Iterate through the second string. For each character:
            <ul>
              <li>If the character is not found in the frequency map or its count is zero, the strings are not anagrams, so return <code>false</code>.</li>
              <li>Otherwise, decrement the count of the character in the frequency map.</li>
            </ul>
          </li>
          <li>After iterating through the second string, if all character counts in the frequency map are zero, the strings are anagrams, so return <code>true</code>.</li>
        </ol>

        <pre><code class="language-javascript">function areAnagrams(str1, str2) {
          const s1 = str1.toLowerCase();
          const s2 = str2.toLowerCase();

          if (s1.length !== s2.length) {
            return false;
          }

          const charCounts = {};
          for (let char of s1) {
            charCounts[char] = (charCounts[char] || 0) + 1;
          }

          for (let char of s2) {
            if (!charCounts[char]) {
              return false;
            }
            charCounts[char]--;
          }

          for (let char in charCounts) {
            if (charCounts[char] !== 0) {
              return false;
            }
          }

          return true;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the length of the strings (assuming relatively constant alphabet size).</p>
        <p><strong>Space Complexity:</strong> O(k) - where k is the number of unique characters in the strings (for the frequency map).</p>
      `
},
{
  "question": "Implement Binary Search.",
  "description": "Given a sorted array and a target value, implement the binary search algorithm to find the index of the target value in the array. If the target is not found, return -1.",
  "hint": "Binary search works on sorted arrays. It repeatedly divides the search interval in half. If the middle element is the target, return its index. If the target is less than the middle element, search the left half; otherwise, search the right half.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize two pointers, <code>left</code> to 0 and <code>right</code> to the last index of the array.</li>
          <li>While <code>left</code> is less than or equal to <code>right</code>:
            <ul>
              <li>Calculate the middle index: <code>mid = Math.floor((left + right) / 2)</code>.</li>
              <li>If the element at <code>mid</code> is equal to the <code>target</code>, return <code>mid</code>.</li>
              <li>If the element at <code>mid</code> is less than the <code>target</code>, the target must be in the right half, so update <code>left = mid + 1</code>.</li>
              <li>If the element at <code>mid</code> is greater than the <code>target</code>, the target must be in the left half, so update <code>right = mid - 1</code>.</li>
            </ul>
          </li>
          <li>If the loop finishes without finding the target, return -1.</li>
        </ol>

        <pre><code class="language-javascript">function binarySearch(arr, target) {
          let left = 0;
          let right = arr.length - 1;
          while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
              return mid;
            } else if (arr[mid] < target) {
              left = mid + 1;
            } else {
              right = mid - 1;
            }
          }
          return -1;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log n) - the search interval is halved in each step.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Find the Greatest Common Divisor (GCD) of two numbers.",
  "description": "Given two integers, find their Greatest Common Divisor (GCD). The GCD of two or more integers, which are not all zero, is the largest positive integer that divides each of the integers.",
  "hint": "The Euclidean algorithm is an efficient method for computing the GCD of two numbers.",
  "answer": `
        <p><strong>Sample Solution Approach (Euclidean Algorithm):</strong></p>
        <ol>
          <li>If the second number (<code>b</code>) is 0, the GCD is the first number (<code>a</code>).</li>
          <li>Otherwise, the GCD of <code>a</code> and <code>b</code> is the same as the GCD of <code>b</code> and the remainder of <code>a</code> divided by <code>b</code> (<code>a % b</code>).</li>
          <li>Repeat this process until the second number becomes 0. The last non-zero remainder is the GCD.</li>
        </ol>

        <pre><code class="language-javascript">function findGCD(a, b) {
          while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
          }
          return a;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(log(min(a, b))) - based on the Euclidean algorithm.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used.</p>
      `
},
{
  "question": "Implement a Stack using an array.",
  "description": "Implement the basic operations of a Stack data structure (push, pop, peek, isEmpty) using an array as the underlying storage.",
  "hint": "Think about which end of the array would be most efficient for adding and removing elements in a Last-In, First-Out (LIFO) manner.",
  "answer": `
        <p><strong>Sample Solution Approach:</strong></p>
        <ol>
          <li>Use an array (e.g., <code>this.items = []</code>) to store the elements of the stack.</li>
          <li><strong>push(element):</strong> Add the given <code>element</code> to the end of the array. This will be the top of the stack.</li>
          <li><strong>pop():</strong> Remove and return the last element of the array. If the stack is empty, return an appropriate value (e.g., <code>undefined</code>).</li>
          <li><strong>peek():</strong> Return the last element of the array without removing it. If the stack is empty, return an appropriate value (e.g., <code>undefined</code>).</li>
          <li><strong>isEmpty():</strong> Return <code>true</code> if the array is empty (stack has no elements), and <code>false</code> otherwise.</li>
        </ol>

        <pre><code class="language-javascript">class Stack {
          constructor() {
            this.items = [];
          }

          push(element) {
            this.items.push(element);
          }

          pop() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items.pop();
          }

          peek() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items[this.items.length - 1];
          }

          isEmpty() {
            return this.items.length === 0;
          }
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) for all operations (push, pop, peek, isEmpty) on average, as array operations at the end are typically constant time.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements currently in the stack (to store the elements in the array).</p>
      `
},
{
  "question": "Implement a Queue using an array.",
  "description": "Implement the basic operations of a Queue data structure (enqueue, dequeue, peek, isEmpty) using an array as the underlying storage.",
  "hint": "Consider how to efficiently manage the front and rear of the queue using an array. You might need to handle the case where the front of the queue reaches the end of the array.",
  "answer": `
        <p><strong>Sample Solution Approach (Using Array with Pointers):</strong></p>
        <ol>
          <li>Initialize an array (e.g., <code>this.items = []</code>), a <code>front</code> pointer (initially 0), and a <code>rear</code> pointer (initially -1).</li>
          <li><strong>enqueue(element):</strong> Increment the <code>rear</code> pointer and add the <code>element</code> at the <code>rear</code> index in the array.</li>
          <li><strong>dequeue():</strong> If the queue is not empty (<code>front <= rear</code>), return the element at the <code>front</code> index and increment the <code>front</code> pointer. If the queue becomes empty, you might need to reset <code>front</code> and <code>rear</code>.</li>
          <li><strong>peek():</strong> If the queue is not empty, return the element at the <code>front</code> index without removing it.</li>
          <li><strong>isEmpty():</strong> Return <code>true</code> if <code>front</code> is greater than <code>rear</code> (queue is empty), and <code>false</code> otherwise.</li>
        </ol>

        <pre><code class="language-javascript">class Queue {
          constructor() {
            this.items = [];
            this.front = 0;
            this.rear = -1;
          }

          enqueue(element) {
            this.rear++;
            this.items[this.rear] = element;
          }

          dequeue() {
            if (this.isEmpty()) {
              return undefined;
            }
            const item = this.items[this.front];
            this.front++;
            return item;
          }

          peek() {
            if (this.isEmpty()) {
              return undefined;
            }
            return this.items[this.front];
          }

          isEmpty() {
            return this.front > this.rear;
          }
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(1) for all operations (enqueue, dequeue, peek, isEmpty) on average.</p>
        <p><strong>Space Complexity:</strong> O(n) - where n is the number of elements currently in the queue (to store the elements in the array).</p>
      `
},
{
  "question": "Reverse a linked list.",
  "description": "Given the head of a singly linked list, reverse the order of the nodes in the list.",
  "hint": "Iterate through the linked list, changing the 'next' pointer of each node to point to the previous node.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Initialize three pointers: <code>prev</code> (initially <code>null</code>), <code>current</code> (initially <code>head</code>), and <code>next</code> (initially <code>null</code>).</li>
          <li>While <code>current</code> is not <code>null</code>:
            <ul>
              <li>Store the next node of the <code>current</code> node in the <code>next</code> pointer: <code>next = current.next</code>.</li>
              <li>Reverse the direction of the <code>current</code> node's <code>next</code> pointer to point to the <code>prev</code> node: <code>current.next = prev</code>.</li>
              <li>Move the <code>prev</code> pointer to the current node: <code>prev = current</code>.</li>
              <li>Move the <code>current</code> pointer to the next node we stored earlier: <code>current = next</code>.</li>
            </ul>
          </li>
          <li>After the loop finishes, the <code>prev</code> pointer will be pointing to the new head of the reversed linked list. Return <code>prev</code>.</li>
        </ol>

        <pre><code class="language-javascript">function reverseLinkedList(head) {
          let prev = null;
          let current = head;
          let next = null;
          while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
          }
          return prev;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the linked list (we traverse it once).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Find the middle element of a linked list.",
  "description": "Given the head of a singly linked list, find and return the middle node of the list. If the list has an even number of nodes, return the second middle node.",
  "hint": "Use the 'fast and slow pointer' approach. One pointer moves at twice the speed of the other.",
  "answer": `
        <p><strong>Sample Solution Approach (Fast and Slow Pointers):</strong></p>
        <ol>
          <li>Initialize two pointers, <code>slow</code> and <code>fast</code>, both starting at the <code>head</code> of the linked list.</li>
          <li>While the <code>fast</code> pointer is not <code>null</code> and the <code>fast</code> pointer's <code>next</code> is not <code>null</code>:
            <ul>
              <li>Move the <code>slow</code> pointer one step forward: <code>slow = slow.next</code>.</li>
              <li>Move the <code>fast</code> pointer two steps forward: <code>fast = fast.next.next</code>.</li>
            </ul>
          </li>
          <li>When the loop terminates, the <code>slow</code> pointer will be pointing to the middle node (or the second middle node in case of an even length list). Return <code>slow</code>.</li>
        </ol>

        <pre><code class="language-javascript">function findMiddleLinkedList(head) {
          let slow = head;
          let fast = head;
          while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
          }
          return slow;
        }</code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the linked list (we traverse it once with the slow pointer effectively reaching the middle).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Check if a binary tree is balanced.",
  "description": "Given the root of a binary tree, determine if it is height-balanced. A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
  "hint": "You can use a recursive approach. For each node, find the height of its left and right subtrees. If the absolute difference in heights is greater than 1, the tree is not balanced. You'll also need to recursively check if the subtrees themselves are balanced.",
  "answer": `
        <p><strong>Sample Solution Approach (Recursive with Height Calculation):</strong></p>
        <ol>
          <li>Create a helper function that calculates the height of a subtree. If a subtree is null, its height is -1.</li>
          <li>Create a recursive function <code>isBalancedHelper(node)</code> that does the following:
            <ul>
              <li>Base case: If the <code>node</code> is <code>null</code>, return <code>true</code> (an empty tree is balanced).</li>
              <li>Recursively check if the left subtree (<code>node.left</code>) is balanced.</li>
              <li>Recursively check if the right subtree (<code>node.right</code>) is balanced.</li>
              <li>Calculate the height of the left subtree and the right subtree using the helper function.</li>
              <li>If the absolute difference between the left and right subtree heights is greater than 1, return <code>false</code>.</li>
              <li>Return <code>true</code> if both subtrees are balanced and the height difference condition is met.</li>
            </ul>
          </li>
          <li>Call the <code>isBalancedHelper</code> function with the root of the binary tree.</li>
        </ol>

        <pre><code class="language-javascript">function isBalanced(root) {
          function getHeight(node) {
            if (!node) {
              return -1;
            }
            return 1 + Math.max(getHeight(node.left), getHeight(node.right));
          }

          function isBalancedHelper(node) {
            if (!node) {
              return true;
            }

            const leftBalanced = isBalancedHelper(node.left);
            const rightBalanced = isBalancedHelper(node.right);
            const heightDiff = Math.abs(getHeight(node.left) - getHeight(node.right));

            return leftBalanced && rightBalanced && heightDiff <= 1;
          }

          return isBalancedHelper(root);
        }

        // Definition of a TreeNode (assuming it's available)
        // function TreeNode(val, left, right) {
        //     this.val = (val===undefined ? 0 : val)
        //     this.left = (left===undefined ? null : left)
        //     this.right = (right===undefined ? null : right)
        // }
        </code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the binary tree (each node is visited at most once).</p>
        <p><strong>Space Complexity:</strong> O(h) - where h is the height of the binary tree (due to the recursive call stack).</p>
      `
},
{
  "question": "Implement a function to find the Lowest Common Ancestor (LCA) of two nodes in a Binary Search Tree (BST).",
  "description": "Given the root of a Binary Search Tree (BST) and the values of two nodes in the tree, find the Lowest Common Ancestor (LCA). The LCA is defined as the lowest node in the BST that has both input nodes as descendants (where a node can be a descendant of itself).",
  "hint": "Utilize the properties of a BST. If the value of the current node is greater than both node values, the LCA must be in the left subtree. If it's smaller than both, the LCA must be in the right subtree. If the current node's value is between the two node values (or equal to one of them), it is the LCA.",
  "answer": `
        <p><strong>Sample Solution Approach (Iterative):</strong></p>
        <ol>
          <li>Start with the <code>root</code> of the BST as the current node.</li>
          <li>While the <code>current</code> node is not <code>null</code>:
            <ul>
              <li>If the value of the <code>current</code> node is greater than both target node values (<code>val1</code> and <code>val2</code>), move to the left subtree: <code>current = current.left</code>.</li>
              <li>If the value of the <code>current</code> node is less than both target node values (<code>val1</code> and <code>val2</code>), move to the right subtree: <code>current = current.right</code>.</li>
              <li>Otherwise, the <code>current</code> node's value lies between (or is equal to one of) the target values, meaning it is the LCA. Return <code>current</code>.</li>
            </ul>
          </li>
          <li>(This case should ideally not be reached if both nodes are guaranteed to be in the BST).</li>
        </ol>

        <pre><code class="language-javascript">function lowestCommonAncestorBST(root, val1, val2) {
          let current = root;
          while (current) {
            if (val1 < current.val && val2 < current.val) {
              current = current.left;
            } else if (val1 > current.val && val2 > current.val) {
              current = current.right;
            } else {
              return current;
            }
          }
          return null; // Should not happen if nodes are guaranteed to exist
        }

        // Definition of a TreeNode (assuming it's available)
        // function TreeNode(val) {
        //     this.val = val;
        //     this.left = this.right = null;
        // }
        </code></pre>

        <p><strong>Time Complexity:</strong> O(h) - where h is the height of the BST (in the worst case, we might traverse from the root to a leaf).</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the pointers.</p>
      `
},
{
  "question": "Implement a function to detect a cycle in a linked list.",
  "description": "Given the head of a singly linked list, determine if the list contains a cycle. A cycle exists if some node in the list can be reached again by continuously following the 'next' pointer.",
  "hint": "Use Floyd's cycle detection algorithm (also known as the 'tortoise and hare' algorithm). Maintain two pointers, one moving at a slower pace (slow pointer) and the other at a faster pace (fast pointer). If a cycle exists, the fast pointer will eventually meet the slow pointer.",
  "answer": `
        <p><strong>Sample Solution Approach (Floyd's Cycle Detection):</strong></p>
        <ol>
          <li>Initialize two pointers, <code>slow</code> and <code>fast</code>, both starting at the <code>head</code> of the linked list.</li>
          <li>Move the <code>slow</code> pointer one step at a time (<code>slow = slow.next</code>).</li>
          <li>Move the <code>fast</code> pointer two steps at a time (<code>fast = fast.next.next</code>).</li>
          <li>While the <code>fast</code> pointer is not <code>null</code> and <code>fast.next</code> is not <code>null</code>:
            <ul>
              <li>If <code>slow</code> and <code>fast</code> become equal (they meet at some node), it indicates the presence of a cycle. Return <code>true</code>.</li>
              <li>Move <code>slow</code> one step further.</li>
              <li>Move <code>fast</code> two steps further.</li>
            </ul>
          </li>
          <li>If the loop finishes (i.e., <code>fast</code> becomes <code>null</code> or <code>fast.next</code> becomes <code>null</code>) without <code>slow</code> and <code>fast</code> meeting, it means there is no cycle in the linked list. Return <code>false</code>.</li>
        </ol>

        <pre><code class="language-javascript">function hasCycle(head) {
          if (!head || !head.next) {
            return false;
          }
          let slow = head;
          let fast = head.next;
          while (fast !== null && fast.next !== null) {
            if (slow === fast) {
              return true;
            }
            slow = slow.next;
            fast = fast.next.next;
          }
          return false;
        }

        // Definition of a ListNode (assuming it's available)
        // function ListNode(val) {
        //     this.val = val;
        //     this.next = null;
        // }
        </code></pre>

        <p><strong>Time Complexity:</strong> O(n) - where n is the number of nodes in the linked list. In the case of a cycle, the fast pointer will eventually catch up to the slow pointer within the cycle.</p>
        <p><strong>Space Complexity:</strong> O(1) - constant extra space is used for the two pointers.</p>
      `
},
{
  "question": "Tell me about a time you faced a challenge and how you overcame it.",
  "description": "This behavioral question aims to assess your problem-solving skills, resilience, and approach to difficult situations.",
  "hint": "Choose a specific challenge you encountered, explain your role, the actions you took, and the final outcome. Use the STAR method (Situation, Task, Action, Result) to structure your answer.",
  "answer": `
        <p><strong>Sample Answer Structure (Using the STAR Method):</strong></p>
        <ol>
          <li><strong>Situation:</strong> Briefly describe the context of the challenge. What was the situation? When and where did it happen?</li>
          <li><strong>Task:</strong> Explain your specific role in the situation and what you were tasked with achieving. What was expected of you?</li>
          <li><strong>Action:</strong> Detail the steps you took to address the challenge. What specific actions did you take? What strategies did you employ? Be specific about your contributions.</li>
          <li><strong>Result:</strong> Describe the outcome of your actions. What was the result? What did you learn from this experience? Quantify your results if possible.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Problem-solving skills, Initiative, Analytical thinking, Perseverance, Learning from experience, Positive outcome.</p>
      `
},
{
  "question": "Why are you interested in this role?",
  "description": "This question helps the interviewer understand your motivation for applying to this specific position and whether your career goals align with the role's responsibilities and growth opportunities.",
  "hint": "Connect your skills, experiences, and career aspirations to the specific requirements and opportunities presented by the role. Show genuine enthusiasm.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Alignment and Enthusiasm):</strong></p>
        <ol>
          <li><strong>Specific Aspects of the Role:</strong> Mention specific responsibilities or aspects of the job description that genuinely interest you and align with your skills and career goals.</li>
          <li><strong>Connection to Your Skills and Experience:</strong> Explain how your previous experiences and skills make you a good fit for the role and how you can contribute effectively. Provide specific examples if possible.</li>
          <li><strong>Growth Opportunities:</strong> Express your interest in the learning and growth opportunities that this role and TCS can offer. Show your desire to develop new skills and advance your career within the company.</li>
          <li><strong>Enthusiasm for the Company:</strong> Briefly reiterate your interest in TCS and how this role fits into your overall career aspirations within the organization.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Genuine interest, Understanding of the role, Alignment of skills and experience, Career aspirations, Enthusiasm for TCS.</p>
      `
},
{
  "question": "How do you handle working in a team?",
  "description": "This behavioral question assesses your teamwork and collaboration skills, as well as your ability to contribute effectively in a group setting.",
  "hint": "Highlight your positive team-oriented qualities, such as communication, collaboration, respect for others' opinions, and your ability to contribute to a shared goal. Provide a specific example if possible.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Collaboration and Contribution):</strong></p>
        <ol>
          <li><strong>Positive Team Qualities:</strong> Describe your key strengths as a team member. This might include:
            <ul>
              <li>Effective communication and active listening.</li>
              <li>Willingness to collaborate and share ideas.</li>
              <li>Respect for diverse perspectives and contributions.</li>
              <li>Ability to compromise and find common ground.</li>
              <li>Taking initiative and contributing your fair share.</li>
              <li>Supporting team members and fostering a positive environment.</li>
            </ul>
          </li>
          <li><strong>Example of Teamwork (Optional):</strong> Briefly describe a positive experience working in a team, highlighting your role and contributions to the team's success. Use the STAR method concisely if you choose to provide an example.</li>
          <li><strong>Value of Teamwork:</strong> Briefly explain why you believe teamwork is important for achieving goals and fostering innovation.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Communication skills, Collaboration, Respect for others, Contribution to shared goals, Positive attitude, Problem-solving within a team.</p>
      `
},
{
  "question": "Tell me about your long-term career goals.",
  "description": "This question explores your ambition, career planning, and how you envision your professional growth over the next several years.",
  "hint": "Show that you have thought about your future and that your aspirations align with potential opportunities within a company like TCS. Focus on growth and contribution.",
  "answer": `
        <p><strong>Sample Answer Structure (Focus on Growth and Contribution):</strong></p>
        <ol>
          <li><strong>Initial Growth and Skill Development:</strong> Describe your immediate goals, such as wanting to gain practical experience, learn new technologies, and develop a strong foundation in the field.</li>
          <li><strong>Mid-Term Aspirations:</strong> Explain how you see yourself progressing in the next 3-5 years. This might involve taking on more responsibility, leading projects, or specializing in a particular domain.</li>
          <li><strong>Long-Term Vision:</strong> Share your broader career aspirations, such as becoming a subject matter expert, contributing to strategic initiatives, or mentoring junior team members. Align these aspirations with the potential career paths within TCS.</li>
          <li><strong>Commitment to Continuous Learning:</strong> Emphasize your dedication to lifelong learning and staying updated with industry trends, highlighting your adaptability and value to the organization in the long run.</li>
        </ol>

        <p><strong>Key Aspects to Highlight:</strong> Ambition, Realistic goals, Alignment with potential at TCS, Focus on learning and development, Long-term commitment, Contribution to the company's success.</p>
      `
},
          
    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});