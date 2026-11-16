# When may an infinite sum be reordered or multiplied?

**Prerequisites.** Series Cauchy criterion, absolute convergence, and tail estimates. **Outcome.** Prove safe rearrangement under absolute convergence, construct an unsafe conditional rearrangement, and check hypotheses before forming a Cauchy product.

Finite sums commute freely. An infinite series is a limit of finite sums in a particular order. Changing the order changes which finite partial sums are compared, so it needs justification.

A **rearrangement** uses a bijection \(\pi:\mathbb N\to\mathbb N\), producing \(\sum_{k\ge1}a_{\pi(k)}\). Every old term appears exactly once. This is different from taking a subseries, which may omit terms permanently.

## Absolute convergence pays for every reordering

**Theorem 32.1.** If \(\sum a_n\) converges absolutely to \(S\), every rearrangement converges to \(S\).

**Proof.** Given \(\varepsilon>0\), choose \(N\) with \(\sum_{n>N}|a_n|<\varepsilon/2\). Since \(\pi\) is a bijection, some \(K\) ensures the first \(K\) rearranged terms contain every \(a_1,\ldots,a_N\). For \(k\ge K\), the rearranged partial sum \(T_k\) consists of \(S_N=\sum_{n=1}^Na_n\) plus a finite selection from the tail. Therefore \(|T_k-S_N|\le\sum_{n>N}|a_n|<\varepsilon/2\). Also \(|S-S_N|\le\sum_{n>N}|a_n|<\varepsilon/2\). Thus \(|T_k-S|<\varepsilon\) for every \(k\ge K\). ∎

The proof controls the *unused tail*. It does not require rearranged partial sums to resemble original partial sums at matching indices.

## Conditional convergence breaks the protection

For the alternating harmonic series, positive terms \(1,1/3,1/5,\ldots\) sum to \(+\infty\), since \(1/(2k-1)\ge1/(2k)\). The magnitudes of negative terms \(1/2,1/4,\ldots\) also sum to \(+\infty\). Individual terms in both groups tend to zero.

Choose any real target \(T\). Starting from zero, use unused positive terms if the sum is at or below \(T\), or unused negative terms if it is above \(T\). Continue in that direction until the sum first crosses \(T\), then switch signs and repeat. Both crossings happen because the remaining positive and negative subseries diverge in magnitude. Both counters advance without bound, so every original term is eventually used exactly once. The overshoot at a crossing is at most the magnitude of the last term added, which tends to zero. During each block, partial sums lie between its two crossing values. Hence **all** rearranged partial sums converge to \(T\), including those inside blocks.

The proof has three obligations that a plot cannot settle: each crossing happens, no term is skipped forever, and the error of every sufficiently late partial sum is small.

### Watch the crossing algorithm, then prove what the graph cannot

Before touching the controls, predict how the red partial sums will behave for \(T=0\), and whether the teal original-order sums will follow the new target. The control **number of displayed terms** changes only the finite window; it cannot make a convergence theorem true. Move \(T\) from a negative to a positive value, then increase the displayed term count. Compare the last crossing error with the term that caused it.

```investigation
rearrangement-target
```

The algorithm never chooses a term twice: its positive and negative counters each advance to the *next unused* odd or even reciprocal. At an upward crossing, the partial sum was at most \(T\) before the last positive term, so the overshoot lies between zero and that term's magnitude. The same argument with signs reversed handles a downward crossing. Because both positive and negative subseries diverge, each block eventually crosses; hence infinitely many blocks occur and **both counters tend to infinity**. Every original term is therefore used. At late crossings the responsible term has small magnitude; every intermediate partial sum in a block lies between its neighboring crossing values. These facts, rather than the red pixels, prove convergence to \(T\).

```exercise
{"id":"analysis-rearrangement-target-proof","type":"written","prompt":"Apply the crossing construction to the alternating harmonic terms with target T=−1/2. Prove that each sign block terminates, every original term is eventually used exactly once, and the whole rearranged sequence of partial sums tends to T. State why a finite plot, even with many crossings, cannot replace any one of those claims.","hints":["Both remaining positive odd reciprocals and negative even reciprocals have divergent total magnitude.","At a crossing, compare the new partial sum with the value immediately before the last term.","Control partial sums inside each block by its two neighboring crossings."],"rubric":["Starts below −1/2 by taking negative terms, then shows alternating crossings","Shows both term counters diverge and no term is reused","Bounds overshoot by the last term added at each crossing","Controls all intermediate partial sums, not only crossing subsequences","Separates finite visual evidence from the infinite proof"],"solution":"Because the starting sum 0 is above −1/2, take unused negative even reciprocals until the sum first falls below −1/2. Then take unused positive odd reciprocals until it first rises above −1/2, and repeat. Every block terminates because each remaining one-sign subseries has unbounded total magnitude. The construction advances the two counters in order and infinitely many blocks occur, so every positive and every negative term is eventually used once. At a crossing, the preceding sum lies on the opposite side of −1/2, so the overshoot is at most the final added term's magnitude, which tends to zero as its counter grows. Within a block, partial sums are monotone between its two crossing values. Both neighboring crossing errors tend to zero, proving all partial sums tend to −1/2. A finite plot cannot establish infinitely many crossings, exhaustion of both infinite term lists, or the limiting error bound.","transfer":"Changed starting order: deliberately take one positive term before beginning the first downward block toward T=−1/2. Can the same target-limit proof still work? Identify the initial finite exception to the overshoot argument.","transferSolution":"Yes. The first positive term is an arbitrary finite prelude and leaves the sum above −1/2. Then use unused negative terms until the first downward crossing; after that alternate signs as usual. Each later block terminates, both counters advance without bound, and every original term is eventually used. At actual crossings the overshoot is bounded by the last added term; that bound need not apply to the arbitrary initial positive prelude itself. A finite prelude cannot change the limit."}
```

## Cauchy products: a second order trap

For series \(\sum_{n\ge0}a_n\) and \(\sum_{n\ge0}b_n\), their formal Cauchy product has coefficients \(c_n=\sum_{k=0}^na_kb_{n-k}\). If both input series converge absolutely to \(A\) and \(B\), then \(\sum c_n=AB\). Indeed, the sum of all absolute double terms is \((\sum|a_i|)(\sum|b_j|)<\infty\). Absolute rearrangement permits collecting the double series by diagonals \(i+j=n\). Finite rectangular partial sums equal products of input partial sums and approach \(AB\).

### What the rectangle and triangle actually count

Plot the index pair \((i,j)\) of a term \(a_i b_j\) as a lattice point in the first quadrant. A square \(0\le i,j\le N\) collects \(R_N=(\sum_{i=0}^Na_i)(\sum_{j=0}^Nb_j)\). A triangle \(i+j\le N\) collects \(D_N=\sum_{n=0}^Nc_n\). The next editable diagram shades their **continuous envelopes**; the terms themselves sit at integer lattice points. Change \(N\) and name a point in the square but outside the triangle.

```mathviz
scene "Rectangle versus diagonal triangle for a double series";
domain -0.5 6.5;
range -0.5 6.5;
coordinates equal;
param N = 3 from 1 to 6;
polygon rectangle = (0,0), (N,0), (N,N), (0,N) color teal;
polygon diagonal_region = (0,0), (N,0), (0,N) color amber;
segment diagonal from (0,N) to (N,0) color rose;
point extra_term = (N,N) color violet;
```

The two finite regions are different. For example, \((N,N)\) belongs to \(R_N\) but only enters a diagonal partial sum at \(D_{2N}\). Therefore equality of the two **finite** sums is false; the theorem must show that their difference becomes harmless in the limit.

Here is the missing tail argument. Write \(\alpha=\sum_{i\ge0}|a_i|\) and \(\beta=\sum_{j\ge0}|b_j|\). For any finite collection \(F\) of pairs lying outside the square \([0,N]^2\), every pair has \(i>N\) or \(j>N\). Counting some pairs twice gives the safe upper bound

$$
\sum_{(i,j)\in F}|a_i b_j|
\le \beta\sum_{i>N}|a_i|+\alpha\sum_{j>N}|b_j|\longrightarrow0.
$$

Thus the absolute double sum has a finite-tail criterion. Both expanding squares and expanding diagonal triangles eventually contain any prescribed finite square, so both exhaust the **same** absolutely convergent double series. Meanwhile \(R_N\to AB\) because its factors are ordinary convergent partial sums. Hence \(D_N\to AB\), and \(D_N\) is precisely the partial sum of the Cauchy product. This proof needs absolute control of *all* pair terms outside a finite square; mere convergence of each input does not supply it.

### Calculate a product before generalizing

Let \(a_n=b_n=2^{-n}\). Both sums are \(2\), so the product should sum to \(4\). Every pair on the \(n\)th diagonal has product \(2^{-n}\), and there are \(n+1\) pairs. Therefore \(c_n=(n+1)2^{-n}\). The first three diagonal partial sums are \(D_0=1\), \(D_1=2\), and \(D_2=11/4\). The corresponding square sums are \(R_0=1\), \(R_1=9/4\), and \(R_2=49/16\). Their unequal intermediate values are not a contradiction. Summing the geometric derivative identity, or multiplying the finite sum by \(1-1/2\), gives

$$
D_N=\sum_{n=0}^N\frac{n+1}{2^n}
=4-\frac{N+3}{2^N}\longrightarrow4.
$$

The exact remainder \((N+3)/2^N\) measures what the diagonal triangle has not yet captured. Its limit is zero, whereas the diagram alone can only show a finite number of terms. The next saved task is **reconstruction** of this displayed calculation and proof mechanism; its changed-factor transfer is the independent attempt.

```exercise
{"id":"analysis-cauchy-product-worked-transfer","type":"written","prompt":"For a_n=b_n=2^(−n), compute c_2, D_2, and R_2 from the definitions. Explain why D_N and R_N can be different while both approach 4. Then prove an explicit tail bound for all finite collections of |a_i b_j| outside an N×N index square.","hints":["The diagonal i+j=2 has three pairs; the square has nine pairs.","Every pair outside the square has i>N or j>N; use a union bound with α=Σ|a_i| and β=Σ|b_j|."],"rubric":["Finds c₂=3/4, D₂=11/4, R₂=49/16","Identifies the different finite index regions","Uses convergence of each absolute input tail in a valid double-tail bound","Explains why both exhaust the same absolute double series","States that the picture is not a convergence proof"],"solution":"There are three pairs on i+j=2, each with product 1/4, so c₂=3/4 and D₂=1+1+3/4=11/4. The square sum is (1+1/2+1/4)²=49/16. The triangle and square include different pair sets; both eventually include every fixed pair. For any finite F outside [0,N]², Σ_F|a_i b_j|≤(Σ_{i>N}|a_i|)(Σ_j|b_j|)+(Σ_i|a_i|)(Σ_{j>N}|b_j|). Here α=β=2 and each tail is 2^(−N), giving a bound 4·2^(−N), which tends to zero. Thus the two exhaustions share one limit, equal to the limit 2·2=4 of the square sums.","transfer":"Changed factors: a_n=2^(−n), b_n=3^(−n). Derive a closed formula for c_n, find the sum of the Cauchy product, and identify exactly where absolute convergence is used. Do not assume the old coefficient (n+1)2^(−n) survives.","transferSolution":"c_n=Σ_{k=0}^n2^(−k)3^(−(n−k))=3^(−n)Σ_{k=0}^n(3/2)^k=3·2^(−n)−2·3^(−n). Therefore Σc_n=3·2−2·(3/2)=3, agreeing with (Σa_n)(Σb_n)=2·(3/2). Absolute convergence lets triangular and rectangular finite sums exhaust the same double sum; finite sums are not equal term by term."}
```

Convergence of both input series alone is insufficient. Take \(a_n=b_n=(-1)^n/\sqrt{n+1}\), for \(n\ge0\). Each input converges by the alternating test. However,

\[
|c_n|=\sum_{k=0}^{n}\frac{1}{\sqrt{(k+1)(n-k+1)}}
\ge \frac{2(n+1)}{n+2}.
\]

The inequality uses \(\sqrt{uv}\le(u+v)/2=(n+2)/2\), with \(u=k+1\) and \(v=n-k+1\). Thus \(c_n\) does not tend to zero, so its series diverges. Small individual factors are not enough when the \(n\)th coefficient collects \(n+1\) factors.

```exercise
{"id":"analysis-rearrangement-hypothesis","type":"choice","prompt":"Which fact in the absolute-rearrangement proof can fail for a conditionally convergent series?","options":[{"label":"The sum of absolute values of the unused tail can be made arbitrarily small.","correct":true,"feedback":"That tail estimate is exactly the protection supplied by absolute convergence."},{"label":"Every original term appears exactly once.","correct":false,"feedback":"That remains part of the definition of a rearrangement."},{"label":"Finite addition is commutative.","correct":false,"feedback":"Finite commutativity remains true; the limiting tail is the issue."}],"hints":["Locate the inequality that bounds any finite selection of unused terms."]}
```

**Independent transfer.** Suppose \(\sum|a_n|<\infty\) and \(E\subseteq\mathbb N\). Prove that the subseries \(\sum_{n\in E}a_n\), listed in increasing index order, converges. Then give a conditional series with a divergent subseries.

<details><summary>Worked solution</summary>

For any finite selection \(F\subseteq E\cap\{N+1,N+2,\ldots\}\), \(|\sum_{n\in F}a_n|\le\sum_{n>N}|a_n|\). The right side tends to zero. The Cauchy criterion proves convergence of the selected subseries. For \(\sum(-1)^{n+1}/n\), select only odd indices. The resulting \(\sum_{k\ge1}1/(2k-1)\) diverges by comparison with half the harmonic series. A subseries may omit the negative terms permanently.

</details>
