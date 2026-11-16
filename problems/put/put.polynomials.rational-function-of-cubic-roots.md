# Evaluate a symmetric rational function of complex roots

*Hard · [Original Putnam-style training](index.md)*

Let a,b,c be the complex roots, counted with multiplicity, of $t^3-2t-2$. Find $1/(1+a^2)+1/(1+b^2)+1/(1+c^2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":15,"denominator":13},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Use Vieta to compute the sums of root squares and of pairwise squared products.

</details>

<details>
<summary>Hint 2</summary>

Put the fractions over their common product denominator and express both numerator and denominator symmetrically.

</details>

<details>
<summary>Worked solution</summary>

Symmetric identities evaluate the rational sum without approximating any root.

1. Vieta gives a+b+c=0, ab+bc+ca=-2 and abc=2. Hence the squared-root sum is four, the sum of pairwise squared products is four, and the squared triple product is four.
2. The denominator product is $(1+a^2)(1+b^2)(1+c^2)=1+4+4+4=13$. None of the denominators vanishes: neither i nor -i is a root of the cubic.
3. The common numerator is $3+2(a^2+b^2+c^2)+(a^2b^2+b^2c^2+c^2a^2)=3+8+4=15$. The sum is $15/13$.

</details>
