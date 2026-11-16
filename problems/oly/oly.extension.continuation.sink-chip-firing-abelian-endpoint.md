# Termination and order independence with a sink

*Hard · [Original olympiad-style problems](index.md)*

A finite connected simple graph has a designated sink $s$. Nonnegative integer chips occupy its other vertices. A legal firing at $v\ne s$ requires at least $\deg(v)$ chips and sends one chip to each neighbor; chips reaching $s$ disappear. Prove every firing sequence is finite and every maximal sequence has the same firing counts and final configuration.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let $D$ be the maximum distance to $s$, $M=\Delta+1$, and $h(v)=M^D-M^{D-\operatorname{dist}(v,s)}$. Show firing drops $\sum c_vh(v)$ by at least one.

</details>

<details>
<summary>Hint 2</summary>

Compare two completed firing-count vectors. At the first attempted excess of one count over the other, compare its current chips with the other sequence\'s stable final chips.

</details>

<details>
<summary>Model proof</summary>

A distance-based superharmonic weight proves termination; a first-excess argument proves the abelian endpoint.

1. The one-vertex graph has no nonsink moves and is immediate. Otherwise $\Delta\ge1$, $D\ge1$, and $h(s)=0$, while every other $h(v)$ is a positive integer. A nonsink vertex at distance $d$ has at least one neighbor at distance $d-1$; every neighbor has distance at most $d+1$.
2. The firing decrease is $\deg(v)h(v)-\sum_{w\sim v}h(w)=\sum_{w\sim v}M^{D-d(w)}-\deg(v)M^{D-d}$. Factoring $M^{D-d}$ bounds this below by $M^{D-d}[M+(\deg(v)-1)/M-\deg(v)]\ge1$, since $M=\Delta+1$. Hence the nonnegative integral weighted potential drops at least one each firing, proving finiteness.
3. Let $u,v$ be count vectors of two maximal sequences; both endpoints are stable. Suppose the first sequence is about to fire a vertex $i$ for the $(v_i+1)$st time, and choose the first such excess event. Immediately beforehand its count at $i$ equals $v_i$ and all other counts are at most their corresponding $v_j$.
4. Its chip count at $i$ is therefore at most the final chip count in the second sequence: own removals are equal and incoming neighbor firings no greater. That final count is below $\deg(i)$, contradicting legality. Thus $u\le v$ coordinatewise; exchanging the sequences gives equality. Equal firing counts give identical final chips by conservation at each vertex.

**Self-assessment rubric**

- Construct the nonnegative integral sink weight and justify its neighbor bounds.
- Bound every legal firing decrease away from zero.
- Choose the first excessive firing and compare incoming counts correctly.
- Deduce both coordinatewise inequalities and then final-state equality.

</details>
