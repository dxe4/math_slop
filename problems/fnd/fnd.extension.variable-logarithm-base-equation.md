# Solve a logarithm equation whose base is unknown

*Hard · [Foundations bridge](index.md)*

Find the product of all real x satisfying $\log_x16=\log_4x$, where logarithms require x&gt;0 and x≠1.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Set t=log₄x and use change of base for the other logarithm.

</details>

<details>
<summary>Hint 2</summary>

Keep t≠0 when clearing the denominator, then translate both real t solutions back to x.

</details>

<details>
<summary>Worked solution</summary>

A common logarithmic variable turns the changing-base expression into a reciprocal equation.

1. Let t=log₄x, so x=4ᵗ and the base restriction x≠1 means t≠0. Change of base gives log\_x16=log₄16/log₄x=2/t.
2. The equation becomes 2/t=t, hence t²=2. Both t=√2 and t=−√2 are allowed.
3. The corresponding positive bases are 4^{√2} and 4^{−√2}, neither equal to one. They satisfy the original equation by the same change-of-base calculation.
4. Their product is 4⁰=1.

</details>
