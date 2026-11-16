# An index-two subgroup is normal

*Medium · [Abstract algebra problems](index.md)*

If a subgroup $H$ has index $[G:H]=2$, prove that $H$ is normal in $G$. The group $G$ need not be finite.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Cosets partition the group, and only one coset can be the subgroup itself.

</details>

<details>
<summary>Hint 2</summary>

Inversion pairs left cosets with right cosets, so the number of right cosets is also two.

</details>

<details>
<summary>Model proof</summary>

The nontrivial left and right cosets must both be the same complement.

1. Inversion sends a left coset $gH$ bijectively to the right coset $Hg^{-1}$, so there are exactly two right cosets as well as two left cosets.
2. For $g\in H$, both $gH$ and $Hg$ equal $H$.
3. For $g\notin H$, the coset partitions force $gH=G\setminus H=Hg$.
4. Therefore $gH=Hg$ for every $g\in G$, which is the normality condition.

**Self-assessment rubric**

- Justify why the right-coset partition also has two parts.
- Handle elements inside and outside the subgroup.
- Identify both nontrivial cosets with the complement and conclude normality.

</details>
