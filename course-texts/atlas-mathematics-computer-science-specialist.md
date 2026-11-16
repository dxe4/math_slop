
# Semantics, Cryptographic Information, and Verified Systems

<!-- euler-course-route -->

## Current course route

This is an Outline seminar in a selected theme. Use its [course page](#/courses/atlas-mathematics-computer-science-specialist) for the preparation courses, then attempt the mathematical investigations below. A general graduate chapter syllabus has not yet been assigned.

Preparation courses: [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced) · [Automata, computability and complexity](#/courses/course-automata-complexity).

The earlier mathematical explanations, proofs, assignments and complete solutions remain below with their original task identities. Their first-attempt, comparison and correction requirements still apply when you choose that earlier work. Existing notes and study marks keep their original scope.

A distribution-preserving implementation can preserve the wrong distribution. A
queue can refine its specification while its caller reuses a secret. An entropy
calculation can be correct while its independence hypothesis is false. This
specialist course develops the mathematical theorems needed to locate those
failures, then makes their finite implementations and counterexamples public.

The scope is semantics, theoretical computer science, cryptographic and
information research, and verified systems. The research progression here is
specific: adequacy and space-bounded reachability; local reasoning and data
refinement; computational hybrids and information-theoretic extraction;
information inequalities and a complete binary-symmetric-channel coding
theorem. These are connected required strands, with changed and return work.
They do not constitute every graduate branch of computer science. The native
books remain working editions. study time depends on the selected reading, attempts and corrections; no credit,
observed completion time, security certification or professional qualification
is implied.

## Preparation and ordered readiness repairs

First complete [Verified Computation, Randomness, and Codes](#/courses/atlas-mathematics-computer-science-advanced),
including its COMP-D1–D12 diagnostics, exact source assignments and COMP-P/C/R.
Its typing, Hoare, finite-law and code work is prerequisite work, not reassigned
under a new name. Bring basic dependency-free JavaScript, recursive functions,
arrays, JSON and Node execution. Software is required here; hand tables support
comparison but do not replace implementing and running the selected projects.

Attempt the following repairs in order, before their later strand. Each answer
states the criterion for proceeding; a confident checkmark alone is insufficient.

1. **CSG-D1, induction and assertions.** For $while\ x>0\ do\ x:=x-1$ over
   integer states, distinguish partial from total correctness on $x\ge0$.
   **Model:** invariant $x\ge0$ and decreasing natural variant $x$ give exit
   $x=0$; the assignment body terminates. Partial correctness alone does not
   supply that last premise. If missing, redo COMP-D8–D10 and the formal
   reference diagnostic **C1–C3, F1–F3**, with their adjacent Answers, then
   its [operational semantics](../books/formal-computation-proof-reference/small-step-and-big-step-semantics.md)
   sections 1–5 before the adequacy strand.
2. **CSG-D2, ordered limits.** In the flat domain $\mathbb Z_\bot$, can a
   chain contain first 2 and later 3? What does its lub mean?
   **Model:** no; distinct integers are incomparable. A chain either remains
   bottom or eventually becomes one fixed integer; its lub is respectively
   bottom or that integer. Repair with the denotational chapter sections 2–4
   and Exercises 1–5 below. Explain why pointwise function lubs follow before
   using a recursive program denotation.
3. **CSG-D3, encodings and space.** A graph has $2^s$ vertices each encoded
   in $s$ bits. Does naming a vertex cost $2^s$ bits?
   **Model:** it costs $s$ bits; explicitly storing the graph is a different
   operation. Repair formal diagnostic **D1–D3, E1–E3** and resource chapter
   sections 1–3, then prove the midpoint recurrence in the theory strand.
4. **CSG-D4, ownership.** Does $0\mapsto0 * 0\mapsto0$ hold on the
   singleton heap $\{0\mapsto0\}$? Does ordinary conjunction hold?
   **Model:** separation fails because two disjoint singleton domains cannot
   both contain 0; ordinary conjunction holds. Repair separation chapter
   sections 1–3 and Exercises 1–5. Before coding, reproduce the empty-heap and
   disjoint-two-cell examples without software.
5. **CSG-D5, finite laws.** Let $X$ be uniform on $\{0,1,2,3\}$ and let
   $Z=\lfloor X/2\rfloor$. Compute $\max_xP(X=x)$ and the conditional
   maximum for either supported $Z$.
   **Model:** $1/4$ unconditionally, $1/2$ conditionally. Min-entropies are
   2 and 1 bits. Repair COMP-D1–D7, then write all four joint rows and all
   eight independent seed/source rows needed for a two-point source with a
   four-point seed. Zero-weight rows contribute zero; conditioning on an
   unsupported event is undefined.
6. **CSG-D6, security quantifiers.** Is $10^{-12}$ negligible as a constant
   function of $\lambda$? May a public extractor seed be the secret PRG seed?
   **Model:** no to both. Taking a sufficiently large polynomial reciprocal
   eventually makes that constant too large. An extractor seed may be public
   because independence, rather than secrecy of that seed, is its premise;
   revealing a PRG seed reveals its pad. Repair cryptography chapter sections
   2–7 and Questions 4, 7, 11–13 before the hybrid proof.
7. **CSG-D7, probability inequalities.** For a sum of $n$ independent
   Bernoulli($p$) variables, find mean and variance and prove the Chebyshev
   bound at deviation $n\delta$.
   **Model:** mean $np$, variance $np(1-p)$ (cross covariances vanish), and
   $P(|S-np|\ge n\delta)\le p(1-p)/(n\delta^2)$, since
   $E(S-np)^2\ge n^2\delta^2P(|S-np|\ge n\delta)$.
   Repair finite expectation/independence using COMP-D2–D5, then reproduce
   this derivation. Marginal flip probabilities do not imply this variance.
8. **CSG-D8, binary algebra and logs.** Using low-bit-first coordinates,
   compute $(1,0)\cdot(1,1)$ in $\mathbb F_2$ and $h_2(1/2)$.
   **Model:** 1 and 1 bit. Repair COMP-D6 and D11–D12, then the information
   chapter sections 1–7. The new capacity proof requires finite entropy and
   elementary finite-sum algebra, not an imported continuous-entropy theory.

The registered formal diagnostic is [Prerequisite Diagnostic and Repair
Routes](#/item/book-formal-computation-proof-reference?section=front%3Aprerequisite-diagnostic-and-repair).
A missing repair blocks its dependent strand, not unrelated reading. Record
which attempted answer exposed the gap, the exact repair and the new derivation.

## Required native selections and complete keys

Read each selected chapter's exposition first; attempt every numbered task
before its complete comparison. Preserve the native source and task IDs.

| Work ID | Exact required source and tasks | Complete public comparison |
| --- | --- | --- |
| CSG-SEM | [Denotational Semantics, Domains, and Fixed Points](../books/formal-computation-proof-reference/denotational-semantics-and-fixed-points.md), sections 1–9 and Exercises 1–12 | Same chapter, **Exercises with complete solutions**, twelve numbered adjacent **Solution** paragraphs |
| CSG-THEORY | [Time, Space, Circuits, and Hierarchy Arguments](#/books/formal-computation-proof-reference), sections 1–10 and Exercises 1–12 | Same chapter, **Exercises with complete solutions**, twelve adjacent Solutions |
| CSG-HEAP | [Separation Logic, Ownership, and Concurrent Interference](../books/formal-computation-proof-reference/separation-logic-and-concurrency.md), sections 1–9, Exercises 1–12 and the complete **Project: owned-heap checker** | Twelve adjacent Solutions; this course's **Ownership and refinement proofs**, **Bounded executable reference** and **Complete public investigation models** provide the complete selected project implementation, finite counts, mutant and general correctness proof |
| CSG-QUEUE | [Refinement, Trusted Bases, Counterexamples, and Synthesis Capstones](../books/formal-computation-proof-reference/refinement-trust-and-counterexample-capstones.md), sections 1–8, Exercises 1–12 and complete **Project: verified queue refinement pipeline** | Twelve adjacent Solutions; the same three course sections give all operation cases, labelled two-client enumeration, executable reference and shortest mutant witness |
| CSG-CRYPTO | [Cryptographic Definitions, Games, and Adversaries](#/books/algorithms-computation-proof-desk), sections 1–12 and Practice Questions 1–16 | Same chapter, **Practice with fully explained solutions**, all sixteen numbered complete answers |
| CSG-PROTOCOL | [Cryptography: Definitions Before Devices](../articles/cryptography-definitions-protocols.md), sections 1–12 and Exercises 1–8 | Same writing, **Solutions**, answers 1–8, including the reused-signature-nonce equations |
| CSG-INFO | [Information, Compression, Noise, and Coding](../books/algorithms-computation-proof-desk/information-compression-coding.md), sections 1–10 and Practice Questions 1–16 | Same chapter, **Practice with fully explained solutions**, all sixteen numbered complete answers |

This assigns 88 native numbered tasks, two complete native implementation
projects, the new proof work below and all CSG-P/C/R deliverables. The separate
cryptography **Audit exercise: repair an overclaim**, the information chapter's
**Project: finite coding laboratory**, the optional queue capstone variants and
full unrelated book projects are additional work, not silently assigned here.
The existing complete native keys remain their own feedback; the new course
extends them with the general proofs and complete cross-strand investigations
that follow. No source key is replaced by an answer index or a broad book link.

## Semantics: a complete adequacy argument

Fix a finite set of variables, integer stores, total integer arithmetic and
Boolean expressions, and deterministic commands
$skip$, $x:=e$, $c;d$, $if\ b\ then\ c\ else\ d$ and
$while\ b\ do\ c$. There is no heap access, division error, input primitive,
concurrency or machine overflow in this language. Those require new semantics.
Let $S$ be the stores and $D=S\to S_\bot$, ordered pointwise with a flat
codomain. Pointwise lubs make $D$ a pointed omega-CPO; a defined value in a
chain must appear at a finite stage because the codomain is flat.

Skip is identity; assignment updates one variable; sequencing uses strict
composition, propagating bottom. A conditional chooses its branch using the
total guard. For loop body denotation $C$, define
$F(f)(s)=s$ if the guard is false, and $f(C(s))$ if true, propagating bottom.
For a chain of candidate functions, $F$ preserves its lub pointwise: in the
false case both sides return $s$; with a divergent body both are bottom; with
a defined body value $t$, both inspect the same coordinate $f(t)$ and the
pointwise lub commutes. Thus $F$ is continuous and its least fixed point is
$\bigsqcup_nF^n(\bot)$ by the native proved Kleene theorem.

Use the usual finite big-step relation $\langle c,s\rangle\Downarrow t$:
skip returns $s$; assignment returns its updated store; sequence composes two
finite derivations; if uses its guard-selected branch; a false while returns
$s$; a true while first derives the body result and then the remaining loop.
These clauses define all terminating evaluations. We now prove, rather than
assume, $[[c]]s=t$ iff $\langle c,s\rangle\Downarrow t$.

**Soundness.** Induct on the finite evaluation derivation. Skip/assignment are
their denotational equations. Sequence uses the two induction hypotheses and
strict composition; conditional uses the selected hypothesis and total guard.
For a false loop the fixed-point equation returns $s$. For a true loop the
body hypothesis gives $C(s)=u$, the recursive loop hypothesis gives
$[[while\ b\ do\ c]]u=t$, and the fixed-point equation gives the claimed
result at $s$. Every premise is a strictly smaller derivation.

**Completeness.** Induct on command syntax. Skip/assignment are immediate;
a defined sequence has defined intermediate value and final value, so the
syntax hypotheses give the two derivations. A defined conditional uses its
selected branch's hypothesis. For a while-loop, a defined lub value appears
in $F^n(\bot)(s)$ for some finite $n$. Prove by induction on $n$ that any
such defined approximation yields a finite loop derivation. The $n=0$ case
has no defined value. For $n+1$, a false guard gives the false-loop rule; a
true guard forces a defined body result $u$ and defined
$F^n(\bot)(u)$. The syntax hypothesis for the strict subcommand body gives
its finite evaluation; the $n$ hypothesis gives the remaining loop
 evaluation. Apply the true-loop rule. Nested loops are covered by the syntax
hypothesis on the body, so no circular assumption of adequacy was used.

In the corresponding deterministic small-step machine, every nonfinal command
has its next step: total expressions exclude stuck errors. Therefore absence
of a finite result means an infinite computation, under this language's
progress property. It would not mean divergence if terminating errors or stuck
states were omitted from a larger language. Adequacy concerns results of whole
commands; no full-abstraction theorem is asserted.

**Required proof work CSG-A1.** Reconstruct the two inductions; then show why
fixed-point induction needs admissibility. Complete model: take
$D=\{0,1,2,\ldots,\infty\}$ with its usual order and bottom 0,
$F(n)=n+1$, $F(\infty)=\infty$. This is continuous, and its approximants have
lub $\infty$. The property “is finite” holds at bottom and is preserved by
$F$ but fails at the lub. Its failure of closure under chain lubs is precisely
the missing hypothesis. For the countdown loop from CSG-D1, approximation
$n+1$ first covers initial value $n\ge0$; values $x\le0$ already return in
approximation 1. Negative starts therefore terminate unchanged, not at zero.

## Theory: implicit reachability and honest resource claims

Let a directed graph have $N$ vertices encoded by $s$ bits, $N\le2^s$, and an
adjacency predicate computable in $O(s)$ workspace. Vertices are enumerated by
an $s$-bit counter, skipping invalid encodings. Define $R(u,v,0)$ to mean
$u=v$ or one edge $u\to v$. For $k>0$, define
$R(u,v,k)=\bigvee_w(R(u,w,k-1)\land R(w,v,k-1))$.

**Correctness theorem.** $R(u,v,k)$ holds exactly when a path of at most
$2^k$ edges exists. Base $k=0$ allows zero or one edge. For the induction step,
concatenating the two paths gives at most $2^k$ edges. Conversely split a
path after $\min(2^{k-1},\text{its length})$ edges; its two pieces meet the
bounds. Repeated vertices can be deleted from any reachability witness, so
$k=s$ suffices for any reachable pair: a simple path has at most $N-1$ edges.

A deterministic implementation loops through candidates $w$, evaluates the
left call, reuses its returned workspace, then evaluates the right. Each
stack frame retains two endpoints, the candidate and level, $O(s)$ bits;
there are $s+1$ levels. Adjacency and enumeration also use $O(s)$, so total
workspace is $O(s^2)$; the recursion's many branches are not stored together.
Time can grow like $N^{O(s)}$. For a nondeterministic machine whose work bound
$s(n)\ge\log n$ has a standard effective configuration encoding and
space-constructible bound, configurations have $O(s(n))$ bits. Applying this
algorithm to its implicit configuration graph proves the usual
$NSPACE(s)\subseteq DSPACE(s^2)$ form. We state the constructibility/model
conditions rather than treating arbitrary numerical bounds as effective clocks.

**Required proof work CSG-A2.** For graph edges
$0\to1,1\to2,2\to3,3\to3$ on four vertices, compute
$R(0,3,1)$ and $R(0,3,2)$ and give a witnessing midpoint.
**Complete model:** false and true; $w=2$ splits the path into lengths 2 and 1.
Materializing all graph edges has a different space cost from generating one
successor relation. A fixed finite-graph test of the printed code does not
prove this resource theorem. The native hierarchy results retain their own
clocking hypotheses; this proof does not resolve $P$ versus $NP$, nor prove
cryptographic hardness. Nonuniform constant circuits may encode an
undecidable unary length set, as the native Question 10 explains; their
existence does not produce a uniform key-generation or decoding algorithm.

## Ownership and refinement proofs

Heaps are finite partial maps with integer addresses. Assertions in the selected
checker are $emp$, exact singleton $a\mapsto v$, and $P*Q$. Satisfaction
splits the entire supplied heap into disjoint subheaps; no unmentioned cell is
implicitly ignored. The checker enumerates every subset of the heap entries
and its complement at a star. Structural induction proves its correctness:
atomic cases are exactly their definitions; at a star, every enumerated split
is disjoint and exhaustive, and every disjoint decomposition is one of those
subsets; apply the two induction hypotheses. Recursion terminates by decreasing
assertion syntax. Its exponential finite search is deliberate.

For literal-address update $[a]:=v$, precondition owns $a$; no store variable
is modified. On disjoint heaps $h*f$, with $a\in dom(h)$, updating the union
changes precisely the same address/value as updating $h$ and then adjoining
$f$, because $a\notin dom(f)$. Thus
$update(h\uplus f,a,v)=update(h,a,v)\uplus f$. This proves the selected
frame instance for arbitrary finite heaps, beyond the finite enumeration.
Store-variable updates need the native free-variable side condition; allocation,
free, lock invariants and weak-memory rules are not implemented by this
literal-update project.

For a circular queue, invariant is integer capacity $c>0$, array length $c$,
$0\le h<c$ and $0\le z\le c$. Its abstraction is the list
$L_i=array[(h+i)\bmod c]$, $0\le i<z$. Initially $h=z=0$, hence empty.
Enqueue when full preserves state and returns `full`; otherwise position
$(h+z)\bmod c$ is outside the occupied positions, since distinct indices in
a length-at-most-$c$ interval have distinct residues. Writing there preserves
the old list and appends the new item, increments $z$ and preserves the
invariant. Dequeue when empty preserves state and returns `empty`; otherwise
it returns $array[h]=L_0$, changes $h$ to $(h+1)\bmod c$ and decreases $z$.
New item $i$ was old item $i+1$, so the abstraction is the old tail. Unused
slots need not be erased because clients cannot observe them.

Induction on command sequences now proves identical outputs and abstraction
after every finite prefix. The chosen two-client model labels complete method
calls `A+0`, `B+1`, `A-`, `B-`, all serialized as atomic calls under sequential
consistency. The BFS enumerates every word over those four labels through its
stated depth: this is an explicit bounded model of their call interleavings,
allowing either client any of its listed calls. For each word, operation
refinement proves the sequential FIFO specification. This does not prove an
implementation that interleaves instructions inside a method linearizable.

**Required proof work CSG-A3.** Reconstruct the satisfaction and queue
inductions and give a progress counterexample. **Complete model:** inserting
arbitrarily many silent retry steps preserves every queue observation and
finite safety invariant while a pending call never returns. Safety simulation
alone proves neither response liveness, scheduling fairness nor deadlock
freedom. A decreasing natural silent-step rank would rule out an infinite
stuttering suffix; this reference's atomic finite calls do not model that
scheduler.

## Cryptographic research: hybrids and extracted secrecy

First fix a conditional computational theorem. Let
$G:\{0,1\}^{\lambda}\to\{0,1\}^{\ell(\lambda)}$ be a PRG whose output
and uniform bits have distinguishing probability gap at most
$\epsilon(\lambda)$ for the reductions under consideration. Key generation
chooses a secret vector of $q(\lambda)$ independent uniform seeds, with $q$
and $\ell$ polynomial and $q$ fixed for the scheme's permitted lifetime.
Encryption consumes the next unused slot $i$ and returns
$(i,m\oplus G(s_i))$ for an $\ell$-bit message; decryption uses that secret
slot. Exhausting the vector is an error. Seeds are never transmitted. This
is a bounded $q$-use private-key construction, not a reusable one-seed stream
cipher or a claim that a public seed can be secret key material.

In the adaptive left-or-right experiment, a fixed secret bit $b$ selects one
of each submitted equal-length pair, up to $q$ queries. For each fixed $b$,
hybrid $H_{b,j}$ uses uniform pads in slots $1,\ldots,j$ and PRG pads in the
rest. An adjacent distinguisher is a PRG distinguisher: place its challenge
string in the chosen slot, sample all other seeds or uniform pads locally,
answer adaptive earlier queries, and XOR the selected message with the
challenge when that slot is queried. If unused, both simulations coincide.
Later answers are sampled normally. This exactly reproduces both adjacent
views without knowing whether the challenge is uniform. Its time includes
$q$ evaluations and the adversary simulation. Each adjacent probability gap
is bounded by $\epsilon$, so the real view is at most $q\epsilon$ from
$H_{b,q}$ for any efficient final test. All-uniform independent pads make the
complete adaptive view independent of $b$ by induction on queries: each new
ciphertext body is uniform conditional on the prior view and selected pair.
Triangle inequality gives a real $b=0$ versus $b=1$ gap at most $2q\epsilon$,
or guessing-success advantage at most $q\epsilon$. A polynomial times a
negligible function is negligible: for any polynomial $p$, apply negligibility
to $qp$ (absorbing constants). The premise is an assumption about $G$, not a
proof that PRGs exist. A reused slot invalidates the independent-pad game:
$c_1\oplus c_2=m_1\oplus m_2$.

Information-theoretic extraction supplies a different theorem. For finite
$X$ define $H_\infty(X)=-\log_2\max_xP(X=x)$ and collision probability
$Col(X)=\sum_xp_x^2$. A universal hash family $h_a:\mathcal X\to\{0,1\}^m$
has $P_A[h_A(x)=h_A(x')]\le2^{-m}$ for each distinct pair, with $A$ uniform
and independent of $X$. Set $K=h_A(X)$, $M=2^m$ and
$\Delta(P,Q)=\frac12\sum|p-q|$.

**Leftover-hash bound, proved here.** For fixed $a$, let $p_{a,k}$ be its
output distribution. Averaging collisions over $a$ gives
$E_A\sum_kp_{A,k}^2\le Col(X)+(1-Col(X))/M$ by separating $x=x'$ from
$x\ne x'$. Thus
$E_A\sum_k(p_{A,k}-1/M)^2\le(1-1/M)Col(X)\le Col(X)$.
Cauchy–Schwarz gives $\sum_k|p_{a,k}-1/M|\le
\sqrt{M\sum_k(p_{a,k}-1/M)^2}$; another Cauchy–Schwarz over the seed average
yields
$\Delta((A,K),(A,U_m))\le\frac12\sqrt{M\,Col(X)}
\le\frac12\sqrt{2^{m-H_\infty(X)}}$,
since $\sum p_x^2\le\max p_x\sum p_x$. Here $(A,U_m)$ has the same public
uniform seed and independent uniform output. It is not necessary that the
hash family have uniformly random functions or exclude its zero function.

For classical public side information $Z$, assume $A$ is independent of
$(X,Z)$ and every supported conditional distribution satisfies
$H_\infty(X\mid Z=z)\ge k$. Applying the just-proved bound for each $z$
and averaging gives $\Delta((Z,A,K),(Z,A,U_m))\le\frac12\sqrt{2^{m-k}}$.
This is a worst-case conditional min-entropy statement, not a claim about
unconditional $H_\infty(X)$, average Shannon entropy, or quantum side
information. Applying a deterministic map cannot increase total variation:
group the signed masses by output and use the triangle inequality. Therefore
replacing a uniform one-use pad by $K$ changes any event probability by at most
this delta. In an equal-prior binary message game, secrecy advantage is at most
delta: each fixed-message view is delta from the common ideal view, their TV
is at most $2\delta$, and optimal guessing advantage is half that TV.

**Required proof work CSG-A4.** Supply every hybrid and collision inequality,
then show why a seed correlated with $X$ is a counterexample, not a weakened
proof. **Complete model:** for $X$ uniform on two-bit values and $A=X$,
$K=A\cdot X$ is determined by the public seed. Conditional output TV from a
fair bit is $1/2$ for every seed; unconditional $H_\infty(X)=2$ would give the
invalid smaller $1/(2\sqrt2)$ if independence were omitted. Statistical
secrecy supplies no authenticity, replay protection, side-channel theorem or
claim about a deployed key source.

## Information research: inequalities and the complete chosen coding theorem

All variables in this section have finite alphabets and all logarithms have
base two. Use $0\log0=0$; relative entropy is infinite if the reference law
vanishes at a positive generating mass. Whenever $Q$ is positive on the support of $P$,
$-\ln t\ge1-t$ gives
$D(P\Vert Q)=-(1/\ln2)\sum_xp_x\ln(q_x/p_x)\ge
(1-\sum_{p_x>0}q_x)/\ln2\ge0$.
Expanding logarithms proves the entropy chain rule and
$I(X;Y)=D(P_{XY}\Vert P_XP_Y)\ge0$. The same argument conditionally proves
$H(X\mid Y,Z)\le H(X\mid Y)$.

For a Markov chain $X\to Y\to Z$, the conditional law of $Z$ given $X,Y$
depends only on $Y$, so $I(X;Z\mid Y)=0$. Expand
$I(X;Y,Z)$ in both orders to obtain
$I(X;Y)=I(X;Z)+I(X;Y\mid Z)\ge I(X;Z)$.
This is data processing; an arbitrary postprocessor of observations cannot
increase mutual information about $X$ under that Markov premise.

**Fano, with proof.** Let $M$ be uniform on $L\ge2$ messages and
$\widehat M=g(Y)$, with error probability $e$. Put
$E=1_{M\ne\widehat M}$. It is determined by $(M,Y)$, so chain expansion
gives $H(M\mid Y)=H(E\mid Y)+H(M\mid E,Y)$.
The first term is at most $h_2(e)\le1$. If $E=0$, the message is determined;
if $E=1$, at most $L-1$ choices remain. Hence
$H(M\mid Y)\le h_2(e)+e\log_2(L-1)\le1+e\log_2L$.
This is an average-error statement for the stated uniform message law.

We prove the chosen channel theorem completely. For a binary symmetric channel
BSC($p$), $0<p<1/2$, each transmitted bit is XORed with an independent
Bernoulli($p$) bit, independent of the message and encoder. Capacity for
asymptotically vanishing average error is $C=1-h_2(p)$ bits/use.

**Converse.** For any length-$n$ code, let $X^n$ be its channel input and
$Y^n$ its output. Even with random encoding independent of noise,
$M\to X^n\to Y^n$ is Markov. Conditional on $X^n$, noise has entropy
$nh_2(p)$; $H(Y^n)\le n$, so data processing gives
$I(M;Y^n)\le I(X^n;Y^n)\le nC$. Fano yields
$\log_2L=I(M;Y^n)+H(M\mid Y^n)\le nC+1+e\log_2L$.
Thus $(1-e)\log_2L\le nC+1$. A sequence with $e\to0$ cannot have limiting
rate above $C$. This is the weak converse, sufficient for the declared
vanishing-error capacity; no strong-converse exponent is claimed.

**Achievability.** Choose $0<R<C$; rate zero is achieved by the one-message code. By continuity of $h_2$, choose $\delta>0$
with $r=p+\delta<1/2$ and $R<1-h_2(r)$. Independently sample
$L=\lfloor2^{nR}\rfloor$ binary codewords uniformly. Decode to a unique
codeword within Hamming radius $\lfloor nr\rfloor$; otherwise declare error.
Noise exceeds this radius only if its integer weight exceeds $nr$, so the
Chebyshev derivation CSG-D7 bounds that probability by
$p(1-p)/(n\delta^2)$. Each other independently chosen codeword, conditional
on the transmitted word, noise and received word, falls in that ball with
probability $V_n/2^n$, where
$V_n=\sum_{j\le nr}\binom nj\le2^{nh_2(r)}$.
To prove this ball bound, for $j\le nr$ and $r<1/2$,
$r^j(1-r)^{n-j}\ge r^{nr}(1-r)^{n(1-r)}=2^{-nh_2(r)}$;
sum these binomial-probability terms and use their total at most 1.
A union bound therefore makes ensemble-average message error at most
$p(1-p)/(n\delta^2)+2^{-n(1-h_2(r)-R)}$, tending to zero. Some deterministic
codebook has error at most that mean. Repeated codewords, if any, are counted
as decoding errors; no uniqueness assumption was smuggled into the random
experiment. If maximum rather than average message error is desired, discard
the worst half of message labels: every retained message has error at most
twice the original mean. Restrict the old decoder, treating discarded outputs
as errors; errors for retained messages do not increase. Rate loses at most
$1/n$ plus vanishing floor effects. Retained codewords are distinct once that
maximum error is below $1/2$, since identical codewords cannot both have
success probability above $1/2$. This proves existence at every $R<C$ with
vanishing maximum error too. It does not give an efficient capacity-achieving
encoder/decoder or a finite-block guarantee for the repetition code below.

The endpoints are separate elementary cases: $p=0$ transmits unaltered bits
at rate one; $p=1/2$ makes output independent of input and capacity zero.
A burst channel with the same marginal flip rate is not this memoryless
channel. Active adversaries, channel estimation, public side information and
quantum communication require their own theorems.

**Required proof work CSG-A5.** Reconstruct KL, data processing, Fano and both
coding-theorem directions, including the average/maximum distinction. For the
finite repetition code use the exact model in the next section, not the
existence theorem as an error certificate. There is no empirical channel or
security-parameter fit in these supplied synthetic laws.

## CSG-P, CSG-C and CSG-R investigations

Complete P, then C after comparison and repair, then R in a later self-chosen
session without copying the old model first. This is a public return, with no
unseen form or enforced delay. Each investigation has eight required records:

1. **SEM:** give the countdown operational derivation and least approximant
   for its specified start, and reconstruct the general adequacy proof;
   distinguish the supplied stuck/error-free language from the heap module.
2. **THEORY:** prove the midpoint recurrence and its space bound, evaluate
   the fixed graph question CSG-A2, and explain which native hierarchy and
   hardness claims it does not establish.
3. **OWN:** complete the native heap checker, its syntax proof, frame proof,
   full finite roster and framed-write mutant, including a malformed input.
4. **REF:** complete the native circular queue project, four operation cases,
   labelled two-client BFS and first omitted-modulo counterexample; explain
   the atomicity and liveness boundary.
5. **CRYPTO:** reconstruct the conditional $q$-use PRG hybrid proof, calculate
   the investigation's actual extracted-bit joint law and TV, state the exact
   min-entropy/seed hypothesis, and give the optimal binary-message advantage.
   Derive a two-use XOR leak as a separate misuse, even if the source improves.
6. **INFO:** reconstruct Fano and the selected channel theorem, calculate the
   repetition decoder's exact error, its message/output mutual information,
   and compare marginal noise rates, finite code rate and asymptotic capacity.
7. **EXEC:** implement and run the public reference on the printed inputs,
   reproduce the finite tables, run the independent oracle, and retain actual
   fresh output and all failures before corrections. Never fill an output
   record with the public model and call it an execution.
8. **BOUND:** supply the claim/dependency ledger with theorem assumptions,
   finite implementation scope, software/runtime trust, synthetic model,
   environmental evidence still missing and public support opened.

The input table is the full mathematical input, not an instruction to collect
participants, packet captures, secret keys or market/field data. Values
0–3 encode two-bit vectors low-bit-first; $h_a(x)=a\cdot x\pmod2$, with four
masks including zero. This chosen family is universal: for distinct two-bit
values, their difference has a coordinate equal to one. Pairing masks that
differ only in that coordinate toggles the dot product with the difference,
so exactly two of the four masks collide. Keeping the zero mask preserves
this uniform family; discarding it would change the experiment. `independent` samples $A$ uniformly independently of
$X$; `high` publishes $Z=\lfloor X/2\rfloor$. Noise integer 0–7 encodes its
three flip bits low-bit-first; repetition sends $mmm$ and decodes by majority.
Normalize each nonnegative weight vector by its own sum.

| ID | Countdown start | Source weights $X=0,1,2,3$ | Public side information | Noise weights 000 through 111 | Queue capacity/depth |
| --- | --- | --- | --- | --- | --- |
| CSG-P | 3 | 1,1,1,1 | none | 27,9,9,3,9,3,3,1 | 2 / 4 |
| CSG-C | 0 | 1,1,0,0 | none | 1,1,1,1,1,1,1,1 | 3 / 5 |
| CSG-R | -1 | 1,1,1,1 | high | 3,0,0,0,0,0,0,1 | 2 / 4 |

P establishes the reference proof and ledger. C changes both source entropy
and channel, so replaying P's theorem premises is an error. R returns to the
unconditional source of P while publishing a source bit and replacing
independent errors by a burst law. In every record additionally evaluate the
failure control `seedMode: source`, which sets $A=X$; this is a deliberately
invalid independence premise, not an allowable extractor construction.
Run fixed mutations of the queue and frame rule rather than merely asserting
that a counterexample should exist. The PRG assumption is never numerically
estimated by the tiny extractor experiment.

## Complete public investigation models

**SEM/THEORY model.** Countdown P has finite states $3,2,1,0$ and first
returns 0 in approximation 4. C returns 0 in approximation 1; R returns -1
in approximation 1, because the guard is initially false. The general proof
is in **Semantics**; using its invariant $x\ge0$ on R would be invalid.
The graph's length-three path makes $R(0,3,1)$ false and $R(0,3,2)$ true,
with midpoint 2. The theory proof stores endpoints and one midpoint per
recursion level, not the full search tree. None of these examples resolves
$P$ versus $NP$ or proves the PRG assumption.

**OWN model.** With addresses $\{0,1,2\}$, binary values and at most two
cells there are $1+3\cdot2+\binom32\cdot4=19$ heaps. The roster consists of
$emp$, six singletons and all $7^2=49$ stars of these seven atoms, so 56
assertions and $19\cdot56=1064$ satisfaction pairs. Exactly 44 pairs satisfy:
seven atomic pairs, one $emp*emp$, twelve $emp$/singleton orders and 24
ordered pairs of distinct-address singletons. The frame enumeration has
$2[6(1+4)+12\cdot2]=108$ update instances. All pass by the literal-update
identity proved above. Nested star is covered by the syntax induction and a
separate supplied nested assertion test, rather than a false claim that this
roster exhausts arbitrary syntax. A two-cell mutant example is owned
$\{0:0\}$, frame $\{1:0\}$, target 0, new value 1. Correct combined result
is $\{0:1,1:0\}$; writing the framed address instead yields
$\{0:0,1:1\}$. Duplicate addresses and unowned update targets are errors,
not additional heaps silently merged by a map constructor.

**REF model.** The BFS visits every labelled command prefix, including the
empty one: $\sum_{j=0}^4 4^j=341$ for P/R and
$\sum_{j=0}^5 4^j=1365$ for C. Normal code has no mismatch by the operation
proof. Omitting enqueue's modulo first violates the array-length invariant
at depth $c+2$: fill $c$ slots with `A+0`, perform `A-`, then `A+0`.
For P/R the trace is `A+0,A+0,A-,A+0`; for C it has three initial enqueues
and length five. Before this depth, writing outside the array requires
$h+z\ge c$ with a nonfull queue; that needs at least $c$ successful enqueues and a prior
successful dequeue, hence at least $c+2$ calls including the failing enqueue.
The BFS alphabet order selects the displayed first trace. These are complete
atomic calls, not a proof for a racy queue implementation.

**CRYPTO model.** P's mask zero always produces $K=0$; the other three masks
produce a fair bit. Thus joint TV from a fair output given the public mask is
$(1/4)(1/2)=1/8$. In C, masks 0 and 2 are zero on the support $\{0,1\}$,
while masks 1 and 3 are balanced: TV $1/4$. In R, conditional on either
published high bit, two masks produce a fixed bit and two are balanced, again
TV $1/4$. The worst supported conditional min-entropies are respectively
2, 1, 1. The proved bounds for $m=1$ are $1/(2\sqrt2),1/2,1/2$;
the exact distances are smaller. Binary-message ciphertext distributions are
swapped output-bit laws; their TV is twice these distances, so optimal
success is $5/8,3/4,3/4$ and success advantage is $1/8,1/4,1/4$.
An adversary reads the public mask/side information, then uses the known
more-likely key bit; ties permit either guess. With $A=X$, public seed
reveals the source, hence TV and advantage are $1/2$ in every case and
success is one. No conditional entropy bound independent of the seed can
repair that omitted independence premise. Reusing any extracted bit gives
$c_1\oplus c_2=m_1\oplus m_2$ deterministically. The conditional PRG
construction remains a separate theorem with secret independent slot seeds.

**INFO model.** Weight-at-least-two noise words are 011,101,110,111. Their
P weight is $3+3+3+1=10$ out of 64, giving error $5/32$; C gives $1/2$;
R gives $1/4$. P and R both have each noise bit marginal $1/4$, but
$P(111)=1/64$ in P and $1/4$ in R. Therefore the IID BSC theorem applies
to P and C and does not apply to R's three-bit joint law. For a fair message,
P's exact mutual information is
$1-\frac7{16}h_2(1/28)-\frac9{16}h_2(1/4)$:
the two unanimous outputs jointly have probability $7/16$ and posterior
error $1/28$; the other six outputs jointly have probability $9/16$ and
posterior error $1/4$. C gives zero information. R gives
$1-h_2(1/4)$ because it is one BSC flip repeated three times, not three
independent channel uses. These are bits per three-bit block for a one-bit
message, not the capacity of the general three-use input channel.
The code rate is $1/3$. For P, the BSC asymptotic capacity is
$1-h_2(1/4)\approx0.188722$ bits/use, below that finite rate; a nonzero
finite-block error $5/32$ does not contradict the vanishing-error converse.
For C capacity is zero. It is invalid to insert R's marginal $1/4$ into
the IID coding theorem and call the result a capacity proof for its burst law.

**EXEC/BOUND model.** The public code computes exact finite sums with
bounded integer weights; the analytic fractions above are comparison targets,
not claims that any learner or author has executed it. Retain actual output
from your own run and the independent oracle. The syntax/semantics, input
law, implementation and runtime are separate dependencies. The checker
establishes bounded behavior of this program; the printed induction and
information proofs justify their general mathematical statements under their
stated hypotheses. JavaScript runtime, copy integrity and input encoding
remain trusted. No kernel-checked adequacy theorem, efficient capacity code,
side-channel analysis, public deployment or empirical key/channel validation
has been supplied.

## Bounded executable reference

This dependency-free reference is required public project support. Copy the
JavaScript block unchanged into `specialist.mjs`, append the JSON input as
`const input = ...`, then run
`console.log(JSON.stringify(input.cases.map(specialistReference.run),null,2))`
with Node. Implement your own project version first and compare its results.
Run the independent regression oracle supplied with the course from the Atlas
module directory using `node --test verification/regressions/mathematics-computer-science-specialist-work.test.mjs`.
The reference does not invoke randomness, network, cryptographic APIs, storage
or a timing benchmark. Its decimal information values are computed finite-sum
approximations to the exact entropy expressions above.

The heap domain is exactly addresses 0–2, binary values and at most two cells;
assertion depth at most four and 31 syntax nodes. Queue capacities 1–3,
depth 0–5, and the four labelled calls are the chosen complete finite domain.
Every law has length four/eight, nonnegative safe integer weights, positive
total at most 4096. Products in the finite joint enumerations remain exact
integers at these bounds. The recursive heap grammar and queue proof are
general mathematics, while these input bounds keep executable work bounded.

```javascript
// CSG-SPECIALIST-REFERENCE
const specialistReference = (() => {
  const bad = message => { throw new TypeError(message); };
  const integer = (n, lo, hi) => {
    if (!Number.isSafeInteger(n) || n < lo || n > hi) bad('integer domain');
    return n;
  };
  const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
  const sorted = h => h.map(p => p.slice()).sort((a,b) => a[0]-b[0]);
  function heap(h) {
    if (!Array.isArray(h) || h.length > 2) bad('heap bound');
    const seen = new Set();
    for (const p of h) {
      if (!Array.isArray(p) || p.length !== 2) bad('heap cell');
      integer(p[0],0,2); integer(p[1],0,1);
      if (seen.has(p[0])) bad('duplicate address');
      seen.add(p[0]);
    }
    return sorted(h);
  }
  function assertion(a) {
    let nodes = 0;
    function visit(t,depth) {
      if (++nodes > 31 || depth > 4 || !Array.isArray(t)) bad('assertion bound');
      if (t[0] === 'emp' && t.length === 1) return;
      if (t[0] === 'pt' && t.length === 3) {
        integer(t[1],0,2); integer(t[2],0,1); return;
      }
      if (t[0] === 'star' && t.length === 3) {
        visit(t[1],depth+1); visit(t[2],depth+1); return;
      }
      bad('assertion syntax');
    }
    visit(a,0); return a;
  }
  function sat(a,h) {
    if (a[0] === 'emp') return h.length === 0;
    if (a[0] === 'pt') return h.length === 1 && same(h[0],a.slice(1));
    for (let mask=0; mask < 2**h.length; mask++) {
      const l=[], r=[];
      h.forEach((p,i) => ((mask>>i)&1 ? l : r).push(p));
      if (sat(a[1],l) && sat(a[2],r)) return true;
    }
    return false;
  }
  const satisfies = (a,h) => sat(assertion(a),heap(h));
  function heaps() {
    const out=[];
    for (let code=0; code<27; code++) {
      let t=code; const h=[];
      for (let a=0; a<3; a++) {
        const digit=t%3; t=Math.floor(t/3);
        if (digit) h.push([a,digit-1]);
      }
      if (h.length<=2) out.push(h);
    }
    return out.sort((a,b) => a.length-b.length || JSON.stringify(a).localeCompare(JSON.stringify(b)));
  }
  function update(h,a,v) {
    h=heap(h); integer(a,0,2); integer(v,0,1);
    if (!h.some(p => p[0]===a)) bad('unowned update');
    return h.map(p => p[0]===a ? [a,v] : p.slice());
  }
  function heapAudit() {
    const hs=heaps(), atoms=[['emp']];
    for (let a=0;a<3;a++) for (let v=0;v<2;v++) atoms.push(['pt',a,v]);
    const as=atoms.slice();
    for (const a of atoms) for (const b of atoms) as.push(['star',a,b]);
    let accepted=0;
    for (const h of hs) for (const a of as) if (satisfies(a,h)) accepted++;
    return {heaps:hs.length, assertions:as.length, pairs:hs.length*as.length, accepted};
  }
  function frameAudit(mutant=false) {
    if (typeof mutant!=='boolean') bad('mutation mode');
    const hs=heaps(); let instances=0, failures=0, first=null;
    for (const own of hs) for (const frame of hs) {
      if (own.length+frame.length>2 || own.some(p => frame.some(q => p[0]===q[0]))) continue;
      for (const [a] of own) for (const v of [0,1]) {
        instances++;
        const combined=sorted([...own,...frame]);
        const target=mutant && frame.length ? frame[0][0] : a;
        const actual=update(combined,target,v);
        const expected=sorted([...update(own,a,v),...frame]);
        if (!same(actual,expected)) {
          failures++;
          if (first===null) first={own,frame,address:a,value:v,actual,expected};
        }
      }
    }
    return {instances,failures,first};
  }
  const ops=['A+0','B+1','A-','B-'];
  function command(op) { if (!ops.includes(op)) bad('queue command'); return op; }
  function queueState(q) {
    if (!q || typeof q!=='object') bad('queue state');
    integer(q.capacity,1,3); integer(q.head,0,q.capacity-1); integer(q.size,0,q.capacity);
    if (!Array.isArray(q.data) || q.data.length!==q.capacity) bad('queue array');
    for (const v of q.data) if (v!==null && v!==0 && v!==1) bad('queue value');
    for (let i=0;i<q.size;i++) if (q.data[(q.head+i)%q.capacity]===null) bad('queue occupied cell');
    return q;
  }
  function abstract(q) {
    queueState(q);
    return Array.from({length:q.size},(_,i) => q.data[(q.head+i)%q.capacity]);
  }
  function step(q,op,mutant=false) {
    if (typeof mutant!=='boolean') bad('mutation mode');
    queueState(q); command(op);
    q={...q,data:q.data.slice()};
    if (op.includes('+')) {
      if (q.size===q.capacity) return [q,['full']];
      const position=mutant ? q.head+q.size : (q.head+q.size)%q.capacity;
      q.data[position]=Number(op.at(-1)); q.size++;
      return [q,['ok']];
    }
    if (q.size===0) return [q,['empty']];
    const v=q.data[q.head]; q.head=(q.head+1)%q.capacity; q.size--;
    return [q,['value',v]];
  }
  function listStep(xs,op,capacity) {
    if (op.includes('+')) return xs.length===capacity ? [xs,['full']] : [[...xs,Number(op.at(-1))],['ok']];
    return xs.length ? [xs.slice(1),['value',xs[0]]] : [xs,['empty']];
  }
  function queueAudit(capacity,depth,mutant=false) {
    if (typeof mutant!=='boolean') bad('mutation mode');
    integer(capacity,1,3); integer(depth,0,5);
    const work=[{trace:[],q:{capacity,head:0,size:0,data:Array(capacity).fill(null)},xs:[]}];
    let checked=1;
    for (let cursor=0;cursor<work.length;cursor++) {
      const parent=work[cursor];
      if (parent.trace.length===depth) continue;
      for (const op of ops) {
        const trace=[...parent.trace,op], [q,out]=step(parent.q,op,mutant);
        const [xs,expected]=listStep(parent.xs,op,capacity); checked++;
        let observed=null, invalid=false;
        try { observed=abstract(q); } catch (e) { if (!(e instanceof TypeError)) throw e; invalid=true; }
        if (invalid || !same(observed,xs) || !same(out,expected))
          return {checked,witness:{trace,q,out,expected,xs,invalid}};
        work.push({trace,q,xs});
      }
    }
    return {checked,witness:null};
  }
  function law(ws,length) {
    if (!Array.isArray(ws) || ws.length!==length) bad('law length');
    let total=0;
    for (const w of ws) { integer(w,0,4096); total+=w; }
    if (total===0 || total>4096) bad('law total');
    return total;
  }
  const parity = x => ((x&1)^((x>>1)&1));
  function extractor(ws,zMode,seedMode) {
    const total=law(ws,4);
    if (!['none','high'].includes(zMode) || !['independent','source'].includes(seedMode)) bad('extractor mode');
    const counts=new Map(), groups=new Map(), zTotals=new Map(), zMax=new Map();
    const denominator=total*(seedMode==='independent'?4:1);
    for (let x=0;x<4;x++) {
      const z=zMode==='high' ? x>>1 : 0;
      zTotals.set(z,(zTotals.get(z)||0)+ws[x]);
      zMax.set(z,Math.max(zMax.get(z)||0,ws[x]));
      for (let a=0;a<4;a++) {
        if (seedMode==='source' && a!==x) continue;
        const k=parity(a&x), g=`${z},${a}`, key=`${g},${k}`;
        counts.set(key,(counts.get(key)||0)+ws[x]);
        groups.set(g,(groups.get(g)||0)+ws[x]);
      }
    }
    let tvNumerator=0, cipherNumerator=0, maxConditional=0;
    for (const [g,n] of groups) {
      const c0=counts.get(`${g},0`)||0, c1=counts.get(`${g},1`)||0;
      tvNumerator+=Math.abs(2*c0-n)+Math.abs(2*c1-n);
      cipherNumerator+=Math.abs(c0-c1);
    }
    for (const [z,n] of zTotals) if (n) maxConditional=Math.max(maxConditional,zMax.get(z)/n);
    const rows=[...counts].filter(([,n])=>n>0).map(([key,n])=>[...key.split(',').map(Number),n]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]||a[2]-b[2]);
    return {denominator,rows,keyTV:tvNumerator/(4*denominator),cipherTV:cipherNumerator/denominator,
      advantage:cipherNumerator/(2*denominator),minEntropy:-Math.log2(maxConditional)};
  }
  const encode = m => { integer(m,0,1); return m===0?0:7; };
  const decode = w => { integer(w,0,7); return ((w&1)+((w>>1)&1)+((w>>2)&1))>=2?1:0; };
  function channel(ws) {
    const total=law(ws,8), joint=Array.from({length:2},()=>Array(8).fill(0));
    let errors=0;
    for (let m=0;m<2;m++) for (let noise=0;noise<8;noise++) {
      const y=encode(m)^noise; joint[m][y]+=ws[noise];
      if (decode(y)!==m) errors+=ws[noise];
    }
    let information=0;
    for (let m=0;m<2;m++) for (let y=0;y<8;y++) {
      const n=joint[m][y], col=joint[0][y]+joint[1][y];
      if (n) information+=n/(2*total)*Math.log2(2*n/col);
    }
    const marginals=[0,1,2].map(bit => ws.reduce((s,w,n)=>s+(((n>>bit)&1)?w:0),0)/total);
    return {denominator:2*total,joint,error:errors/(2*total),information,marginals};
  }
  function reach(edges,u,v,k) {
    if (!Array.isArray(edges)) bad('graph');
    integer(edges.length,1,4);
    for (const row of edges) {
      if (!Array.isArray(row) || row.length!==edges.length) bad('graph row');
      for (const bit of row) integer(bit,0,1);
    }
    integer(u,0,edges.length-1); integer(v,0,edges.length-1); integer(k,0,2);
    function r(a,b,d) {
      if (d===0) return a===b || edges[a][b]===1;
      for (let w=0;w<edges.length;w++) if (r(a,w,d-1) && r(w,b,d-1)) return true;
      return false;
    }
    return r(u,v,k);
  }
  function run(input) {
    if (!input || typeof input!=='object' || Array.isArray(input)) bad('input');
    const keys=['id','start','xWeights','zMode','seedMode','noiseWeights','capacity','depth'];
    if (!same(Object.keys(input).sort(),keys.sort())) bad('input keys');
    if (!['CSG-P','CSG-C','CSG-R'].includes(input.id)) bad('case id');
    integer(input.start,-8,8); integer(input.capacity,1,3); integer(input.depth,0,5);
    const extraction=extractor(input.xWeights,input.zMode,input.seedMode), transmission=channel(input.noiseWeights);
    const states=[input.start]; while (states.at(-1)>0) states.push(states.at(-1)-1);
    const graph=[[0,1,0,0],[0,0,1,0],[0,0,0,1],[0,0,0,1]];
    return {id:input.id,semantics:{states,result:states.at(-1),firstApproximant:Math.max(input.start,0)+1},
      theory:[reach(graph,0,3,1),reach(graph,0,3,2)],heap:heapAudit(),frame:frameAudit(),
      queue:queueAudit(input.capacity,input.depth),extraction,transmission,
      controls:{frame:frameAudit(true),queue:queueAudit(input.capacity,input.depth,true),
        correlated:extractor(input.xWeights,input.zMode,'source'),
        reuseLeaks:[0,1].every(k=>[0,1].every(m0=>[0,1].every(m1=>((m0^k)^(m1^k))===(m0^m1))))}};
  }
  return {run,satisfies,update,heapAudit,frameAudit,queueAudit,step,abstract,extractor,encode,decode,channel,reach};
})();
```

```json
{
  "cases": [
    {"id":"CSG-P","start":3,"xWeights":[1,1,1,1],"zMode":"none","seedMode":"independent","noiseWeights":[27,9,9,3,9,3,3,1],"capacity":2,"depth":4},
    {"id":"CSG-C","start":0,"xWeights":[1,1,0,0],"zMode":"none","seedMode":"independent","noiseWeights":[1,1,1,1,1,1,1,1],"capacity":3,"depth":5},
    {"id":"CSG-R","start":-1,"xWeights":[1,1,1,1],"zMode":"high","seedMode":"independent","noiseWeights":[3,0,0,0,0,0,0,1],"capacity":2,"depth":4}
  ]
}
```

## Self-review, repairs and retained records

Use one public 100-point comparison rubric separately for P, C and R. It is
self-review feedback, not an assigned grade or proof certification.

| Evidence | Points | Full-credit criterion | Concrete repair before retry |
| --- | --- | --- | --- |
| SEM | 15 | All operational/approximant states; both general adequacy inductions and an admissibility counterexample | Rebuild finite-approximant completeness and the negative-start branch; do not infer termination from a partial triple |
| THEORY | 10 | Both midpoint directions, correct finite answers and $O(s^2)$ stack-space accounting with explicit model | Draw two recursive calls evaluated sequentially and enumerate the stored frame fields |
| OWN | 15 | Exact satisfaction semantics, syntax/frame proofs, 1064/44 and 108 ledgers, actual mutant and typed malformed example | Recheck exact singleton versus subset semantics, enumerate both sides of each star and preserve the disjoint frame |
| REF | 15 | All four operation cases, invariant and abstraction, complete labelled BFS counts and shortest actual mutant | Write the occupied modular indices; compare outputs and abstract state after every prefix, including full/empty calls |
| CRYPTO | 20 | Fully simulated $q$-use hybrids with secret independent seeds; collision proof; actual conditional laws, exact advantages and reuse/control failures | Recompute the joint $(Z,A,K)$ table; distinguish secret PRG seeds from public independent extractor seeds; repair the missing hypothesis rather than renaming the game |
| INFO | 15 | KL/DPI/Fano and both coding directions; exact three errors and information formulas with model/rate distinctions | Condition on the actual whole noise word; redo the Hamming-ball bound, expurgation and finite/nonvanishing-error comparison |
| EXEC/BOUND | 10 | Own required executions, independent oracle and failure outputs, immutable first/comparison/revised records and an honest dependency ledger | Keep a failing output, state the changed code/input, rerun within bounds, and record unproved environmental claims |

For each row award all its points only when every listed condition is present;
otherwise record `repair` and zero for that row until a new complete comparison.
A total alone never waives an unproved theorem or missing required software.
The model is public: record when and which help was opened, not a claim of
unseen performance. A syntax check, finite oracle, public model and independent
LLM review are different evidence and none creates human/AT approval.

Keep learner-owned dated text files for every native task, CSG-A1–A5 proof,
project and P/C/R record: first attempt; public comparison and self-review;
revised derivation/code; actual input/output and failure transcript; dependency
and help ledger. Use stable source/task IDs, not an array position. Follow the
worksheet portfolio workflow
for separate immutable versions and manual recovery. The shared mutable note
is a convenient index, not automatic immutable history; study checkmarks are
not graded evidence. Later return timing is self-declared and cannot establish
an enforced delay. Do not silently overwrite earlier records during correction.

## Sources, identities and claim limits

The source selections keep their native chapter IDs and complete keys. The
new stable work IDs are CSG-D1–D8, CSG-SEM/THEORY/HEAP/QUEUE/CRYPTO/PROTOCOL/INFO,
CSG-A1–A5 and CSG-P/C/R with SEM/THEORY/OWN/REF/CRYPTO/INFO/EXEC/BOUND records.
The course's H2 headings identify reading steps; changing an example does not
change a learner record's identity.

Primary course pointers for further checking are the authors' [Arora–Barak
complexity text page](https://theory.cs.princeton.edu/complexity/), Cambridge's
[denotational-semantics materials](https://www.cl.cam.ac.uk/teaching/2425/DenotSem/materials.html)
and MIT's [information-theory lecture notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/pages/lecture-notes/).
They support further study; the required chosen arguments are printed here.
The wider frontiers—full abstraction for richer languages, weak-memory
concurrent logics, efficient capacity-achieving constructions, computational
hardness assumptions, quantum leakage and general composable cryptography—
remain separate research. None is inferred from a finite queue/heap run.

The independent oracle records exact dependency hashes of the seven selected
native sources and four preparation dependencies: the advanced course and its
item, the formal diagnostic and the operational-semantics source. These eleven
pins identify this mathematical input; an approved
native correction requires a deliberate new hash and review of its changed
hypothesis/key. A pass does not qualify a whole book, empirical channel,
physical key source, deployment, ethical approval or observed learning outcome.
