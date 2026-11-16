# Classify all norm-preserving extensions on a two-dimensional normed space

*Medium · [Real analysis](index.md)*

On R^2 with the max norm, define l(t,t)=t on the diagonal subspace. Classify all linear extensions L to R^2 with $||L||=||l||=1$. Show why such an extension is not unique.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Every extension has form L(x,y)=a\*x+(1-a)\*y.

</details>

<details>
<summary>Hint 2</summary>

The dual norm for these two coefficients is their sum of absolute values.

</details>

<details>
<summary>Model proof</summary>

A finite-dimensional extension example makes existence and nonuniqueness explicit.

1. On the diagonal, \|\|(t,t)\|\|\_infinity=\|t\|, so \|\|l\|\|=1. Any linear extension has L(x,y)=a\*x+b\*y with a+b=1.
2. For a functional on the max-norm unit square, \|\|L\|\|=\|a\|+\|b\|: the upper bound is the triangle inequality, and choosing the signs of the two coordinates attains it.
3. Thus norm preservation requires \|a\|+\|1-a\|=1, equivalent to 0&lt;=a&lt;=1. Every such a gives an extension; a=0 and a=1 already give distinct examples.

**Self-assessment rubric**

- Derive the coefficient constraint from agreement on the whole subspace.
- Prove the operator norm rather than assuming a coefficient bound is sharp.
- Classify all admissible coefficients and exhibit nonuniqueness.

</details>
