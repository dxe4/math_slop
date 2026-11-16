# Refute Cauchy convergence with arbitrarily late separated pairs

*Hard · [Real analysis](index.md)*

Show that $a_n=\sin(\pi n/2)$ is bounded but not Cauchy. Supply a fixed positive tolerance and a violating pair beyond every proposed threshold.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Two residue classes give the extreme values one and negative one.

</details>

<details>
<summary>Hint 2</summary>

Choose both indices in those classes after the proposed threshold.

</details>

<details>
<summary>Model proof</summary>

Boundedness controls size but does not force pairwise tail closeness.

1. Every term lies between negative one and one, so the sequence is bounded.
2. For any proposed threshold N, choose k large enough that 4k+1&gt;=N; indices 4k+1 and 4k+3 then have values one and negative one.
3. Their difference is two, violating the Cauchy condition for fixed tolerance one beyond every N.

**Self-assessment rubric**

- State a valid common absolute bound.
- Construct both residue-class indices beyond an arbitrary threshold.
- Use one positive tolerance independent of the threshold to refute Cauchy.

</details>
