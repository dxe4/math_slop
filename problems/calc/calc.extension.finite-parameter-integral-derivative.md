# Differentiate a parameter integral with a removable endpoint

*Medium · [Calculus](index.md)*

For a&gt;−1 define $J(a)=\int_0^1\log(1+ax)/x\,dx$, extending the integrand at x=0 by its limit a. Find J′(1)/log2 and justify the derivative near a=1.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The parameter derivative of the integrand is 1/(1+ax).

</details>

<details>
<summary>Hint 2</summary>

On a compact neighborhood of a=1 this derivative is continuous and bounded up to x=0.

</details>

<details>
<summary>Worked solution</summary>

Uniform finite-interval control justifies the parameter derivative despite the written x denominator.

1. For a near 1, 1+ax stays positive on \[0,1\]. The extended integrand has parameter derivative 1/(1+ax), continuous and uniformly bounded on a compact parameter-input rectangle. Thus differentiation under the integral is valid.
2. It gives J′(1)=∫₀¹1/(1+x)dx=log2.
3. The normalized derivative is J′(1)/log2=1.

</details>
