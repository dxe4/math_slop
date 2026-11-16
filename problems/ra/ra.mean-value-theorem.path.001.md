# Repair the interval and construct an interior MVT witness

*Hard · [Real analysis](index.md)*

The function $g(x)=|2x-1|+x-1$ is the polygonal example with vertices $(0,0),(1/2,-1/2),(1,1)$. Equivalently, $g(x)=-x$ for $x\leq 1/2$ and $g(x)=3x-2$ for $x\geq 1/2$. On $[0,1]$ no existing derivative equals its global secant slope $1$. Repair the domain: choose exact rational a,b,c with \[a,b\]⊆$[0,1], a<b$ and c∈(a,b), so that g satisfies the Mean Value Theorem hypotheses on your chosen interval and $g^{\prime}(c)$=\[$g(b)-g(a)$\]/$(b-a)$. Match the CHOSEN interval’s secant, which can differ from $1$. A corner at an endpoint is allowed. Each field permits at most $80$ digits and $2,048$ characters. In your optional explanation, check continuity, interior differentiability and the secant equality. The absolute-value obstruction is adapted and affinely transformed from Jiří Lebl, Basic Analysis §4.2; this domain-construction interaction is newly authored.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §4.2 (https://www.jirka.org/ra/html/sec\_mvt.html). Adapted absolute-value obstruction: rescaled and affinely tilted. Euler adds the domain-repair interaction, bounded rational inputs and new explanations. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"mvt_interval_with_open_reasoning","expected_constraints":{"model":"tilted_absolute_value"},"checker_scope":"Accepts every exact rational triple satisfying 0≤a<c<b≤1 with b≤1/2 or a≥1/2. Such intervals retain continuity, exclude the corner from the interior and have every interior derivative equal to their own secant, −1 or 3. A corner at an endpoint is permitted. Well-formed insufficient triples are incorrect; malformed or over-limit rational fields are invalid. Optional written arguments remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

Where is g not differentiable? The theorem requires differentiability only in the open interval, while continuity includes the endpoints.

</details>

<details>
<summary>Hint 2</summary>

Once your chosen interval lies on one linear piece, compute that interval’s endpoint secant and choose any strictly interior rational c.

</details>

<details>
<summary>Worked solution</summary>

Changing the domain changes both the hypothesis check and the secant that the interior derivative must match.

1. The formula gives $g(x)=-x$ on $[0,1/2]$ and $g(x)=3x-2$ on $[1/2,1]$. These pieces meet at −1/2, so g is continuous everywhere on $[0,1]$. Its only failure of differentiability is the corner at $1/2$.
2. The complete answer set is $0\leq a<c<b\leq 1$ together with $b\leq 1/2$ or $a\geq 1/2$. These are exactly the chosen intervals whose interiors exclude the corner. The corner can equal a or b because endpoint derivatives are not required.
3. If $b\leq 1/2$, the chosen secant and every interior derivative are $-1$. If $a\geq 1/2$, both are $3$. Thus every strictly interior rational c works on these intervals; no single midpoint or predetermined interval is required.
4. For example $(a,b,c)=(0,1/2,1/4)$ and $(1/2,1,3/4)$ both pass, even though the corner is an endpoint. The smaller interval $(1/10,2/5,1/5)$ also passes. Values $c=a$ or $c=b$ fail the required interior condition.
5. If $a<1/2<b$, the secant is \[$a+3b-2$\]/$(b-a), a$ positive-width weighted mean of −1 and $3$ strictly between them. Existing derivatives are only $-1$ or $3$, while $g^{\prime}(1/2)$ does not exist. Therefore no choice of c can restore the conclusion on a crossing interval, and interior differentiability also fails.
6. The original full-interval secant was $1$. The repaired interval has its own secant $-1$ or $3$; requiring its derivative still to equal $1$ would apply the wrong problem. Automatic checking verifies only this declared exact triple condition, leaving the explanation unassessed.

</details>
