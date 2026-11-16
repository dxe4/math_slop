# Prove a monotone additive function is fixed by its unit value

*Hard · [Foundations bridge](index.md)*

Let f:R→R be nondecreasing and additive: $f(x+y)=f(x)+f(y)$, with f(1)=1. Prove f(x)=x for every real x. You may use that rational numbers are dense in R; do not assume continuity of f.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First determine f at zero, integers and rationals from additivity.

</details>

<details>
<summary>Hint 2</summary>

If f(x) differed from x, choose a rational strictly between the two and use monotonicity.

</details>

<details>
<summary>Model proof</summary>

Rational determination and order squeeze rule out every nonidentity real value.

1. Additivity gives f(0)=0 and f(−x)=−f(x). Repeated addition gives f(n)=n for integers n. For integers m and positive n, n f(m/n)=f(m)=m, so f(m/n)=m/n.
2. Suppose f(x)&gt;x. Choose rational q with x&lt;q&lt;f(x). Monotonicity gives f(x)≤f(q)=q, contradicting q&lt;f(x).
3. If f(x)&lt;x, choose rational q with f(x)&lt;q&lt;x. Then f(q)≤f(x) by monotonicity, but f(q)=q&gt;f(x), another contradiction.
4. Both strict alternatives fail, hence f(x)=x for every real x. Monotonicity replaces any need to assume continuity.

**Self-assessment rubric**

- Derives zero, negative, integer and rational values from additivity and f(1)=1.
- Uses a rational between x and f(x) to rule out f(x)&gt;x.
- Gives the corresponding monotonicity contradiction for f(x)&lt;x without assuming continuity.

</details>
