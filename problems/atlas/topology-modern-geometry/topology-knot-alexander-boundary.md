# Use an invariant without overclaiming

*Difficulty 3 of 5 · [Topology and modern geometry](index.md) · exercise 7 of 8*

A knot $K$ has Alexander polynomial $\Delta_K(t)=t^2-t+1$ up to multiplication by $\pm t^n$. Show that $K$ is not the unknot and compute its determinant $|\Delta_K(-1)|$. State two conclusions that do not follow from this calculation.

<details>
<summary>Hint 1</summary>

The unknot polynomial is 1 up to units

</details>

<details>
<summary>Hint 2</summary>

Evaluate at -1

</details>

<details>
<summary>Hint 3</summary>

An invariant need not classify knots or determine a unique diagram

</details>

<details>
<summary>Worked solution</summary>

No unit multiple $\pm t^n$ of 1 equals the three-term polynomial $t^2-t+1$, so K cannot be the unknot. Its determinant is $|(-1)^2-(-1)+1|=|1+1+1|=3$. This does not prove K is a trefoil, because different knots can share an Alexander polynomial, and it does not prove a displayed diagram has minimal crossing number. It also does not classify the knot complement or determine the knot genus without additional bounds, although polynomial degree may contribute a bound under stated conventions.

**Answer.** $K$ is nontrivial and $\det(K)=3$; the computation neither uniquely identifies $K$ nor proves crossing minimality.

</details>

*Tags: knot invariant, Alexander polynomial, logical boundary*
