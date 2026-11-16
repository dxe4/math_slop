# Derive the gcd characterization by a least positive combination

*Hard · [Number theory](index.md)*

Let positive integers a,b be fixed. Among all positive integers of form $ax+by$ with x,y integers, let d be the least. Prove d divides a and b, and deduce d=gcd(a,b).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The set is nonempty because a is one of its positive elements.

</details>

<details>
<summary>Hint 2</summary>

Divide a by d and express its remainder as another integer combination.

</details>

<details>
<summary>Model proof</summary>

Well-ordering and division construct a Bezout gcd witness.

1. The positive-combination set is nonempty, so well-ordering supplies d=ax0+by0. Divide a=qd+r with 0&lt;=r&lt;d. Then $r=a(1-qx0)+b(-qy0)$ is another integer combination.
2. If r were positive it would contradict minimality of d; therefore r=0 and d divides a. The same argument with b shows d divides b.
3. Every common divisor of a and b divides every integer combination and hence d. Since d is itself positive and a common divisor, it is their greatest common divisor.

**Self-assessment rubric**

- Justify the least positive integer combination exists.
- Express each division remainder as an integer combination and force it to vanish.
- Use both common-divisor directions to identify d as the gcd.

</details>
