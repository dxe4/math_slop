# Derive strict monotonicity from interval connectedness

*Medium · [Real analysis](index.md)*

Prove every continuous injective real-valued function $f:I\to\mathbb R$ on an interval I is strictly monotone. Identify where the interval and continuity assumptions enter.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For three ordered points, the middle function value must lie strictly between the outer two.

</details>

<details>
<summary>Hint 2</summary>

Otherwise the intermediate value theorem produces a repeated value on two subintervals.

</details>

<details>
<summary>Model proof</summary>

Injectivity plus the intermediate value property forbids a change of orientation.

1. For x&lt;y&lt;z, injectivity makes the three values distinct. If f(y) were above both outer values or below both, a value strictly between f(y) and the nearer outer value would be attained once in (x,y) and once in (y,z) by the intermediate value theorem, contradicting injectivity. Thus f(y) lies strictly between f(x) and f(z).
2. Choose any two distinct points p&lt;q. If f(p)&lt;f(q), the between-value property shows every point to the left has smaller value, every point to the right has larger value, and all ordered triples retain that orientation; applying it to triples involving p,q or a containing point proves f(x)&lt;f(y) for all x&lt;y. If f(p)&gt;f(q), apply the same argument to -f.
3. Hence f is strictly increasing or strictly decreasing. The interval ensures each needed subinterval belongs to the domain, and continuity supplies the intermediate value theorem. A one-point interval is trivially monotone.

**Self-assessment rubric**

- Exclude both possible local reversals using two distinct IVT preimages.
- Use the triple property to establish one strict direction on the whole interval.
- State the roles of continuity, interval structure and trivial domains.

</details>
