# Infer a shortest finite recurrence and extrapolate its state cycle

*Hard · [Computational arithmetic problems](index.md)*

Over $\mathbb F_7$, a reconstruction procedure chooses the smallest positive order $r$ admitting coefficients $c_1,\ldots,c_r$ with $a_n=\sum_{j=1}^r c_j a_{n-j}$ at every applicable index of the data $[1,2,0,6,5,0,1,2]$. Search orders at most $3$, use least nonnegative coefficient residues, and extend with the selected recurrence. Return $[r,c_1,c_2,a_{1000}]$; if $r=1$, put $c_2=0$.

```answer
{"answer":{"kind":"vector","expected":["2","2","3","5"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Rule out order one before solving the first independent coefficient equations for order two.

</details>

<details>
<summary>Hint 2</summary>

Check every supplied term, then compare consecutive-pair states to obtain a certified period for extrapolation.

</details>

<details>
<summary>Worked solution</summary>

Exact recurrence reconstruction combines a small linear solve, consistency checks and deterministic state repetition.

1. Order one would require multiplier $2$ from the first two terms, but would then predict $a_2=4$ instead of zero. It is impossible.
2. For order two, $2c_1+c_2=0$ and $2c_2=6$ give $c_2=3$, $c_1=2$ in $\mathbb F_7$.
3. The recurrence predicts $a_4=5$, $a_5=0$, $a_6=1$, $a_7=2$, matching all remaining data. The state $(a_6,a_7)=(1,2)$ repeats the initial pair, so this selected extension has period $6$.
4. Since $1000\equiv4\pmod6$, its value is $a_4=5$. The requested result is $[2,2,3,5]$; the claim concerns this explicitly selected reconstruction, not arbitrary extrapolation from finite data.

</details>
