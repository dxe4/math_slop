# Separate finitely many small denominators from a dense irrational sequence

*Medium · [Real analysis](index.md)*

For Thomae's function on \[0,1\], defined by T(x)=0 at irrational x and $T(p/q)=1/q$ for rationals in lowest terms, prove continuity at every irrational point and discontinuity at every rational point, using relative endpoint neighborhoods.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Only finitely many rationals in \[0,1\] have reduced denominator below a fixed bound.

</details>

<details>
<summary>Hint 2</summary>

At a rational point use irrational inputs approaching it within the domain.

</details>

<details>
<summary>Model proof</summary>

Large denominators make the function small, while each rational retains its own positive spike.

1. Fix irrational x and epsilon&gt;0. Choose an integer Q with 1/Q&lt;epsilon. There are only finitely many rationals in \[0,1\] of reduced denominator less than Q, and none equals x. Choose a relative neighborhood of x avoiding all of them.
2. Inside that neighborhood, irrational values are zero and rational values have denominator at least Q, so \|T(y)-T(x)\|&lt;=1/Q&lt;epsilon. This proves continuity at x.
3. At a rational x=p/q, the value is 1/q&gt;0. Irrational points in \[0,1\] approach x, including from the available side at an endpoint, and their T-values are zero. Thus the sequential continuity criterion fails at every rational.

**Self-assessment rubric**

- Identify a finite exceptional rational set for a chosen tolerance.
- Use a neighborhood avoiding it to control every allowed input.
- Use a valid relative-domain sequence against the positive rational value.

</details>
