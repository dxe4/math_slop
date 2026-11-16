
# Fixed Points and Equilibrium Existence

A finite game may have no pure Nash equilibrium. Matching pennies already shows that. The existence theorem concerns mixed strategies: independent probability distributions on finite action sets. Its conclusion is that at least one profile has no profitable unilateral deviation, not that a particular adjustment process finds it.

This chapter proves finite mixed Nash existence through Sperner's lemma and Brouwer's fixed-point theorem. The finite-dimensional topological steps are developed here. Kakutani's set-valued theorem is then stated as a cited alternative, with the exact assumptions needed for best responses. Preparation is finite-dimensional linear algebra, continuity, and compactness of closed bounded sets, as used in the preceding minimax chapter.

## 1. Simplices, faces, and small triangulations

**Definition 7.1 (Simplex and triangulation).** The standard $d$-simplex is
$$
\Delta^d=\{x\in\mathbb R^{d+1}:x_i\ge0,\ \sum_{i=0}^d x_i=1\}.
$$
Its vertices are the coordinate vectors $e_0,\ldots,e_d$. A face is the convex hull of a nonempty subset of these vertices. A triangulation divides the simplex into finitely many simplices that cover it and meet along common faces, with compatible divisions on its boundary. Its mesh is the largest diameter of a small simplex.

We need triangulations whose mesh tends to zero. Barycentric subdivision provides them: for each original simplex, take the barycentres of all its nonempty faces; each maximal nested chain of faces supplies the vertices of a new small simplex.

**Lemma 7.2 (Subdivision and mesh).** Repeated barycentric subdivision gives compatible triangulations of a $d$-simplex with mesh tending to zero when $d\ge1$.

**Proof.** First consider one simplex with barycentric coordinates $\lambda_1,\ldots,\lambda_{d+1}$. Order them decreasingly, resolving ties arbitrarily, and put $\lambda_{d+2}=0$. The point is the convex combination of the barycentres of the first $k$ ordered vertices with weights
$$
k(\lambda_k-\lambda_{k+1}),\qquad k=1,\ldots,d+1.
$$
The weights are nonnegative and sum to $\sum_k\lambda_k=1$. Coordinatewise expansion recovers the original point. Thus the chain simplices cover. Different order regions intersect when coordinates tie or vanish; the corresponding zero weights remove the differing barycentres, giving common faces. The construction restricts to the same construction on every original face, so neighbouring original simplices agree along their intersection.

Let the original diameter be $D$. For nested faces with vertex sets $A\subset B$ of sizes $a<b$, their barycentres obey
$$
b_B=\frac ab b_A+\frac{b-a}{b}b_{B\setminus A}.
$$
Both barycentres on the right lie in the original simplex and are at distance at most $D$. Hence $\|b_B-b_A\|\le(1-a/b)D\le dD/(d+1)$. Equal faces give distance zero. Every pair of vertices in a new simplex comes from nested faces, so its diameter is at most $dD/(d+1)$. The diameter of a convex hull is at most its maximum vertex-pair distance, by expanding two convex combinations and applying the triangle inequality. Iteration multiplies the mesh by a fixed factor below one. ∎

The zero-dimensional case is a single point and needs no subdivision. This construction makes the limiting step in the fixed-point proof explicit; a drawing of an increasingly fine grid is not being used as an unstated theorem.

## 2. Sperner's finite labelling lemma

**Definition 7.3 (Sperner labelling).** Label each vertex of a triangulation of $\Delta^d$ by an integer in $\{0,\ldots,d\}$. The labeling is admissible when a vertex on a face may receive only labels of that face's original vertices. Equivalently a vertex with coordinate $x_i=0$ cannot receive label $i$.

**Theorem 7.4 (Sperner's lemma, parity form).** An admissibly labeled triangulation has an odd number of $d$-simplices containing all labels $0,\ldots,d$. In particular it has at least one.

**Proof.** Induct on $d$. For $d=0$, the one point must have label zero, so the count is one.

For $d\ge1$, call a small $(d-1)$-face special when its labels are exactly $0,\ldots,d-1$. Count incidences between special faces and small $d$-simplices. Each internal face belongs to two such simplices, while a boundary face belongs to one. This geometric fact follows by taking a point in the relative interior of the face: a small neighbourhood has one available side on the boundary and two in the interior, and a face-to-face triangulation covers each side without overlapping interiors.

A boundary special face must lie on the original face opposite vertex $d$. If it lay on a face missing label $i<d$, admissibility would prohibit that required label. On the face opposite $d$, the induced labeling is a Sperner labelling in dimension $d-1$. Induction gives an odd number of its special faces. Therefore the incidence count is odd modulo two.

Now count by $d$-simplices. A fully labeled simplex has exactly one special face, obtained by deleting its vertex labeled $d$. A simplex that contains every label $0,\ldots,d-1$ but not $d$ has exactly one repeated label and contributes two special faces, deleting either occurrence. A simplex missing a label among $0,\ldots,d-1$ contributes none. Thus the incidence parity equals the number of fully labeled simplices. That number is odd. ∎

**Worked example 7.5 (An interval labeling).** A one-simplex is an interval. Admissibility forces label zero at its first endpoint and label one at its other endpoint. Along any finite subdivision, the number of edges where the labels change is odd: each change toggles the label, and the final label differs from the initial one. These changing edges are precisely the fully labeled one-simplices. For a map of the interval sending $t$ to $1-t$, the midpoint is visibly fixed; the higher-dimensional proof replaces this crossing idea by Sperner's incidence parity.

The lemma is entirely finite. Compactness enters only when a sequence of finer fully labeled simplices is used to locate a point for a continuous map.

## 3. Brouwer's theorem on a simplex

**Theorem 7.6 (Simplex fixed point).** Every continuous map $f:\Delta^d\to\Delta^d$ has a fixed point.

**Proof.** The case $d=0$ is immediate. For $d\ge1$, take successive barycentric subdivisions with mesh tending to zero. If any subdivision vertex is fixed by $f$, we are done. Otherwise label each vertex $v$ by any index $i$ satisfying $v_i>f_i(v)$. Such an index exists because the coordinate differences sum to zero and are not all zero. A zero coordinate cannot satisfy this inequality, since $f_i(v)\ge0$. The labeling is therefore admissible.

Sperner's lemma supplies a small fully labeled simplex at each subdivision level. Let $v_i^{(r)}$ be its vertex labeled $i$. Compactness gives a subsequence of $v_0^{(r)}$ converging to $x\in\Delta^d$. Mesh convergence forces every other vertex $v_i^{(r)}$ in that subsequence to converge to the same $x$. At the labeled vertex we have $v_{i,i}^{(r)}>f_i(v_i^{(r)})$. Continuity and passage to the limit give $x_i\ge f_i(x)$ for every coordinate. Both coordinate sums are one, so all these inequalities are equalities. Hence $x=f(x)$. ∎

The proof uses pointwise continuity at the limiting point, together with a mesh bound. It does not replace continuity by a finite sample of function values. A discontinuous map can avoid a fixed point even on an interval.

## 4. Products of simplices and nearest-point projection

Mixed profiles form a product of simplices, usually not one simplex. We therefore prove the compact-convex version needed to apply the preceding theorem.

**Lemma 7.7 (Continuous projection).** Let $K$ be a nonempty compact convex subset of Euclidean space. Every point $z$ has a unique nearest point $\pi_K(z)\in K$, and $\pi_K$ is continuous; indeed
$$
\|\pi_K(z)-\pi_K(w)\|\le\|z-w\|.
$$

**Proof.** The continuous distance function attains its minimum on compact $K$. If two distinct minimizers $p,q$ existed, their midpoint would belong to $K$ and satisfy
$$
\left\|z-\frac{p+q}{2}\right\|^2
=\frac12\|z-p\|^2+\frac12\|z-q\|^2-\frac14\|p-q\|^2,
$$
strictly improving the minimum. Thus the nearest point is unique.

For $p=\pi_K(z)$ and any $a\in K$, the segment toward $a$ lies in $K$. Expanding squared distance along it and dividing by its positive step gives $(z-p)\cdot(a-p)\le0$. Apply this with $a=q=\pi_K(w)$, and use the analogous inequality $(w-q)\cdot(p-q)\le0$. Combining them yields
$$
\|p-q\|^2\le(z-w)\cdot(p-q)\le\|z-w\|\,\|p-q\|.
$$
If $p=q$ the claim is immediate; otherwise divide by their positive distance. ∎

**Corollary 7.8 (Compact-convex Brouwer theorem).** Every continuous self-map of a nonempty compact convex set $K\subset\mathbb R^r$ has a fixed point.

**Proof.** If the ambient dimension is zero, there is one point. Otherwise choose $R>0$ with $K\subset[-R,R]^r$. The set defined by $z_i\ge-R$ and $\sum_i z_i\le rR$ is a full-dimensional simplex containing that box. Call it $S$. The map $f\circ\pi_K:S\to K\subset S$ is continuous. An affine coordinate change identifies $S$ with a standard simplex, so Theorem7.6 supplies a fixed point $z$. Since $z=f(\pi_K(z))$ belongs to $K$, its projection is itself. Thus $z=f(z)$. ∎

This argument works even when $K$ has smaller dimension than its ambient space. In particular a product of probability simplices is a nonempty compact convex set, so no informal claim that a product “is itself a simplex” is required.

## 5. Construct the finite-game adjustment map

Let players be $i=1,\ldots,N$, each with a nonempty finite action set $A_i$. Let $u_i(a_1,\ldots,a_N)$ be real payoffs. A mixed profile $s$ consists of independent distributions $s_i\in\Delta(A_i)$. Expected payoffs are the finite multilinear extensions of the payoff table.

For a pure action $a\in A_i$, write $u_i(a,s_{-i})$ for the payoff from that action against the other players' mixtures. Then
$$
u_i(s)=\sum_{a\in A_i}s_{i,a}\,u_i(a,s_{-i}).
$$

**Definition 7.9 (Positive deviation adjustment).** Set
$$
g_{i,a}(s)=\max\{0,u_i(a,s_{-i})-u_i(s)\},
\qquad G_i(s)=\sum_{a\in A_i}g_{i,a}(s),
$$
and define
$$
T_{i,a}(s)=\frac{s_{i,a}+g_{i,a}(s)}{1+G_i(s)}.
$$

All numerators are nonnegative, their sum for player $i$ is $1+G_i(s)$, and the denominator is positive. Thus $T$ maps the product of simplices to itself. Expected payoffs, positive parts, sums, and division by a positive continuous denominator make $T$ continuous.

**Theorem 7.10 (Finite mixed Nash existence).** Every finite game with nonempty finite action sets and real payoffs has a mixed Nash equilibrium.

**Proof.** Compact-convex Brouwer supplies a fixed point $s=T(s)$. For each player and action, fixed-point equality rearranges to
$$
g_{i,a}(s)=s_{i,a}G_i(s).
$$
Suppose $G_i(s)>0$ for some player. Every action with $s_{i,a}>0$ then has $g_{i,a}(s)>0$, so its pure payoff is strictly larger than $u_i(s)$. Averaging over the positively used actions gives
$$
\sum_a s_{i,a}u_i(a,s_{-i})>u_i(s)\sum_a s_{i,a}=u_i(s),
$$
contradicting the expected-payoff identity. Hence $G_i(s)=0$ for every player. All pure-action deviation gains are nonpositive. A mixed deviation is a convex combination of those pure payoffs, so no mixed deviation improves payoff either. This is a Nash equilibrium. ∎

The proof allows one-action players and zero-dimensional strategy factors. It does not assume distinct payoffs, interior mixtures, or a unique best response. A fixed point may lie on the boundary, with some actions unused.

**Worked example 7.11 (One step is not a convergence theorem).** In matching pennies, let $p,q$ be the probabilities of heads. At $(p,q)=(1,1)$, row receives one and has no profitable pure deviation. Column receives minus one, but changing to tails gives one, a gain two. The map therefore leaves $p=1$ and changes column's heads probability to $q'=1/(1+2)=1/3$. At $(1/2,1/2)$ every pure deviation gain is zero, so the profile is fixed. The existence proof finds a fixed point topologically; it has not proved that repeated application of this map from every starting profile converges.

The equilibrium set is closed because finitely many continuous pure-deviation inequalities define it. It is consequently compact inside the product simplex and nonempty by the theorem. None of these conclusions selects one equilibrium as a behavioral prediction.

## 6. Kakutani as an explicitly cited alternative

**Theorem 7.12 (Kakutani, cited).** If $K$ is a nonempty compact convex subset of finite-dimensional Euclidean space and $F$ assigns to each $x\in K$ a nonempty compact convex subset of $K$, with closed graph, then some $x$ satisfies $x\in F(x)$.

This set-valued fixed-point theorem is imported from the primary reference below; its full proof is not needed for the self-contained Nash argument already given. On compact domains and ranges, the closed-graph formulation matches the usual upper-hemicontinuity formulation with compact values.

For a finite game, let $F(s)$ be the product of best-response sets to $s_{-i}$. Each best-response set is nonempty and compact because a continuous linear own-mixture objective attains a maximum on a simplex. It is convex because all maximizing mixtures have the same objective and convex combinations preserve it. Its graph is closed: inequalities comparing a proposed best response with every pure action pass to limits by payoff continuity. Thus Kakutani also yields an equilibrium. These properties explain the alternative proof's assumptions rather than replacing them by the word “best response.”

**Worked example 7.13 (Nonconvex values can defeat fixed points).** On $[0,1]$, let $F(x)=\{1\}$ for $x<1/2$, $F(x)=\{0\}$ for $x>1/2$, and $F(1/2)=\{0,1\}$. Its graph is the union of two closed horizontal segments, so it is closed. All values are nonempty and compact, but the middle value is not convex. No point belongs to its own image: away from the endpoints all images are zero or one, while the endpoints map to the opposite endpoint. This shows the convex-value hypothesis has real content.

**Worked example 7.14 (Discontinuity can defeat an interval map).** Let $f(x)=1$ for $0\le x<1$ and $f(1)=0$. It maps the compact convex interval to itself and has no fixed point. The map is discontinuous at one. Brouwer's conclusion has not failed; its continuity hypothesis is absent.

## 7. Existence and its limits

The theorem concerns exact preferences in a specified finite expected-utility model. It says nothing by itself about uniqueness, computation time, learning convergence, fairness, or which equilibrium is observed. The mixed-strategy chapter distinguishes probability distributions and correlations; the existence proof uses independent player mixtures.

For infinite action spaces or discontinuous payoffs, a different existence theorem requires its own compactness, continuity, and convexity assumptions. For pure equilibrium in general finite games, the theorem is insufficient because it works in mixed simplices. These limits are part of the mathematical statement.

The following extensive-form chapters use finite strategic and tree representations to analyze sequential choices. At every stage, the new representation must preserve the relevant information and strategy possibilities before an existence theorem can be applied.

## Exercises

### Exercise 7.1
<a id="fixed-points-equilibrium-existence-ex-1"></a>

Prove the one-dimensional parity form of Sperner's lemma on a subdivided interval.

<details>
<summary>Hint 1</summary>

**Hint.** The endpoints must have different labels.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Each fully labeled edge changes the current label exactly once.

</details>

<details>
<summary>Solution</summary>

**Solution.** Starting at label zero and ending at label one requires an odd number of toggles. An edge is fully labeled exactly when its endpoints differ, so the number of fully labeled edges is odd. This proves both existence and the parity count in dimension one without a limiting argument.

</details>

### Exercise 7.2
<a id="fixed-points-equilibrium-existence-ex-2"></a>

Why is the labeling $v_i>f_i(v)$ admissible, and why is some such label available at a nonfixed vertex?

<details>
<summary>Hint 1</summary>

**Hint.** The coordinate differences sum to zero.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A coordinate equal to zero cannot exceed a nonnegative image coordinate.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $v\ne f(v)$, not all differences vanish. Since their sum is zero, at least one is positive, providing a label. If $v_i=0$, then $f_i(v)\ge0$, so $v_i>f_i(v)$ is impossible. Thus the label belongs to the face containing the vertex, exactly as Sperner requires.

</details>

### Exercise 7.3
<a id="fixed-points-equilibrium-existence-ex-3"></a>

Explain why the mesh bound is needed when taking limits of fully labeled simplices.

<details>
<summary>Hint 1</summary>

**Hint.** Only one chosen vertex subsequence is initially known to converge.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Bound the distances from the other labeled vertices to that one.

</details>

<details>
<summary>Solution</summary>

**Solution.** All vertices of a chosen small simplex are at distance at most its mesh from each other. When the mesh tends to zero and one labeled vertex converges to $x$, every other labeled vertex in the same subsequence also converges to $x$. This lets all coordinate inequalities be passed to one common point. Without the shrinking-diameter argument, different labels could lead to unrelated limiting points.

</details>

### Exercise 7.4
<a id="fixed-points-equilibrium-existence-ex-4"></a>

In Brouwer's simplex proof, show that $x_i\ge f_i(x)$ for all $i$ implies equality in every coordinate.

<details>
<summary>Hint 1</summary>

**Hint.** Use the normalization of both points in the simplex.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** A nonnegative collection of differences has total zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** The differences $x_i-f_i(x)$ are all nonnegative, while their sum is $1-1=0$. A finite sum of nonnegative real numbers can be zero only when each is zero. Hence $x_i=f_i(x)$ for every $i$, giving $x=f(x)$.

</details>

### Exercise 7.5
<a id="fixed-points-equilibrium-existence-ex-5"></a>

Prove uniqueness of nearest-point projection onto a compact convex set from the midpoint identity.

<details>
<summary>Hint 1</summary>

**Hint.** Assume two distinct minimizing points have the same minimal distance.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Their midpoint lies in the set and subtracts a positive squared-distance term.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $p\ne q$ are minimizers, their midpoint belongs to $K$. The identity in Lemma7.7 makes its squared distance to $z$ equal to the common minimum minus $\|p-q\|^2/4$, strictly smaller. This contradiction proves uniqueness. Compactness supplies existence and convexity permits the midpoint.

</details>

### Exercise 7.6
<a id="fixed-points-equilibrium-existence-ex-6"></a>

Verify that the Nash adjustment map sends each player's simplex to itself.

<details>
<summary>Hint 1</summary>

**Hint.** Sum the numerator over that player's actions.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The denominator is $1+G_i$, with $G_i\ge0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every numerator $s_{i,a}+g_{i,a}$ is nonnegative. Summing gives $1+G_i$, so dividing by that positive denominator produces nonnegative coordinates summing to one. The denominator never vanishes, even when every deviation gain is zero. Hence the map is defined on the whole product simplex, including its boundary.

</details>

### Exercise 7.7
<a id="fixed-points-equilibrium-existence-ex-7"></a>

At a fixed point, derive $g_{i,a}=s_{i,a}G_i$ and explain why $G_i>0$ is impossible.

<details>
<summary>Hint 1</summary>

**Hint.** Multiply the fixed-point equality by its denominator.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Average the strictly improved payoffs of every positively used action.

</details>

<details>
<summary>Solution</summary>

**Solution.** From $s_{i,a}=(s_{i,a}+g_{i,a})/(1+G_i)$, cancellation gives $g_{i,a}=s_{i,a}G_i$. If $G_i>0$, every positively weighted action has positive deviation gain and therefore payoff strictly above $u_i(s)$. Their weighted average would then exceed $u_i(s)$, contradicting the defining expected-payoff identity. Thus all gains vanish.

</details>

### Exercise 7.8
<a id="fixed-points-equilibrium-existence-ex-8"></a>

For matching pennies at $(p,q)=(1,1)$, calculate the Nash adjustment map's output.

<details>
<summary>Hint 1</summary>

**Hint.** Row already earns one; column earns minus one.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Column's tails deviation improves payoff by two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Row has no positive deviation gain, so $p'=1$. Column has gain zero for heads and two for tails; its heads numerator is one and its normalization is three. Thus $q'=1/3$. The point moves, whereas $(1/2,1/2)$ is fixed. This calculation does not prove convergence of repeated updates.

</details>

### Exercise 7.9
<a id="fixed-points-equilibrium-existence-ex-9"></a>

Check that the correspondence in Worked example7.13 has closed graph but no fixed point.

<details>
<summary>Hint 1</summary>

**Hint.** Write the graph as two closed line segments.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** At the switch point its values are zero and one, not one half.

</details>

<details>
<summary>Solution</summary>

**Solution.** The graph is $[0,1/2]\times\{1\}\cup[1/2,1]\times\{0\}$, a closed subset of the square. Its values are nonempty and compact, but $F(1/2)=\{0,1\}$ is nonconvex. Neither endpoint maps to itself, and interior points are not zero or one. Hence no fixed point exists, showing why Kakutani's convex-value condition cannot be omitted.

</details>

### Exercise 7.10
<a id="fixed-points-equilibrium-existence-ex-10"></a>

Why can a selected pure best-response rule be discontinuous even though the full best-response correspondence satisfies Kakutani's hypotheses?

<details>
<summary>Hint 1</summary>

**Hint.** Consider a player choosing between two actions as the opponent mixture crosses indifference.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** At the tie, the full correspondence includes every mixture of maximizing actions.

</details>

<details>
<summary>Solution</summary>

**Solution.** On one side of indifference the unique best response may be the first pure action, and on the other side the second. Any pure tie selection therefore jumps somewhere at the boundary. The full best-response set instead contains both pure actions and all their mixtures at the tie; it is convex and has closed graph under continuous finite-game payoffs. A discontinuous single-valued selection is not a continuous Brouwer map, which is why the explicit adjustment map or Kakutani's set-valued theorem is needed.

</details>

## Sources

Original exposition. A primary equilibrium reference is John F. Nash, [*Equilibrium Points in n-Person Games*](https://doi.org/10.1073/pnas.36.1.48), PNAS36 (1950),48–49. The cited alternative is Shizuo Kakutani, [*A Generalization of Brouwer's Fixed Point Theorem*](https://www.math.ucdavis.edu/~deloera/TEACHING/READINGSEMINAR/PAPERS/kakutanioriginal.pdf), Duke Mathematical Journal8 (1941),457–459. Further book reading is Osborne and Rubinstein, [*A Course in Game Theory*](https://www.economics.utoronto.ca/osborne/cgt/). Subdivision, Sperner, Brouwer, projection, and the finite Nash argument are developed above; Kakutani is explicitly imported.

## Summary

Finite triangulations and Sperner parity produce Brouwer fixed points by compactness and continuity. Nearest-point projection extends the result to compact convex strategy sets. The positive-deviation adjustment map then yields a finite mixed Nash equilibrium, with all support and boundary cases included. Kakutani gives a separate cited route through convex best-response sets. Existence supplies neither uniqueness nor a convergence or behavioral prediction.

