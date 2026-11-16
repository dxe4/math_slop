# Build a missing-point rule for every finite selection

*Medium · [Real analysis](index.md)*

Let $K=(0,1)$ and $U_{m}=(1/m,1)$ for integers $m\geq 2$. This family covers K. For any nonempty finite selected subcollection, let $M\geq 2$ be its largest index. Construct a whole missing-point rule within the family x\_M=1/(pM+q): give any exact integer coefficients p and q such that, for EVERY integer $M\geq 2$, the formula is defined and its value lies in K outside every set in that finite selection. Negative offsets are allowed. This asks for one rule that works for every possible finite maximum, rather than a point checked at only one M. Many coefficient pairs work. Other mathematical rules, such as $1/M^{2}$, may also work but are outside these coefficient fields. In your optional explanation, justify the selected union, your rule for arbitrary M, and the empty selection separately.

```answer
{"answer":{"kind":"reciprocal_affine_cover_witness_with_open_reasoning","expected_constraints":{"minimum_index":2},"checker_scope":"Checks the exact necessary and sufficient integer-coefficient conditions for the declared reciprocal-affine rule to work for every M>=2. It accepts every such coefficient pair, including equality at an excluded open boundary and valid negative offsets. It does not represent arbitrary missing-point functions, assess optional prose, or certify an unrestricted proof about open covers."}}
```

<details>
<summary>Hint 1</summary>

The intervals are nested. For a nonempty finite selection with largest index M, what is its union?

</details>

<details>
<summary>Hint 2</summary>

For x\_M=1/(pM+q), translate being in $(0,1)$ and outside $(1/M,1)$ into one inequality for the denominator. The inequality must hold for every $M\geq 2$, not only the first one.

</details>

<details>
<summary>Worked solution</summary>

A witness rule can depend on the chosen finite subcollection through its maximum, but it must work for every possible maximum.

1. The full family covers K: for any $x\in (0,1)$, choose an integer $m>1/x$. Then 1/m&lt;x&lt;1, so $x\in U_{m}$. These intervals grow as m increases. A nonempty finite selection has a largest index M and its union is exactly $U_{M}=(1/M,1)$.
2. A missing point in K must satisfy $0<x_{M}\leq 1/M$. Write D\_M=pM+q. With $x_{M}=1/D_{M}$ and $M\geq 2$, those original conditions are equivalent to $D_{M}\geq M$: this also makes the denominator positive and the point strictly below $1$. Equality $x_{M}=1/M$ is valid because the lower endpoint of $U_{M}$ is excluded.
3. Necessity: $M=2$ gives $2p+q\geq 2$. If the integer $p\leq 0$, choose $M=\max (2,q+1)$. Then $D_{M}-M$=($p-1$)$M+q\leq q-M<0$, contradicting the required inequality. Hence $p\geq 1$ is also necessary. A large constant denominator is insufficient: $p=0,q=10^60$ fails at $M=10^60+1$.
4. Sufficiency: if $p\geq 1$ and $2p+q\geq 2$, then $D_{M}-M=(p-1) (M-2)+(2p+q-2)\geq 0$ for every integer $M\geq 2$. Thus every such coefficient pair supplies the requested whole rule. Examples include $(1,0), (2,0), (2,-2), (10,-18)$, and $(1,100)$. The checker accepts all valid pairs rather than requiring a particular formula.
5. This supplies a missing point for every nonempty finite selection. The empty selection misses, for example, $1/2\in K$. Therefore this cover has no finite subcover, proving that $(0,1)$ is not compact. The optional written explanation of this argument is not automatically assessed.
6. The declared family is a checking boundary, not a claim that every possible witness has this form. For example $1/M^{2}$ also lies in $(0,1)$ at or below $1/M$ for $M\geq 2$, but is not represented by constant coefficients p,q in these fields.

</details>
