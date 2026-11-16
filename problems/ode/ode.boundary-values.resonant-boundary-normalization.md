# Normalize a nonunique boundary family

*Medium · [Differential equations problems](index.md)*

For $y^{\prime\prime}+y=0$ on $[0,\pi]$, impose $y(0)=y(\pi)=0$ and the additional normalization $y^{\prime}(0)=2$. Find $y(\pi/2)$.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Requested bounded solution observation, numerical step, local coefficient or polynomial representation only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The two boundary values alone do not determine the sine amplitude.

</details>

<details>
<summary>Hint 2</summary>

Use the explicitly supplied derivative normalization to select one member of that family.

</details>

<details>
<summary>Worked solution</summary>

A resonant boundary family needs the additional normalization to select an amplitude.

1. The condition at zero makes the cosine coefficient vanish, leaving $y=B\sin t$.
2. Every such function also vanishes at $\pi$, while its derivative at zero is $B$. The additional condition gives $B=2$.
3. The selected solution satisfies all conditions and has $y(\pi/2)=2$.

</details>
