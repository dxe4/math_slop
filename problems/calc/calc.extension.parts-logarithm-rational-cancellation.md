# Reduce a weighted logarithm to a rational integral

*Medium · [Calculus](index.md)*

Evaluate $\int_0^1x\log(1+x)\,dx$ exactly.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use u=log(1+x), dv=x dx.

</details>

<details>
<summary>Hint 2</summary>

Divide x² by x+1 in the remaining integral before evaluating it.

</details>

<details>
<summary>Worked solution</summary>

Parts produces logarithmic boundary terms that cancel after polynomial division.

1. Parts gives I=(1/2)log2−(1/2)∫₀¹x²/(1+x)dx.
2. The quotient identity is x²/(1+x)=x−1+1/(1+x). Its integral is 1/2−1+log2=log2−1/2.
3. Thus I=(1/2)log2−(1/2)(log2−1/2)=1/4.

</details>
