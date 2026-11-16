
# Congruences, Linear Equations, and Chinese Remainders {#section-1-congruences-linear-equations-and-chinese-remainders}

Congruence replaces an integer by its remainder information. It is both an equivalence relation and equality in a quotient ring. That viewpoint explains legal algebra, while gcd and Bezout determine exactly when division-like steps are allowed. Chinese remainders reconstruct a global residue from compatible local data.

This chapter assumes Euclid, Bezout, and prime factorization. You will solve linear congruences completely, distinguish inverses from cancellation by nonunits, construct generalized CRT solutions, and turn every answer into a directly checkable certificate.

<a id="section-5-1-congruence-and-residue-classes"></a>
## 1. Congruence and residue classes {#section-7-1-congruence-and-residue-classes}

For positive $m$,

$a\equiv b \pmod{m}$ means $m \mid a-b$.

This relation is reflexive, symmetric, and transitive. It respects addition and multiplication: if $a\equiv b$ and $c\equiv d$, then $a+c\equiv b+d$ and $ac\equiv bd$, because the differences are suitable linear combinations of multiples of $m$.

The class $[a]_{m}$ contains every integer congruent to $a$. Addition and multiplication of classes are well-defined:

$[a]+[b]=[a+b]$, $[a][b]=[ab]$.

Changing representatives cannot change the output because congruence is preserved by these operations.

<a id="section-19-failure-clinic-false-cancellation"></a>
### Failure clinic: false cancellation {#section-21-failure-clinic-false-cancellation}

Modulo $6$, $2*1\equiv 2*4$, but $1$ is not congruent to $4$. From $ca\equiv cb \bmod m$, one may cancel $c$ when $\gcd(c,m)=1$. In general the correct reduced conclusion is

$a\equiv b (\bmod m/\gcd(c,m))$.

Indeed $m\mid c(a-b)$ and division by the gcd isolates coprime factors.

<a id="section-27-2-units-and-inverses"></a>
## 2. Units and inverses {#section-29-2-units-and-inverses}

The class $[a]_{m}$ is a **unit** exactly when $\gcd(a,m)=1$.

If $ax\equiv 1 \bmod m$, then $ax+mk=1$ for some $k$, so the gcd is one. Conversely a Bezout identity $ax+my=1$ reduces to an inverse.

<a id="section-33-worked-inverse"></a>
### Worked inverse {#section-35-worked-inverse}

Extended Euclid gives

$1=14*38-9*59$.

Thus $38^{-1}\equiv 14 \bmod 59$. Verification is immediate: $38*14=532=9*59+1$.

An inverse is unique modulo $m$, not as an integer. Every $14+59t$ represents the same inverse class.

<a id="section-43-3-linear-congruences"></a>
## 3. Linear congruences {#section-45-3-linear-congruences}

**Theorem 4.1.** Let $g=\gcd(a,m)$ with $m>0$. The congruence

\[ax\equiv b \pmod{m}\]

has a solution exactly when $g\mid b$. When solvable, it has exactly $g$ incongruent solutions modulo $m$.

The congruence is equivalent to $ax+my=b$, so the solvability statement is the linear Diophantine theorem. Divide by $g$:

$(a/g)x\equiv b/g \pmod{m/g}$.

Now $a/g$ is invertible modulo $m/g$, so there is one solution class modulo $m/g$. Within a complete set modulo $m$, that class has the $g$ representatives

$x_{0}, x_{0}+m/g, \ldots, x_{0}+(g-1)m/g$.

<a id="section-59-worked-solution"></a>
### Worked solution {#section-61-worked-solution}

Solve $18x\equiv 30 \bmod 42$. Here $g=6$, which divides $30$. Divide to get $3x\equiv 5 \bmod 7$. Since $3^{-1}\equiv 5$, $x\equiv 25\equiv 4 \bmod 7$. Therefore modulo $42$ the six solutions are

$4,11,18,25,32,39$.

<a id="section-65-4-the-coprime-chinese-remainder-theorem"></a>
## 4. The coprime Chinese remainder theorem {#section-67-4-the-coprime-chinese-remainder-theorem}

**CRT.** If $m,n$ are positive and coprime, then for every $a,b$ there is a unique class modulo $mn$ satisfying

$x\equiv a \bmod m$, $x\equiv b \bmod n$.

Choose $u,v$ with $um+vn=1$. The number

\[x=b(um)+a(vn)\]

reduces to $a$ modulo $m$ and $b$ modulo $n$. If $x,y$ are two solutions, both $m,n$ divide $x-y$; coprimality gives $mn\mid x-y$.

<a id="section-77-worked-construction"></a>
### Worked construction {#section-79-worked-construction}

Solve $x\equiv 2 \bmod 5$, $x\equiv 3 \bmod 7$. Since $3*5-2*7=1$, the idempotent for modulus $5$ is $-2*7=-14\equiv 21 \bmod 35$, and for modulus $7$ it is $3*5=15$. Thus

$x\equiv 2*21+3*15=87\equiv 17 \bmod 35$.

Check: $17$ leaves remainders $2$ and $3$.

<a id="section-85-5-generalized-crt"></a>
## 5. Generalized CRT {#section-87-5-generalized-crt}

For moduli that overlap, compatibility replaces automatic existence.

**Theorem 4.2.** The system

$x\equiv a \bmod m$, $x\equiv b \bmod n$

has a solution exactly when $\gcd(m,n)\mid b-a$. When solvable, it has one class modulo $\operatorname{lcm}(m,n)$.

Necessity: a solution makes $b-a=(b-x)+(x-a)$, divisible by the gcd. For sufficiency, write $x=a+mt$; then require

$mt\equiv b-a \bmod n$.

The linear-congruence theorem gives a solution exactly under the stated condition. Differences of two solutions are divisible by both moduli, hence by their lcm.

<a id="section-101-worked-compatible-and-incompatible-systems"></a>
### Worked compatible and incompatible systems {#section-103-worked-compatible-and-incompatible-systems}

For $x\equiv 4 \bmod 6$, $x\equiv 10 \bmod 15$, the gcd is $3$ and divides $6$, so the system is compatible. Put $x=4+6t$; then $6t\equiv 6 \bmod 15$, or $2t\equiv 2 \bmod 5$, so $t\equiv 1 \bmod 5$. Hence $x\equiv 10 \bmod 30$.

For $x\equiv 4 \bmod 6$, $x\equiv 8 \bmod 15$, the residue difference is $4$, not divisible by $3$; no solution exists. This gcd check is a certificate of impossibility.

<a id="section-107-6-many-moduli-and-local-reconstruction"></a>
## 6. Many moduli and local reconstruction {#section-109-6-many-moduli-and-local-reconstruction}

For pairwise coprime $m_{1},\ldots,m_{r}$, put $M=\prod m_{i}$, $M_{i}=M/m_{i}$, and choose $y_{i}$ with $M_{i} y_{i}\equiv 1 \bmod m_{i}$. Then

\[x=\sum a_{i} M_{i} y_{i} \bmod M\]

solves $x\equiv a_{i} \bmod m_{i}$ for every $i$. Each basis element is one in its own coordinate and zero in the others.

Pairwise coprimality is stronger than collective gcd one. The moduli $6,10,15$ have collective gcd one but overlap pairwise. A many-modulus generalized system is consistent exactly when every pair of residues agrees modulo the corresponding pairwise gcd. One can merge congruences successively, updating the modulus to the lcm.

<a id="section-117-7-applications-and-claim-boundaries"></a>
## 7. Applications and claim boundaries {#section-119-7-applications-and-claim-boundaries}

Congruences certify impossibility: because squares modulo $4$ are $0,1$, no integer square is $2 \bmod 4$. Conversely, passing many modular checks does not generally prove an integer solution exists. Local compatibility is a necessary condition unless a family-specific local-global theorem supplies sufficiency.

CRT accelerates exact arithmetic and separates prime-power components. It does not by itself make an algorithm numerically or cryptographically safe. Residues, canonical representatives, input ranges, overflow behavior, and adversarial models remain separate contracts.

<a id="section-123-exercises-with-complete-solutions"></a>
## Project: a generalized-CRT proof object {#section-436-project-a-generalized-crt-proof-object}

Design a paper or dependency-free program that accepts signed residues and positive moduli. It must return either a canonical solution and lcm modulus or an incompatibility witness $(g,b-a)$ with $g$ not dividing the difference. For successful merges, record Bezout coefficients and verify both input congruences. Test pairwise-coprime, overlapping-compatible, overlapping-incompatible, modulus-one, and negative-residue cases. State why the certificate checks correctness independently of the procedure that produced it.

<a id="section-438-chapter-summary"></a>
## 8. Positive moduli include one and zero coefficients need no inverse {#section-443-8-positive-moduli-include-one-and-zero-coefficients-nee}
The definition $a\equiv b\pmod m$ requires only positive $m$, so it includes $m=1$. Every two integers are congruent modulo one, and its sole canonical representative is zero. A condition $x\equiv a\pmod1$ therefore imposes no restriction on $x$. Rejecting this modulus would change the stated input domain rather than repair a mathematical inconsistency.

The same boundary appears in the linear-congruence theorem. Put $g=\gcd(a,m)>0$ and ask whether $ax\equiv b\pmod m$. If $g\nmid b$, no solution exists. Otherwise write $a=ga'$, $m=gm'$, $b=gb'$, with $\gcd(a',m')=1$. Bezout supplies $ua'+vm'=1$, so $x=ub'$ solves the reduced congruence. This argument remains valid when $m'=1$: the reduced condition is vacuous, and there is just one residue class modulo one.

For a zero coefficient $a=0$, the gcd is $m$. If $m\nmid b$, the congruence fails; if $m\mid b$, every integer solves it. The theorem's count is then $g=m$ classes modulo $m$, exactly all of them. No division by $a$ was performed. A formula that attempted to invert the original coefficient would not cover this case.

For arbitrary signed $c$, the strongest cancellation statement is $cx\equiv cy\pmod m$ exactly when $x\equiv y\pmod{m/\gcd(c,m)}$. Write $c=gc'$ and $m=gm'$; the condition becomes $m'\mid c'(x-y)$, equivalent to $m'\mid x-y$ by coprimality. When $c=0$, $m'=1$ and the conclusion is correctly vacuous.

For example, $10x\equiv10y\pmod{15}$ only forces $x\equiv y\pmod3$. Taking $x=0,y=3$ verifies the original congruence but not equality modulo 15. This is a statement about the exact set of solutions, rather than a rule allowing ordinary integer division inside a residue class.

The notation of a multiplicative inverse can also be used modulo one if its unique class is treated as the ring identity, but no such convention is needed for these proofs. Bezout and divisibility cover the boundary directly. The merge construction next uses an explicit trivial branch when the reduced modulus is one, so it never relies on an inverse procedure with a narrower undocumented domain.

<a id="section-454-9-a-bezout-merge-gives-the-complete-canonical-class"></a>
## 9. A Bezout merge gives the complete canonical class {#section-456-9-a-bezout-merge-gives-the-complete-canonical-class}
Let $m,n>0$ and let $a,b$ be arbitrary signed integers. Compute $g=\gcd(m,n)$ and integers $u,v$ satisfying $um+vn=g$. The difference $\Delta=b-a$ must be divisible by $g$: any common solution would make it a difference of two multiples of that common divisor. If $\Delta=g d$ for an integer $d$, divide the Bezout identity by $g$ to obtain $u m'+v n'=1$, where $m'=m/g$, $n'=n/g$.

Choose $t$ congruent to $ud$ modulo $n'$. When $n'=1$, choose $t=0$; otherwise take its canonical representative. Set $r=a+mt$ and $L=mn/g$. The first congruence is immediate. For the second,
\[
r-b=m t-\Delta=g(m't-d).
\]
Since $m'u\equiv1\pmod{n'}$ and $t\equiv ud\pmod{n'}$, the parenthesis is divisible by $n'$. Hence $n\mid r-b$. This proves the construction, including negative differences and the reduced modulus-one branch.

Every solution is in the class $r+L\mathbb Z$. If $x$ is another solution, both $m,n$ divide $x-r$; the universal lcm property makes $L$ divide it. Conversely, $L$ is a multiple of each modulus, so every $r+Lk$ remains a solution. The formula for $L$ follows from the gcd–lcm identity for positive inputs.

Finally use integer division to write $r=qL+X$ with $0\le X<L$. Then $X$ is the unique canonical answer. If two representatives in that interval differ by a multiple of $L$, their difference has absolute value below $L$ and must be zero. With $L=1$, this interval contains exactly zero, as required.

This separates three objects often conflated in a calculation: one raw solution $r$, the entire solution class $r+L\mathbb Z$, and its chosen canonical representative $X$. A negative raw value can be perfectly correct while failing the requested output convention. A noncanonical positive value can likewise require reduction.

Different valid Bezout coefficients or different representatives of $t$ produce the same final canonical answer. Each constructed value satisfies the two congruences, so the complete-class uniqueness just proved makes their difference a multiple of $L$. The coefficients themselves are certificates with choices; the residue class and its canonical representative are determined by the input system.

<a id="section-471-10-overlap-restricts-residue-pairs-and-fixes-the-least-"></a>
## 10. Overlap restricts residue pairs and fixes the least period {#section-473-10-overlap-restricts-residue-pairs-and-fixes-the-least-}
The intersection of two arithmetic progressions has a precise form:
\[
(a+m\mathbb Z)\cap(b+n\mathbb Z)
=\varnothing\quad\text{or}\quad X+\operatorname{lcm}(m,n)\mathbb Z.
\]
The first case occurs exactly when the residue difference fails the gcd test. In the second, the merge proof gives the equality of sets, not just a displayed candidate belonging to their intersection.

The lcm is the least positive period of a nonempty intersection. If a positive integer $D$ takes one solution to another by translation, then both moduli divide $D$, hence $L\mid D$. Conversely, translation by $L$ always preserves every solution. This explains why using the product of overlapping moduli can give an incomplete answer: it supplies some solutions but may skip others.

For residues $5$ modulo 8 and $1$ modulo 12, the canonical solution is 13 and the lcm is 24. The progression $13+96\mathbb Z$ contains only a subset of the solutions. For example 37 satisfies both congruences but differs from 13 by 24, which is not divisible by 96. Verifying a candidate twice does not by itself verify a claimed complete period.

There is a useful finite counting interpretation. Among residue pairs modulo $m$ and $n$, compatibility means the two residues have the same image modulo $g=\gcd(m,n)$. For each of the $g$ common residues there are $m/g$ choices in the first coordinate and $n/g$ in the second. Thus there are $mn/g=L$ compatible pairs.

The map taking a class modulo $L$ to its two coordinate classes is a bijection onto these compatible pairs. It is well-defined because each modulus divides $L$; injectivity follows from the lcm condition on differences; surjectivity is the generalized CRT construction. This gives the same count without treating overlapping coordinates as independent.

Nothing here says that arbitrary modular tests for a different integer equation can be glued into an integer solution. The theorem concerns this explicit finite family of linear congruences. Its sufficiency comes from the construction and complete-period proof. Moving to polynomial, quadratic or higher-dimensional equations requires the appropriate additional theorem rather than a general appeal to the phrase “local information.”

<a id="section-489-11-pairwise-compatibility-suffices-for-every-finite-lis"></a>
## 11. Pairwise compatibility suffices for every finite list {#section-491-11-pairwise-compatibility-suffices-for-every-finite-lis}
Let $m_1,\ldots,m_r$ be positive moduli, $r\ge1$, and $a_1,\ldots,a_r$ signed residues. The system is consistent exactly when
\[
\gcd(m_i,m_j)\mid a_i-a_j
\quad\text{for every }i,j.
\]
Necessity follows from subtracting two congruences satisfied by a common solution. To prove sufficiency, let $L=\operatorname{lcm}(m_1,\ldots,m_r)$ and work prime by prime using the already established integer factorization theorem.

For each prime $p\mid L$, set $e_p=\max_i v_p(m_i)$ and choose an index $j_p$ attaining this maximum. Prescribe the residue $a_{j_p}$ modulo $p^{e_p}$. The prime-power moduli for different $p$ are pairwise coprime, so the coprime CRT gives an integer $x$ satisfying all these prescriptions.

Fix an original modulus $m_i$ and a prime power $p^{f}$ occurring in it. Since $f\le e_p$, the gcd of $m_i$ and $m_{j_p}$ contains $p^f$. Pairwise compatibility therefore gives $a_i\equiv a_{j_p}\pmod{p^f}$. The constructed $x$ has the same residue, so $p^f\mid x-a_i$. Doing this for every prime factor of $m_i$ proves $m_i\mid x-a_i$. Thus $x$ solves every original congruence.

If two indices attain the same maximum exponent, compatibility makes their residues agree modulo that entire prime power. The prescription is independent of this choice. If every modulus is one, $L=1$ and there are no prime prescriptions; take $x=0$, which solves the whole vacuous system.

Differences of solutions are divisible by each $m_i$, hence by $L$ through the coordinatewise maximum of valuations. Conversely, adding any multiple of $L$ preserves every congruence. Therefore all solutions form exactly one class modulo $L$, with one canonical representative in $[0,L)$. This proves the arbitrary finite-list claim asserted in Section 6.

The argument uses factorization to prove existence, but an actual construction need not factor large moduli: successive gcd–Bezout merges suffice. Existence of a proof based on prime factors and the data needed by a practical merge are different questions. The next section verifies that the merge method preserves this exact solution set rather than assuming that two-modulus compatibility automatically settles every later stage.

<a id="section-507-12-successive-merges-preserve-an-exact-solution-set-inv"></a>
## 12. Successive merges preserve an exact solution-set invariant {#section-509-12-successive-merges-preserve-an-exact-solution-set-inv}
Suppose the first $k$ congruences have been merged into the complete class $R$ modulo $M=\operatorname{lcm}(m_1,\ldots,m_k)$. To incorporate $x\equiv b\pmod n$, apply the two-modulus merge to $R,M,b,n$. Its output is exactly the intersection of the old solution class with the new one. Thus a successful stage preserves every previous condition and updates the complete modulus to $\operatorname{lcm}(M,n)$.

Under pairwise compatibility of the original list, this stage cannot fail. For each earlier index, $d_i=\gcd(m_i,n)$ divides both $b-a_i$ and $R-a_i$, hence divides $b-R$. Their lcm therefore divides $b-R$. The gcd–lcm distributive identity proved in the preceding chapter identifies this lcm as $\gcd(M,n)$, exactly the required merge divisor. This proves the inductive invariant without assuming an unjustified independence among the moduli.

If a stage does fail, its aggregate rejection certificate is still sufficient. Every solution of the earlier system must be congruent to $R$ modulo $M$. A simultaneous solution with the new congruence would force $\gcd(M,n)\mid b-R$, contradicting the displayed nondivisibility witness. The previous merge certificates explain why the aggregate class is valid; the new gcd witness explains why no extension exists.

Starting from the empty list can be given the explicit convention $R=0,M=1$, representing all integers. The first merge then imposes the first actual congruence. This optional initialization uses the empty lcm convention one; it does not introduce a modulus zero or an unbounded search.

For a consistent list, changing the order of merges changes intermediate residues and Bezout coefficients but not the final canonical answer. Every order produces the same intersection of congruence classes and the same positive lcm of all moduli. The uniqueness in $[0,L)$ then fixes the final representative. This is order independence of the represented solution, not a claim that every intermediate certificate must be identical.

A finite proof object can therefore be organized as a chain: each successful merge gives an exact class for the accumulated inputs, and the next certificate uses that class as one of its inputs. A reader can verify the chain without reproducing the method that chose the Bezout coefficients. The paper reference below supplies the complete local identities and a test ledger covering the original project's five required families.


A finite family of general linear congruences can be reduced to this setting. For each $a_ix\equiv b_i\pmod{m_i}$, let $g_i=\gcd(a_i,m_i)$. Reject immediately if $g_i\nmid b_i$. Otherwise divide by $g_i$ and use Bezout to obtain one complete integer class $x\equiv c_i\pmod{n_i}$, where $n_i=m_i/g_i$. Apply the many-modulus compatibility test to these reduced classes. The final period is their lcm, which can be smaller than the lcm of the original moduli because a coefficient may have removed redundant constraints.

For example, $6x\equiv9\pmod{15}$ reduces to $2x\equiv3\pmod5$, hence $x\equiv4\pmod5$. The congruence $4x\equiv8\pmod{14}$ reduces to $2x\equiv4\pmod7$, hence $x\equiv2\pmod7$. Merging gives $x\equiv9\pmod{35}$. The original checks are $6(9)-9=45=3(15)$ and $4(9)-8=28=2(14)$. Translating by 35 preserves both equations, and the reduction proves that every solution is in that class. Using 210, the lcm of 15 and 14, as the complete period would omit valid solutions.

Individual solvability does not suffice for a family. The equations $6x\equiv6\pmod{18}$ and $4x\equiv0\pmod{12}$ each pass their coefficient-gcd test. But they reduce to $x\equiv1\pmod3$ and $x\equiv0\pmod3$, which are incompatible. The conflict appears between the reduced solution classes, after each local equation has been solved completely.

Zero coefficients follow the same logic. A compatible zero-coefficient equation reduces to modulus one and contributes no restriction; an incompatible one rejects the system before any merge. This reduction therefore handles signed coefficients and residues without pretending that all coefficients are units. It is a derived extension of the theory, while the original paper project retains its specified residue/modulus input pairs.

<a id="section-529-13-a-many-modulus-example-keeps-every-intermediate-modu"></a>
## 13. A many-modulus example keeps every intermediate modulus {#section-531-13-a-many-modulus-example-keeps-every-intermediate-modu}
Consider the system with residues $2$ modulo 6, $5$ modulo 9 and $8$ modulo 15. Every pairwise gcd is 3 and the residue differences are multiples of 3, so the full theorem predicts consistency. First merge the first two. The identity $-6+9=3$ gives reduced data $m'=2,n'=3,d=(5-2)/3=1$. Taking $t\equiv-1\pmod3$, choose $t=2$ and obtain $R=2+6(2)=14$ modulo $M=18$.

Now merge $14$ modulo 18 with $8$ modulo 15. The identity $18-15=3$ gives $m'=6,n'=5,d=(8-14)/3=-2$. Choose $t\equiv-2\pmod5$, so $t=3$. The result is $14+18(3)=68$ modulo $\operatorname{lcm}(18,15)=90$.

The final checks are $68-2=66=11\cdot6$, $68-5=63=7\cdot9$ and $68-8=60=4\cdot15$. It lies in $[0,90)$, and every solution is $68+90k$. The first merge modulus 18 could not be replaced by the product 54: that would have discarded valid possibilities before the third merge.

Change only the final residue to 9 modulo 15. The original pair with modulus 6 already rejects it: $\gcd(6,15)=3$ does not divide $9-2=7$. The sequential method reaches the same conclusion after its valid first merge, since $\gcd(18,15)=3$ does not divide $9-14=-5$. The Euclidean remainder identity $-5=3(-2)+1$ supplies a signed-difference rejection witness with positive remainder.

This example distinguishes a failed input system from a failed search. In the altered case there is no solution to discover, and the finite gcd certificate proves that conclusion. In the original case, the complete-class invariant proves that the displayed answer is exhaustive. A large integer search range would be unnecessary in either case.

It also illustrates why residues should be allowed to remain signed during derivation. The second successful difference was negative, yet its quotient by the gcd was an ordinary integer and the same Bezout construction applied. Canonical reduction belongs to the final output convention and each chosen parameter remainder; it is not a reason to reject a negative input residue or difference.

<a id="section-542-14-coprime-residue-coordinates-have-explicit-reconstruc"></a>
## 14. Coprime residue coordinates have explicit reconstruction elements {#section-544-14-coprime-residue-coordinates-have-explicit-reconstruc}
For coprime positive $m,n$, choose $um+vn=1$. Let $E_m=vn$ and $E_n=um$ as classes modulo $mn$. The first has residues one modulo $m$ and zero modulo $n$; the second has the opposite residues. Their sum is one, their product is a multiple of $mn$, and each is idempotent:
\[
E_m(E_m-1)=vn(-um),\qquad
E_n(E_n-1)=um(-vn).
\]
Thus $aE_m+bE_n$ reconstructs the prescribed coordinate residues. These are idempotent ring elements, not ordinary integer projection matrices.

For $m=5,n=8$, the identity $5\cdot5-3\cdot8=1$ gives $E_5=16$ and $E_8=25$ modulo 40. Their squares are congruent to themselves, their product is $400\equiv0$, and their sum is $41\equiv1$. Residues 3 modulo 5 and 6 modulo 8 give $3(16)+6(25)=198\equiv38\pmod{40}$, checked by $38-3=7\cdot5$ and $38-6=4\cdot8$.

The map from classes modulo $mn$ to the two residue coordinates respects addition and multiplication. CRT gives surjectivity; divisibility by both coprime moduli gives injectivity. This explains the independent-coordinate behavior algebraically, including why multiplication can be carried out separately and then reconstructed.

For overlapping moduli the admissible coordinate set is smaller. If $g=\gcd(m,n)>1$, the pair $(1\pmod m,0\pmod n)$ is incompatible because $g\nmid-1$. Hence the same independent-coordinate reconstruction elements cannot exist for those two overlapping coordinates. Generalized CRT instead identifies classes modulo the lcm with pairs that agree modulo their shared gcd.

Compatible pairs are themselves closed under addition and multiplication: agreement modulo $g$ is preserved by both operations. Thus the generalized reconstruction still respects ring operations on its actual admissible pairs. The shared coordinate information is retained rather than counted twice. The distinction follows from a single explicit compatibility condition, not from a vague instruction to “adjust for overlap.”

If one modulus is one, its coordinate has only one possible class and carries no restriction. The identities and the solution-set statement remain valid with that trivial coordinate. Its canonical integer representative zero should not be mistaken for an additional equation forcing the global integer itself to be zero.

<a id="section-560-solutions-a-complete-generalized-crt-paper-proof-object"></a>

## Summary

<a id="section-440-chapter-summary"></a>
Congruence is equality modulo a divisibility relation. Units are exactly the classes coprime to the modulus. A linear congruence has solutions precisely when its coefficient gcd divides the target, and its exact number of classes follows after reduction. CRT reconstructs coprime coordinates; generalized CRT replaces coprimality with an exact compatibility condition and gives uniqueness modulo the lcm.
<a id="section-441-8-positive-moduli-include-one-and-zero-coefficients-nee"></a>

## Exercises {#section-125-exercises-with-complete-solutions}

<a id="section-125-1-equivalence-relation"></a>
### 1. Equivalence relation {#section-127-1-equivalence-relation}

Prove congruence modulo $m$ is transitive.

**Hint 1.** Express each given congruence as a divisibility of a difference.

**Hint 2.** Add the differences to obtain the third divisibility.

<details><summary>Full solution</summary>

**Solution.** If $m\mid a-b$ and $m\mid b-c$, then $m\mid (a-b)+(b-c)=a-c$, so $a\equiv c$.

</details>

<a id="section-139-2-powers-preserve-congruence"></a>
### 2. Powers preserve congruence {#section-141-2-powers-preserve-congruence}

If $a\equiv b \bmod m$, prove $a^n\equiv b^n \bmod m$ for positive $n$.

**Hint 1.** Use the factorisation of a difference of powers.

**Hint 2.** The original difference divides the powered difference.

<details><summary>Full solution</summary>

**Solution.** The factorization $a^n-b^n=(a-b)(a^{n-1}+\ldots+b^{n-1})$ makes the difference divisible by $m$.

</details>

<a id="section-153-3-canonical-remainder"></a>
### 3. Canonical remainder {#section-155-3-canonical-remainder}

Find the representative of $[-137]_{12}$ in $\{0,\ldots,11\}$.

**Hint 1.** Add a suitable multiple of twelve.

**Hint 2.** Choose the result in the specified canonical interval.

<details><summary>Full solution</summary>

**Solution.** $-137=12(-12)+7$, so the representative is $7$.

</details>

<a id="section-167-4-unit-test"></a>
### 4. Unit test {#section-169-4-unit-test}

Which classes modulo $12$ are units?

**Hint 1.** A residue is a unit exactly when it is coprime to twelve.

**Hint 2.** Exclude multiples of two or three.

<details><summary>Full solution</summary>

**Solution.** Representatives coprime to $12$ are $1,5,7,11$. Their squares are all $1 \bmod 12$, so each is its own inverse.

</details>

<a id="section-181-5-inverse-computation"></a>
### 5. Inverse computation {#section-183-5-inverse-computation}

Find $17^{-1} \bmod 43$.

**Hint 1.** Use Euclid on seventeen and forty-three.

**Hint 2.** Back-substitution gives the coefficient of seventeen as its inverse class.

<details><summary>Full solution</summary>

**Solution.** $43=2*17+9$, $17=9+8$, $9=8+1$; back-substitution gives $1=2*43-5*17$. The inverse is $-5\equiv 38$.

</details>

<a id="section-195-6-linear-congruence-count"></a>
### 6. Linear congruence count {#section-197-6-linear-congruence-count}

How many solutions has $24x\equiv 18 \bmod 30$?

**Hint 1.** Compute the gcd of twenty-four and thirty.

**Hint 2.** It divides eighteen, and that gcd is the number of classes modulo the original modulus.

<details><summary>Full solution</summary>

**Solution.** $\gcd(24,30)=6$, and $6\mid 18$, so there are exactly six solutions modulo $30$.

</details>

<a id="section-209-7-list-those-solutions"></a>
### 7. List those solutions {#section-211-7-list-those-solutions}

List the solutions from Exercise 6.

**Hint 1.** Divide the equation and modulus by their gcd.

**Hint 2.** Solve the reduced unit equation, then lift its class to all original residues.

<details><summary>Full solution</summary>

**Solution.** Divide to $4x\equiv 3 \bmod 5$; since $4^{-1}\equiv 4$, $x\equiv 12\equiv 2 \bmod 5$. Thus $2,7,12,17,22,27$ modulo $30$.

</details>

<a id="section-223-8-no-solution"></a>
### 8. No solution {#section-225-8-no-solution}

Solve or obstruct $15x\equiv 8 \bmod 35$.

**Hint 1.** Check the gcd of fifteen and thirty-five before attempting division.

**Hint 2.** A solution would require that gcd to divide eight.

<details><summary>Full solution</summary>

**Solution.** The gcd is $5$, which does not divide $8$; no solution exists.

</details>

<a id="section-237-9-legal-cancellation"></a>
### 9. Legal cancellation {#section-239-9-legal-cancellation}

From $14x\equiv 14y \bmod 35$, what strongest simple congruence follows?

**Hint 1.** Divide coefficient and modulus by their common gcd.

**Hint 2.** The resulting coefficient is a unit modulo the reduced modulus.

<details><summary>Full solution</summary>

**Solution.** Divide modulus and coefficient by $\gcd(14,35)=7$; the condition is equivalent to $2(x-y)\equiv 0 \bmod 5$. Since $2$ is a unit mod $5$, $x\equiv y \bmod 5$.

</details>

<a id="section-251-10-coprime-crt"></a>
### 10. Coprime CRT {#section-253-10-coprime-crt}

Solve $x\equiv 4 \bmod 9$, $x\equiv 5 \bmod 11$.

**Hint 1.** Write the first class as four plus nine times an integer.

**Hint 2.** Solve the remaining linear congruence modulo eleven.

<details><summary>Full solution</summary>

**Solution.** Write $x=4+9t$; then $9t\equiv 1 \bmod 11$. Since $9^{-1}\equiv 5$, $t\equiv 5$, giving $x\equiv 49 \bmod 99$.

</details>

<a id="section-265-11-three-moduli"></a>
### 11. Three moduli {#section-267-11-three-moduli}

Solve $x\equiv 1 \bmod 2$, $x\equiv 2 \bmod 3$, $x\equiv 3 \bmod 5$.

**Hint 1.** Merge two congruences first.

**Hint 2.** The final period is the product because the moduli are pairwise coprime.

<details><summary>Full solution</summary>

**Solution.** Numbers congruent to $3 \bmod 5$ are $3,8,13,18,23,\ldots$; the odd ones include $3,13,23$, and $23\equiv 2 \bmod 3$. Hence $x\equiv 23 \bmod 30$.

</details>

<a id="section-279-12-generalized-crt"></a>
### 12. Generalized CRT {#section-281-12-generalized-crt}

Solve $x\equiv 7 \bmod 12$, $x\equiv 1 \bmod 18$.

**Hint 1.** Check that the difference of prescribed residues is divisible by six.

**Hint 2.** Substitute one arithmetic progression into the second and reduce the modulus.

<details><summary>Full solution</summary>

**Solution.** The gcd $6$ divides $1-7=-6$, so solutions exist modulo $36$. Put $x=7+12t$; $12t\equiv-6 \bmod 18$, divide by $6$ to $2t\equiv 2 \bmod 3$, so $t\equiv 1 \bmod 3$. Thus $x\equiv 19 \bmod 36$.

</details>

<a id="section-293-13-compatibility-obstruction"></a>
### 13. Compatibility obstruction {#section-295-13-compatibility-obstruction}

Explain why $x\equiv 2 \bmod 8$, $x\equiv 5 \bmod 12$ is impossible.

**Hint 1.** Reduce both prescribed residues modulo the common divisor four.

**Hint 2.** They disagree there.

<details><summary>Full solution</summary>

**Solution.** The gcd is $4$, but the residue difference $3$ is not divisible by $4$.

</details>

<a id="section-307-14-pairwise-consistency"></a>
### 14. Pairwise consistency {#section-309-14-pairwise-consistency}

Are $x\equiv 0 \bmod 6$, $x\equiv 4 \bmod 10$, $x\equiv 9 \bmod 15$ compatible?

**Hint 1.** Check every pair modulo the corresponding gcd.

**Hint 2.** Then construct one simultaneous class and use the lcm period.

<details><summary>Full solution</summary>

**Solution.** Moduli gcds are $2,3,5$. Residues agree modulo each: $0\equiv 4 \bmod 2$, $0\equiv 9 \bmod 3$, and $4\equiv 9 \bmod 5$. Thus they are compatible. Merging the first two gives $x\equiv 24 \bmod 30$, which also satisfies the third; final class is $24 \bmod 30$.

</details>

<a id="section-321-15-last-two-digits"></a>
### 15. Last two digits {#section-323-15-last-two-digits}

Find the last two decimal digits of $3^{20}$.

**Hint 1.** Compute powers modulo four and twenty-five separately.

**Hint 2.** Reconstruct the canonical class modulo one hundred by CRT.

<details><summary>Full solution</summary>

**Solution.** Modulo $4$, the value is $1$. Modulo $25$, $3^{5}=243\equiv-7$, $3^{10}\equiv 49\equiv-1$, so $3^{20}\equiv 1$. CRT gives $1 \bmod 100$; the last two digits are $01$.

</details>

<a id="section-335-16-square-obstruction"></a>
### 16. Square obstruction {#section-337-16-square-obstruction}

Prove $x^{2}+y^{2}=4k+3$ has no integer solutions.

**Hint 1.** Square residues modulo four are zero or one.

**Hint 2.** No sum of two such residues is three.

<details><summary>Full solution</summary>

**Solution.** Squares modulo $4$ are $0,1$, so a sum of two squares is $0,1$, or $2$, never $3$.

</details>

<a id="section-349-17-converse-warning"></a>
### 17. Converse warning {#section-351-17-converse-warning}

An equation has a solution modulo every tested modulus. Why is that not an integer solution proof?

**Hint 1.** Finite congruence information supplies necessary local conditions.

**Hint 2.** A global existence theorem or an explicit integer solution is still needed.

<details><summary>Full solution</summary>

**Solution.** Each modular solution may be a different residue with no common integer lift, and even compatible solutions for all finite tests do not imply a global integer solution without a theorem for that equation family. Modular solubility is normally necessary, not universally sufficient.

</details>

<a id="section-363-18-idempotents"></a>
### 18. Idempotents {#section-365-18-idempotents}

Find nontrivial $e$ with $e^{2}\equiv e \bmod 15$.

**Hint 1.** Use CRT to choose zero in one prime coordinate and one in the other.

**Hint 2.** The pairs zero/one and one/zero give the nontrivial idempotents.

<details><summary>Full solution</summary>

**Solution.** Specify $e\equiv 1 \bmod 3$, $e\equiv 0 \bmod 5$. The solution is $e\equiv 10 \bmod 15$; indeed $100\equiv 10$. The complementary idempotent is $6$.

</details>

<a id="section-377-19-uniqueness-modulus"></a>
### 19. Uniqueness modulus {#section-379-19-uniqueness-modulus}

Why are compatible solutions modulo $6$ and $15$ unique modulo $30$, not $90$?

**Hint 1.** A difference of solutions must be divisible by both moduli.

**Hint 2.** Their least common multiple, not their product, is the smallest guaranteed period.

<details><summary>Full solution</summary>

**Solution.** Differences must be divisible by both moduli, so exactly by their least common multiple $30$; multiplying the overlapping factor $3$ twice would overstate the modulus.

</details>

<a id="section-391-20-reconstruction-certificate"></a>
### 20. Reconstruction certificate {#section-393-20-reconstruction-certificate}

Verify $x=173$ solves residues $5 \bmod 7$, $3 \bmod 10$, and state the full class.

**Hint 1.** Reduce 173 modulo each original modulus.

**Hint 2.** The full solution class uses period seventy because the moduli are coprime.

<details><summary>Full solution</summary>

**Solution.** $173=24*7+5$ and $173=17*10+3$. Since the moduli are coprime, all solutions are $173+70t$, or $x\equiv 33 \bmod 70$.

</details>

<a id="section-405-21-polynomial-evaluation"></a>
### 21. Polynomial evaluation {#section-407-21-polynomial-evaluation}

If $a\equiv b \bmod m$ and $f$ has integer coefficients, prove $f(a)\equiv f(b) \bmod m$.

**Hint 1.** Expand the polynomial as an integer linear combination of powers.

**Hint 2.** Congruence is preserved by each power and by sums and products.

<details><summary>Full solution</summary>

**Solution.** Each power of $a$ is congruent to the corresponding power of $b$; integer multiples and finite sums preserve congruence.

</details>

<a id="section-419-22-a-factorial-congruence"></a>
### 22. A factorial congruence {#section-421-22-a-factorial-congruence}

Prove $n!\equiv 0 \bmod m$ whenever $n\ge m>0$.

**Hint 1.** The factorial includes the factor equal to the modulus.

**Hint 2.** The case modulus one is automatic as well.

<details><summary>Full solution</summary>

**Solution.** The factor $m$ appears among $1,2,\ldots,n$, so $m\mid n!$. The claim does not say the least such $n$ is always $m$.

</details>


<a id="section-434-project-a-generalized-crt-proof-object"></a>

<a id="section-603-exercises-generalized-crt-extensions"></a>
### 23. NTP-04-E23. Merge three overlapping moduli {#section-604-ntp-04-e23-merge-three-overlapping-moduli}

Find the complete canonical solution of $x\equiv-1\pmod4$, $x\equiv5\pmod6$, $x\equiv2\pmod9$. Check pairwise compatibility, record two Bezout merges and verify all three final congruences.

**Hint 1.** Check residue differences modulo the three pairwise gcds.

**Hint 2.** Merge two progressions using Bezout, then merge the third with the lcm period.

<a id="section-610-ntp-04-e24-a-signed-residue-with-modulus-one"></a>
### 24. NTP-04-E24. A signed residue with modulus one {#section-612-ntp-04-e24-a-signed-residue-with-modulus-one}

Merge $x\equiv-17\pmod1$ and $x\equiv-5\pmod7$. Give a gcd/Bezout certificate, a canonical representative and the complete modulus, and verify both original input congruences.

**Hint 1.** Modulo one every integer has canonical residue zero.

**Hint 2.** The second congruence determines the final period and canonical representative.

<a id="section-618-solutions-generalized-crt-extensions"></a>

## Solutions: A complete generalized-CRT paper proof object {#section-562-solutions-a-complete-generalized-crt-paper-proof-object}
This reference uses the paper option explicitly permitted by the original project. It accepts any finite list of signed integer residues and positive integer moduli, including one. The equations below are exact hand certificates. A program used instead of this paper route would need to preserve the same input and output obligations.

For one merge, record inputs $(a,m),(b,n)$ and certificate integers $g,u,v$ satisfying $g>0$, $g\mid m$, $g\mid n$ and $um+vn=g$. These conditions certify that $g$ is the gcd: every common divisor divides the Bezout combination. Divide $\Delta=b-a$ by $g$. A rejection records $\Delta=gq+s$ with $0<s<g$; its output witness is $(g,\Delta)$, and no compatible integer can exist.

For an accepted merge, record $d=\Delta/g$, $n'=n/g$, a parameter $t\equiv ud\pmod{n'}$, raw $r=a+mt$, $L=mn/g$ and canonical $X\equiv r\pmod L$ in $[0,L)$. Choose $t=0$ when $n'=1$. Record the two exact quotient checks $X-a=q_m m$ and $X-b=q_n n$. Together with the gcd certificate and the general merge proof, these prove that the output is the complete class $X+L\mathbb Z$.

Here is the full five-family test ledger; the modulus-one family includes both orientations and the all-one boundary:

| family | $(a,m);(b,n)$ | $(g,u,v)$ | $d$ | $t$ | raw $r$ | $L$ | canonical $X$ |
|---|---|---|---:|---:|---:|---:|---:|
| coprime | $(1,4);(2,9)$ | $(1,-2,1)$ | 1 | 7 | 29 | 36 | 29 |
| overlap, compatible | $(5,8);(1,12)$ | $(4,-1,1)$ | $-1$ | 1 | 13 | 24 | 13 |
| overlap, incompatible | $(2,6);(4,9)$ | $(3,-1,1)$ | reject | — | — | — | — |
| modulus one, second | $(5,8);(-3,1)$ | $(1,0,1)$ | $-8$ | 0 | 5 | 8 | 5 |
| modulus one, first | $(17,1);(4,6)$ | $(1,1,0)$ | $-13$ | 5 | 22 | 6 | 4 |
| modulus one, both | $(-9,1);(200,1)$ | $(1,0,1)$ | 209 | 0 | $-9$ | 1 | 0 |
| negative residues | $(-4,9);(-1,10)$ | $(1,-1,1)$ | 3 | 7 | 59 | 90 | 59 |

The corresponding Bezout checks are $-2(4)+9=1$, $-8+12=4$, $-6+9=3$, $0(8)+1=1$, $1+0(6)=1$, $0(1)+1=1$, and $-9+10=1$. In each row the stated positive $g$ also divides both moduli. The rejected row has $\Delta=2=0(3)+2$, with $0<2<3$, so its witness is $(3,2)$.

All successful input checks are explicit:
\[
\begin{array}{c|cc}
\text{row}&X-a&X-b\\
1&28=7\cdot4&27=3\cdot9\\
2&8=1\cdot8&12=1\cdot12\\
4&0=0\cdot8&8=8\cdot1\\
5&-13=-13\cdot1&0=0\cdot6\\
6&9=9\cdot1&-200=-200\cdot1\\
7&63=7\cdot9&60=6\cdot10
\end{array}
\]
The canonical reductions requiring an extra step are $22=3(6)+4$ and $-9=-9(1)+0$. Every other successful raw value is already within the stated interval. These checks include signed quotients rather than assuming input residues were nonnegative.

For a longer list, start with the class $0$ modulo one and append one such merge record for each input. Preserve each current $(X,L)$ as the next aggregate input. The complete-class invariant from Section 12 proves induction through all accepted records. A rejected record cites its current valid aggregate and the new constraint, which proves impossibility for the full list. No arbitrary finite search limit is part of this paper procedure.

<a id="section-597-rubric-for-the-generalized-crt-paper-reference"></a>
### Rubric for the generalized-CRT paper reference {#section-599-rubric-for-the-generalized-crt-paper-reference}

A complete comparison checks five independent obligations: the input domain and all five required families; exact gcd and Bezout identities; accepted parameter and canonical lcm-class derivations; both input congruence checks or a positive-remainder rejection witness; and the stated chain invariant for many inputs. A candidate satisfying two congruences but reporting the wrong complete period needs repair in the third obligation. Rejecting modulus one or omitting negative inputs leaves the first obligation incomplete. This is a public reference rubric, with no learner score, observed run or efficacy claim.

<a id="section-601-exercises-generalized-crt-extensions"></a>

## Solutions: Generalized-CRT extensions {#section-620-solutions-generalized-crt-extensions}
<a id="section-619-ntp-04-e23-merge-three-overlapping-moduli-solution"></a>
### NTP-04-E23. Merge three overlapping moduli — solution {#section-621-ntp-04-e23-merge-three-overlapping-moduli-solution}

<details><summary>Full solution</summary>

The pairwise gcds are $2,1,3$, and the differences $5-(-1)=6$, $2-(-1)=3$, $2-5=-3$ satisfy them. For the first merge, $-4+6=2$, so $u=-1$, $d=6/2=3$ and reduced modulus $6/2=3$. Choose $t=0$ modulo 3; raw $-1$ becomes $11$ modulo $\operatorname{lcm}(4,6)=12$. For the next merge, $12-9=3$, $d=(2-11)/3=-3$ and reduced modulus 3, so again choose $t=0$. The final answer is $11$ modulo 36. Checks are $11-(-1)=12=3\cdot4$, $11-5=6=1\cdot6$, and $11-2=9=1\cdot9$. The complete modulus is the lcm, and $11\in[0,36)$.

</details>

<a id="section-627-ntp-04-e24-a-signed-residue-with-modulus-one-solution"></a>
### NTP-04-E24. A signed residue with modulus one — solution {#section-629-ntp-04-e24-a-signed-residue-with-modulus-one-solution}

<details><summary>Full solution</summary>

Here $g=\gcd(1,7)=1$ and $1(1)+0(7)=1$. The difference is $-5-(-17)=12$, so $d=12$ and $t\equiv12\equiv5\pmod7$. The raw solution is $-17+5=-12$, whose canonical representative modulo $L=7$ is 2 because $-12=-2(7)+2$. Both original checks hold: $2-(-17)=19\cdot1$ and $2-(-5)=1\cdot7$. Thus every solution is $2+7k$. Modulus one imposes no restriction and does not require rejecting the input.

</details>

