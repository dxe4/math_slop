
# Division, Euclid, and Bezout Certificates {#section-1-division-euclid-and-bezout-certificates}

The greatest common divisor is simultaneously an extremal divisor, the smallest positive integer linear combination, and the output of a terminating algorithm. The equivalence of these views is the engine behind congruences, rational reconstruction, Diophantine equations, and modular computation.

This chapter assumes the well-ordering and divisibility rules of Chapter 1. You will prove division with remainder, Euclid’s invariant, Bezout’s identity, and the complete form of linear integer solutions. Every algorithmic output comes with a checkable certificate.

<a id="section-5-1-division-with-remainder"></a>
## 1. Division with remainder {#section-7-1-division-with-remainder}

**Theorem 2.2 (Division).** Given $a \in \mathbb{Z}$ and positive $m$, there are unique integers $q,r$ such that

$a=mq+r$ and $0\le r<m$.

**Existence.** Consider nonnegative integers of the form $a-mk$; this set is nonempty because sufficiently negative $k$ makes the expression positive. Let $r=a-mq$ be its least member. If $r\ge m$, then $r-m=a-m(q+1)$ would be a smaller nonnegative member. Hence $0\le r<m$, as required. Including zero in the set is essential: when $m\mid a$, the least remainder is exactly zero.

**Uniqueness.** If $a=mq+r=mq'+r'$ with both remainders in the required range, then $m(q-q')=r'-r$. The right side has absolute value less than $m$; the only multiple of $m$ with that property is zero. Hence $r=r'$ and $q=q'$.

For $a=-23,m=7$, the required representation is $-23=7(-4)+5$. Truncating division toward zero would give remainder $-2$, which violates the convention.

<a id="section-17-2-greatest-common-divisors"></a>
## 2. Greatest common divisors {#section-19-2-greatest-common-divisors}

For integers $a,b$, not both zero, $\gcd(a,b)$ is the unique positive integer $d$ such that:

- $d\mid a$ and $d\mid b$;
- every common divisor of $a,b$ divides $d$.

This universal property is stronger than “largest by numerical size” and travels to polynomial and ideal settings.

Signs do not matter: $\gcd(a,b)=\gcd(\lvert a\rvert,\lvert b\rvert)$. Also $\gcd(a,0)=\lvert a\rvert$ when $a\ne 0$. The convention $\gcd(0,0)=0$ is sometimes computationally useful, but it does not fit the positive universal definition.

<a id="section-28-3-euclid-s-invariant-and-termination"></a>
## 3. Euclid’s invariant and termination {#section-30-3-euclid-s-invariant-and-termination}

For any integer $q$,

$\gcd(a,b)=\gcd(b,a-qb)$.

Indeed a number divides both $a,b$ exactly when it divides both $b,a-qb$. Choosing $q$ from division makes the new second entry a nonnegative remainder smaller than $\lvert b\rvert$.

For signed inputs, first replace them by absolute values (which does not change the gcd), or perform division with positive divisor $\lvert b\rvert$ and adjust the quotient sign. This normalization is what makes the strict-decrease claim valid.

<a id="section-38-worked-algorithm-and-certificate"></a>
### Worked algorithm and certificate {#section-40-worked-algorithm-and-certificate}

Compute $\gcd(252,198)$:

\[252=1*198+54\]

\[198=3*54+36\]

\[54=1*36+18\]

$36=2*18+0$.

The last nonzero remainder is $18$. Termination is guaranteed because positive remainders strictly decrease.

Back-substitute:

$18=54-36=54-(198-3*54)=4*54-198=4*(252-198)-198=4*252-5*198$.

Thus the pair $(4,-5)$ is a Bezout certificate. Anyone can verify the multiplication and also verify that $18$ divides both inputs.

<a id="section-58-4-bezout-s-identity"></a>
## 4. Bezout’s identity {#section-60-4-bezout-s-identity}

**Theorem 2.3 (Bezout).** If $a,b$ are not both zero, integers $x,y$ exist with

$ax+by=\gcd(a,b)$.

**Well-ordering proof.** Let $S$ be the positive integers of the form $ax+by$. It is nonempty: one of $a,-a,b,-b$ is positive. Choose its least member $d=ax_{0}+by_{0}$. Divide $a=qd+r$ with $0\le r<d$. Since

$r=a-qd=a(1-qx_{0})+b(-qy_{0})$,

a positive $r$ would be a smaller member of $S$; hence $r=0$ and $d\mid a$. Similarly $d\mid b$. Every common divisor of $a,b$ divides their linear combination $d$, so $d$ is the gcd.

**Corollary 2.4.** $\gcd(a,b)=1$ exactly when some integer combination $ax+by$ equals $1$.

<a id="section-72-common-error"></a>
### Common error {#section-74-common-error}

Bezout coefficients are generally not unique. If $g=\gcd(a,b)$ and $(x_{0},y_{0})$ is one pair, then

$x=x_{0}+(b/g)t$, $y=y_{0}-(a/g)t$

is another for every integer $t$. The next section proves these are all of them.

<a id="section-80-5-linear-diophantine-equations"></a>
## 5. Linear Diophantine equations {#section-82-5-linear-diophantine-equations}

Consider $ax+by=c$, with $a,b$ not both zero and $g=\gcd(a,b)$.

**Theorem 2.5 (Solvability).** Integer solutions exist exactly when $g\mid c$.

Necessity follows because $g$ divides every linear combination. For sufficiency, multiply a Bezout identity $au+bv=g$ by $c/g$.

If $(x_{0},y_{0})$ is one solution, all solutions are

$x=x_{0}+(b/g)t$, $y=y_{0}-(a/g)t$, $t \in \mathbb{Z}$.

To prove completeness when $ab\ne0$, subtract two solutions to get $a(x-x_{0})=-b(y-y_{0})$. After dividing by $g$, Euclid's lemma for the coprime integers $a/g$ and $b/g$ gives $b/g\mid x-x_0$; substitution determines the change in $y$. The zero-coefficient cases need no division: if $b=0$, then $a\mid c$, $x=c/a$, and $y$ is arbitrary, exactly the displayed family because $b/g=0$ and $-a/g=\pm1$; the case $a=0$ is symmetric.

<a id="section-94-worked-equation-with-constraints"></a>
### Worked equation with constraints {#section-96-worked-equation-with-constraints}

Solve $84x+30y=18$. Euclid gives $g=6$, and $6\mid 18$. From $6=3*30-84$, multiplication by $3$ gives one solution $x_{0}=-3,y_{0}=9$. Therefore

$x=-3+5t$, $y=9-14t$.

If additionally $x>0,y>0$, then $t\ge 1$ and $t\le 0$, impossible. The equation has integer solutions but no solution with both variables positive.

<a id="section-102-6-coprimality-lemmas"></a>
## 6. Coprimality lemmas {#section-104-6-coprimality-lemmas}

**Lemma 2.6 (Euclid’s).** If $\gcd(a,b)=1$ and $a\mid bc$, then $a\mid c$.

Choose $x,y$ with $ax+by=1$ and multiply by $c$:

$acx+bcy=c$.

Both terms on the left are divisible by $a$, so $a\mid c$.

**Corollary 2.7 (Product).** If $a\mid n$, $b\mid n$, and $\gcd(a,b)=1$, then $ab\mid n$. Write $n=ak$; since $b\mid ak$ and $\gcd(a,b)=1$, Euclid’s lemma gives $b\mid k$.

The coprimality hypothesis matters: $4\mid 12$ and $6\mid 12$, but $24$ does not divide $12$.

<a id="section-116-7-extended-euclid-as-an-invariant"></a>
## 7. Extended Euclid as an invariant {#section-118-7-extended-euclid-as-an-invariant}

An implementation can track remainders $r_{i}$ and coefficients $s_{i},t_{i}$ satisfying

$r_{i}=s_{i} a+t_{i} b$.

Initialize $(r_{0},r_{1})=(a,b)$, $(s_{0},s_{1})=(1,0)$, $(t_{0},t_{1})=(0,1)$. If $r_{i-1}=q_{i} r_{i}+r_{i+1}$, update

$s_{i+1}=s_{i-1}-q_{i} s_{i}$, $t_{i+1}=t_{i-1}-q_{i} t_{i}$.

The displayed invariant proves every remainder is an integer combination. Strict remainder decrease proves termination; the gcd invariant proves correctness.

<a id="section-128-exercises-with-complete-solutions"></a>
## Investigation: an auditable extended-Euclid table {#section-413-investigation-an-auditable-extended-euclid-table}

For five input pairs, create a table with quotient, remainder, and the two Bezout coefficients at every row. State the invariant $r=sa+tb$, verify it row by row, and include negative and zero input cases. Compare the number of divisions with the number for consecutive Fibonacci inputs. This is a mathematical investigation, not a speed benchmark: explain why those inputs generate repeated quotient $1$ and why that delays remainder decrease.

<a id="section-415-chapter-summary"></a>
## Signed division fixes the remainder convention {#section-420-signed-division-fixes-the-remainder-convention}

Euclid's algorithm uses an ordered remainder, not merely any equality $a=qb+r$. For a positive divisor $m$, require $0\le r<m$. These inequalities select a unique quotient and remainder even when $a$ is negative. The equality $-23=7(-3)-2$ is arithmetically true but is not Euclidean division by $7$; the canonical equality is $-23=7(-4)+5$. Replacing floor division with truncation toward zero changes the invariant needed for termination.

Here is the existence step with its nonemptiness detail exposed. For $a\in\mathbb Z$ and $m\ge1$, consider the nonnegative integers of the form $a-mk$ with $k\in\mathbb Z$. Taking $k=-|a|$ gives $a+m|a|\ge0$, so the set is nonempty. Choose its least member $r$. If $r\ge m$, then $r-m$ is a smaller nonnegative member of the same form, a contradiction. Thus $a=mq+r$ for some integer $q$ with $0\le r<m$. If the set contains $0$, that is already its least member; otherwise the positive-integer well-ordering principle applies directly.

For uniqueness, suppose $a=mq+r=mq'+r'$ with both remainders in the required interval. Then $m(q-q')=r'-r$, and $-m<r'-r<m$. A nonzero integer multiple of $m$ has absolute value at least $m$, so $q=q'$ and $r=r'$. The strict upper bound matters: allowing both $0$ and $m$ would permit two representations of an exact multiple.

For a negative divisor $b$, divide by $|b|$ and then change the quotient's sign: if $a=Q|b|+r$ and $b=-|b|$, then $a=(-Q)b+r$ with $0\le r<|b|$. For example, $23=(-3)(-7)+2$. This convention keeps the remainder nonnegative independently of the divisor's sign. There is no corresponding division step with divisor zero; an algorithm must stop before attempting it.

These facts also explain why sign normalization is harmless for gcd. The integers dividing $a$ are exactly those dividing $-a$, so changing an input's sign changes no common divisors. However, it does change the coefficients of a displayed Bézout identity. If a computation starts with $|a|$ and ends with $g=u|a|+v|b|$, replace $|a|$ by $\epsilon_a a$ and $|b|$ by $\epsilon_b b$, where $\epsilon_a=1$ for $a\ge0$ and $-1$ otherwise, and similarly for $b$. The resulting coefficients refer to the original signed inputs, as a certificate must.

<a id="section-430-what-a-euclidean-step-preserves"></a>
## What a Euclidean step preserves {#section-432-what-a-euclidean-step-preserves}

For $a=qb+r$, an integer $d$ divides both $a,b$ if and only if it divides both $b,r$. One direction uses $r=a-qb$; the other uses $a=qb+r$. Thus a Euclidean step preserves the entire set of common divisors, not only its greatest positive member. This statement remains true for negative $a$, negative $q$, and $r=0$. The remainder inequalities are needed for progress, while these linear identities are what preserve the problem.

The step also preserves the set of integer combinations. Every $xa+yb$ can be rewritten as
$$
xa+yb=xr+(qx+y)b.
$$
Conversely every $ub+vr$ equals $va+(u-qv)b$. Both transformations use integer coefficients. Consequently replacing $(a,b)$ by $(b,r)$ loses neither a possible common-divisor condition nor an attainable integer combination. This explains why the same short algorithm can discover a gcd and its Bézout coefficients.

After normalizing signs and, if desired, swapping inputs, start with $A\ge B\ge0$. If $B=0$, the answer is $A$ provided $A>0$. If $B>0$, replace $(A,B)$ by $(B,r)$, where $0\le r<B$. On every nonterminal step the second coordinate is a smaller positive integer. Well-ordering rules out indefinitely many such steps. When a zero remainder occurs, the last positive remainder $g$ has the same common divisors as the original pair, because the common divisors of $(g,0)$ are precisely the divisors of $g$.

Termination and correctness have different proofs here. Strictly decreasing remainders prove that an answer is reached; preservation of common divisors proves what that answer means. An incorrect update could decrease quickly and still return the wrong value. Conversely, repeatedly replacing $(a,b)$ by $(a+b,b)$ preserves common divisors but need not make progress. Checking only one of these properties is not an algorithm proof.

For coefficient tracking, record $r_i=s_i a+t_i b$ at each row, always with respect to the original signed pair. If $r_{i+1}=r_{i-1}-q_i r_i$, set
$$
s_{i+1}=s_{i-1}-q_i s_i,\qquad
t_{i+1}=t_{i-1}-q_i t_i.
$$
Substitution proves the row invariant immediately. The proof does not require that the coefficient signs alternate or that their magnitudes decrease. Those patterns can occur in examples but are not the preserved assertion.

A row table therefore has a transparent local verifier: check the two starting rows, each quotient-and-remainder equality with its range condition, and each coefficient update. The final nonzero row supplies the identity for $g$. A reader can instead verify its final identity and the divisibility of both inputs when only a compact gcd certificate is needed. The full table explains discovery; the compact certificate explains the result.

<a id="section-453-b-zout-certificates-and-the-least-positive-combination-"></a>
## Bézout certificates and the least-positive-combination proof {#section-455-b-zout-certificates-and-the-least-positive-combination-}

For inputs not both zero, a proposed gcd certificate consists of a positive integer $g$, divisibility statements $g\mid a$ and $g\mid b$, and integers $s,t$ satisfying $g=sa+tb$. Every common divisor $d$ then divides $g$ by linear closure. Because a positive common divisor cannot exceed a positive integer it divides, $g$ is the greatest positive common divisor. The divisibility formulation is stronger and more reusable than a comparison of sizes alone.

Neither half can be dropped. The number $2$ is a common divisor of $12$ and $18$, but it is not their gcd. The combination $30=12+18$ is not their gcd either, since it does not divide the inputs. For the same pair, $6=-12+18$, together with $12=2\cdot6$ and $18=3\cdot6$, supplies all parts. The certificate can be checked without knowing how the coefficients were found.

The alternative existence proof starts from the set of positive integer combinations $ax+by$. It is nonempty when $(a,b)\ne(0,0)$: use $|a|$ if $a\ne0$, or $|b|$ otherwise. Let $g=ax_0+by_0$ be its least member. Divide $a$ by $g$, writing $a=qg+r$ with $0\le r<g$. Then
$$
r=a-q(ax_0+by_0)=a(1-qx_0)+b(-qy_0)
$$
is another integer combination. If $r>0$, minimality is contradicted, so $r=0$ and $g\mid a$. The same argument gives $g\mid b$. Every common divisor divides the displayed expression for $g$, completing the certificate.

This proof identifies the set of all combinations exactly:
$$
\{ax+by:x,y\in\mathbb Z\}=g\mathbb Z.
$$
One inclusion follows because $g$ divides both inputs; the other follows by multiplying the identity for $g$ by an arbitrary integer. The equality is the real bridge to linear equations. It says that a target $c$ is attainable exactly when it is a multiple of $g$, rather than merely suggesting that some targets look plausible after experimentation.

For $(a,b)=(0,0)$, the combination set is $\{0\}$ and has no positive member, so the least-positive proof does not apply. The book's optional algorithm convention $\gcd(0,0)=0$ is compatible with the set equality $\{0\}=0\mathbb Z$, but it is not a positive gcd with the earlier definition. Keeping this exceptional input explicit avoids assigning a positive minimum to an empty set.

Bézout coefficients are generally not unique. A different valid pair may reflect a different search path, and agreement of the final identity is the relevant verification. The next argument determines exactly how the coefficient freedom works. It also explains why solving an equation once and listing several more solutions is still short of an exhaustive answer.

<a id="section-475-from-one-solution-to-every-solution-including-zero-coef"></a>
## From one solution to every solution, including zero coefficients {#section-477-from-one-solution-to-every-solution-including-zero-coef}

Assume $(a,b)\ne(0,0)$, put $g=\gcd(a,b)>0$, and write $A=a/g$, $B=b/g$. A Bézout identity for $g$ shows that $A,B$ have an integer combination equal to $1$. Thus if $B\mid Au$, then $B\mid u$: multiply $1=\alpha A+\beta B$ by $u$. This coprime cancellation argument uses neither prime factorization nor a sign assumption on $B$. For nonzero $B$, divisibility has its ordinary signed meaning.

The equation $ax+by=c$ is solvable exactly when $g\mid c$. Necessity follows because $g$ divides every combination; sufficiency follows by multiplying a Bézout identity by $c/g$. Let $(x_0,y_0)$ be any one solution. If $a,b$ are both nonzero, subtracting two solution equations gives
$$
A(x-x_0)+B(y-y_0)=0.
$$
Hence $B\mid A(x-x_0)$ and coprime cancellation gives $x-x_0=Bt$ for some integer $t$. Substitution yields $B(At+y-y_0)=0$. As $B\ne0$, integer cancellation gives $y-y_0=-At$. Conversely direct substitution verifies every pair
$$
x=x_0+Bt,\qquad y=y_0-At,\qquad t\in\mathbb Z.
$$
The two directions prove completeness of the family.

For $a=0$, $b\ne0$, solvability requires $b\mid c$, after which $y=c/b$ is fixed and $x$ is arbitrary. The displayed family still describes all solutions: now $A=0$ and $B=b/|b|$ is $1$ or $-1$, so $x_0+Bt$ ranges through every integer. For $b=0$, $a\ne0$, the symmetric statement fixes $x=c/a$ and leaves $y$ arbitrary. It is better to justify these cases directly than to divide by a coefficient which may vanish.

When both coefficients vanish, $0x+0y=c$ has every integer pair as a solution if $c=0$, and no solution otherwise. The one-parameter formula with $a/g,b/g$ is not defined there. Even under the convention $g=0$, it cannot be used by formal cancellation. This is a two-coordinate freedom, unlike the one-coordinate freedom when exactly one coefficient is nonzero.

Consider the signed equation $-84x+30y=18$. The identity $6=(-84)+3\cdot30$ gives the particular solution $(3,9)$. Dividing by $g=6$ gives $A=-14$, $B=5$, so every solution is
$$
x=3+5t,\qquad y=9+14t.
$$
Both coordinates are nonnegative exactly when $t\ge0$: the separate inequalities give $t\ge-3/5$ and $t\ge-9/14$, and an integer satisfying both is nonnegative. Unlike the earlier equation with coefficient $84$, this signed equation has infinitely many positive solutions.

For comparison, $0x-35y=70$ has $y=-2$ and arbitrary integer $x$. A congruence obstruction, one particular solution, an exhaustive integer family and a family restricted by inequalities answer four different questions. Recording which question has been answered prevents a necessary gcd condition from being presented as a complete constrained-solution classification.

<a id="section-501-inequality-restrictions-become-integer-parameter-bounds"></a>
## Inequality restrictions become integer parameter bounds {#section-503-inequality-restrictions-become-integer-parameter-bounds}

The gcd criterion classifies integer solvability, not nonnegative solvability. For example, $4x+6y=2$ is solvable over the integers because $2$ divides the target, and $(-1,1)$ is a witness. It has no nonnegative solution: any nonzero nonnegative contribution is at least $4$, while both zero contributions sum to zero. A sign restriction can therefore destroy solutions without changing the gcd.

Once a complete family $x=x_0+Bt$, $y=y_0-At$ is known, impose inequalities on the integer parameter. If $B>0$, the condition $x\ge0$ becomes $t\ge\lceil-x_0/B\rceil$. If $B<0$, division reverses the inequality and gives $t\le\lfloor-x_0/B\rfloor$. If $B=0$, the coordinate is constant: its nonnegativity either imposes no restriction or rules out every parameter. Apply the identical reasoning to the coefficient $-A$ in the second coordinate. This case split is what a memorized formula with an unstated positive denominator would omit.

For $18x+30y=96$, divide by $6$ to get $3x+5y=16$. The particular solution $(2,2)$ gives all solutions
$$
x=2+5t,\qquad y=2-3t.
$$
Nonnegativity requires $t\ge\lceil-2/5\rceil=0$ and $t\le\lfloor2/3\rfloor=0$. Thus $(2,2)$ is the unique nonnegative solution even though infinitely many signed solutions exist. Direct substitution checks the surviving pair, while completeness of the parameter family proves that no other pair was missed.

The same method handles bounds such as $0\le x\le H$ and $0\le y\le K$, with specified integer bounds $H,K$. Each inequality contributes an upper bound, a lower bound or a constant-coordinate test. If the combined lower bound is an integer $L$ and the upper bound an integer $U$, the permitted parameters are exactly $L,L+1,\ldots,U$ when $L\le U$, and none when $L>U$. There are $U-L+1$ in the first case. Without a finite upper or lower bound, the remaining interval may instead be infinite. Counting is justified only after taking this intersection, rather than by counting whichever coordinate first appeared convenient.

Chapter 9 returns to these families as affine lattices; the interval calculation here needs only integer inequalities.

<a id="section-517-counting-divisions-and-working-backward-from-the-gcd"></a>
## Counting divisions and working backward from the gcd {#section-519-counting-divisions-and-working-backward-from-the-gcd}

A division count needs a convention before inputs can be compared. Normalize signs and arrange $A\ge B\ge0$ without counting these operations as divisions. Count each Euclidean quotient step, including the final step whose remainder is zero. If $B=0$, perform no division. If $A=B>0$, exactly one division has quotient $1$ and remainder zero. These special cases will be kept separate from the theorem below, which assumes $A>B>0$.

Write the remainder sequence as $r_0=A$, $r_1=B$, ending with $r_D=g>0$ and $r_{D+1}=0$. There are $D$ divisions,
$$
r_{i-1}=q_i r_i+r_{i+1}\quad(1\le i\le D).
$$
For $i<D$, positivity and strict decrease give $q_i\ge1$. At the last step, $r_{D-1}>r_D$ and $r_D\mid r_{D-1}$, so $q_D\ge2$. The case $D=1$ satisfies this last inequality as well, since $A>B$.

Define $F_0=0$, $F_1=1$, and $F_{j+2}=F_{j+1}+F_j$. Working backward gives $r_D=g=F_2g$, $r_{D-1}\ge2g=F_3g$, and thereafter
$$
r_{i-1}=q_i r_i+r_{i+1}\ge r_i+r_{i+1}.
$$
Induction along the backward sequence yields $r_i\ge F_{D-i+2}g$ for $0\le i\le D$. In particular,
$$
B\ge F_{D+1}g,\qquad A\ge F_{D+2}g.
$$
This proves the relevant worst-case statement: many divisions force large initial remainders relative to their gcd.

Equality throughout is possible by taking all earlier quotients equal to $1$ and the last quotient equal to $2$. Starting backward from $g,0$ then produces precisely $(F_{D+2}g,F_{D+1}g)$. Conversely Euclidean division of that pair follows the Fibonacci recurrence and has exactly $D$ divisions. Thus consecutive Fibonacci inputs attain the componentwise smallest pair for a fixed positive gcd and division count. This formulation avoids claiming that every slightly larger nearby pair has the same count.

For a coarse logarithmic bound, $F_k\ge2^{(k-2)/2}$ for $k\ge2$. The bases $k=2,3$ hold, and $F_{k+2}=F_{k+1}+F_k\ge2F_k$ propagates the inequality separately along the even and odd indices. Therefore $B/g\ge2^{(D-1)/2}$ and
$$
D\le1+2\log_2(B/g).
$$
This is a bound on the number of divisions, not on elapsed time. Dividing large integers costs more than dividing small ones, and input encoding matters to a running-time theorem. No timing conclusion follows from the row count alone.

The final quotient condition explains why a trace containing many $1$s delays termination: each backward reconstruction then grows by only the sum of the next two remainders. A large quotient creates a larger predecessor for the same suffix length. The investigation's finite tables illustrate this proved comparison; they are not experimental evidence offered in place of the theorem.

<a id="section-547-verifying-a-table-without-trusting-its-discovery"></a>
## Verifying a table without trusting its discovery {#section-549-verifying-a-table-without-trusting-its-discovery}

A useful extended-Euclid table has two simultaneous readings. In the remainder columns, it is a finite decreasing chain terminating at zero. In the coefficient columns, it is a sequence of exact identities in the original inputs. A copied table can pass one reading and fail the other, for example if signs were normalized in the remainder columns but not in the coefficient columns. Verification must use the same original $a,b$ at every row.

At initialization, assign the row for $|a|$ coefficients $(\epsilon_a,0)$ and the row for $|b|$ coefficients $(0,\epsilon_b)$, with $\epsilon_0=1$. If the rows are swapped to put the larger remainder first, swap the entire rows, including coefficients. This makes $(0,-35)$ start from $(35,0)$ with coefficient rows $(0,-1)$ and $(1,0)$ relative to the original pair. The zero row is already present, so attempting an additional quotient would be an error rather than a missing table entry.

A quotient belongs to the new row it produces if that convention is declared. Specifically, a row labeled $q$ following rows $r_{i-1},r_i$ means $r_{i+1}=r_{i-1}-qr_i$, and its coefficients must use the identical update. Other layouts can be correct, but the reader should never have to guess whether a quotient labels its divisor row or its remainder row. The five reference tables below use the new-row convention.

The terminal zero row is useful evidence too. Its coefficient pair gives a homogeneous identity $0=sa+tb$. It is not a Bézout certificate for a positive gcd; that certificate is the preceding nonzero row. For $(84,30)$, the terminal identity is $0=5\cdot84-14\cdot30$, while the gcd identity is $6=-84+3\cdot30$. Mixing the two rows would erase the value the algorithm was supposed to find.

A shorter verifier for the final result checks $g>0$, $g\mid a$, $g\mid b$ and the final nonzero-row identity. A verifier of the algorithmic trace additionally checks all remainder ranges and row recurrences. These are compatible levels of assurance with different inputs. Neither requires a claim that the table was generated by a particular program, and neither converts a finite example into a proof of a runtime bound.

This separation prepares later arithmetic algorithms. Search can be elaborate while a certificate stays short; a failed certificate can be rejected by a few exact checks without diagnosing the search that produced it. Here the relationship is completely visible: well-ordering proves termination, linear identities preserve the arithmetic problem, and the final gcd certificate supports both divisibility tests and the complete family of linear-equation solutions.

<a id="section-561-exercises-zero-coefficients-and-a-reverse-euclidean-tra"></a>

## Summary

<a id="section-417-chapter-summary"></a>
Division supplies canonical remainders. Euclid preserves the common-divisor set while producing a strictly decreasing sequence. Back-substitution makes the gcd a certified linear combination, and Bezout converts coprimality into a usable equation. Linear Diophantine solvability and its full parameter family follow immediately.
<a id="section-418-signed-division-fixes-the-remainder-convention"></a>

## Exercises {#section-130-exercises-with-complete-solutions}

<a id="section-130-1-negative-division"></a>
### 1. Negative division {#section-132-1-negative-division}

Find quotient and remainder for $-101$ divided by $9$.

**Hint 1.** Choose the greatest multiple of nine not exceeding the input.

**Hint 2.** The canonical remainder must be nonnegative and smaller than nine.

<details><summary>Full solution</summary>

**Solution.** $-101=9(-12)+7$, and $0\le 7<9$. Hence $q=-12,r=7$.

</details>

<a id="section-144-2-uniqueness-detail"></a>
### 2. Uniqueness detail {#section-146-2-uniqueness-detail}

Why does $\lvert r-r'\rvert<m$ and $m\mid (r-r')$ imply $r=r'$?

**Hint 1.** Write the difference as an integer multiple of the modulus.

**Hint 2.** Any nonzero such multiple has absolute value at least the modulus.

<details><summary>Full solution</summary>

**Solution.** Write $r-r'=mk$. If $k\ne 0$, then $\lvert mk\rvert\ge m$, contradicting the strict bound. Thus $k=0$.

</details>

<a id="section-158-3-euclid-by-hand"></a>
### 3. Euclid by hand {#section-160-3-euclid-by-hand}

Compute $\gcd(1235,455)$.

**Hint 1.** Apply repeated division with decreasing remainders.

**Hint 2.** The last nonzero remainder is the gcd.

<details><summary>Full solution</summary>

**Solution.** $1235=2*455+325$, $455=325+130$, $325=2*130+65$, $130=2*65$. The gcd is $65$.

</details>

<a id="section-172-4-bezout-certificate"></a>
### 4. Bezout certificate {#section-174-4-bezout-certificate}

Find coefficients for the gcd in Exercise 3.

**Hint 1.** Back-substitute the Euclidean remainder equations.

**Hint 2.** Express each remainder as an integer combination of the original two inputs.

<details><summary>Full solution</summary>

**Solution.** $65=325-2*130=325-2(455-325)=3*325-2*455=3(1235-2*455)-2*455=3*1235-8*455$.

</details>

<a id="section-186-5-coprime-consecutive-integers"></a>
### 5. Coprime consecutive integers {#section-188-5-coprime-consecutive-integers}

Prove $\gcd(n,n+1)=1$.

**Hint 1.** A common divisor divides the difference of consecutive integers.

**Hint 2.** That difference is one.

<details><summary>Full solution</summary>

**Solution.** Any common divisor divides $(n+1)-n=1$; the positive gcd is therefore $1$.

</details>

<a id="section-200-6-consecutive-odd-integers"></a>
### 6. Consecutive odd integers {#section-202-6-consecutive-odd-integers}

Determine $\gcd(2n+1,2n+3)$.

**Hint 1.** A common divisor of the odd numbers divides their difference two.

**Hint 2.** An odd common divisor of two can only be one.

<details><summary>Full solution</summary>

**Solution.** The gcd divides their difference $2$ but both inputs are odd, so it cannot be $2$. It is $1$.

</details>

<a id="section-214-7-solve-an-equation"></a>
### 7. Solve an equation {#section-216-7-solve-an-equation}

Solve $35x+22y=1$.

**Hint 1.** Use extended Euclid to find one solution.

**Hint 2.** Every other solution differs by a multiple of the homogeneous solution vector.

<details><summary>Full solution</summary>

**Solution.** $35=22+13$, $22=13+9$, $13=9+4$, $9=2*4+1$. Back-substitution gives $1=8*22-5*35$. Thus $x=-5+22t$, $y=8-35t$.

</details>

<a id="section-228-8-unsolvable-equation"></a>
### 8. Unsolvable equation {#section-230-8-unsolvable-equation}

Explain why $18x+30y=7$ has no integer solution.

**Hint 1.** Every linear combination is divisible by the gcd of the coefficients.

**Hint 2.** That gcd does not divide seven.

<details><summary>Full solution</summary>

**Solution.** The gcd is $6$, which divides every left-hand value but not $7$.

</details>

<a id="section-242-9-count-bounded-solutions"></a>
### 9. Count bounded solutions {#section-244-9-count-bounded-solutions}

Find all nonnegative solutions to $4x+7y=39$.

**Hint 1.** Reduce the equation modulo four to constrain the second variable.

**Hint 2.** Then impose nonnegativity and the upper bound from the original equation.

<details><summary>Full solution</summary>

**Solution.** Modulo $4$, $3y\equiv 3$, so $y\equiv 1 \bmod 4$. The nonnegative possibilities below $39/7$ are $y=1,5$. They give $x=8,1$. Thus $(8,1)$ and $(1,5)$.

</details>

<a id="section-256-10-gcd-scaling"></a>
### 10. Gcd scaling {#section-258-10-gcd-scaling}

Prove $\gcd(ca,cb)=\lvert c\rvert\gcd(a,b)$ for nonzero $c$.

**Hint 1.** First factor the absolute value of the scaling integer from both inputs.

**Hint 2.** Use a Bezout identity for the unscaled gcd to prove the reverse universal divisibility.

<details><summary>Full solution</summary>

**Solution.** Let $g=\gcd(a,b)$. Then $\lvert c\rvert g$ divides both scaled inputs. A Bezout identity $ax+by=g$, multiplied by $c$, shows every common divisor of $ca,cb$ divides $cg$, hence divides $\lvert c\rvert g$. The universal property gives equality.

</details>

<a id="section-270-11-gcd-of-a-sum"></a>
### 11. Gcd of a sum {#section-272-11-gcd-of-a-sum}

Prove $\gcd(a,b)=\gcd(a,a+b)$.

**Hint 1.** Compare the two sets of common divisors.

**Hint 2.** Subtracting the first argument from the second recovers the old pair.

<details><summary>Full solution</summary>

**Solution.** Common divisors of $a,b$ divide $a+b$; common divisors of $a,a+b$ divide $(a+b)-a=b$. The common-divisor sets coincide.

</details>

<a id="section-284-12-pairwise-versus-collective-coprimality"></a>
### 12. Pairwise versus collective coprimality {#section-286-12-pairwise-versus-collective-coprimality}

Show $6,10,15$ have collective gcd $1$ but are not pairwise coprime.

**Hint 1.** Compute the collective gcd and each pairwise gcd separately.

**Hint 2.** Sharing different primes in different pairs does not force a common prime in all three.

<details><summary>Full solution</summary>

**Solution.** No prime divides all three, so their gcd is $1$. But the pairwise gcds are $2,3,5$, respectively. Collective coprimality cannot replace pairwise coprimality in every theorem.

</details>

<a id="section-298-13-a-product-lemma"></a>
### 13. A product lemma {#section-300-13-a-product-lemma}

If $\gcd(a,m)=\gcd(b,m)=1$, prove $\gcd(ab,m)=1$.

**Hint 1.** Multiply Bezout identities for the two inputs with the modulus.

**Hint 2.** The product expresses one as a multiple of the product plus a multiple of the modulus.

<details><summary>Full solution</summary>

**Solution.** Choose $ax+my=1$ and $bu+mv=1$. Multiplying gives $ab(xu)+m(axv+buy+myv)=1$, a Bezout certificate for $ab,m$.

</details>

<a id="section-312-14-inverse-uniqueness-preview"></a>
### 14. Inverse uniqueness preview {#section-314-14-inverse-uniqueness-preview}

If $ax\equiv 1 \bmod m$ and $ay\equiv 1 \bmod m$ with $\gcd(a,m)=1$, prove $x\equiv y \bmod m$.

**Hint 1.** Subtract the two inverse congruences.

**Hint 2.** Cancel the coefficient using its coprimality with the modulus.

<details><summary>Full solution</summary>

**Solution.** Subtraction gives $a(x-y)\equiv 0$. Euclid’s lemma, using $\gcd(a,m)=1$, gives $m\mid x-y$.

</details>

<a id="section-326-15-least-linear-combination"></a>
### 15. Least linear combination {#section-328-15-least-linear-combination}

For $a=18,b=30$, list the positive linear combinations below $20$ and identify the least.

**Hint 1.** Every combination is a multiple of six.

**Hint 2.** A Bezout calculation shows six itself is attained, so list its positive multiples below twenty.

<details><summary>Full solution</summary>

**Solution.** All combinations are multiples of $6$; $6=2*18-30$, $12= -18+30$, and $18=18$. Thus the positive values below $20$ are $6,12,18$, with least $6=\gcd(18,30)$.

</details>

<a id="section-340-16-lcm-relation"></a>
### 16. Lcm relation {#section-342-16-lcm-relation}

For positive $a,b$, prove $\gcd(a,b)\operatorname{lcm}(a,b)=ab$, using prime factorization.

**Hint 1.** Compare the prime exponent on both sides.

**Hint 2.** At each prime the minimum plus the maximum equals the sum.

<details><summary>Full solution</summary>

**Solution.** For every prime $p$, the exponent on the left is $\min(v_{p}(a),v_{p}(b))+\max(v_{p}(a),v_{p}(b))=v_{p}(a)+v_{p}(b)$, the exponent in $ab$. Unique factorization gives equality.

</details>

<a id="section-354-17-complexity-measure"></a>
### 17. Complexity measure {#section-356-17-complexity-measure}

Why can Euclid’s algorithm not cycle?

**Hint 1.** Track the successive nonnegative remainders.

**Hint 2.** Every nonzero remainder is strictly smaller than its predecessor.

<details><summary>Full solution</summary>

**Solution.** After each nonterminal division the new remainder is a nonnegative integer strictly smaller than the previous positive divisor. A cycle would force a strict decreasing chain to return to an earlier value, impossible.

</details>

<a id="section-368-18-three-variable-solvability"></a>
### 18. Three-variable solvability {#section-370-18-three-variable-solvability}

Let $a,b,c$ be integers, not all zero. Prove $ax+by+cz=d$ is solvable in integers exactly when $\gcd(a,b,c)\mid d$.

**Hint 1.** Apply the two-input gcd argument twice.

**Hint 2.** A Bezout identity for the three-input gcd proves sufficiency after multiplying by the desired quotient.

<details><summary>Full solution</summary>

**Solution.** If $a=b=0$, then $c\ne0$ and the equation reduces to $cz=d$, solvable exactly when $|c|\mid d$. Otherwise let $g_{1}=\gcd(a,b)>0$ and $g=\gcd(g_{1},c)$. Bezout twice expresses $g$ as an integer combination of $a,b,c$; multiply by $d/g$ for sufficiency. Necessity follows because $g$ divides every term.

</details>

<a id="section-382-19-certificate-verification"></a>
### 19. Certificate verification {#section-384-19-certificate-verification}

Verify the claimed certificate $1=17*38-11*59$.

**Hint 1.** Multiply the claimed coefficients by the inputs exactly.

**Hint 2.** The resulting value is not one, so distinguish a valid equality from an incorrectly labeled gcd certificate.

<details><summary>Full solution</summary>

**Solution.** Both products are $646$ and $649$, so their difference is $-3$, not $1$. The certificate is false. Euclid gives $59=38+21$, $38=21+17$, $21=17+4$, $17=4*4+1$, hence $1=14*38-9*59$.

</details>

<a id="section-396-20-parameter-completeness"></a>
### 20. Parameter completeness {#section-398-20-parameter-completeness}

Show the solutions to $6x+15y=3$ are $x=-2+5t$, $y=1-2t$.

**Hint 1.** Start from the displayed particular solution.

**Hint 2.** Subtract it from any solution, divide by three, and use coprimality of two and five.

<details><summary>Full solution</summary>

**Solution.** $6(-2)+15=3$, so the displayed pairs solve the equation. Conversely subtracting this solution gives $6(x+2)+15(y-1)=0$, or $2(x+2)=-5(y-1)$. Coprimality of $2,5$ gives $5\mid x+2$; write $x+2=5t$, then $y-1=-2t$.

</details>


<a id="section-411-investigation-an-auditable-extended-euclid-table"></a>

<a id="section-563-exercises-zero-coefficients-and-a-reverse-euclidean-tra"></a>
### 21. NTP-02-E21: the exceptional linear equations {#section-565-ntp-02-e21-the-exceptional-linear-equations}

Classify all integer solutions of $0x-35y=70$, $0x+0y=0$, and $0x+0y=1$. Explain why the usual gcd parametrization must treat the last two equations separately.

**Hint 1.** The first equation fixes y but leaves x free.

**Hint 2.** At the zero coefficient pair, distinguish an identity from an inconsistent constant equation.

<a id="section-571-ntp-02-e22-reconstruct-a-short-worst-case-pair"></a>
### 22. NTP-02-E22: reconstruct a short worst-case pair {#section-573-ntp-02-e22-reconstruct-a-short-worst-case-pair}

Under the division convention stated above, find the smallest positive inputs $A>B$ with gcd $2$ for which Euclid performs four divisions. Supply the remainder sequence and a Bézout certificate, and justify minimality using the backward inequalities.

**Hint 1.** Work backward from the final nonzero remainder two.

**Hint 2.** Use the smallest allowed quotients, remembering that the final exact quotient is at least two.

<a id="section-579-solutions-zero-coefficients-and-a-reverse-euclidean-tra"></a>

## Solutions: zero coefficients and a reverse Euclidean trace {#section-581-solutions-zero-coefficients-and-a-reverse-euclidean-tra}

<a id="section-581-ntp-02-e21-the-exceptional-linear-equations-solution"></a>
### NTP-02-E21: the exceptional linear equations — solution {#section-583-ntp-02-e21-the-exceptional-linear-equations-solution}

<details><summary>Full solution</summary>

The first equation fixes $y=-2$ and leaves $x$ arbitrary. The second holds for all $(x,y)\in\mathbb Z^2$, while the third holds for none. The last two have coefficients $(0,0)$, for which there is no positive gcd under the theorem's definition. Even if an algorithm declares $\gcd(0,0)=0$, division by that value is undefined, so the one-parameter formula cannot be applied.

</details>

<a id="section-589-ntp-02-e22-reconstruct-a-short-worst-case-pair-solution"></a>
### NTP-02-E22: reconstruct a short worst-case pair — solution {#section-591-ntp-02-e22-reconstruct-a-short-worst-case-pair-solution}

<details><summary>Full solution</summary>

For $D=4$, the inequalities give $A\ge F_6\cdot2=16$ and $B\ge F_5\cdot2=10$. The pair $(16,10)$ attains both bounds:
$$
16=10+6,\quad10=6+4,\quad6=4+2,\quad4=2\cdot2+0.
$$
There are four counted divisions. Back substitution gives $2=6-4=2\cdot6-10=2\cdot16-3\cdot10$. Since $2$ divides both inputs, this identity certifies their gcd as $2$. The lower bounds prove that no smaller first or second coordinate can have the stated gcd and division count.

</details>

<a id="section-601-solutions-five-signed-extended-euclid-tables"></a>

## Solutions: five signed extended-Euclid tables {#section-603-solutions-five-signed-extended-euclid-tables}

This is a complete bounded reference model for the original investigation “an auditable extended-Euclid table.” The original open prompt remains assigned as written. Every displayed value below is derived by exact integer identities; no program execution or timing observation is asserted. The five original input pairs are $(84,30)$, $(-84,30)$, $(0,-35)$, $(55,34)$ and $(56,34)$.

Normalize signs and sort the two nonnegative starting remainders, keeping their coefficient pairs attached. Each row records $r=sa+tb$ for the original signed inputs. A quotient on a new row is the quotient used with the two preceding rows to produce it. A dash marks a starting row. Count quotient rows, including the final zero row; normalizing signs or swapping rows is not a division.

<a id="section-607-pair-one-original-inputs-84-and-30"></a>
### Pair one: original inputs 84 and 30 {#section-609-pair-one-original-inputs-84-and-30}

| Row | Producing quotient | Remainder $r$ | $s$ | $t$ | Exact identity in the original inputs |
| --- | --- | --- | --- | --- | --- |
| 0 | — | 84 | 1 | 0 | $84=1\cdot84+0\cdot30$ |
| 1 | — | 30 | 0 | 1 | $30=0\cdot84+1\cdot30$ |
| 2 | 2 | 24 | 1 | -2 | $24=84-60$ |
| 3 | 1 | 6 | -1 | 3 | $6=-84+90$ |
| 4 | 4 | 0 | 5 | -14 | $0=420-420$ |

The divisions are $84=2\cdot30+24$, $30=24+6$ and $24=4\cdot6+0$. Each remainder is nonnegative and smaller than its divisor. For the coefficient update, row 2 is $(1,0)-2(0,1)=(1,-2)$; row 3 is $(0,1)-(1,-2)=(-1,3)$; row 4 is $(1,-2)-4(-1,3)=(5,-14)$. Thus all row identities follow both from their arithmetic entries and from the recurrence. There are three divisions, and the last positive row gives $\gcd(84,30)=6=-84+3\cdot30$.

<a id="section-619-pair-two-original-inputs-84-and-30"></a>
### Pair two: original inputs -84 and 30 {#section-621-pair-two-original-inputs-84-and-30}

| Row | Producing quotient | Remainder $r$ | $s$ | $t$ | Exact identity in the original inputs |
| --- | --- | --- | --- | --- | --- |
| 0 | — | 84 | -1 | 0 | $84=(-1)(-84)+0\cdot30$ |
| 1 | — | 30 | 0 | 1 | $30=0(-84)+1\cdot30$ |
| 2 | 2 | 24 | -1 | -2 | $24=84-60$ |
| 3 | 1 | 6 | 1 | 3 | $6=-84+90$ |
| 4 | 4 | 0 | -5 | -14 | $0=420-420$ |

The three remainder divisions are the same as in pair one. The coefficient updates now read $(-1,0)-2(0,1)=(-1,-2)$, $(0,1)-(-1,-2)=(1,3)$, and $(-1,-2)-4(1,3)=(-5,-14)$. The last positive row certifies $6=1(-84)+3(30)$. Retaining the positive-input coefficients $(-1,3)$ instead would give $174$, so the changed sign cannot be discarded merely because the gcd is unchanged.

<a id="section-631-pair-three-original-inputs-0-and-35"></a>
### Pair three: original inputs 0 and -35 {#section-633-pair-three-original-inputs-0-and-35}

| Row | Producing quotient | Remainder $r$ | $s$ | $t$ | Exact identity in the original inputs |
| --- | --- | --- | --- | --- | --- |
| 0 | — | 35 | 0 | -1 | $35=0\cdot0+(-1)(-35)$ |
| 1 | — | 0 | 1 | 0 | $0=1\cdot0+0(-35)$ |

Sign normalization and swapping produce these two starting rows. The second remainder is already zero, so there are no division rows and no coefficient updates. The positive gcd is $35$, with certificate $35=0(0)-1(-35)$. All divisors of $35$ divide zero, so the common-divisor condition agrees directly. An attempted quotient $35/0$ is invalid. This example is separate from the positive-input Fibonacci theorem. The unassigned pair $(0,0)$ would have no positive last row at all and needs the convention discussed earlier.

<a id="section-640-pair-four-original-inputs-55-and-34"></a>
### Pair four: original inputs 55 and 34 {#section-642-pair-four-original-inputs-55-and-34}

| Row | Producing quotient | Remainder $r$ | $s$ | $t$ | Exact identity in the original inputs |
| --- | --- | --- | --- | --- | --- |
| 0 | — | 55 | 1 | 0 | $55=55+0$ |
| 1 | — | 34 | 0 | 1 | $34=0+34$ |
| 2 | 1 | 21 | 1 | -1 | $21=55-34$ |
| 3 | 1 | 13 | -1 | 2 | $13=-55+68$ |
| 4 | 1 | 8 | 2 | -3 | $8=110-102$ |
| 5 | 1 | 5 | -3 | 5 | $5=-165+170$ |
| 6 | 1 | 3 | 5 | -8 | $3=275-272$ |
| 7 | 1 | 2 | -8 | 13 | $2=-440+442$ |
| 8 | 1 | 1 | 13 | -21 | $1=715-714$ |
| 9 | 2 | 0 | -34 | 55 | $0=-1870+1870$ |

Successive divisions are $55=34+21$, $34=21+13$, $21=13+8$, $13=8+5$, $8=5+3$, $5=3+2$, $3=2+1$, and $2=2\cdot1+0$. Every listed nonzero remainder is strictly smaller than the divisor. For rows 2 through 8, subtract the preceding coefficient pair from the pair two rows back; this gives successively $(1,-1),(-1,2),(2,-3),(-3,5),(5,-8),(-8,13),(13,-21)$. At row 9, $(-8,13)-2(13,-21)=(-34,55)$. Thus the invariant is verified at every row. There are eight divisions and the gcd certificate is $1=13\cdot55-21\cdot34$.

<a id="section-657-pair-five-original-inputs-56-and-34"></a>
### Pair five: original inputs 56 and 34 {#section-659-pair-five-original-inputs-56-and-34}

| Row | Producing quotient | Remainder $r$ | $s$ | $t$ | Exact identity in the original inputs |
| --- | --- | --- | --- | --- | --- |
| 0 | — | 56 | 1 | 0 | $56=56+0$ |
| 1 | — | 34 | 0 | 1 | $34=0+34$ |
| 2 | 1 | 22 | 1 | -1 | $22=56-34$ |
| 3 | 1 | 12 | -1 | 2 | $12=-56+68$ |
| 4 | 1 | 10 | 2 | -3 | $10=112-102$ |
| 5 | 1 | 2 | -3 | 5 | $2=-168+170$ |
| 6 | 5 | 0 | 17 | -28 | $0=952-952$ |

The divisions are $56=34+22$, $34=22+12$, $22=12+10$, $12=10+2$, and $10=5\cdot2+0$. The first four coefficient updates are $(1,-1),(-1,2),(2,-3),(-3,5)$; the final update is $(2,-3)-5(-3,5)=(17,-28)$. The displayed identities verify all rows directly. There are five divisions and the gcd is $2=-3\cdot56+5\cdot34$, which also divides both original inputs.

<a id="section-671-fibonacci-comparison-and-changed-case"></a>
### Fibonacci comparison and changed case {#section-673-fibonacci-comparison-and-changed-case}

With $F_0=0,F_1=1$, pair four is $(F_{10},F_9)=(55,34)$. The proved lower bounds with $D=8$ and $g=1$ are attained exactly. Its seven initial quotients equal $1$, and its terminal quotient is $2$. Pair five changes only the first original input by one, but its gcd becomes $2$ and its division count drops to five. This is a finite exact comparison, not a universal monotonicity claim about adjacent inputs or a timing benchmark.

As a changed-case check, reverse the original signed inputs of pair two to $(30,-84)$. The same normalized remainder chain still has three divisions, but every coefficient pair must swap its two entries. The gcd identity is now $6=3(30)+1(-84)$ and the terminal identity is $0=-14(30)-5(-84)$. A proposed answer that copies pair two's unswapped coefficients fails at the first row. More generally simultaneous multiplication of two nonzero inputs by a positive integer scales every remainder and the gcd, leaves the quotients and count unchanged, and preserves the coefficient pairs relative to the scaled inputs.

<a id="section-677-rubric-for-the-original-five-table-investigation"></a>
### Rubric for the original five-table investigation {#section-679-rubric-for-the-original-five-table-investigation}

A complete submission supplies five actual input pairs and all initial, intermediate and terminal rows, rather than five final gcds. Its negative and zero examples identify original signed inputs explicitly. Every row satisfies $r=sa+tb$ in those inputs; every quotient row satisfies both the remainder equation and $0\le r<\text{divisor}$. Initialization, any swap and the stopping rule are stated, so zero is never used as a divisor.

For the mathematical explanation, require the common-divisor invariant, the coefficient update and a positive last-row gcd certificate for each nonzero input pair. A transcription error can be located by the first failed row and repaired without claiming the whole algorithm is wrong. A changed sign with unchanged coefficient columns is a substantive certificate failure. A terminal zero row reported as the gcd is another substantive failure.

The comparison must state its division-count convention and include consecutive Fibonacci inputs, connect repeated quotient $1$ to the backward recurrence, and distinguish a proved count bound from measured runtime. Other five-pair choices can satisfy the open prompt; matching these particular numbers is not a grading requirement. No program is required by this investigation, and these paper tables make no execution claim.
