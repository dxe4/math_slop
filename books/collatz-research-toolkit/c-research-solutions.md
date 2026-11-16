# Hints and selected research solutions {#sec-solutions}

This appendix retains the original research-chapter numbers and all later solution material. Chapter numbers in retained source notes refer to the original combined edition. Some entries support the companion method articles; they remain here to preserve the full solution record.

## Parts VI and VII

**Chapters 19–21 — Hint.** A pointwise rank function must decrease on every
transition outside its target set; a negative average is not a replacement.
For a finite automaton or residue tree, prove that stored bits determine every
transition claimed. When a parent is pruned, the certificate must cover all its
integer lifts, not only the least representative.

**Chapters 22–23 — Hint.** Separate the producer, certificate, and checker.
Cycle candidates first satisfy a logarithmic approximation, then exact
integrality, parity, positivity, and primitive-period conditions. Passing the
first filter never licenses skipping the later ones.

**Chapters 24–26 — Hint.** Under parity conjugacy, symbolic cylinders match
2-adic residue balls, but ordinary height is not continuous. Transfer-operator
spectra are tied to a weighting and space. A practicum claim ledger should have
one status per row and must be updated whenever the supporting evidence changes.

**Chapter 27 — Solution sketch.** For a valuation word
$(a_0,\ldots,a_{k-1})$, maintain

$$
S_{j+1}=S_j+a_j,
\qquad B_{j+1}=3B_j+2^{S_j}.
$$

Then $U^k(n)=(3^kn+B_k)/2^{S_k}$. Descent requires
$(2^{S_k}-3^k)n>B_k$. Check exact valuations at every prefix; the final
inequality alone does not make a formal word admissible.

**Chapter 28 — Solution sketch.** A length-$k$ cylinder has mass $2^{-k}$.
Its shift preimage is the disjoint union of two length-$(k+1)$ cylinders and has
the same mass. For cylinders depending on disjoint coordinate blocks, joint mass
factors. These calculations prove symbolic measure claims but do not transfer
ordinary height control to positive integers.

**Chapter 29 — Hint.** Write the vertex set, escaped-edge policy, and adjacency
orientation before computing a spectrum. To disprove a proposed quotient, find
two detailed states in one block whose successors land in different blocks.

**Chapter 30 — Hint.** Complete enumeration has exact finite summaries; do not
attach a sampling interval merely because software offers one. If a cap is hit,
store an event indicator and a lower bound. Resample shared-tail clusters
together only when that clustering answers the stated sampling question.

**Chapter 31 — Solution sketch.** Sorted half-open shards cover $[L,U)$ exactly
when the first lower endpoint is $L$, each upper endpoint equals the next lower
endpoint, and the last upper endpoint is $U$. A total row count cannot replace
these equalities. Hashes authenticate bytes; the checker must still recompute
the arithmetic predicate.

**Chapter 32 — Hint.** In a reduction, the target input varies with the source
instance. If an argument ends with one fixed classical map but never explains
how arbitrary machine inputs are encoded into that fixed statement, it has not
proved undecidability. "Solver unknown" is also not formal independence.

**Chapter 33 — Solution sketch.** For $U_{a,b}$, composition gives

$$
n_k=\frac{a^kn_0+bB_k}{2^{S_k}},
\qquad B_{j+1}=aB_j+2^{S_j}.
$$

Set $n_k=n_0$ for a cycle. Under the geometric valuation model the leading mean
log increment is $\log(a/4)$; retain the words "under the model" in every use.

## Part IX

**Chapter 40 — Counting check.** For words avoiding consecutive ones, split by
the final symbol. A final zero follows any valid length-$(n-1)$ word; a final
one must occur in a final block `01`, leaving a valid length-$(n-2)$ word. This
proves the Fibonacci recurrence and prevents double counting. When translating
to residues, cite the finite parity bijection and then check affine descent
separately.

**Chapter 40 — Coefficient check.** A word of length $n$ with $k$ nonadjacent
ones corresponds to a $k$-subset of $n-k+1$ shifted positions. Thus its layer
size is $\binom{n-k+1}{k}$. Summing layers must reproduce $F_{n+2}$; treat that
identity as an independent consistency check.

**Chapter 41 — Information-budget check.** If $R$ is uniform modulo $2^k$, its
parity word $W$ is uniform and $H(W)=k$. Given odd count $K=j$, exactly
$\binom kj$ orders remain. The chain rule gives

$$
k=H(K)+2^{-k}\sum_j\binom kj\log_2\binom kj.
$$

State the random choice of $R$ before using the word “entropy.”

**Chapter 42 — Drift check.** To prove the additive drift theorem, stop the
potential first and add $\delta(t\wedge\tau)$. Take expectation at a fixed
finite time, discard the nonnegative stopped potential, and only then use
monotone convergence. Applying optional stopping directly at an unproved
unbounded Collatz hitting time is circular.

**Chapter 43 — Overlap check.** For `11` indicators, only adjacent windows have
nonzero covariance. Their joint-one probability is $1/8$, so covariance is
$1/16$ and the variance of $r$ overlapping windows is $(5r-2)/16$. Color odd
and even starting positions before applying an independent concentration bound.

**Chapter 44 — Elimination check.** Recompute the eight length-three affine
rows and their residues. Coefficients below eight descend after checking the
positive integer threshold; coefficients at least nine with positive offsets do
not. The resulting exact set is $0,2,4,5\pmod8$.

**Chapter 45 — Enclosure check.** Every logarithm partial sum is a rational lower
bound, and the geometric tail is a rational upper error. Combine lower and upper
endpoints in the direction that makes the final expression widest. A sign is
certified only when zero is excluded. Compare powers exactly whenever the
logarithmic expression reduces to one integer inequality.

## Project reproducibility rubric

A computational project is complete when another reader can identify the exact
claim, regenerate or validate the data, detect incomplete cases, and reproduce
the reported summary. Award equal attention to:

1. mathematical definitions and theorem status;
2. input validation and exact arithmetic;
3. complete interval or class coverage;
4. tests, independent checks, and failure handling;
5. environment, seed, hashes, and code version;
6. figures with scopes, alternative text, and interpretation;
7. an explicit limitations section.

<!-- uni-34-collatz-window-key:start -->
## Stopped-window research project: complete key {#sec-collatz-window-key}

Try the [changed capstone](g-research-studios.md#sec-collatz-window-capstone)
before reading these answers or running the changed parameter. The matrix,
program and key are public help. They provide exact reference mathematics for
self-review, not an authenticated decision that a reader produced an
independent proof.

### Recheck the main finite certificate {#sec-collatz-window-key-main}

Here $S$ is the shortcut map, not the ordinary map $C$. The original window
is $[1,9)$ and the uniform input population is precisely $D_9=\{2,\ldots,8\}$.
The true images, in that order, are

$$
(1,5,2,8,3,11,4).
$$

Applying the declared first-1/overflow rule yields
$h=(1,5,2,4,6,1,3)^T$. The retained chain from 6 is
$6,3,5,8,4,2,1$; the input 7 leaves on its first step to 11.
All the other inputs reach 1 before an endpoint at least 9.

The row equations are

$$
\begin{array}{lll}
h_2=1,&h_3=1+h_5=5,&h_4=1+h_2=2,\\
h_5=1+h_8=4,&h_6=1+h_3=6,&h_7=1,\\
h_8=1+h_4=3.&&
\end{array}
$$

Their positive decrement proves exact first-exit times, rather than merely
suggesting them from a finite trace. At most five transitions remain wholly
in $D_9$, with the five-edge witness
$6,3,5,8,4,2$. Thus $Q_9^6=0$ and $(Q_9^5)_{6,2}=1$.
A nilpotent matrix need not itself be zero or diagonalizable.
It is the **sixth power** which vanishes; all its eigenvalues are zero.

The uniform mean is

$$
\frac{1+5+2+4+6+1+3}{7}=\frac{22}{7}.
$$

The success-before-overflow and overflow fractions are $6/7$ and $1/7$.
They say nothing about the later arithmetic trajectory of the escaped input.
For example, additional arithmetic separately gives

$$
7,11,17,26,13,20,10,5,8,4,2,1.
$$

This is an eleven-shortcut-step finite witness for 7. It was not encoded by
the killed $N=9$ certificate, and it is not a universal convergence proof.
The ordinary intermediate $5\to16\to8$ also shows why a shortcut endpoint
window is not an ordinary-height bound.

On transient column observables the exact weighted operator norm is $5/6$:
the nonnegative row sums after weighting are $(h_n-1)/h_n$, and $x=h$
attains their maximum at state 6. The ordinary infinity norm is 1.
The full stopped matrix $P_9$ has two absorbing terminal coordinates and
eigenvalue 1. These are different matrices and different domains; there is no
contradiction between $\rho(Q_9)=0$ and $\rho(P_9)=1$.

### Capstone 1: all changed rows and the ordered matrix {#sec-collatz-window-key-data}

Keep the same shortcut formula and first-1 policy, but take $N=12$.
In order $(2,3,4,5,6,7,8,9,10,11)$ the full exact data are:

| $n$ | $S(n)$ | Retained successor or terminal | $\tau_{12}(n)$ | First terminal |
|---:|---:|:---|---:|:---|
| 2 | 1 | success | 1 | 1 |
| 3 | 5 | 5 | 5 | 1 |
| 4 | 2 | 2 | 2 | 1 |
| 5 | 8 | 8 | 4 | 1 |
| 6 | 3 | 3 | 6 | 1 |
| 7 | 11 | 11 | 2 | $\Omega$ |
| 8 | 4 | 4 | 3 | 1 |
| 9 | 14 | overflow | 1 | $\Omega$ |
| 10 | 5 | 5 | 5 | 1 |
| 11 | 17 | overflow | 1 | $\Omega$ |

In particular, 7 is no longer an immediate exit: $7\to11\to17$ takes two
steps to overflow. Inputs 9 and 11 leave immediately, while
$10\to5\to8\to4\to2\to1$ takes five steps. The exact killed row matrix is

$$
Q_{12}=
\begin{pmatrix}
0&0&0&0&0&0&0&0&0&0\\
0&0&0&1&0&0&0&0&0&0\\
1&0&0&0&0&0&0&0&0&0\\
0&0&0&0&0&0&1&0&0&0\\
0&1&0&0&0&0&0&0&0&0\\
0&0&0&0&0&0&0&0&0&1\\
0&0&1&0&0&0&0&0&0&0\\
0&0&0&0&0&0&0&0&0&0\\
0&0&0&1&0&0&0&0&0&0\\
0&0&0&0&0&0&0&0&0&0
\end{pmatrix}.
$$

The complete potential is

$$
h^{(12)}=(1,5,2,4,6,2,3,1,5,1)^T.
$$

The old equations persist except that
$h_7=1+h_{11}=2$, and the new equations are
$h_9=h_{11}=1$, $h_{10}=1+h_5=5$.
Checking all ten equations gives
$Q_{12}h^{(12)}=h^{(12)}-\mathbf1$.
The same positive-integer induction proves the exact first exits for all ten
inputs. Merely copying $h_7=1$ from the smaller window would fail the new
equation; source identities and the changed domain matter.

### Capstone 2: times, populations and spectra {#sec-collatz-window-key-populations}

The largest potential is still six, so $Q_{12}^6=0$.
The retained five-edge path from 6 to 2 persists, so
$(Q_{12}^5)_{6,2}=1$: the nilpotence index remains exactly six and every
eigenvalue is zero.

Under the uniform law on **all ten** starts in $D_{12}$, the survival counts
are

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| Surviving starts | 10 | 7 | 5 | 4 | 3 | 1 | 0 |

Their sum is 30, agreeing with the sum of the ten potential entries.
Thus

$$
\mathbb E_{D_{12}}[\tau_{12}]=30/10=3.
$$

Success-before-overflow occurs for
$\{2,3,4,5,6,8,10\}$, giving $7/10$; overflow occurs for
$\{7,9,11\}$, giving $3/10$.

On the **common seven** starts $D_9$, the larger-window times instead sum
to $23$: only the old time for 7 increases, from one to two.
Consequently

$$
\mathbb E_{D_9}[\tau_{12}]=23/7>22/7
=\mathbb E_{D_9}[\tau_9].
$$

The comparison $3<22/7$ uses different populations. It does not say that
enlarging a cutoff makes the same trajectories exit earlier. Neither mean
is the average full Collatz stopping time: overflow terminates the
observation before that question is answered.

### Capstone 3: the orientation error creates probability mass {#sec-collatz-window-key-orientation}

Every nonzero row of $Q_{12}$ has one entry equal to one, so

$$
\|Q_{12}\|_\infty=1.
$$

The column at named state 5 contains two ones, from predecessors 3 and 10.
Every other column has at most one. Therefore

$$
\|Q_{12}\|_1=2.
$$

This is the induced matrix 1-norm, the maximum **column** sum. It is not a
row-sum formula or the spectral radius. The weighted column-observable norm
is still

$$
\|Q_{12}\|_{h^{(12)}}=
\max_n\frac{h^{(12)}_n-1}{h^{(12)}_n}=5/6,
$$

again attained on the observable $h^{(12)}$ at state 6.
Different norms can give 2, 1, and $5/6$ for the same nilpotent matrix without
altering its spectral radius zero.

Let $e_5$ be the **column probability law** concentrated at named state 5.
Because $S(5)=8$, correct forward evolution is

$$
Q_{12}^{T}e_5=e_8,
$$

with total transient mass one. The mistaken product instead gives

$$
Q_{12}e_5=e_3+e_{10},
$$

with mass two. This product answers an observable/preimage question:
which input states have successor 5? It does not send a single unit of
probability forward from 5. Transposing a matrix preserves its eigenvalues
but does not preserve this interpretation of coordinates.

### Capstone 4: a boundary-created cycle and an impossible certificate {#sec-collatz-window-key-reset}

For the reset-to-7 model, the true image from 9 is 14 and the true image
from 11 is 17, but both are replaced by 7. These are the **two changed
arcs**:

$$
9\longrightarrow7,\qquad11\longrightarrow7.
$$

All other retained arcs remain as in $Q_{12}$, including $7\to11$.
The matrix $R_{12}$ therefore replaces just the zero rows for 9 and 11 by
unit rows at column 7; the row for 2 still exits to success.
Now $7\to11\to7$ is a closed two-cycle, with 9 feeding into it.

An exact spectral-radius certificate is the nonzero nonnegative column

$$
w=e_7+e_9+e_{11},\qquad R_{12}w=w.
$$

To check it, the three indicated input rows all point into
$\{7,9,11\}$; every other row either points outside that set or exits.
Thus 1 is an eigenvalue. Each row sum is at most one, so the ordinary
infinity norm is one and no eigenvalue has modulus greater than one.
Hence $\rho(R_{12})=1$.
The two-cycle also has period two; no claim that this reset process mixes
to a single stationary law is warranted.

A positive finite-exit potential $g$ would require on the two cycle rows

$$
g_7=1+g_{11},\qquad g_{11}=1+g_7.
$$

Adding gives $0=2$, impossible. Even the weaker strict-decrement inequalities
would sum to $0\ge2$. A positive-weight contraction
$R_{12}g\le\alpha g$ with $0\le\alpha<1$ is equally impossible:
$g_{11}\le\alpha g_7$ and $g_7\le\alpha g_{11}$ imply
$g_7\le\alpha^2g_7<g_7$.

Exactly the three starts $7,9,11$ never reach 1 **in this reset model**.
The other seven follow their original paths to 1. With the uniform
ten-start law, the time to 1 is infinite with probability $3/10$,
so its extended expectation is infinite. For instance, its tail probability
is at least $3/10$ at every time, and the tail sum diverges.
This differs from the true-window **first-terminal** mean of three, where
overflow is a terminal event rather than an invented return.

### Capstone 5: arithmetic faithfulness, mutations and the final claim {#sec-collatz-window-key-checker}

The edge $11\to7$ is not a shortcut Collatz edge: its actual image is
$(3\cdot11+1)/2=17$. The edge $9\to7$ likewise replaces the true image 14.
Consequently the reset two-cycle is not evidence of an arithmetic cycle.
The main example's ordinary intermediate $5\to16\to8$ disproves the
different false claim that every ordinary intermediate stays below the
shortcut cutoff 9.

For independent reproduction, set `CUTOFF = 12` in the complete standalone
listing. The arithmetic checker still uses ordinary steps to rebuild the
shortcut image; the changed certificate has the ten rows and matrix above.
Its exact summary is exit times
$(1,5,2,4,6,2,3,1,5,1)$, survival counts
$(10,7,5,4,3,1,0)$, mean $3$, success $7/10$, overflow $3/10$,
and weighted bound $5/6$.

The same seven mutations are rejected at the following specific boundaries:

| Invalid claim | Rejection obligation |
|:---|:---|
| Ordinary $C(3)=10$ substituted for shortcut $S(3)=5$ | Independent arithmetic image check |
| Last image row omitted | Complete canonical coverage of every named transient state |
| Time for state 3 changed from 5 to 4 | Exact potential equation at that state |
| Supplied matrix transposed | Matrix rebuilt from true row-successor images |
| An actual overflow relabelled as image 1 | Actual image must equal the independently reconstructed integer |
| Exclusive cutoff changed without changing the requested model | Expected-cutoff/schema binding |
| Old schema version supplied | Exact supported version |

In the larger window the first overflowing input used by the mutation is 9,
not 7. A checker must not carry the smaller window's terminal labels into
the changed problem. Trying to encode either synthetic reset edge as a true
shortcut transition also fails the image check, regardless of any attached
spectral plot or certificate digest.

The project produces a literal finite theorem and an auditable computational
object. Its premises include the exact arithmetic rows, cutoff, stopping
policy and matrix orientation. It supplies no uniform statement for all
positive integers, no ordinary-height bound, no infinite-operator norm, and
no arithmetic realization of the reset cycle. All prompts, outputs and this
key are public practice material; comparing them with one's draft is
self-review, not qualified human proof assessment or evidence of an unseen
independent attempt.
<!-- uni-34-collatz-window-key:end -->
