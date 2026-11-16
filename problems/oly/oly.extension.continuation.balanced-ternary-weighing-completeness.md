# Why powers of three give every balanced weighing

*Hard · [Original olympiad-style problems](index.md)*

For $m\ge1$, weights $1,3,\ldots,3^{m-1}$ may each be put on either pan of a balance or omitted. Prove that every integer mass from $0$ to $(3^m-1)/2$ has exactly one signed representation $\sum_{j=0}^{m-1}\varepsilon_j3^j$ with $\varepsilon_j\in\{-1,0,1\}$. Explain which pan corresponds to a negative coefficient.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The three possible residues modulo three determine the lowest coefficient uniquely.

</details>

<details>
<summary>Hint 2</summary>

After removing that coefficient and dividing by three, the remaining bound is $(3^{m-1}-1)/2$.

</details>

<details>
<summary>Model proof</summary>

Balanced residues give a terminating representation algorithm and uniqueness at the same time.

1. Prove the slightly stronger symmetric statement for all integers $|N|\le M_m=(3^m-1)/2$. For $m=1$, the three possibilities are exactly $-1,0,1$.
2. Choose the unique $\varepsilon_0\in\{-1,0,1\}$ congruent to $N$ modulo three. Then $N\prime=(N-\varepsilon_0)/3$ is an integer. Its absolute value is at most $(M_m+1)/3$, and since it is integral this is at most $M_{m-1}$ (the excess over that latter bound is only $2/3$). Induction supplies the remaining coefficients.
3. For uniqueness, two representations have lowest coefficients congruent modulo three. Their difference lies between $-2$ and $2$, so congruence forces equality. Subtract and divide by three, repeating to identify all digits.
4. Put the object on the left pan. Positive coefficients indicate weights on the right, negative coefficients weights alongside the object on the left, and zero omitted weights. The positive mass statement follows from the symmetric representation theorem.

**Self-assessment rubric**

- Select the unique lowest digit from the three residue classes.
- Check the reduced integer remains within the smaller symmetric interval.
- Strip matching low digits repeatedly.
- Explain the physical meaning of each coefficient sign.

</details>
