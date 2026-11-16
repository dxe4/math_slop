# Ends with 01 versus contains 01

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 3 of 15*

One DFA accepts binary words ending 01 and another accepts words containing 01. Find a shortest distinguishing word, prove no shorter word distinguishes them, and explain how product-state breadth-first search certifies minimality.

<details>
<summary>Hint 1</summary>

Both accept 01

</details>

<details>
<summary>Hint 2</summary>

Try extending 01 by one symbol

</details>

<details>
<summary>Hint 3</summary>

List all words of length below three by acceptance class

</details>

<details>
<summary>Worked solution</summary>

Word 010 is accepted by contains-01 because its first two symbols are 01, but rejected by ends-01 because its final two symbols are 10. No shorter word distinguishes them: epsilon, 0, 1, 00, 10, and 11 contain no 01 and do not end 01, while 01 satisfies both definitions. Product BFS starts from the initial state pair and explores pairs in nondecreasing input length. Parent symbols reconstruct a word for each first-discovered pair. Therefore the first pair with opposite acceptance yields a shortest distinguishing word; exhausting all reachable pairs without one would prove equivalence for every word.

**Answer.** 010 is shortest; exhaustive product BFS finds disagreement first at length three and supplies the certificate trace.

</details>

*Tags: automata, formal languages, equivalence, counterexample*
