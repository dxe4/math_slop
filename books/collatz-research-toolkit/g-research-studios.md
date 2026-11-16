# Guided Research Studios {#sec-collatz-research-studios}

The Collatz conjecture is a training ground for mathematical judgment. A finite
table can be exact and important without proving a universal claim; a heuristic
can be illuminating without becoming a theorem. These studios produce small,
auditable research objects whose status remains visible from question to release.

## Investigation protocol and claim-status ledger

Create a ledger before computing:

| claim | quantifiers/domain | status | evidence | missing bridge |
|:---|:---|:---|:---|:---|
| one orbit reaches 1 | fixed start | finite fact | exact trace | none |
| all starts below $N$ reach 1 | finite interval | verified computation | manifest + checker | none inside interval |
| modeled log drift is negative | random model | model theorem | expectation calculation | transfer to arithmetic |
| every positive start reaches 1 | all positive integers | open conjecture | partial results | universal proof |

Every studio specifies:

- map convention and positive domain;
- half-open finite ranges;
- ordinary versus accelerated steps;
- exact integer and overflow policy;
- theorem, computation, model, heuristic, and open labels;
- source and version for external results;
- an independent check and a limitations paragraph.

## Exact orbit and stopping-statistic studio

### Question

How much can be learned from a complete, well-specified finite orbit table?

For all starts in $[1,N)$, compute the unaccelerated orbit through first
arrival at 1, with a justified step/height policy. Store total stopping time,
first descent time, peak, odd-step count, and a digest of the trace or replay
certificate.

### Investigation

1. Hand-check starts 1 through 20.
2. Prove the expected values for powers of two.
3. Identify starts that merge and verify their remaining tails agree exactly.
4. Locate record stopping times and peaks, keeping the selection rule visible.
5. Compare unaccelerated, shortcut, and odd-only counts for the same starts.
6. Build invariants: every odd unaccelerated image is even; every odd-only image
   is odd; every stored transition satisfies the reference formula.

### Data audit

Deliberately introduce duplicate starts, one missing endpoint, a wrapped
fixed-width value, and a capped unresolved row labeled as resolved. Write checks
that reject each corruption. A histogram that still looks plausible is not a
substitute for row-level validity.

### Report boundary

The complete table proves its exact finite statements. Trends, regressions, and
record curves do not establish behavior beyond $N$. Include a sentence stating
that no finite endpoint proves the universal conjecture.

## Residue, parity, and descent-certificate studio

### Question

Can one affine calculation certify descent for an entire residue class?

Choose parity depth $k$. For each residue modulo $2^k$, derive its shortcut
parity word and affine formula

$$
S^k(n)=\frac{3^s n+A}{2^k}.
$$

Verify that the parity-prefix map is a bijection. Separate a formal word from
the unique residue that realizes it.

### Investigation

1. Mark classes whose $k$-step affine value is below the start for every
   positive lift.
2. For a slope below 1, derive the exact threshold at which the affine offset is
   overcome.
3. Refine unresolved classes one binary level at a time.
4. Prove resolved parent classes may be pruned only when the certificate covers
   all descendants.
5. Emit a residue-tree manifest with parent-child compatibility.
6. Independently replay a random sample and every boundary threshold.

### Induction closure

If every $2\le n<N$ has a checked orbit prefix reaching a positive
$m<n$, prove by strong induction that every start below $N$ reaches 1.
Identify why a dependency cycle such as $a\leadsto b\leadsto a$ is not a
descent proof.

### Failure experiment

Use a class whose finite representative descends but whose larger lifts do not
all descend under the same prefix. This demonstrates why testing one
representative is weaker than proving an affine class inequality.

## Cycle and divergence-obstruction studio

### Cycle search

For a shortcut parity word of length $k$ with $s$ odd steps, derive

$$
S^k(n)=\frac{3^s n+A}{2^k}.
$$

Cycle closure gives

$$
(2^k-3^s)n=A.
$$

Build filters in the following order:

1. positivity requires $2^k>3^s$;
2. logarithmic approximation constrains $k/s$;
3. divisibility requires $2^k-3^s\mid A$;
4. the resulting $n$ must be a positive integer;
5. its actual parity word must equal the proposed word;
6. its primitive period must be checked.

Count how many candidates survive each filter. Do not call an eliminated search
range a proof that no longer cycle exists.

### Continued-fraction connection

Approximate $\log_2 3$ by $k/s$. Compute convergents and explain why good
approximations identify plausible odd/even balances. State the additional
linear-form or arithmetic estimates needed to turn approximation into lower
bounds on cycle length.

### Divergence logic

Prove that a bounded positive orbit is eventually periodic. Therefore a
counterexample is either a nontrivial cycle or an unbounded nonperiodic orbit.
Show that ruling out cycles leaves the second possibility. Write a critique of a
proof attempt that treats this dichotomy as though eliminating one branch
eliminated both.

## Probability-model and transfer-gap studio

### Exact marginal

For odd residues in a complete block, count

$$
A(n)=\nu_2(3n+1)
$$

and verify $\Pr(A=a)=2^{-a}$ up to the block boundary. Compute the modeled
mean $\mathbb E[A]=2$ and log increment $\log3-A\log2$.

### Dependence tests

1. Collect pairs $(A(n),A(U(n)))$ over a declared finite residue block.
2. Compare the joint table with the product of marginal frequencies.
3. Condition on orbits that have not descended after several steps.
4. Show how conditioning changes later valuation distributions.
5. Construct two synthetic sequences with the same histogram and different
   transition counts.

### Model theorem

Define independent geometric variables $A_j$ and prove a law of large numbers
for their average. Deduce negative typical log drift in that model. Then list the
missing transfer obligations:

- positive integers are not resampled Haar-random 2-adic points at each step;
- exceptional paths remain after an almost-sure statement;
- ordinary altitude is not continuous in the 2-adic topology;
- universal convergence requires every admissible arithmetic path.

Label each plotted comparison as exact arithmetic, synthetic model, or heuristic
transfer.

## Dependence-aware data-analysis studio

### Sampling design

Compare three datasets:

1. every start in $[1,N)$;
2. a uniform sample without replacement from that interval;
3. all steps pooled from selected orbits.

They have different observational units. The complete enumeration has no
sampling error for its finite population; the sample does; the pooled-step table
weights long orbits more heavily.

### Censoring experiment

Impose a deliberately low step cap. Store an event indicator and observed lower
bound. Compare four summaries: correct unresolved count, deletion of unresolved
rows, replacement by the cap, and a survival-style display. Explain the bias in
the two flawed methods.

### Resampling

Estimate a finite-population or hypothetical sampling median using a naive row
bootstrap and a block/cluster scheme. Define clusters by a declared rule, such
as consecutive residue blocks or shared tails below a threshold. Compare
interval widths and sensitivity to block size.

The interval describes the chosen sampling model. It is not a probability that
the Collatz conjecture is true.

### Regression audit

Fit a line to a log-transformed statistic, then vary the fitting range, remove
record-only selection, examine residuals, and compare a curved alternative.
Report extrapolation as a model forecast beyond the verified data, not as a
completed computation.

## Graph, automaton, and spectral studio

### Three graph constructions

Build:

- a value-cutoff functional graph with an explicit overflow state;
- an inverse-depth graph rooted at the known cycle;
- a lift-weighted residue quotient modulo $2^k$.

For each, state vertices, directed edges, boundary rule, and weights. Compute
adjacency powers and verify selected path counts by enumeration. Compare spectra
under nearby cutoffs.

### Quotient audit

Find two integers congruent modulo $2^k$ whose shortcut images are not
determined modulo $2^k$ without one more bit. Repair the model by storing lifts
or using a transition relation. Test strong lumpability before calling the
projected process Markov.

### Automaton project

Construct a finite automaton recognizing parity prefixes with a certified
descent property. Minimize states by future acceptance behavior. Prove the
bounded language recognized by the automaton. Do not infer that the full
convergence set is regular or that finite minimizations must stabilize.

### Spectral status

Interpret a Perron eigenvalue or gap only for the declared finite matrix and
norm. Explain why averaged path growth cannot by itself control every individual
infinite orbit.

## Distributed proof-certificate studio

### Producer

Partition $[L,U)$ into deterministic half-open shards. For every start, emit a
descent word or replay checkpoint. Use arbitrary precision or a pre-multiplication
overflow guard with logged fallback.

### Manifest

Verify

$$
L_0=L,\quad U_i=L_{i+1},\quad U_{m-1}=U.
$$

Store stable shard IDs, counts, hashes, producer version, and retry history.
Create a Merkle root for the ordered records. Explain that the root commits to
bytes but does not prove the arithmetic inside them.

### Checker

Write a separate, small checker using the reference map and unbounded integers.
It must reject:

- a wrong transition;
- false descent;
- zero or negative target;
- missing or duplicated shard;
- altered endpoint;
- stale schema version;
- bad content hash;
- an unlogged overflow fallback.

Run mutation tests and document the rejection invariant. Reimplement one shard
independently rather than sharing the producer's shortcut routine.

### Formal extension

State a refinement theorem connecting a shortcut certificate to repeated
reference steps. A proof assistant or SMT solver can check bounded arithmetic
and parser obligations, but the human specification must still match the
intended Collatz convention.

## Logic and comparative-map studio

### Reduction audit

Read the generalized undecidability statements in Chapter 32 and their primary
sources. Record the family of maps, input encoding, domain, and reachability or
termination question. Draw the reduction chain from a known undecidable problem.

Write three prohibited conclusions:

- the fixed classical conjecture is therefore undecidable;
- the classical sentence is independent of ZFC;
- computational difficulty is proof of unprovability.

Explain the quantifier or category mistake in each.

### Comparative maps

Study $U_{a,1}$ for $a=1,3,5,7$ on a common finite odd range. Compute exact
one-step valuation distributions, median log increments, fractions rising, small
cycles, and unresolved capped orbits.

Prove pointwise descent for $a=1$. Derive modeled mean drift

$$
\delta(a)=\log(a/4).
$$

Show why its sign is not an orbit theorem. Use the cycle closure equation with
$a$ in place of 3 and identify parameter-specific integrality constraints.

### Taxonomy

Classify every comparison by domain, parity conditions, invariant congruences,
known ranking functions, escape regions, computational scope, and logic status.
Change one feature at a time when claiming that an example diagnoses a
particular heuristic.

## Parity-language and information studio

### Exact language producer

Choose one local rule such as avoiding `11`, avoiding `111`, or requiring every
one to be followed by two zeros. Build both a recurrence producer and a small
brute-force checker. Export coefficient vectors by length and odd count, not only
totals. Prove the recurrence from a disjoint final-block decomposition.

Translate every accepted word at a small depth to its unique shortcut residue.
Store affine coefficients and classify the row as count-only, eventual-slope
descent, or fully checked descent including small exceptions. Verify Kraft
weights separately from arithmetic labels.

### Information audit

Under the uniform complete-residue law, compute entropy of the full word, odd
count, and one coarser label. Check the chain rule numerically against exact
binomial probabilities. Then repeat with overlapping windows from one long
declared orbit and explain why the second table is empirical and dependent.

The report must identify the random object, distribution, representation, and
conclusion. It should end with one example where a smaller summary erases an
affine distinction needed by the proposed claim.

## Drift, coupling, and concentration studio

### Rational chain certificate

Construct a finite absorbing Markov chain with rational transition rows. Find a
nonnegative rational potential and a positive drift decrement. Emit a certificate
that a second program checks using only integer fractions. Solve expected hitting
times independently by linear equations and compare them with the drift bounds.

### Coupled finite-memory model

Couple two shift registers using common appended bits. Enumerate all initial
pairs at a small memory length and verify exact coalescence by the memory horizon.
Then count overlapping `11` indicators, reproduce the covariance correction,
and compare a valid colored concentration bound with the invalid independent-
window formula.

Finally, build merge signatures for a finite Collatz table and quantify duplicated
tails. Do not call this a Markov-chain proof about integers. The claim ledger
must contain separate rows for the exact model theorem, finite arithmetic data,
and any proposed transfer.

## Presburger and validated-numerics studio

### Fixed-horizon elimination

For shortcut horizons one through a chosen small $h$, enumerate parity words,
derive affine formulas, reconstruct residues, and output a semilinear description
of exact descent. An independent checker verifies soundness of every row and
completeness of the word cover. Compare runtime growth with direct finite-start
enumeration while keeping start bound and time horizon on separate axes.

Translate one bounded optimization question to integer constraints. Supply one
feasible witness and a checked exclusion of every better objective value. Record
the integer or bit-vector theory and reject any wrapped arithmetic.

### Rational interval producer

Implement the logarithm atanh series with exact rational partial sums and tail
bounds. For selected pairs $(A,r)$, export lower and upper bounds for
$A\log2-r\log3$ by depth. A separate checker recomputes the endpoints and
accepts a sign only when zero is excluded. Cross-check signs with exact powers.

Corrupt one remainder, reverse one endpoint, and round one bound inward. The
checker must reject all mutations. The figure is generated from checked rows but
is not itself a certificate.

## Extended solution clinics

These clinics model complete research arguments. Each starts with an attractive
shortcut, identifies what the shortcut fails to establish, and replaces it with
a statement whose quantifiers and evidence can be checked.

### Clinic 1: derive an exact parity-affine formula

Let

$$
T(n)=
\begin{cases}
n/2,&n\equiv0\pmod 2,\\
(3n+1)/2,&n\equiv1\pmod 2.
\end{cases}
$$

Fix a binary word $\varepsilon_0,\ldots,\varepsilon_{k-1}$, where
$\varepsilon_j=1$ means that the $j$-th input is odd. Prove by induction
that every integer following this word satisfies

$$
T^k(n)=\frac{3^{s_k}n+b_k}{2^k},
\qquad
s_k=\sum_{j=0}^{k-1}\varepsilon_j,
$$

for an integer $b_k$ determined recursively by

$$
b_0=0,
\qquad
b_{j+1}=
\begin{cases}
b_j,&\varepsilon_j=0,\\
3b_j+2^j,&\varepsilon_j=1.
\end{cases}
$$

The induction is purely algebraic. Admissibility is a separate question: does
the proposed word actually occur for the chosen $n$? At each stage the
numerator must have the prescribed parity. Work backward to show that a word of
length $k$ determines exactly one residue class modulo $2^k$. Test this
statement for all words of length three by listing the eight representatives.

Now close a hypothetical $k$-cycle. If $T^k(n)=n$, then

$$
(2^k-3^{s_k})n=b_k.
$$

This identity is necessary only for an *admissible* word and a positive integer
solution. A real solution of the displayed equation is not a cycle. A positive
integer solution is still not a cycle until all intermediate parity conditions
are checked. Your certificate should therefore include the word, $b_k$, the
candidate $n$, every intermediate value, and the final equality.

### Clinic 2: turn finite descent into an induction theorem

Suppose a computation establishes the following bounded statement:

> For every integer $n$ with $2\le n\le B$, some iterate of $n$ is
> strictly smaller than $n$.

Assume the orbit of 1 is the cycle $1,2,1$ under the convention above. Prove
by strong induction that every $n\le B$ reaches 1. The induction hypothesis is
not merely that smaller starts were tested; it is that they reach 1. For the
current $n$, the certificate gives $T^j(n)=m<n$, and the induction
hypothesis applies to $m$.

Next explain why the same finite file does not prove the assertion for
$B+1$. The induction step has no uniform reason that an arbitrary larger
integer reaches the verified range. To extend the theorem indefinitely one
would need, for example, a covering set of residue classes together with a
symbolic descent proof valid for every representative of each class. Checking
one small representative per class is insufficient because affine iterates can
change order when the class parameter grows.

Design a checker that receives records

$$
(n,j,m,h),
$$

where $m=T^j(n)<n$ and $h$ authenticates the encoded orbit segment. The
checker recomputes the segment with arbitrary-precision integers; it does not
trust stored endpoints. It also verifies that records cover every integer from
2 through $B$ exactly once. State the resulting theorem with the literal
bound, map convention, software version, and certificate hash. That statement
is strong and reproducible without pretending to be the global conjecture.

### Clinic 3: separate a random model from arithmetic transfer

For the accelerated odd map

$$
U(n)=\frac{3n+1}{2^{\nu_2(3n+1)}},
$$

count odd residues modulo $2^{r+1}$ to prove

$$
\Pr\!\left(\nu_2(3n+1)=r\right)=2^{-r},
\qquad r\ge1,
$$

when $n$ is uniform over compatible odd residue classes. Hence the exact
one-step mean of the modeled logarithmic increment is

$$
\sum_{r\ge1}2^{-r}(\log3-r\log2)=\log(3/4)<0.
$$

Circle the words *one-step* and *modeled*. Along one deterministic orbit the
successive valuations are functions of the current residue, not newly sampled
independent variables. A negative marginal mean therefore supplies a heuristic
mechanism, not a proof of convergence.

Build two experiments with the same geometric marginal distribution. In the
first, sample independent valuations. In the second, repeat each sampled value
in blocks of increasing length. The one-step histograms agree, but the partial
sums have very different dependence and excursion behavior. Then compare both
with exact Collatz data using conditional tables

$$
\Pr(r_{j+1}=b\mid r_j=a)
$$

and run-length statistics. Even agreement in those low-order summaries would
not establish independence. Your final paragraph must name a missing transfer
theorem—some rigorous control connecting the stochastic process to all
arithmetic trajectories—rather than saying only that "more data are needed."

### Clinic 4: audit a theorem-status claim

Consider four sentences:

1. a finite computation verified all starts through a stated bound;
2. a random model has negative drift;
3. a generalized family of piecewise-affine maps has an undecidable reachability
   problem;
4. every positive integer reaches 1 for the classical map.

Classify the first as a finite theorem backed by a certificate, the second as a
theorem *inside a declared model*, the third as a theorem about a larger encoded
family, and the fourth as the open Collatz conjecture. None entails the next.

For any literature claim, fill a status card containing the exact map, domain,
quantifiers, convention, result type, publication source, proof or computation
boundary, date, and known later correction. Rewrite phrases such as "Collatz is
unprovable" or "verified by computers" until the object and scope are explicit.
If the primary source is inaccessible, label the paraphrase provisional rather
than laundering a secondary summary into a theorem.

Finish by drawing an implication graph. Use a solid arrow only when you can
write a proof. Use a dotted arrow for a heuristic relationship and annotate the
missing lemma. An empty implication graph can be the correct result: related
ideas need not yield formal consequences for one another.

### Clinic 5: what a finite graph spectrum can and cannot say

Choose a cutoff $B$ and form three explicitly different finite objects. The
forward functional graph keeps vertices $1,\ldots,B$ and the edge
$n\to T(n)$ only when its endpoint remains inside. A capped graph sends every
escaping edge to a new boundary vertex. A residue graph modulo $2^k$ instead
identifies integers with the same residue and must specify how the piecewise
formula is interpreted on classes. These are not interchangeable
approximations of one canonical finite Collatz graph.

For each construction, write its adjacency matrix $A$. If you form a Markov
matrix, declare how rows with missing or boundary edges are normalized. Compute
the eigenvalues for several cutoffs and compare them after changing only the
boundary rule. A visually stable leading eigenvalue is empirical stability, not
a theorem about an infinite operator.

Use two exact matrix checks. First,

$$
\operatorname{tr}(A^j)
$$

counts closed directed walks of length $j$ when multiplicities follow the
adjacency convention. Verify this by expanding a diagonal entry of $A^j$, and
compare the count with an independent cycle enumeration. Second, the row sums
of a row-stochastic matrix must equal 1; a failed sum exposes a boundary or
normalization bug before spectral interpretation begins.

Now deliberately alter the cutoff by one vertex. Record which edges, strongly
connected components, and eigenvalues change. The experiment demonstrates why
finite spectra can diagnose a *specified truncation* while remaining silent
about convergence of every positive orbit. To infer an infinite-system claim,
one would need a defined limiting space and operator, a proved relation between
finite and infinite spectra, and a theorem translating that spectral property
into orbit behavior.

Submit the vertex rule, edge rule, boundary treatment, matrix orientation,
software precision, and exact small-case matrix. Reproduce the smallest case by
hand. The correct caption says "spectrum of the capped graph at cutoff $B$,"
not "the Collatz spectrum." This small grammatical distinction carries the
entire mathematical scope of the figure.

## Portfolio rubric, replication, and selected support

Score 0–4 in each dimension:

| dimension | full-credit evidence |
|:---|:---|
| specification | map, domain, convention, and quantifiers are exact |
| arithmetic | integer operations, overflow, and invariants are checked |
| coverage | intervals or residue classes are disjoint and complete |
| status | theorem, finite computation, model, and conjecture never merge |
| dependence | sampling unit, censoring, and shared tails are addressed |
| certificate | a small checker validates the essential finite claim |
| sources | theorem and computation records are dated and versioned |
| communication | limitations are visible in abstract, captions, and conclusion |

### Replication exchange

Give another reader only the specification, schema, and certificate—not the
producer's internal code. Ask them to:

1. hand-check a tiny domain;
2. validate coverage;
3. implement one independent transition/checker path;
4. reproduce one table and figure;
5. corrupt one record and show rejection;
6. audit one theorem paraphrase against its source;
7. list the trusted computing base;
8. classify the outcome as reproduced, replicated, partially replicated, or not
   replicated.

### Selected checks

- Accelerated conventions preserve the convergence question but change time
  statistics.
- One representative never proves a uniform residue-class descent statement.
- Cycle exclusion does not exclude an aperiodic unbounded orbit.
- Exact one-step geometric valuations do not prove temporal independence.
- Capped unresolved observations are censored, not equal to the cap.
- A finite graph spectrum belongs to its truncation and boundary rule.
- Hashes authenticate bytes; mathematical checkers validate claims.
- Generalized-family undecidability does not settle one fixed classical
  sentence.

A successful studio may end with a counterexample to its own initial heuristic.
That is progress: the claim ledger has become sharper, and the next proof
obligation is easier for another researcher to see.

<!-- uni-34-collatz-window-studio:start -->
## Worked project: certify a stopped Collatz window {#sec-collatz-studio-window-project}

The graph studio and Clinic 5 above ask for a specified finite matrix. Here is
one complete project: exact input, hand-derived data, proof, producer,
independent arithmetic checker, deliberately invalid certificates, and a
different capstone. It uses the [row-adjacency convention](29-graph-spectral.md#sec-graph-spectral)
and [pointwise descent language](19-discrete-dynamics.md#sec-discrete-dynamics).
Neither a new cycle classification nor a spectral theorem about the infinite
Collatz map is assumed.

### Specify the map, clock, and two stopping events {#sec-collatz-window-specification}

Use the book's **shortcut** map, denoted here by $S$:

$$
S(n)=
\begin{cases}
n/2,&n\text{ even},\\
(3n+1)/2,&n\text{ odd},
\end{cases}
\qquad n\in\mathbb N_{>0}.
$$

One unit of time means one application of $S$, not one application of the
unaccelerated map $C$. An odd shortcut consists of two ordinary steps.
We stop on the **first** arrival at 1, rather than continuing its known
$1\leftrightarrow2$ shortcut cycle.

For an exclusive cutoff $N\ge3$, retain the half-open window $[1,N)$ and
transient states

$$
D_N=\{2,3,\ldots,N-1\}.
$$

When a shortcut image is 1, record success. When it is at least $N$, record
overflow $\Omega$ and stop: the certificate does not follow that trajectory
after this exit. Otherwise keep the exact image in $D_N$. The symbol $\Omega$
is a terminal label, not a positive integer or a proposed Collatz value.

The cutoff tests **shortcut endpoints**. It does not bound the intermediate
ordinary height: $5\stackrel C\longmapsto16\stackrel C\longmapsto8$ stays inside
$[1,9)$ at its shortcut endpoints but exceeds that window during the ordinary
odd step. Likewise $3\stackrel C\longmapsto10\stackrel C\longmapsto5$.
Do not relabel the certificate as an ordinary-height bound.

For a start $n\in D_N$, let $\tau_N(n)$ be the first positive shortcut time
at which the trajectory reaches 1 or leaves $[1,N)$. It is allowed to be
infinite until a proof excludes that possibility. Our finite claim will be
proved for the displayed window, not assumed for arbitrary cutoffs.

### Exact main data: the window $[1,9)$ {#sec-collatz-window-main-data}

Take $N=9$, with the fixed row and column order $(2,3,4,5,6,7,8)$.

| Start $n$ | Exact $S(n)$ | Next recorded state | $\tau_9(n)$ | First terminal |
|---:|---:|:---|---:|:---|
| 2 | 1 | success | 1 | 1 |
| 3 | 5 | 5 | 5 | 1 |
| 4 | 2 | 2 | 2 | 1 |
| 5 | 8 | 8 | 4 | 1 |
| 6 | 3 | 3 | 6 | 1 |
| 7 | 11 | overflow | 1 | $\Omega$ |
| 8 | 4 | 4 | 3 | 1 |

For example, the retained chain
$6,3,5,8,4,2,1$ has six shortcut transitions. The row for 7 records its
actual image 11 before classifying it as overflow; it does not substitute a
small surrogate for 11.

Define the **killed row matrix** by

$$
(Q_N)_{nm}=
\begin{cases}
1,&S(n)=m\in D_N,\\
0,&\text{otherwise}.
\end{cases}
$$

Thus rows act on column observables by pullback, $(Q_Nx)_n=x_{S(n)}$
when the successor remains in $D_N$, and zero on an exit row.
For $N=9$ the exact rational matrix (its entries happen to be integers) is

$$
Q_9=
\begin{pmatrix}
0&0&0&0&0&0&0\\
0&0&0&1&0&0&0\\
1&0&0&0&0&0&0\\
0&0&0&0&0&0&1\\
0&1&0&0&0&0&0\\
0&0&0&0&0&0&0\\
0&0&1&0&0&0&0
\end{pmatrix}.
$$

Write $\mathbf1$ for the all-one column on $D_9$. The positive integer column

$$
h=(1,5,2,4,6,1,3)^T
$$

satisfies the exact certificate equations

$$
Q_9h=h-\mathbf1.
\tag{G.1}
$$

This equality is checked row by row. The two zero rows require $h_2=h_7=1$;
the other rows require $h_3=1+h_5$, $h_4=1+h_2$, $h_5=1+h_8$,
$h_6=1+h_3$, and $h_8=1+h_4$.

### Prove the finite certificate before interpreting its spectrum {#sec-collatz-window-finite-proof}

More generally, fix a finite $D_N$ and the specified true shortcut transitions.
Suppose a positive integer $h_n$ is supplied for every $n\in D_N$, with
$h_n=1$ on exit rows and $h_n=1+h_{S(n)}$ on retained rows.
Then

$$
\tau_N(n)=h_n\quad\text{for every }n\in D_N.
$$

**Proof.** If $h_n=1$, its row cannot have a retained successor, because that
would give $1=1+h_{S(n)}$ with $h_{S(n)}>0$. Thus the next step exits.
If $h_n>1$, its row cannot be an exit row; its retained successor has height
$h_n-1$. Induction on the positive integer $h_n$ proves that exactly $h_n$
steps lead to the first terminal, with no earlier terminal. This uses every
declared row, not a sampled list of trajectories. $\square$

In the main data $\max h=6$, so every retained walk has length at most five.
By induction on $k$, $(Q_9^k)_{nm}$ is one precisely when the unique trajectory
from $n$ survives for $k$ transitions inside $D_9$ and ends at $m$.
Consequently

$$
Q_9^6=0,\qquad (Q_9^5)_{6,2}=1.
$$

The nilpotence index is exactly six. Every eigenvalue $\lambda$ is zero:
if $Q_9x=\lambda x$ with $x\ne0$, then $0=Q_9^6x=\lambda^6x$.
Thus $\rho(Q_9)=0$. This conclusion belongs to the killed seven-state
matrix, not an infinite Collatz operator.

Since $Q_9^6=0$,

$$
(I-Q_9)^{-1}=I+Q_9+Q_9^2+\cdots+Q_9^5,
$$

as multiplication and telescoping verify. Equation (G.1) therefore determines
$h$ uniquely. No numerical eigenvalue tolerance or guessed diagonalization is
needed.

### A named norm and an exactly specified initial population {#sec-collatz-window-norm-and-population}

For column observables on **transient states only**, put

$$
\|x\|_h=\max_{n\in D_9}\frac{|x_n|}{h_n}.
$$

All its weights are positive. Nonnegativity and (G.1) give

$$
\begin{aligned}
|(Q_9x)_n|
&\le\sum_m (Q_9)_{nm}h_m\|x\|_h\\
&=(h_n-1)\|x\|_h.
\end{aligned}
$$

Hence the induced operator norm is at most
$\max_n(h_n-1)/h_n=5/6$. Taking $x=h$ attains that maximum, so

$$
\|Q_9\|_h=5/6.
$$

The ordinary induced infinity norm is instead the maximum row sum, namely 1.
Neither 1 nor $5/6$ is its spectral radius, which is zero. A matrix can have
a non-strict ordinary one-step norm bound and still vanish after finitely many
steps.

Probability laws use the same declared orientation. A **row** law evolves as
$p_{k+1}=p_kQ_9$ until mass exits; a **column** law evolves by $Q_9^T$.
For a uniform initial start on $D_9$ (seven starts, excluding 1), the exact
survival counts $\#\{n:\tau_9(n)>k\}$ are

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| Surviving starts | 7 | 5 | 4 | 3 | 2 | 1 | 0 |

Because each integer $\tau$ equals $\sum_{k=0}^{5}1_{\{\tau>k\}}$ here,

$$
\mathbb E[\tau_9]
=\frac{7+5+4+3+2+1}{7}
=\frac{22}{7}.
$$

The probability of success **before overflow** is $6/7$, and overflow has
probability $1/7$. These are finite input-population proportions, not a
randomness assumption along an orbit or a probability that Collatz is true.
Including start 1 would add an immediate success with time zero and change
both the denominator and the mean.

If desired, retain the terminal labels by using block order $(D_9,1,\Omega)$:

$$
P_9=
\begin{pmatrix}
Q_9&b_1&b_\Omega\\
0&1&0\\
0&0&1
\end{pmatrix},
\qquad b_1=e_2,\quad b_\Omega=e_7,
$$

where $e_n$ denotes the unit column at the named transient state $n$.
This full matrix is row-stochastic. Its two absorbing terminal rows give
eigenvalue 1, and its characteristic polynomial is
$\lambda^7(\lambda-1)^2$ by block triangularity. It is a **stopped observation
model**: making 1 absorbing does not assert $S(1)=1$. The positive-weight norm
above was defined on $D_9$ and is not a strict contraction claim for $P_9$.
An overflow label is unresolved arithmetic, not a divergent orbit.

### An exact producer and a separate arithmetic checker {#sec-collatz-window-code}

The following standalone standard-library listing regenerates the main
certificate. Its small input limit is a resource policy, not a mathematical
claim about larger starts. Python integers are unbounded; no fixed-width wrap
or floating-point arithmetic is used. A certificate specifies its schema,
exclusive cutoff, ordered states, exact images, row matrix and exit times.
Only this canonical ascending state order is accepted by this schema.
A finite deterministic trajectory that exits cannot repeat a transient state,
so a valid finite exit time is at most $|D_N|$; the checker enforces that bound.

The producer follows shortcut trajectories and refuses a cycle inside the
window. The checker does **not** call the producer's shortcut routine: it
reconstructs each image through one ordinary $C$ step for an even input and
two for an odd input, then checks coverage, matrix orientation and every
potential equation. The displayed hand calculation supplies the expected
values; a successful run checks this finite certificate rather than grading
a mathematical explanation.

```python
from copy import deepcopy
from fractions import Fraction

FIELDS = {
    "schemaVersion", "cutoffExclusive", "states",
    "images", "rowMatrix", "exitSteps",
}

def require_cutoff(value: object) -> int:
    if type(value) is not int or not 3 <= value <= 64:
        raise ValueError("this finite example supports exclusive cutoffs 3..64")
    return value

def producer_shortcut(integer_value: int) -> int:
    return integer_value // 2 if integer_value % 2 == 0 else (3 * integer_value + 1) // 2

def make_certificate(cutoff: int) -> dict[str, object]:
    require_cutoff(cutoff)
    states = list(range(2, cutoff))
    images = [[n, producer_shortcut(n)] for n in states]
    steps = []
    for start in states:
        current, seen, count = start, set(), 0
        while 2 <= current < cutoff:
            if current in seen:
                raise ValueError("producer found an interior cycle")
            seen.add(current)
            current = producer_shortcut(current)
            count += 1
        steps.append([start, count])
    matrix = [
        [int(image == target) for target in states]
        for _, image in images
    ]
    return {
        "schemaVersion": 1, "cutoffExclusive": cutoff, "states": states,
        "images": images, "rowMatrix": matrix, "exitSteps": steps,
    }

def checker_ordinary(integer_value: object) -> int:
    if type(integer_value) is not int or integer_value < 1:
        raise ValueError("ordinary input must be a positive integer")
    return integer_value // 2 if integer_value % 2 == 0 else 3 * integer_value + 1

def verify_certificate(certificate: object, expected_cutoff: object) -> tuple[list[int], list[list[int]], dict[int, int], dict[int, str]]:
    cutoff = require_cutoff(expected_cutoff)
    if type(certificate) is not dict or set(certificate) != FIELDS:
        raise ValueError("wrong certificate fields")
    if type(certificate["schemaVersion"]) is not int:
        raise ValueError("schema must be an integer")
    if certificate["schemaVersion"] != 1:
        raise ValueError("unsupported schema")
    if type(certificate["cutoffExclusive"]) is not int:
        raise ValueError("cutoff must be an integer")
    if certificate["cutoffExclusive"] != cutoff:
        raise ValueError("certificate describes a different window")
    states = list(range(2, cutoff))
    supplied = certificate["states"]
    if (type(supplied) is not list
            or any(type(n) is not int for n in supplied)
            or supplied != states):
        raise ValueError("incomplete or reordered state coverage")

    def read_pairs(field: str) -> dict[int, int]:
        rows = certificate[field]
        if type(rows) is not list or len(rows) != len(states):
            raise ValueError("missing or extra state row")
        result = {}
        for expected, row in zip(states, rows):
            if (type(row) is not list or len(row) != 2
                    or any(type(value) is not int for value in row)
                    or row[0] != expected):
                raise ValueError("duplicate, missing or mislabelled state")
            result[row[0]] = row[1]
        return result

    images = read_pairs("images")
    heights = read_pairs("exitSteps")
    reference = {}
    for n in states:
        image = checker_ordinary(n)
        if n % 2 == 1:
            image = checker_ordinary(image)
        reference[n] = image
        if images[n] != image:
            raise ValueError("wrong map convention or exact image")
    matrix = certificate["rowMatrix"]
    size = len(states)
    if (type(matrix) is not list or len(matrix) != size
            or any(type(row) is not list or len(row) != size
                   or any(type(value) is not int or value not in (0, 1)
                          for value in row)
                   for row in matrix)):
        raise ValueError("invalid zero-one matrix shape")
    expected_matrix = [
        [int(reference[n] == target) for target in states] for n in states
    ]
    if matrix != expected_matrix:
        raise ValueError("wrong row orientation or transition matrix")
    if any(not 1 <= heights[n] <= size for n in states):
        raise ValueError("exit times must be positive and finitely bounded")
    for n in states:
        image = reference[n]
        expected = 1 if image == 1 or image >= cutoff else 1 + heights[image]
        if heights[n] != expected:
            raise ValueError("exit-time potential equation failed")

    terminals = {}
    for start in states:
        current = start
        for _ in range(heights[start]):
            if current not in reference:
                raise ValueError("claimed exit time passed an earlier terminal")
            current = reference[current]
        if current in reference:
            raise ValueError("claimed exit did not leave the transient set")
        terminals[start] = "one" if current == 1 else "overflow"
    return states, matrix, heights, terminals

def run_case(cutoff: int) -> dict[str, object]:
    certificate = make_certificate(cutoff)
    states, matrix, heights, terminals = verify_certificate(certificate, cutoff)
    size = len(states)
    maximum = max(heights.values())
    survival = [
        sum(heights[n] > k for n in states) for k in range(maximum + 1)
    ]
    mean = Fraction(sum(heights.values()), size)
    success = Fraction(sum(terminals[n] == "one" for n in states), size)
    contraction = max(Fraction(heights[n] - 1, heights[n]) for n in states)
    print("N =", cutoff, "states =", states)
    print("images =", certificate["images"])
    print("row matrix =", matrix)
    print("exit steps =", certificate["exitSteps"])
    print("survival counts =", survival)
    print("mean =", mean, "success before overflow =", success,
          "overflow =", 1 - success, "weighted bound =", contraction)
    return certificate

CUTOFF = 9  # use 12 for the changed capstone, after the paper attempt
main = run_case(CUTOFF)
positions = {n: index for index, n in enumerate(main["states"])}
mutants = {}

bad = deepcopy(main)
bad["images"][positions[3]][1] = 10  # C(3), not the shortcut S(3)
mutants["wrong map convention"] = bad
bad = deepcopy(main)
bad["images"].pop()
mutants["missing endpoint row"] = bad
bad = deepcopy(main)
bad["exitSteps"][positions[3]][1] = 4
mutants["wrong lifetime"] = bad
bad = deepcopy(main)
bad["rowMatrix"] = [list(row) for row in zip(*bad["rowMatrix"])]
mutants["transposed matrix"] = bad
bad = deepcopy(main)
overflow_start = next(n for n, image in main["images"] if image >= CUTOFF)
bad["images"][positions[overflow_start]][1] = 1  # falsely resolve an exit
mutants["overflow relabelled success"] = bad
bad = deepcopy(main)
bad["cutoffExclusive"] = CUTOFF + 1
mutants["different declared cutoff"] = bad
bad = deepcopy(main)
bad["schemaVersion"] = 0
mutants["stale schema"] = bad

for name, bad in mutants.items():
    try:
        verify_certificate(bad, CUTOFF)
    except ValueError:
        print("rejected:", name)
    else:
        raise ArithmeticError("checker accepted the invalid case: " + name)
```

For the main call the exact summary is $h=(1,5,2,4,6,1,3)$,
survival counts $(7,5,4,3,2,1,0)$, mean $22/7$, success $6/7$,
overflow $1/7$ and weighted bound $5/6$. Each mutation fails a named
arithmetic, coverage, schema or matrix obligation. A hash of this certificate
would identify bytes; its finite mathematical force comes from the checked
equations and the proof above.

### Different capstone: a larger window and an artificial return {#sec-collatz-window-capstone}

Work first on paper, before changing the program or opening the
[complete key](c-research-solutions.md#sec-collatz-window-key).
Use the same shortcut map and stopping policy, but the window $[1,12)$.

1. List every exact image for $D_{12}=(2,3,\ldots,11)$, and form its killed
   **row** matrix $Q_{12}$. Keep actual overflow integers in the certificate.
   Find the complete exit-time column and classify each first terminal.
2. Prove its nilpotence index, compute the uniform first-exit mean on all ten
   starts, and compare with the mean on the common seven starts $2,\ldots,8$.
   Explain why changing the population matters when comparing means.
3. Compute the ordinary induced infinity and 1-norms, and the weighted
   observable norm from your exit-time column. With $e_5$ a **column**
   probability concentrated at state 5, compare $Q_{12}^Te_5$ with the
   mistaken update $Q_{12}e_5$ and their total masses.
4. In a deliberately different finite model, reset every image at least 12
   to **7**, while still stopping at 1. Call the killed row matrix of this
   reset model $R_{12}$. Give the exact changed edges, a cycle and a spectral
   radius certificate. Show why no positive finite-exit potential or strict
   positive-weight contraction of the preceding kind can certify this model.
   Under the uniform ten-start law, decide whether the expected time to 1
   is finite.
5. State exactly why the reset cycle does not exhibit a positive Collatz
   cycle. Identify an ordinary-height claim also contradicted by the main
   example. Reproduce the true-window certificate by changing `CUTOFF = 9` to
   `CUTOFF = 12` in the standalone listing; its seven mutations use the
   selected window and named states. Predict which checker conditions reject them.

This capstone changes the finite domain, introduces a genuine two-predecessor
column, and changes the boundary dynamics. It is not merely the old table with
new names. The key and code are public: an attempt made after consulting them
is supported practice or reconstruction, not a protected unseen assessment.
Record which help and earlier outputs were used.

### Project-specific rubric and claim ledger {#sec-collatz-window-rubric}

Use the studio's 0–4 scale for each row; four means that the listed evidence
is complete. A descriptive self-review score is not qualified human marking.

| Dimension | Evidence for full credit |
|:---|:---|
| Model | Declares $S$, shortcut time, half-open window, first-1 target and overflow; distinguishes ordinary intermediate height |
| Data | Supplies every named state, actual image, ordered row matrix and exact integer lifetime |
| Finite proof | Checks the potential equations and proves exact first exit and the nilpotence index |
| Population | Uses the stated uniform start set and separates success-before-overflow from eventual arithmetic convergence |
| Orientation and norm | Distinguishes row laws, column laws, column observables and the domain of each named norm |
| Changed boundary | Identifies both fake reset edges, the closed cycle and the obstruction to a finite-exit certificate |
| Independent check | Reconstructs arithmetic independently of the producer and rejects the specified mutations |
| Claim status | States finite scope, public help exposure and the missing global transfer; reports reproducibility honestly |

The completed finite claim is that all seven starts in $D_9$ reach a terminal
in the certified number of shortcut steps, with the displayed split between
success and overflow. It is **not** that every positive integer reaches 1,
that an overflow diverges, that all ordinary intermediates stay below the
cutoff, or that a finite norm controls an unspecified infinite operator.
No extension to arbitrary cutoffs or a global Collatz Lyapunov function is
supplied by this project.
<!-- uni-34-collatz-window-studio:end -->
