# Validate a shortest safety trace

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 13 of 15*

A transition model starts at s0 and has edges $s0\to s1$, $s0\to s2$, $s1\to s3$, $s2\to s2$, $s3\to bad$. Bad is the only forbidden state. Give a shortest counterexample, prove its minimality by breadth-first layers, and state the verified claim's boundary.

<details>
<summary>Hint 1</summary>

List distance-zero, one, two, and three layers

</details>

<details>
<summary>Hint 2</summary>

Every consecutive pair must be an edge

</details>

<details>
<summary>Hint 3</summary>

The proof is relative to initial states and transitions

</details>

<details>
<summary>Worked solution</summary>

The trace is $s0\to s1\to s3\to bad$. Each pair is a declared edge and the last state is forbidden, so it is a valid counterexample. BFS layers are distance 0: {s0}; distance 1: {s1,s2}; distance 2 adds {s3} while s2 loops to an already seen state; distance 3 adds {bad}. No earlier layer contains bad, so three transitions are minimal. The result proves AG not-bad is false in this explicit finite model. It does not by itself show source code implements these atomic transitions, that all environment initial states were included, or any liveness or fairness property.

**Answer.** $s0\to s1\to s3\to bad$ is a shortest three-edge counterexample; it refutes safety only for the declared finite model.

</details>

*Tags: formal verification, model checking, safety, counterexample trace*
