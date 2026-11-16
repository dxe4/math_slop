# Finite cellular worlds must eventually repeat

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 5 of 15*

A deterministic binary cellular automaton runs on a ring of width w with synchronous updates. Prove every trajectory is eventually periodic and bound the transient-plus-period length. Explain why this does not prove periodicity on an infinite lattice.

<details>
<summary>Hint 1</summary>

Count possible global rows

</details>

<details>
<summary>Hint 2</summary>

Use the pigeonhole principle

</details>

<details>
<summary>Hint 3</summary>

The infinite lattice has infinitely many configurations

</details>

<details>
<summary>Worked solution</summary>

A width-w binary ring has exactly $2^w$ global configurations. The deterministic update is a function from this finite set to itself. Among the first $2^w+1$ visited configurations, two are equal by pigeonhole. Once a state repeats, determinism forces every later successor sequence to repeat, so the trajectory has a transient followed by a cycle. The first repeated visit occurs by step $2^w$, so transient plus period is at most $2^w$. On an infinite lattice the configuration set is not finite and this counting argument has no repeated-state guarantee; local windows may repeat while the full configuration continues changing.

**Answer.** There are $2^w$ rows, so a repeat occurs within $2^w$ updates and determinism makes the future periodic; the finiteness proof does not extend to infinite width.

</details>

*Tags: cellular automata, pigeonhole principle, periodicity, finite state*
