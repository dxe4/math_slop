# Embed binary sequences with a strict tail gap

*Hard · [Set theory](index.md)*

For a binary sequence s define $F(s)=\sum_{n=0}^{\infty}2s(n)/3^{n+1}$. Prove F maps into \[0,1\] and is injective, and deduce that \[0,1\] is uncountable. Address possible numeral-expansion ambiguity explicitly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The geometric series bounds both the full value and the tail after a first differing digit.

</details>

<details>
<summary>Hint 2</summary>

At that digit the contribution gap is twice one place value, while the entire later tail can cancel only one place value.

</details>

<details>
<summary>Model proof</summary>

A strict first-difference estimate avoids relying on an ambiguous positional representation.

1. The terms are nonnegative and bounded by the summable geometric series with total one, so F(s) is defined in \[0,1\].
2. For distinct s,t, let m be the first differing index, taking t(m)=1 and s(m)=0. The leading difference is $2/3^{m+1}$, while the largest possible opposing tail is $\sum_{n>m}2/3^{n+1}=1/3^{m+1}$.
3. Thus F(t)-F(s) is at least $1/3^{m+1}>0$. Different binary sequences never coincide as real values, regardless of alternative ternary names.
4. Binary sequence space is uncountable by the diagonal flip argument. Its injective image inside \[0,1\] is uncountable, so \[0,1\] is uncountable as well.

**Self-assessment rubric**

- Bound the series by a convergent geometric series of total one.
- Compare the first differing term with the full remaining tail and retain a positive gap.
- Use injectivity and the binary-sequence diagonal fact to reach the interval conclusion.

</details>
