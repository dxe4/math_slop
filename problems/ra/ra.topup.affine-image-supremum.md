# Prove how a positive affine map transforms a supremum

*Hard · [Real analysis](index.md)*

Let a nonempty real set A be bounded above, with supremum s. For constants $c>0$ and d real, prove sup{ca+d:a in A}=cs+d. Explain where c&gt;0 is used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

First verify the proposed value is an upper bound.

</details>

<details>
<summary>Hint 2</summary>

Translate any smaller proposed bound back to a number below s.

</details>

<details>
<summary>Model proof</summary>

Order preservation and the least-upper-bound property prove the transformed supremum.

1. Since a&lt;=s and c&gt;0, every ca+d is at most cs+d.
2. If t&lt;cs+d, then (t-d)/c&lt;s. This cannot be an upper bound for A, so some a in A exceeds it, and ca+d&gt;t.
3. Thus no smaller t is an upper bound, proving the formula. Positivity preserves the inequality directions; a negative scale would instead involve the infimum.

**Self-assessment rubric**

- Use positivity to show every transformed value is bounded by cs+d.
- Pull an arbitrary smaller candidate back below s and find a contradicting set element.
- Explain why the positive sign of the scale matters.

</details>
