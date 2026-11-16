
# Diophantine Approximation and Transcendence Boundaries {#section-1-diophantine-approximation-and-transcendence-boundaries}

Every irrational number has rational approximations of order $1/q^{2}$; exceptionally accurate approximations can prove transcendence. The difficult boundary is quantitative: which constant, exponent, denominator range, and dependence on the number belong to the theorem?

This chapter assumes continued fractions, polynomial algebra, and elementary real analysis. It proves Dirichlet's approximation theorem and Liouville's inequality, constructs explicit transcendental numbers, and states stronger modern theorems with their exact logical scope.

<a id="section-5-1-measuring-rational-approximation"></a>
## 1. Measuring rational approximation {#section-7-1-measuring-rational-approximation}

For real $\alpha$ and rational $p/q$, $q>0$, the error is $\lvert \alpha-p/q\rvert$. Multiplying by $q$ gives the distance $\lvert q \alpha-p\rvert$ from $q \alpha$ to the integer $p$; minimizing over $p\in\mathbb Z$ gives the nearest-integer distance. Always reduce $p/q$: allowing artificial common factors makes denominator-based claims meaningless.

A finite decimal is rational and eventually has zero approximation error. Irrational numbers never equal $p/q$, so the question is how rapidly nonzero error can decay along infinitely many denominators.

<a id="section-11-2-dirichlet-s-theorem"></a>
## 2. Dirichlet's theorem {#section-13-2-dirichlet-s-theorem}

**Theorem 16.1.** For every real $\alpha$ and positive integer $N$, there are integers $p,q$ with $1\le q\le N$ such that

$\lvert q \alpha-p\rvert<1/N$.

**Proof.** Place the $N+1$ fractional parts of $0,\alpha,\ldots,N \alpha$ into $N$ half-open intervals of length $1/N$. Two lie in one interval. Their difference has the form $q \alpha-p$, with $1\le q\le N$, and absolute value less than $1/N$. $\square$

If $\alpha$ is irrational, applying the theorem for unbounded $N$ yields infinitely many reduced fractions satisfying

$\lvert \alpha-p/q\rvert<1/q^{2}$.

To justify “infinitely many,” note that finitely many nonzero errors have a positive minimum, contradicted by $\lvert q \alpha-p\rvert<1/N$ as $N$ grows.

<a id="section-25-3-continued-fractions-refine-the-theorem"></a>
## 3. Continued fractions refine the theorem {#section-27-3-continued-fractions-refine-the-theorem}

Convergents $p_{k}/q_{k}$ satisfy

$\lvert \alpha-p_{k}/q_{k}\rvert<1/(q_{k} q_{k+1})\le1/q_{k}^{2}$.

The size of the next partial quotient controls the improvement. From the exact tail formula, the error is comparable to $1/(a_{k+1}q_{k}^{2})$. Large partial quotients create unusually strong approximations.

A real irrational is **badly approximable** when some $c>0$ satisfies

\[\lvert \alpha-p/q\rvert>c/q^{2}\]

for every rational $p/q$. This holds exactly when its continued-fraction partial quotients are bounded. Quadratic irrationals are therefore badly approximable because their expansions are periodic.

<a id="section-39-4-algebraic-numbers-and-liouville-s-inequality"></a>
## 4. Algebraic numbers and Liouville's inequality {#section-41-4-algebraic-numbers-and-liouville-s-inequality}

A complex number is **algebraic** if it is a root of a nonzero integer polynomial; otherwise it is **transcendental**.

**Liouville inequality.** If real algebraic $\alpha$ has degree $d\ge 2$, then there is a constant $C(\alpha)>0$ such that every reduced $p/q \ne \alpha$ satisfies

$\lvert \alpha-p/q\rvert>C(\alpha)/q^d$.

**Proof.** Let $f \in \mathbb{Z}[x]$ be the minimal polynomial, of degree $d$. The rational-root denominator calculation gives $\lvert f(p/q)\rvert\ge 1/q^d$ when nonzero. Restrict to $p/q$ within one unit of $\alpha$; the mean value theorem gives

\[\lvert f(p/q)\rvert=\lvert f'(\xi)\rvert\lvert p/q-\alpha\rvert\le M\lvert p/q-\alpha\rvert\]

for a finite maximum $M$ of $\lvert f'\rvert$ on that compact interval. Hence the error is at least $1/(M q^d)$. Rationals outside the interval obey a fixed positive lower bound, which can be absorbed into $C$. $\square$

The constant depends on $\alpha$; the theorem does not say one universal $C$ works for all degree-$d$ numbers.

<a id="section-55-5-liouville-numbers"></a>
## 5. Liouville numbers {#section-57-5-liouville-numbers}

A **Liouville number** is a real number $\xi$ such that for every positive integer $n$, infinitely many rationals satisfy

$0<\lvert \xi-p/q\rvert<1/q^n$.

Liouville's inequality proves every Liouville number transcendental.

<a id="section-63-worked-construction"></a>
### Worked construction {#section-65-worked-construction}

Let

$L=\sum_{k\ge 1} 10^{-k!}$.

Truncate after $m$ terms. The rational truncation has denominator $q=10^{m!}$, while the tail is less than $2\cdot 10^{-(m+1)!}$. Since $(m+1)!=(m+1)m!$, the error is less than $2/q^{m+1}$. For any prescribed exponent $n$, choose $m>n$; then $2/q^{m+1}<1/q^n$ once $q^{m+1-n}>2$. The decimal has isolated ones at factorial positions and is not eventually periodic, so the error is nonzero. Thus $L$ is transcendental.

<a id="section-71-6-stronger-theorems-and-exact-status"></a>
## 6. Stronger theorems and exact status {#section-73-6-stronger-theorems-and-exact-status}

Liouville's exponent $d$ is not optimal. Roth's theorem states: for algebraic irrational $\alpha$ and every $\varepsilon>0$, only finitely many reduced rationals satisfy

$\lvert \alpha-p/q\rvert<1/q^{2+\varepsilon}$.

This is a proved deep theorem. The exponent $2$ cannot be replaced by anything smaller because Dirichlet supplies infinitely many $1/q^{2}$ approximations.

The numbers $e$ and $\pi$ are proved transcendental, but not by the Liouville-number criterion: their familiar expansions do not give arbitrarily high approximation exponents. Algebraic independence is stronger than individual transcendence; for example, it remains unknown whether $e+\pi$ is irrational. Do not turn absence of a proof into evidence of rationality.

<a id="section-81-7-irrationality-measure-and-claim-hygiene"></a>
## 7. Irrationality measure and claim hygiene {#section-83-7-irrationality-measure-and-claim-hygiene}

An irrationality measure describes exponents $\mu$ for which $\lvert \alpha-p/q\rvert<1/q^\mu$ has only finitely many solutions. Authors use slightly different infimum conventions, so define the convention before quoting a value.

Numerical digits never prove irrationality or transcendence. A computation can disprove a proposed low-height polynomial relation only inside its searched bounds. A theorem must quantify over all denominators or all integer polynomials in its scope.

<a id="section-87-exercises-with-complete-solutions"></a>
## Project: an approximation claim auditor {#section-316-project-an-approximation-claim-auditor}

For $\sqrt{2}$, the golden ratio, $e$, $\pi$, and the Liouville constant, generate exact rational approximants where possible and record $q^{2}\lvert \alpha-p/q\rvert$ with certified interval bounds. Separate proved symbolic bounds from floating estimates. For every conclusion, name its quantifiers: one approximation, infinitely many, all denominators up to a bound, or an asymptotic theorem. Explain why the experiment cannot certify transcendence for $e$ or $\pi$.

<a id="section-318-chapter-summary"></a>
## Quantifiers distinguish approximations from classifications {#section-323-quantifiers-distinguish-approximations-from-classificat}

An approximation assertion has several variables, and their order changes its meaning. Dirichlet's finite statement fixes a real $\alpha$ and then allows a pair $p,q$ to depend on the chosen positive integer $N$. It promises a denominator between $1$ and $N$, not the denominator $N$ itself. The inequality concerns $\lvert q\alpha-p\rvert$. After division by $q$, its right side becomes $1/(qN)$; because $q\le N$, this is at most $1/q^2$. Interchanging these inequalities would give a stronger assertion without a proof.

Reduction does not spoil the conclusion. Write $p=dp'$ and $q=dq'$ with $d>0$ and $\gcd(p',q')=1$. The rational value and its ordinary error are unchanged. Its reduced denominator satisfies $q'\le q\le N$, so an error less than $1/(qN)$ is also less than $1/(q')^2$. For irrational $\alpha$, different applications cannot remain forever within a finite list of reduced fractions. Their positive ordinary errors would have a minimum $\eta$, whereas Dirichlet supplies ordinary error less than $1/N$. Choosing $N>1/\eta$ contradicts that minimum. Thus the finite theorem really produces infinitely many distinct reduced approximations.

There is a second useful formulation. For any fixed denominator bound $Q$, only finitely many reduced fractions of denominator at most $Q$ lie within distance one of a fixed real number: each denominator admits only finitely many numerators in that interval. Consequently an infinite family of distinct sufficiently close fractions has unbounded reduced denominators. This fact justifies taking a denominator beyond a threshold in a later contradiction. “Infinitely many” alone would not justify that step if unreduced representations of the same fraction were being counted.

A badly approximable number has a different quantifier order: there exists one positive constant, depending on $\alpha$, that works for every reduced rational. A Liouville number allows the exponent to be prescribed first and then supplies infinitely many successful rationals for that exponent. Its approximants may depend on the exponent. Neither definition requires one fraction to satisfy every exponent simultaneously. A single positive error cannot do so when its denominator exceeds one.

For a concrete distinction, $\lvert\sqrt2-17/12\rvert<12^{-2}$ is one certified success. Dirichlet gives infinitely many successes of that order. A lower bound $c/q^2$ for every rational would limit their possible accuracy without contradicting either assertion. The constants can lie on opposite sides of the actual errors. Statements about upper and lower bounds should therefore name both their quantifiers and their constants before they are compared.

<a id="section-333-the-continued-fraction-tail-gives-an-exact-error-scale"></a>
## The continued-fraction tail gives an exact error scale {#section-335-the-continued-fraction-tail-gives-an-exact-error-scale}

Use the continued-fraction notation of the earlier chapter: $\alpha=[a_0;a_1,a_2,\ldots]$ is irrational, $a_j$ is a positive integer for $j\ge1$, and $p_k/q_k$ is its $k$th convergent. Set $q_{-1}=0$ and $q_0=1$. The determinant identity and the exact tail expression already proved there give
\[
\alpha=\frac{p_k\alpha_{k+1}+p_{k-1}}{q_k\alpha_{k+1}+q_{k-1}},
\qquad
\left|\alpha-\frac{p_k}{q_k}\right|
=\frac{1}{q_k(q_k\alpha_{k+1}+q_{k-1})},
\]
where $\alpha_{k+1}=[a_{k+1};a_{k+2},\ldots]$. Subtract the two fractions to see why the determinant of magnitude one, rather than an unspecified small numerator, appears in the second identity.

The tail lies strictly between $a_{k+1}$ and $a_{k+1}+1$. Also $0\le q_{k-1}/q_k\le1$; the possible initial equality of two denominators causes no problem. Dividing the denominator above by $q_k^2$ therefore yields
\[
\frac{1}{a_{k+1}+2}
<
q_k^2\left|\alpha-\frac{p_k}{q_k}\right|
<
\frac{1}{a_{k+1}}.
\]
These are explicit bounds behind the earlier word “comparable.” The next partial quotient, rather than the number of decimal digits in a display, controls the normalized error. The denominator recurrence $q_{k+1}=a_{k+1}q_k+q_{k-1}$ also recovers the sharper upper bound $1/(q_kq_{k+1})$, because the tail is strictly greater than $a_{k+1}$.

For $\sqrt2=[1;2,2,\ldots]$, the convergent $7/5$ has next partial quotient two, so its normalized error lies between $1/4$ and $1/2$. Rationalization gives the more informative exact expression
\[
25\left(\sqrt2-\frac75\right)=\frac{5}{5\sqrt2+7}.
\]
The denominator is between $14$ and $15$, using $7/5<\sqrt2<8/5$, so the expression lies between $1/3$ and $5/14$. Every inequality here follows from integer squares and positive denominators. No cancellation-prone subtraction of rounded decimals is needed.

This tail calculation concerns convergents. It does not by itself assert that every rational is a convergent, nor that convergents minimize ordinary error among every denominator range. The earlier chapter proves the distinct second-kind comparison for $\lvert q\alpha-p\rvert$ and Legendre's recognition criterion. Keeping those statements separate prevents a change of error function from being hidden inside the word “best.”

<a id="section-362-why-bounded-partial-quotients-control-every-rational"></a>
## Why bounded partial quotients control every rational {#section-364-why-bounded-partial-quotients-control-every-rational}

Here is a proof of the badly-approximable characterization using the earlier chapter's locally proved Legendre criterion. Its precise interface is: if $\alpha$ is real irrational, $p/q$ is reduced with $q>0$, and $\lvert\alpha-p/q\rvert<1/(2q^2)$, then $p/q$ is a convergent. That chapter derives the criterion from determinant and denominator arguments independently of the present chapter. We use the criterion, not a converse to it.

Suppose all positive-index partial quotients are at most an integer $A\ge1$. The exact tail estimate gives error greater than $1/((A+2)q^2)$ at every convergent. Consider any reduced rational $p/q$. If its error is less than $1/(2q^2)$, Legendre identifies it as a convergent, so the tail lower bound applies. If its error is at least $1/(2q^2)$, it already has a uniform lower bound. In both branches the single constant
\[
c=\frac{1}{2(A+2)}
\]
gives $\lvert\alpha-p/q\rvert>c/q^2$. Choosing a smaller constant than the intermediate bounds handles the strict inequality in the definition, including an error exactly equal to the Legendre threshold.

Conversely, suppose the positive-index partial quotients are unbounded. For any proposed $c>0$, choose $a_{k+1}>1/c$. Its convergent satisfies $q_k^2\lvert\alpha-p_k/q_k\rvert<1/a_{k+1}<c$. Thus that proposed constant fails. This direction uses only the tail identity. It does not require a classification of all good rationals or a limiting distribution of partial quotients.

For the golden ratio $\varphi=[1;1,1,\ldots]$, this proof supplies the usable constant $1/6$. It is not offered as the largest possible constant. The purpose is to establish existence with all quantifiers intact. For $\sqrt2$, taking $A=2$ supplies $1/8$. A sharper constant can be interesting, but replacing an existence proof by an unsupported optimal value would lose the actual argument.

A finite list of small partial quotients cannot establish boundedness of the infinite sequence. Conversely, one large partial quotient refutes a particular proposed lower constant if its reciprocal is small enough; it does not prove the sequence is unbounded. This asymmetry explains why continued fractions are powerful sources of certificates while finite computations still have a limited logical scope. Periodicity of quadratic irrational continued fractions is the earlier chapter's explicitly identified Lagrange theorem; once that theorem is available, periodicity gives boundedness and the present elementary implication completes the badly-approximable conclusion.

<a id="section-378-integer-polynomial-values-turn-local-continuity-into-a-"></a>
## Integer polynomial values turn local continuity into a lower bound {#section-380-integer-polynomial-values-turn-local-continuity-into-a-}

Liouville's inequality joins an arithmetic discreteness argument to a local analytic estimate. Let $f(x)=c_dx^d+\cdots+c_0$ be an integer minimal polynomial for a real algebraic irrational $\alpha$. For a reduced fraction $p/q$, multiplying $f(p/q)$ by $q^d$ produces the integer $\sum_{j=0}^dc_jp^jq^{d-j}$. It is nonzero: otherwise the irreducible polynomial of degree at least two would have a rational root. A nonzero integer has absolute value at least one, so $\lvert f(p/q)\rvert\ge q^{-d}$.

On the compact interval $[\alpha-1,\alpha+1]$, let $M$ be the maximum of $\lvert f'\rvert$. It is finite by continuity and positive because a nonconstant polynomial cannot have identically zero derivative over the real numbers. For a rational in this interval, the mean value theorem gives $\lvert f(p/q)\rvert\le M\lvert p/q-\alpha\rvert$. The two estimates combine to give error at least $1/(Mq^d)$. For a rational outside this closed interval the error is greater than one. Therefore the explicit choice
\[
C=\min\left\{\frac12,\frac{1}{2M}\right\}
\]
makes the chapter's strict inequality true in both regions. The factor two supplies slack; it is not an optimization.

Take $\alpha=\sqrt2$ and $f(x)=x^2-2$. On the indicated compact interval, $\lvert f'(x)\rvert=2|x|\le2(\sqrt2+1)<5$. Thus error at least $1/(5q^2)$ holds in the near region, and $C=1/10$ gives a strict global lower bound after including the far region. This bound is weaker than some continued-fraction constants but has a completely different origin. It works without identifying any convergent.

For $\alpha=\sqrt2+\sqrt3$, the displayed quartic gives a lower bound with exponent four even before proving that the degree is exactly four. By the monic rational-root test its only possible rational roots are $1$ and $-1$, and substitution gives $-8$ at both, so it has no rational roots. One may apply the same integer-value argument whenever the chosen polynomial has no rational roots and vanishes at $\alpha$. If a chosen polynomial also vanishes at some rational, that rational must be excluded from this argument and handled separately. Minimal polynomials avoid that extra branch. A polynomial's degree is therefore a safe upper bound for this method's exponent under the stated nonvanishing condition; it is not automatic evidence of the algebraic degree.

The constant depends on the polynomial and the real number through its neighborhood. There is no passage here to a uniform constant across all algebraic numbers of bounded degree. The proof also gives a lower bound for all rational approximations, whereas Dirichlet supplies upper bounds along a chosen infinite family. Those two roles are compatible: they constrain how accurate that family can be.

<a id="section-394-factorial-gaps-give-positive-tails-and-a-transcendence-"></a>
## Factorial gaps give positive tails and a transcendence proof {#section-396-factorial-gaps-give-positive-tails-and-a-transcendence-}

The factorial construction can be justified without inferring irrationality from a decimal picture. Put
\[
L_m=\sum_{j=1}^m10^{-j!}=\frac{P_m}{Q_m},
\qquad Q_m=10^{m!},
\]
and take $m\ge2$. The integer $P_m$ ends in the digit one: the last summand contributes one after multiplication by $Q_m$, and every earlier summand contributes a multiple of ten. Thus $\gcd(P_m,10)=1$, which makes this the reduced denominator. In particular the denominators grow without bound and the fractions are distinct.

Every omitted summand is positive. The first has size $10^{-(m+1)!}$. The later factorial exponents are distinct larger integers, so comparison with all larger decimal powers gives
\[
10^{-(m+1)!}<L-L_m
<
\sum_{r=(m+1)!}^{\infty}10^{-r}
=\frac{10}{9}10^{-(m+1)!}
<\frac{2}{Q_m^{m+1}}.
\]
The first inequality is strict because further terms remain. The middle inequality is strict because many integer exponents are absent. The geometric majorant is deliberately simple and uniform in $m$.

Suppose for contradiction that $L=a/b$ with positive integer $b$. Since $L-L_m>0$, the numerator $aQ_m-bP_m$ is a nonzero integer. Hence $L-L_m\ge1/(bQ_m)$. The tail upper bound would imply $Q_m^m<2b$. But $Q_m^m=10^{m\,m!}$ tends to infinity. Choosing $m$ large enough contradicts that fixed bound. This proves irrationality and simultaneously explains why positivity of the tail matters: a zero tail would destroy the integer-separation argument.

Now prescribe a positive integer exponent $n$. For every sufficiently large $m>n$, the same tail estimate gives $0<L-L_m<Q_m^{-n}$. There are infinitely many such $m$, their fractions are reduced and distinct, and their denominators are unbounded. This proves exactly the Liouville quantifiers. It supplies more than one extraordinarily accurate finite approximation; it supplies a family for each requested exponent.

Finally suppose $L$ were algebraic of degree $d\ge2$. Its Liouville lower bound would give $C/Q_m^d<L-L_m$. Choose the Liouville exponent $d+1$ and an approximant with $Q_m>1/C$. The upper bound $Q_m^{-(d+1)}$ is then smaller than $C/Q_m^d$, a contradiction. Rational degree one has already been excluded by the preceding integer-separation argument. This completes the transcendence proof without leaving a gap between “not algebraic irrational” and “not algebraic.”

Large gaps in an expansion do not automatically prove this conclusion. The argument used exact positive tails, reduced denominators, and an exponent tending to infinity. Replacing factorial positions by a less sparse sequence requires recalculating that exponent; an attractive decimal pattern cannot replace those estimates.

<a id="section-421-finite-analytic-expansions-also-produce-exact-certifica"></a>
## Finite analytic expansions also produce exact certificates {#section-423-finite-analytic-expansions-also-produce-exact-certifica}

An exact rational enclosure can come from analysis as well as from an algebraic equation. Using the standard series definition $e=\sum_{j=0}^{\infty}1/j!$, write $S_N=\sum_{j=0}^N1/j!$ for $N\ge1$. In the omitted tail, $(N+r)!\ge N!(N+1)^r$ for $r\ge1$, with strict inequality for $r\ge2$. Therefore
\[
0<e-S_N<\frac{1}{N!}\sum_{r=1}^{\infty}(N+1)^{-r}
=\frac{1}{N\,N!}.
\]
Both endpoints $S_N$ and $S_N+1/(N\,N!)$ are rational. This is a proved interval, independent of how a decimal calculator rounds $e$.

There is a similarly finite construction for $\pi$. Elementary integration gives $\int_0^1(1+x^2)^{-1}\,dx=\arctan(1)=\pi/4$. The finite geometric identity
\[
\frac{1}{1+x^2}
=\sum_{j=0}^m(-1)^jx^{2j}
+\frac{(-1)^{m+1}x^{2m+2}}{1+x^2}
\]
is an exact polynomial division with a remainder. On $0<x<1$ the remainder has the displayed sign. Integrating shows that $S^{\mathrm{atan}}_m=\sum_{j=0}^m(-1)^j/(2j+1)$ is a strict upper bound for $\pi/4$ when $m$ is even and a strict lower bound when $m$ is odd. No interchange of an infinite series and an integral is needed. Taking consecutive truncations produces two rational endpoints.

If $\alpha$ is enclosed by $a<\alpha<b$, with rational $a,b$, and $p/q<a$, then
\[
q^2(a-p/q)<q^2|\alpha-p/q|<q^2(b-p/q).
\]
If $p/q>b$, reverse the subtraction: the endpoints become $q^2(p/q-b)$ and $q^2(p/q-a)$. If the interval straddles $p/q$, it supplies only the lower bound zero unless further information separates them. A positive certified lower endpoint is useful evidence that the error is nonzero; merely printing several equal decimal digits is not.

These constructions certify individual inequalities. Their accuracy can be improved by taking more terms, but no finite choice establishes that the target cannot be a root of any integer polynomial. A transcendence conclusion needs a theorem that controls infinitely many approximations or a separate transcendence theorem. The logical issue survives even when the rational interval is extremely narrow.

<a id="section-446-roth-s-theorem-has-a-precise-imported-boundary"></a>
## Roth's theorem has a precise imported boundary {#section-448-roth-s-theorem-has-a-precise-imported-boundary}

The deep result used here is Roth's theorem in its real approximation form. For each algebraic irrational $\alpha$ and each fixed $\varepsilon>0$, only finitely many reduced fractions $p/q$, with $q>0$, satisfy $|\alpha-p/q|<q^{-2-\varepsilon}$. Roth's original paper proves the equivalent statement that an exponent greater than two cannot admit infinitely many such approximations to an algebraic irrational. Its proof is imported, not supplied by the elementary polynomial argument above.

For a fixed pair $\alpha,\varepsilon$, finiteness implies existence of a denominator threshold beyond which no exceptions occur. This formulation does not furnish a numerical threshold or an algorithm for finding the last exception. Nor can $\varepsilon$ be allowed to vary with the denominator without a new argument. The statement with one fixed positive $\varepsilon$ has stronger content than any finite table and less quantitative content than an explicit bound for all denominators.

Dirichlet and Roth meet at exponent two without contradiction. Every irrational has infinitely many error bounds below $q^{-2}$, including algebraic irrationals. Roth rules out infinitely many successes below $q^{-2-\varepsilon}$ for algebraic irrationals. It does not assert a uniform lower constant at exponent two. Badly approximable numbers satisfy that stronger constant-bound property, but Roth does not prove that all algebraic irrationals do.

Conversely, an irrational with infinitely many approximations at one fixed exponent greater than two is transcendental by Roth. Being Liouville is a stronger property: every positive integer exponent has infinitely many witnesses. The elementary Liouville inequality already proves transcendence in that case, so invoking Roth would obscure the simpler argument.

The known individual transcendence of $e$ and $\pi$, mentioned earlier, is separate imported background; none of the finite interval calculations in this chapter proves it. The open-status example about $e+\pi$ concerns a different number and a weaker property. A July 2026 author research abstract in the University of Alabama repository still identifies its irrationality as an open problem. That dated status check is not a new theorem or an endorsement of every attempted approach. It records the evidence behind retaining the original exercise's answer while making the date and source inspectable.

<a id="section-458-an-irrationality-measure-records-exponents-without-deci"></a>
## An irrationality measure records exponents without deciding its endpoint {#section-460-an-irrationality-measure-records-exponents-without-deci}

For an irrational real $\alpha$, fix the convention
\[
\mu(\alpha)=\sup\{\nu>0:\text{ infinitely many reduced }p/q,\ q>0,\ 
|\alpha-p/q|<q^{-\nu}\}.
\]
The approximations are distinct rational values. With irrationality their errors are automatically positive. The exponent set is downward closed: if an exponent $\nu$ has infinitely many witnesses and $0<\lambda<\nu$, then all witnesses with $q>1$ also satisfy the weaker $\lambda$ inequality. Removing the finitely many possible small denominators does not remove infinitude.

Dirichlet shows that exponent two belongs to this set, so $\mu(\alpha)\ge2$. For an algebraic irrational, Roth excludes every exponent greater than two, hence $\mu(\alpha)=2$. This conclusion concerns the supremum and does not produce a badly-approximable constant. Even if every exponent above two has only finitely many witnesses, their finite exceptional sets can depend on the exponent.

The elementary constant bound for a badly approximable number also proves its measure is two, without Roth. If $|\alpha-p/q|>c/q^2$, then for a fixed $\varepsilon>0$ the stronger upper bound $q^{-2-\varepsilon}$ is impossible once $q^\varepsilon>1/c$. Only finitely many smaller denominators can remain. Dirichlet supplies the other inequality. This argument exhibits a threshold from a known $c$, while the qualitative imported theorem does not supply such numerical data.

The factorial construction has measure infinity because every integer exponent has infinitely many witnesses. Conversely, an irrational of infinite measure satisfies the Liouville definition: for a prescribed positive integer $n$, choose an exponent $\nu>n$ from the unbounded exponent set. Its infinitely many witnesses with $q>1$ obey the weaker $q^{-n}$ bound. Thus infinite measure and the stated Liouville property agree for irrational real numbers.

A supremum alone does not tell whether its finite endpoint belongs to the defining set. At endpoint two, Dirichlet supplies that information independently; for another proposed endpoint a separate argument is required. Neither a finite set of normalized errors nor an estimate based on a short decimal string can determine this supremum over infinitely many rational inequalities. No value of the measure of $e$ or $\pi$ is inferred here.

<a id="section-475-solutions-completing-two-original-approximation-argumen"></a>

## Summary

<a id="section-320-chapter-summary"></a>
Dirichlet guarantees universal order-two rational approximation, and continued fractions identify canonical witnesses. Algebraic numbers obey polynomial-derived lower bounds; Liouville numbers violate every fixed algebraic-degree bound and are transcendental. Roth sharpens the algebraic boundary, while numerical evidence and individual transcendence do not settle algebraic relations such as $e+\pi$.
<a id="section-321-quantifiers-distinguish-approximations-from-classificat"></a>

## Exercises {#section-89-exercises-with-complete-solutions}

<a id="section-89-1-pigeonhole-approximation"></a>
### 1. Pigeonhole approximation {#section-91-1-pigeonhole-approximation}

Apply Dirichlet with $\alpha=\sqrt{2}$ and $N=5$ by inspecting fractional parts.

**Hint 1.** Inspect the fractional parts of successive multiples up to the stated bound.

**Hint 2.** A close pair supplies a positive denominator difference and an integer numerator difference.

<details><summary>Full solution</summary>

**Solution.** The convergent $7/5$ gives $\lvert 5\sqrt{2}-7\rvert<1/5$; indeed squaring shows $7/5<\sqrt{2}<3/2$, and direct rationalization gives $5\sqrt{2}-7=1/(5\sqrt{2}+7)<1/14<1/5$.

</details>

<a id="section-103-2-convert-the-error"></a>
### 2. Convert the error {#section-105-2-convert-the-error}

If $\lvert q \alpha-p\rvert<1/N$ and $q>0$, what bound holds for $\lvert \alpha-p/q\rvert$?

**Hint 1.** Divide the absolute-value inequality by the positive denominator.

**Hint 2.** The bound becomes one divided by the product of the two positive parameters.

<details><summary>Full solution</summary>

**Solution.** Divide by $q$: the error is less than $1/(qN)$.

</details>

<a id="section-117-3-infinite-approximants"></a>
### 3. Infinite approximants {#section-119-3-infinite-approximants}

Why does irrationality matter when deriving infinitely many approximations?

**Hint 1.** For any fixed positive denominator, an irrational multiple has positive distance from the nearest integer.

**Hint 2.** Finitely many denominators therefore cannot meet arbitrarily small error bounds.

<details><summary>Full solution</summary>

**Solution.** For an irrational, every error is positive, so a finite set has positive minimum. A rational has an exact zero-error representation that can satisfy all later bounds without producing new reduced fractions.

</details>

<a id="section-131-4-a-convergent-error"></a>
### 4. A convergent error {#section-133-4-a-convergent-error}

Verify $\lvert \sqrt{2}-17/12\rvert<1/12^{2}$.

**Hint 1.** Use the norm identity seventeen squared minus twice twelve squared equals one.

**Hint 2.** Rationalise the approximation error and bound the conjugate factor below.

<details><summary>Full solution</summary>

**Solution.** Since $17^{2}-2*12^{2}=1$, rationalization gives $17/12-\sqrt{2}=1/[12(17+12\sqrt{2})]<1/(12*12)=1/144$.

</details>

<a id="section-145-5-bounded-partial-quotients"></a>
### 5. Bounded partial quotients {#section-147-5-bounded-partial-quotients}

Why is $\sqrt{2}$ badly approximable?

**Hint 1.** Its periodic continued fraction has every later entry equal to two.

**Hint 2.** The bounded-partial-quotient theorem supplies the uniform lower approximation bound.

<details><summary>Full solution</summary>

**Solution.** Its continued fraction $[1;\overline{2}]$ has bounded partial quotients. The continued-fraction criterion therefore supplies a positive $c$ below every scaled error $q^{2}\lvert \sqrt{2}-p/q\rvert$.

</details>

<a id="section-159-6-minimal-polynomial-denominator"></a>
### 6. Minimal-polynomial denominator {#section-161-6-minimal-polynomial-denominator}

For $f(x)=x^{2}-2$, show nonzero $f(p/q)$ has absolute value at least $1/q^{2}$ for reduced $p/q$.

**Hint 1.** Clear the squared denominator in the polynomial value.

**Hint 2.** A nonzero integer numerator has absolute value at least one.

<details><summary>Full solution</summary>

**Solution.** $f(p/q)=(p^{2}-2q^{2})/q^{2}$; its nonzero numerator is an integer of absolute value at least one.

</details>

<a id="section-173-7-liouville-for-sqrt-2"></a>
### 7. Liouville for $\sqrt{2}$ {#section-175-7-liouville-for-sqrt-2}

State the resulting degree-two lower bound.

**Hint 1.** Use the minimal-polynomial lower bound near the root.

**Hint 2.** The derivative or explicit conjugate factor bounds the other factor on a fixed neighborhood.

<details><summary>Full solution</summary>

**Solution.** On a fixed compact interval around $\sqrt{2}$, $\lvert f'(x)\rvert=2\lvert x\rvert$ is bounded by $M$; hence $\lvert \sqrt{2}-p/q\rvert\ge 1/(M q^{2})$ for nearby rationals, with farther rationals absorbed by reducing the constant.

</details>

<a id="section-187-8-algebraic-closure-example"></a>
### 8. Algebraic closure example {#section-189-8-algebraic-closure-example}

Prove $\sqrt{2}+\sqrt{3}$ is algebraic.

**Hint 1.** Square once to isolate the square root of six.

**Hint 2.** Square again to obtain a polynomial with integer coefficients.

<details><summary>Full solution</summary>

**Solution.** Let $x$ be the sum. Then $x^{2}=5+2\sqrt{6}$, so $(x^{2}-5)^{2}=24$. Thus $x$ is a root of $x^{4}-10x^{2}+1$.

</details>

<a id="section-201-9-degree-caution"></a>
### 9. Degree caution {#section-203-9-degree-caution}

Does the polynomial in Exercise 8 prove the degree is four?

**Hint 1.** Being a root of a degree-four polynomial is an upper degree bound.

**Hint 2.** Irreducibility or a separate lower-bound argument is needed for exact degree.

<details><summary>Full solution</summary>

**Solution.** It proves degree at most four. Exact degree also requires irreducibility of the polynomial over $Q$.

</details>

<a id="section-215-10-liouville-tail"></a>
### 10. Liouville tail {#section-217-10-liouville-tail}

Bound the tail after the $m$th term of $L$.

**Hint 1.** The first omitted decimal position is the next factorial exponent.

**Hint 2.** Bound the remaining positive terms by a geometric series.

<details><summary>Full solution</summary>

**Solution.** The first omitted term is $10^{-(m+1)!}$; later exponents grow, so the tail is bounded by the geometric comparison $10^{-(m+1)!}(1+1/10+\ldots)<2\cdot 10^{-(m+1)!}$.

</details>

<a id="section-229-11-nonperiodicity"></a>
### 11. Nonperiodicity {#section-231-11-nonperiodicity}

Why is the Liouville decimal irrational?

**Hint 1.** The nonzero digits have unbounded gaps but occur infinitely often.

**Hint 2.** An eventually periodic nonzero tail has bounded gaps between repeated nonzero digits.

<details><summary>Full solution</summary>

**Solution.** Gaps between successive nonzero digits grow without bound. An eventually periodic decimal that is not eventually zero has bounded gaps between recurring nonzero positions; this decimal is also not eventually zero.

</details>

<a id="section-243-12-transcendence-implication"></a>
### 12. Transcendence implication {#section-245-12-transcendence-implication}

Why does the Liouville property contradict algebraicity?

**Hint 1.** Choose an approximation exponent larger than the proposed algebraic degree.

**Hint 2.** The Liouville lower bound then contradicts the arbitrarily accurate rational truncations.

<details><summary>Full solution</summary>

**Solution.** If the degree were $d$, Liouville's inequality would impose $C/q^d$. Choosing exponent $d+1$ supplies infinitely many errors below $1/q^{d+1}$, eventually smaller than $C/q^d$.

</details>

<a id="section-257-13-roth-boundary"></a>
### 13. Roth boundary {#section-259-13-roth-boundary}

Why can Roth's exponent not be improved below two?

**Hint 1.** Continued fractions provide infinitely many approximations at quadratic order.

**Hint 2.** A stronger universal lower bound with exponent below two would contradict those approximations.

<details><summary>Full solution</summary>

**Solution.** Dirichlet gives every irrational infinitely many reduced approximations with error below $1/q^{2}$, so a theorem asserting finiteness already at an exponent less than or equal to two would fail.

</details>

<a id="section-271-14-digits-are-not-proof"></a>
### 14. Digits are not proof {#section-273-14-digits-are-not-proof}

Why do a trillion apparently nonperiodic digits not prove irrationality?

**Hint 1.** A finite prefix is compatible with an eventually periodic continuation.

**Hint 2.** Only a property controlling the entire expansion can prove irrationality this way.

<details><summary>Full solution</summary>

**Solution.** A rational decimal can have an arbitrarily long nonrepeating prefix before becoming periodic. Irrationality quantifies over the entire infinite expansion or all rational representations.

</details>

<a id="section-285-15-transcendental-versus-independent"></a>
### 15. Transcendental versus independent {#section-287-15-transcendental-versus-independent}

If $\alpha,\beta$ are transcendental, must $\alpha+\beta$ be transcendental?

**Hint 1.** Choose beta to be the negative of alpha.

**Hint 2.** Both summands remain transcendental but their sum is zero.

<details><summary>Full solution</summary>

**Solution.** No. Take $\beta=-\alpha$ for transcendental $\alpha$; then both are transcendental, while their sum is the algebraic number zero.

</details>

<a id="section-299-16-open-status-audit"></a>
### 16. Open-status audit {#section-301-16-open-status-audit}

What is currently justified about $e+\pi$ in this chapter?

**Hint 1.** Use only the chapter's explicitly identified status boundary.

**Hint 2.** Individual transcendence of two numbers does not decide the arithmetic nature of their sum.

<details><summary>Full solution</summary>

**Solution.** No claim of rationality or irrationality is justified; its irrationality remains open. The individual transcendence of $e$ and $\pi$ does not decide their sum.

</details>


<a id="section-314-project-an-approximation-claim-auditor"></a>

<a id="section-487-exercises-finite-evidence-and-factorial-denominators"></a>
### 17. NTP-13-E17 — A reduced factorial truncation {#section-489-ntp-13-e17-a-reduced-factorial-truncation}

For $L=\sum_{j\ge1}10^{-j!}$, use the truncation $110001/10^6$. Prove that its denominator is reduced, enclose $10^{12}|L-110001/10^6|$ between two positive rational numbers using the next factorial position, and state exactly which quantifier your result establishes.

**Hint 1.** The numerator is coprime to ten, so it is coprime to the denominator.

**Hint 2.** The next omitted exponent is twenty-four; a geometric bound controls all later terms.

<a id="section-495-ntp-13-e18-a-lower-constant-from-bounded-partial-quotie"></a>
### 18. NTP-13-E18 — A lower constant from bounded partial quotients {#section-497-ntp-13-e18-a-lower-constant-from-bounded-partial-quotie}

An irrational has all positive-index partial quotients at most seven. Using the tail bound and the earlier Legendre criterion, prove a strict lower bound $c/q^2$ for every reduced rational, giving one explicit positive $c$. Explain why checking its first thousand partial quotients would not establish the premise.

**Hint 1.** Use the bounded-tail convergent lower bound and separate nonconvergents by Legendre's criterion.

**Hint 2.** Choose a constant no larger than either of the two positive bounds, and keep the hypothesis universal over the entire expansion.

<a id="section-503-solutions-finite-evidence-and-factorial-denominators"></a>

## Solutions: completing two original approximation arguments {#section-477-solutions-completing-two-original-approximation-argumen}

<a id="section-477-original-exercise-1-the-actual-fractional-part-bins"></a>
### Original exercise 1: the actual fractional-part bins {#section-479-original-exercise-1-the-actual-fractional-part-bins}

The original question asks for the fractional-part construction, not only a successful fraction. For $N=5$, use the half-open bins $[j/5,(j+1)/5)$ for $j=0,\ldots,4$. The fractional part of zero is zero. Since $7<5\sqrt2<8$, the fractional part of $5\sqrt2$ is $5\sqrt2-7=1/(5\sqrt2+7)$. It is positive and less than $1/14<1/5$. Thus these two fractional parts lie in the first bin. Their index difference is $q=5$ and their integer-part difference is $p=7$, producing the original key's inequality. It is not necessary to tabulate the other four fractional parts once this pair has been exhibited.

<a id="section-481-original-exercise-12-exclude-algebraic-degree-one-as-we"></a>
### Original exercise 12: exclude algebraic degree one as well {#section-483-original-exercise-12-exclude-algebraic-degree-one-as-we}

For a rational number $a/b$ in lowest terms, $b>0$, any distinct reduced $p/q$ satisfies $|a/b-p/q|\ge1/(bq)$. If this error were also less than $q^{-2}$, it would force $q<b$. There are only finitely many such denominators, and for each there are only finitely many numerators within distance one of $a/b$. A rational number therefore cannot meet the Liouville requirement of infinitely many distinct positive-error witnesses even at exponent two. Combined with the original key's contradiction for every algebraic degree $d\ge2$, this excludes every algebraic possibility and proves transcendence. Equality with $a/b$ is excluded by the required positive error.

<a id="section-485-exercises-finite-evidence-and-factorial-denominators"></a>

## Solutions: finite evidence and factorial denominators {#section-505-solutions-finite-evidence-and-factorial-denominators}

<a id="section-505-ntp-13-e17-a-reduced-factorial-truncation-solution"></a>
### NTP-13-E17 — A reduced factorial truncation — solution {#section-507-ntp-13-e17-a-reduced-factorial-truncation-solution}

<details><summary>Full solution</summary>

The numerator ends in one, so it is divisible by neither two nor five and is coprime to $10^6$. This is $L_3$, and the next factorial position is $4!=24$. Positivity and the geometric majorant give $10^{-24}<L-L_3<2\cdot10^{-24}$. After multiplication by $10^{12}$ the normalized error lies in $(10^{-12},2\cdot10^{-12})$. This certifies one approximation with denominator $10^6$. The separate proof for all sufficiently large truncation indices establishes the infinite-family claim; this one row alone does not.

</details>

<a id="section-513-ntp-13-e18-a-lower-constant-from-bounded-partial-quotie"></a>
### NTP-13-E18 — A lower constant from bounded partial quotients — solution {#section-515-ntp-13-e18-a-lower-constant-from-bounded-partial-quotie}

<details><summary>Full solution</summary>

At a convergent the error is greater than $1/(9q^2)$. At any reduced nonconvergent, the contrapositive of Legendre gives error at least $1/(2q^2)$. Consequently $c=1/18$ works with a strict inequality in both branches. A finite prefix leaves every later partial quotient unspecified, so it cannot prove the uniform bound seven for the entire infinite sequence.

</details>

<a id="section-521-solutions-reference-model-for-the-original-approximatio"></a>

## Solutions: reference model for the original approximation claim auditor {#section-523-solutions-reference-model-for-the-original-approximatio}

This is a complete paper reference instance of the original five-target project. Its finite choice is exactly one reduced rational for each target: $3/2$ for $\sqrt2$, $8/5$ for $\varphi=(1+\sqrt5)/2$, $8/3$ for $e$, $3/1$ for $\pi$, and $11/100$ for $L$. There is no claim to exhaust denominators or to choose a best approximant, and the original prompt specifies no minimum precision. The deliberately modest bounds below are all strict rational certificates. No floating observations or program outputs enter this model.

For $\sqrt2$, squaring gives $7/5<\sqrt2<10/7$, since $49<50$ and $100>98$. The approximant $3/2$ lies above this interval. Hence
\[
\frac27<4(3/2-\sqrt2)<\frac25.
\]
For $\sqrt5$, the integer inequalities $223^2=49729<50000<50176=224^2$ give $223/100<\sqrt5<224/100$. Thus $323/200<\varphi<81/50$, both above $8/5$, and
\[
\frac38<25(\varphi-8/5)<\frac12.
\]

For $e$, the sum through $1/4!$ is $65/24$ and the proved tail is less than $1/96$. Therefore $65/24<e<87/32$. Subtracting $8/3$ and multiplying by nine yields
\[
\frac38<9(e-8/3)<\frac{15}{32}.
\]
For $\pi$, the finite geometric-integral proof above gives $4S^{\mathrm{atan}}_7<\pi<4S^{\mathrm{atan}}_6$. Exact common-denominator addition gives $S^{\mathrm{atan}}_6=36979/45045$ and $S^{\mathrm{atan}}_7=33976/45045$. Subtracting three therefore gives
\[
\frac{769}{45045}<|\pi-3|<\frac{12781}{45045}.
\]
The positive lower endpoint also verifies the sign used in removing the absolute value.

For $L$, the truncation at $m=2$ is $11/100$ with reduced denominator one hundred. The first omitted position is $3!=6$. Positivity and the proved tail majorant give $10^{-6}<L-11/100<2\cdot10^{-6}$. Hence
\[
\frac1{100}<10^4(L-11/100)<\frac1{50}.
\]
Each displayed interval is exactly an interval for $q^2|\alpha-p/q|$ at its declared reduced fraction, not for the unscaled error.

The claim ledger has five finite rows: each says “one approximation, with the displayed interval.” None says “all denominators up to a bound.” Separately, Dirichlet proves infinitely many order-two approximations for each irrational target. The factorial-tail proof establishes the stronger Liouville quantifiers for $L$. The periodic continued fractions of the first two targets, with the earlier periodicity theorem and the present lower-bound argument, establish their badly-approximable property. The individual transcendence of $e$ and $\pi$ remains imported background. A finite list of rational intervals cannot establish that either number avoids every integer polynomial; even identifying irrationality requires an infinite or structural argument.

<a id="section-552-changed-finite-choice-and-failure-diagnosis"></a>
### Changed finite choice and failure diagnosis {#section-554-changed-finite-choice-and-failure-diagnosis}

Replace only the $\sqrt2$ approximant by $7/5$, keeping the same certified enclosure $7/5<\sqrt2<10/7$. Direct interval subtraction gives $0<25(\sqrt2-7/5)<5/7$. A stronger positive lower endpoint follows by rationalization: $25(\sqrt2-7/5)=5/(5\sqrt2+7)$, whose denominator is less than $99/7$, so the value is greater than $35/99$. Thus $(35/99,5/7)$ is another valid rational interval. It is wider than necessary; validity, rather than a hidden precision target, is the duty. If instead a displayed decimal merely rounds $\pi$ to three, the inferred error zero is invalid: the positive integral lower bound above already refutes it.

<a id="section-556-descriptive-rubric-for-the-original-auditor"></a>
### Descriptive rubric for the original auditor {#section-558-descriptive-rubric-for-the-original-auditor}

A complete response names all five original targets and gives reduced exact approximants, explicit finite choices, certified rational endpoints, and a proof for each endpoint. It records the scaled quantity with the correct sign and denominator and separates symbolic certificates from any optional numerical estimates. Its quantifier ledger distinguishes each finite row, any genuinely exhausted range, and each independently proved infinite theorem. It explains why finite experiments cannot prove $e$ or $\pi$ transcendental. Missing a target, reporting only floating digits, silently treating a rounded equality as exact, or promoting a finite table to an infinite claim leaves the response incomplete. The changed choice is an additional diagnostic example, not a replacement for any of the five original targets.

<a id="section-560-references-approximation-imports-and-dated-status"></a>

## Sources: approximation imports and dated status {#section-562-references-approximation-imports-and-dated-status}

K. F. Roth, “Rational approximations to algebraic numbers,” Mathematika 2 (1955), 1–20, theorem on printed page 2, [publisher original](https://doi.org/10.1112/S0025579300000644). The imported claim is precisely the algebraic-irrational, fixed-exponent finiteness theorem stated above; the elementary tail and polynomial proofs are developed here.

Runlong Yu, “An Inverse Apéry Audit for e + π: Positivity-Smallness Separation,” July 2026, [author research deposit, University of Alabama](https://ir.ua.edu/items/3f1cbd3c-5578-4f1a-af83-8028f12c6122). Its abstract identifies the irrationality question as open. This is a dated primary-source status check, not an imported successful transcendence proof.

The continued-fraction dependencies are the earlier chapter's exact determinant/tail identities and its separately completed second-kind and Legendre arguments, under real irrationality and reduced positive denominators. The use of the exponential series and $\arctan(1)=\pi/4$ is elementary real-analysis background; finite remainder estimates are proved above. No historical effort estimate has been recalibrated by these additions, and no learner efficacy result is asserted.

