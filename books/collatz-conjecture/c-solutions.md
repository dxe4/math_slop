# Hints and selected solutions {#sec-solutions}

## How to use this appendix

Try a problem before reading its entry. A **hint** identifies a useful
representation; a **solution** supplies a complete argument at the expected
level. Computational answers must still state the map convention and range.

## Part I

**Chapter 1, Exercise 2 — Solution.** Suppose $C^i(a)=C^j(b)=m$. For every
$r\ge0$, determinism gives

$$
C^{i+r}(a)=C^r(m)=C^{j+r}(b).
$$

Thus the two forward sequences are identical after their first meeting. No
injectivity is needed; the claim is about futures, not predecessors.

**Chapter 1, Exercise 3 — Solution.** A bounded orbit lies in
$\{1,\ldots,M\}$ for some $M$. Among its first $M+1$ values, two are equal by
the pigeonhole principle. If $C^i(n)=C^j(n)$ with $i<j$, applying $C$ repeatedly
shows that the tail from time $i$ has period $j-i$.

**Chapter 1, Exercise 4 — Hint.** Use strong induction, not ordinary induction on
the next Collatz step. If an iterate of $n$ is $m<n$, the whole theorem for $m$
is available.

**Chapter 1, Exercise 5 — Solution.** For an even integer, $C(n)=n$ gives
$n/2=n$, hence $n=0$. For an odd integer, $3n+1=n$ gives $n=-1/2$, not an
integer. Thus 0 is the only fixed integer under the natural extended branch rule.
The classical domain excludes 0.

**Chapter 2, Exercise 6 — Solution.** Repeated halving gives
$2^r\to2^{r-1}\to\cdots\to1$, so $\tau(2^r)=r$. For $r\ge1$, the first iterate
is already smaller, so $\sigma(2^r)=1$.

**Chapter 3, Exercise 3 — Solution.** Solve $3n\equiv-1\pmod{2^k}$. Because 3
is a unit modulo every power of two, the solution is unique. For $k=1,\ldots,6$
the least odd residues are

$$
1,\ 1,\ 5,\ 5,\ 21,\ 21
$$

modulo $2,4,8,16,32,64$, respectively. At a fixed modulus, saying
$2^k\mid3n+1$ determines “at least $k$” factors, not the exact valuation.

<div id="sec-congruence-certificate-solution">

**Chapter 3, Exercise 7 — Hint.** Write $n=5+8q$ and translate the second
congruence into an ordinary integer equation. Cancel a factor only while
adjusting the modulus. In part (b), compare parity.

**Solution.** In part (a), every $n=13+48u$ has remainder 5 modulo 8 and
remainder 1 modulo 6. Thus the proposed certificate is **sound**: every
input it includes satisfies both conditions. To test **completeness**, whether
it includes every solution, write $n=5+8q$. The second condition is

$$
6\mid(4+8q)
\quad\Longleftrightarrow\quad
6\mid2(q-1)
\quad\Longleftrightarrow\quad
q=1+3s\text{ for an integer }s.
$$

The middle equivalence subtracts $6(q+1)$; the last follows from
$2(q-1)=6s$. Consequently all and only integer solutions are
$n=13+24s$. Substitution proves the converse, and positivity is equivalent
to $s\ge0$.

The proposed $13\pmod{48}$ class retains only even $s$ and misses 37,
the least positive omitted solution. The full class is $13\pmod{24}$,
or the two classes 13 and 37 modulo 48. A correct witness and a sound
subset need not give a complete certificate.

In part (b), $n\equiv5\pmod8$ forces $n$ odd, while
$n\equiv2\pmod6$ forces $n$ even. No integer satisfies both.
In both parts the moduli 8 and 6 share the divisor 2, so the coprime
theorem's product-modulus conclusion is unavailable. The direct arguments
settle these particular systems; they do not assert a new general
Chinese remainder theorem or convergence of an entire Collatz orbit.

</div>

## Part II

**Chapter 4, Exercise 1 — Solution.** For $(0,1,1)$, $s=2$ and

$$
A=0+3\cdot2+1\cdot4=10,
\qquad S^3(n)=\frac{9n+10}{8}.
$$

For $(1,1,0)$,

$$
A=3+2=5,
\qquad S^3(n)=\frac{9n+5}{8}.
$$

The realizing residues are $6$ and $3$ modulo 8, respectively.

**Chapter 4, Exercise 5 — Hint.** Write
$S^k(n)-n=(a-1)n+b$. If $a<1$, this is a decreasing affine function of $n$.
Check its largest possible value among class members, which occurs at the
smallest positive representative.

**Chapter 5, Exercise 1 — Solution.** If $n$ is even and greater than 1, then
$C(n)=n/2<n$. This one-step inequality is uniform over the even residue class
modulo 2.

**Chapter 5, Exercise 5 — Example.** The word $(1)$ has slope $3/2>1$. Extending
it by two even bits gives $(1,0,0)$ with slope $3/8<1$. Whether a start realizes
the extension remains an admissibility question.

<div id="sec-sieve-precision-solution">

**Chapter 5, Exercise 7 — Hint.** Compare 3 and 11. They have the same three low
input bits; compute the fourth pre-step parity bit before claiming a four-step
formula. Check the two modulo-16 children separately, including earlier prefixes.

**Solution.** The known depth is $k=3$, but the witness takes $j=4$ steps.
Thus $j\le k$ fails, and three input bits do not fix the fourth branch.
The start 11 has the same residue 3 modulo 8, but

$$
11\to17\to26\to13\to20.
$$

None of these four positive-time values is below 11. This refutes the proposed
by-four certificate for the whole class; it is not a Collatz counterexample.

Refinement gives the positive classes $n=3+16t$ and $n=11+16t$, where $t$ is an
integer with $t\ge0$. Their four-bit words and exact rows are

$$
\begin{aligned}
1100:\quad S^4(n)&=\frac{9n+5}{16},
&&n=3+16t,\\
1101:\quad S^4(n)&=\frac{27n+23}{16},
&&n=11+16t.
\end{aligned}
$$

For the first child, $S^4(3+16t)=2+9t$, so the descent gap is
$(3+16t)-(2+9t)=1+7t>0$. Its first three endpoint excesses above the start
are $2+8t$, $5+20t$ and $1+2t$, all positive. Every positive member therefore
first descends at step four.

For the second child, $S^4(11+16t)=20+27t$, whose excess above the start is
$9+11t>0$. Its first three excesses are $6+8t$, $15+20t$ and $2+2t$, also
positive. No member descends by four steps. This calculation leaves later times
open; failure at this horizon does not imply divergence. Refining the input
precision repairs the scope of the affine claims, rather than forcing both
children to be certified.

</div>

**Chapter 6, Exercise 2 — Solution.** An odd predecessor must be
$n=(m-1)/3$. Integrality requires $m\equiv1\pmod3$. Its oddness requires
$(m-1)/3\equiv1\pmod2$, or $m-1\equiv3\pmod6$. Together these are exactly
$m\equiv4\pmod6$.

**Chapter 7, Exercise 5 — Solution.** Across a complete residue block, the first
valuation has an exact geometric frequency. After applying $U$, the next input
is an affine function of the original residue, and conditioning on a long-lived
orbit selects special residues. Neither operation resamples an independent odd
integer.

## Part III

**Chapter 8, Exercise 2 — Solution.** For $(1,0,0)$,

$$
S^3(n)=\frac{3n+1}{8}.
$$

Cycle closure would give $5n=1$, impossible in positive integers. For
$(1,1,0,0)$, closure of $(9n+5)/16$ gives $7n=5$, also impossible.

**Chapter 8, Exercise 4 — Solution.** Around an $r$-term odd cycle, the leading
multiplier is $3^r/2^{A_r}$ and the additive contribution is positive. Closure
requires the leading multiplier below 1, so $3^r<2^{A_r}$. Taking base-two
logarithms and dividing by $r$ yields $A_r/r>\log_2 3$.

**Chapter 9, Exercise 1 — Solution.** A nonperiodic orbit cannot repeat a value.
For any $M$, only $M$ positive integers are at most $M$, so an injective orbit
visits that set at most $M$ times. Consequently, after some time every value
exceeds $M$. Since this holds for every $M$, the orbit tends to infinity.

**Chapter 10, Exercise 2 — Solution.** For $|x|<1$,
$\sum_{a\ge0}x^a=(1-x)^{-1}$. Differentiate and multiply by $x$:

$$
\sum_{a\ge1}a x^a=\frac{x}{(1-x)^2}.
$$

At $x=1/2$ this equals 2.

**Chapter 10, Exercise 6 — Hint.** Choose $N$ uniformly from
$\{0,\ldots,2^k-1\}$. The bijection between residues and parity words makes the
$k$ coordinates jointly uniform on $\{0,1\}^k$, hence independent fair bits on
this finite probability space.

**Chapter 11, Exercise 2 — Solution.** Up to $x$, the reciprocal weight of powers
of two is at most

$$
\sum_{j\ge0}\frac1{2^j}=2.
$$

Dividing by $\log x$ gives a quantity tending to zero. Their natural count is
$O(\log x)$, also negligible compared with $x$.

## Part IV

**Chapter 12, Exercise 1 — Solution.** Finite stopping time for $n$ gives an
iterate $m<n$. To deduce convergence of $n$, one must know that $m$ reaches 1.
A density theorem about starts does not guarantee the property for this
particular $m$. Universal finite stopping time would supply the missing induction
hypothesis; density-one finite stopping time does not.

**Chapter 12, Exercise 2 — Solution.** Dividing by $x$ gives
$\pi_1(x)/x>x^{-0.16}$, whose lower bound tends to zero. A positive-density
conclusion would require a lower bound by a positive constant independent of
$x$.

**Chapter 13, Exercise 5 — Solution.** A correct replacement is: “For every
threshold $f(N)$ tending to infinity, Tao proved that the orbit minimum lies
below $f(N)$ for a logarithmic-density-one set of starts.” Reaching 1 and
universal convergence are not conclusions.

**Chapter 13, Exercise 6 — Hint.** For each $k$, the set
$A_k=\mathbb N_{>0}\setminus\{k\}$ has density one, while
$\bigcap_{k\ge1}A_k$ is empty. Density one is not preserved under arbitrary
countable intersections.

**Chapter 14, Exercise 3 — Solution.** With unsigned 64-bit maximum
$M=2^{64}-1$, safety of $3n+1$ requires

$$
n\le\left\lfloor\frac{M-1}{3}\right\rfloor
=6\,148\,914\,691\,236\,517\,204.
$$

An implementation should compare before multiplying.

**Chapter 15, Exercise 2 — Example.** Path A is marked safe because it reaches a
value on active path B, while B is marked safe because it reaches a value on A.
Neither has a certified tail to 1. Requiring dependencies to point to a strictly
smaller already certified start prevents the cycle.

## Part V

**Chapter 16, Exercise 2 — Solution.** Under the mean-two geometric valuation
model, expected log drift is $\log a-2\log2=\log(a/4)$. It is negative for
$a=3$ and positive for $a=5$. These are model predictions, not pointwise
theorems.

**Chapter 16, Exercise 5 — Solution.** Generalized undecidability asks for one
algorithm that decides a termination property when an arbitrary map description
is input. The classical conjecture asks for the truth value of one fixed map.
The first can be undecidable while the second has a definite proof or
counterexample not yet known to us.

**Chapter 17, Exercise 4 — Example.** Certificates
$17\leadsto26$ and $26\leadsto17$ form a directed cycle and establish no base
case. A repair records the actual orbit until it reaches 13, which is smaller
than 17, and relies only on a previously certified value.

**Chapter 18, Exercise 6 — Rubric.** A strong synthesis distinguishes the three
quantifiers. Negative drift concerns a model or average. Density-one descent
allows an exceptional set. Verification below $2^{71}$ covers a finite interval.
Together they make convergence plausible and constrain counterexamples, but none
controls every integer beyond the frontier.

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

Try the changed capstone
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
