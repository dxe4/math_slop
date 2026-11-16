# One expensive append and a cheap sequence

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 2 of 15*

A dynamic array starts with capacity 1 and doubles whenever full. Count element copies caused by resizing during the first n appends and prove constant amortized append cost. State what the result does not say about one append.

<details>
<summary>Hint 1</summary>

Resize capacities are powers of two

</details>

<details>
<summary>Hint 2</summary>

Sum a geometric series below 2n

</details>

<details>
<summary>Hint 3</summary>

Amortized is not worst-case per operation

</details>

<details>
<summary>Worked solution</summary>

Copies occur when growing from capacities 1,2,4,... below n. If $2^k<n\le 2^{k+1}$, total copied elements are $1+2+\ldots+2^k=2^{k+1}-1<2n$. There are n writes of newly appended elements, so total element moves are below 3n and the average over the sequence is below three. This is a deterministic amortized bound and assumes an element copy has constant cost under the chosen model. A particular append at size $2^k$ copies $2^k$ old elements and is linear in the current size; constant amortized cost does not make every operation constant-time or provide a probability statement.

**Answer.** Resize copies total less than 2n, so all writes total less than 3n; an individual resizing append remains linear.

</details>

*Tags: data structures, amortized analysis, dynamic array, cost model*
