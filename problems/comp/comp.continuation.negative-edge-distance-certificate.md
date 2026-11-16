# Compute directed distances despite a negative edge

*Medium · [Computational arithmetic problems](index.md)*

A directed graph has edges $s\to a:4$, $s\to b:5$, $a\to b:-2$, $b\to a:3$, $a\to t:6$, $b\to t:3$. Return $[d(a),d(b),d(t)]$ for shortest paths from $s$.

```answer
{"answer":{"kind":"vector","expected":["4","2","5"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Relax edges more than once; nonnegative-edge settling is not justified here.

</details>

<details>
<summary>Hint 2</summary>

Certify proposed distances by showing that each edge satisfies $d(v)\le d(u)+w(u,v)$ and that paths attain them.

</details>

<details>
<summary>Worked solution</summary>

A feasible distance potential together with attaining paths certifies the exact answer.

1. The routes $s\to a$, $s\to a\to b$, and $s\to a\to b\to t$ give lengths $4,2,5$.
2. The vector $(d(s),d(a),d(b),d(t))=(0,4,2,5)$ satisfies all six edge inequalities; in particular $4\le2+3$ and $5\le4+6$.
3. Telescoping those inequalities along any route shows every route to a vertex has length at least its proposed distance.
4. Since the displayed routes attain the bounds, the vector is $[4,2,5]$. The reachable $a,b$ cycle has weight $1$, consistent with the finite result.

</details>
