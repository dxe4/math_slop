# Align coordinates with a sum-dependent integrand

*Medium · [Calculus](index.md)*

On D={x≥0,y≥0,x+y≤1}, let $I=\iint_D1/(1+x+y)\,dA$. Find exp(1−I).

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Use u=x+y and v=x.

</details>

<details>
<summary>Hint 2</summary>

At fixed u, v ranges from zero to u and the absolute Jacobian is one.

</details>

<details>
<summary>Worked solution</summary>

The transformed cross-section length turns the sum-dependent denominator into a single rational integral.

1. The inverse map is x=v,y=u−v, with determinant magnitude 1. Bounds are 0≤u≤1,0≤v≤u.
2. Hence I=∫₀¹u/(1+u)du=∫₀¹\[1−1/(1+u)\]du=1−log2.
3. Thus exp(1−I)=exp(log2)=2.

</details>
