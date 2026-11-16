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
