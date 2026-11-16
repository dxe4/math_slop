# Extract the witness procedure

*Difficulty 3 of 5 · [Logic and foundations audit studio](index.md) · exercise 9 of 11*

Give a constructive proof that for every natural number n there exists a prime p>n. The proof must describe a terminating procedure that produces a suitable p, not only refute the possibility that no such p exists.

<details>
<summary>Hint 1</summary>

Form $N=n!+1$

</details>

<details>
<summary>Hint 2</summary>

Find a prime divisor by bounded trial division

</details>

<details>
<summary>Hint 3</summary>

A prime at most n would divide both n! and n!+1

</details>

<details>
<summary>Worked solution</summary>

Compute $N=n!+1$, which is at least 2. Search integers d from 2 through N and return the first divisor of N; the bounded search terminates, and its first divisor p>1 is prime, since a composite p would have a smaller divisor. If $p\le n$, then p divides n!, while p also divides n!+1, so p divides their difference 1, impossible. Hence p>n. The output p together with the division certificate p|N is explicit witness data. The argument uses only finite computation once n is supplied; no global choice function or excluded-middle split over an undecidable proposition is needed.

**Answer.** Compute n!+1 and return its least divisor greater than 1; that divisor is prime and cannot be at most n.

</details>

*Tags: constructive proof, witness, prime*
