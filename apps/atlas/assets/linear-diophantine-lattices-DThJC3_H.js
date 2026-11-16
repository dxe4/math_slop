var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: linear-diophantine-lattices
title: "Linear Diophantine Equations and Lattice Parametrization"
level: advanced-undergraduate
estimated_minutes: 215
license: CC BY-SA 4.0
---

# Linear Diophantine Equations and Lattice Parametrization {#section-1-linear-diophantine-equations-and-lattice-parametrizatio}

A linear equation over the reals describes a line or hyperplane. Requiring integer coordinates turns that continuous object into a translated lattice. The gcd decides existence, a Bezout certificate produces one point, and a homogeneous lattice describes every other point. Inequalities then become exact bounds on integer parameters.

This chapter assumes Euclid, Bezout, and congruences. After it you should be able to parametrize all solutions, impose sign and box constraints without search, count bounded solutions, solve several congruence constraints as a lattice intersection, and state precisely what changes in more than two variables.

<a id="section-5-1-one-equation-in-two-unknowns"></a>
## 1. One equation in two unknowns {#section-7-1-one-equation-in-two-unknowns}

For integers $a,b,c$, with $a,b$ not both zero, let $g=\\gcd(a,b)$. The equation

\\[ax+by=c\\]

has integer solutions exactly when $g\\mid c$. If $(x_{0},y_{0})$ is one solution, every solution is

$x=x_{0}+(b/g)t$, $y=y_{0}-(a/g)t$, $t \\in \\mathbb{Z}$.

The direction vector $(b/g,-a/g)$ generates the integer kernel of the row vector $(a,b)$. Thus the solution set is the affine lattice

$(x_{0},y_{0})+\\mathbb{Z}(b/g,-a/g)$.

![Coordinate grid showing the line 2x plus 3y equals 6. Its integer solution points are equally spaced by the primitive direction vector (3, minus 2), starting from the labelled base point (0,2).](figures/linear-solution-lattice.svg)

*An affine one-dimensional lattice is the discrete intersection of a real solution line with the integer grid. Here every integer solution is $(0,2)+t(3,-2)$.*

<a id="section-23-worked-parametrization"></a>
### Worked parametrization {#section-25-worked-parametrization}

Solve $18x+30y=42$. Since $g=6$, solutions exist. The identity $2*18-30=6$, multiplied by $7$, gives $(x_{0},y_{0})=(14,-7)$. Therefore

$x=14+5t$, $y=-7-3t$.

Substitution verifies the family, and subtracting any solution from the base point proves completeness.

<a id="section-31-2-constraints-become-parameter-intervals"></a>
## 2. Constraints become parameter intervals {#section-33-2-constraints-become-parameter-intervals}

Suppose the previous problem requires $x,y\\ge 0$. Then

$14+5t\\ge 0$ and $-7-3t\\ge 0$,

so an allowed integer would have to satisfy $t\\ge \\left\\lceil -14/5 \\right\\rceil=-2$ and $t\\le \\left\\lfloor -7/3 \\right\\rfloor=-3$. The interval is empty, so no solution has both coordinates nonnegative. Negative endpoints make decimal intuition risky; compute ceilings and floors explicitly.

<a id="section-39-worked-count"></a>
### Worked count {#section-41-worked-count}

Count nonnegative solutions of $7x+11y=200$. Modulo $7$, $4y\\equiv 4$, so $y\\equiv 1 \\bmod 7$. Write $y=1+7t$; then $x=27-11t$. Nonnegativity gives $0\\le t\\le 2$, so there are three solutions: $(27,1),(16,8),(5,15)$.

<a id="section-43-3-congruence-is-a-projected-lattice"></a>
## 3. Congruence is a projected lattice {#section-45-3-congruence-is-a-projected-lattice}

When $b\\ne0$, the equation $ax+by=c$ projects to $ax\\equiv c \\pmod {|b|}$. Conversely a solution of that congruence supplies $y=(c-ax)/b$. If $b=0$, the equation is handled directly as $ax=c$ and no modulus or division by $b$ is introduced. This equivalence lets us choose whichever valid representation exposes the structure.

A pair of congruences can be written as an integer system with slack variables. For example

$x\\equiv 2 \\bmod 5$, $x\\equiv 3 \\bmod 7$

means $x-5u=2$, $x-7v=3$. Eliminating $x$ gives $5u-7v=1$, whose affine lattice projects to the CRT class $x\\equiv 17 \\bmod 35$.

<a id="section-53-4-more-variables"></a>
## 4. More variables {#section-55-4-more-variables}

For integers $a_{1},\\ldots,a_{n}$, not all zero,

\\[a_{1}x_{1}+\\ldots+a_{n}x_{n}=c\\]

is solvable exactly when $\\gcd(a_{1},\\ldots,a_{n})\\mid c$. Repeated Bezout produces one solution. The homogeneous solutions form a rank $n-1$ sublattice of $\\mathbb{Z}^n$, but a convenient generating set may contain dependencies.

<a id="section-61-worked-three-variable-basis"></a>
### Worked three-variable basis {#section-63-worked-three-variable-basis}

Solve $2x+3y+5z=0$. A tempting parametrization is

$(x,y,z)=s(-3,2,0)+t(0,5,-3)$,

but it forces $3\\mid z$ and therefore misses solutions such as $(-1,-1,1)$. This is a useful failure test: substitution proves only that the listed vectors are solutions, not that they span the whole integer kernel. A correct universal basis is

$(x,y,z)=s(-3,2,0)+t(-1,-1,1)$.

Indeed these vectors lie in the kernel. Given a solution, set $t=z$, then $2x+3y=-5z$; modulo $2$, $y\\equiv z$, so $s=(y+z)/2$ is integral and the formula recovers all coordinates. Auditing a parametrization requires both substitution and surjectivity.

<a id="section-73-5-two-generator-semigroups"></a>
## 5. Two-generator semigroups {#section-75-5-two-generator-semigroups}

For coprime integers $a,b>1$, every sufficiently large nonnegative integer is $ax+by$ with $x,y\\ge 0$. The largest nonrepresentable nonnegative integer is

$ab-a-b$.

To see representability above it, among $n,n-b,\\ldots,n-(a-1)b$ exactly one is divisible by $a$; if that selected value were negative, it would be at most $-a$, forcing $n\\le ab-a-b$. For nonrepresentability, if $ab-a-b=ax+by$, reduction modulo $a$ forces $y\\equiv-1 \\bmod a$, so $y\\ge a-1$; similarly the resulting size is too large unless a coefficient is negative.

This Frobenius formula is special to two coprime generators. Three-generator versions have no analogous universal expression using only the generators.

<a id="section-83-6-linear-systems-and-determinant-boundaries"></a>
## 6. Linear systems and determinant boundaries {#section-85-6-linear-systems-and-determinant-boundaries}

For

$ax+by=e$, $cx+dy=f$,

the determinant $D=ad-bc$ controls the rational solution. If $D\\ne 0$, Cramer's formulas give

$x=(ed-bf)/D$, $y=(af-ec)/D$.

An integer solution exists exactly when both numerators are divisible by $D$. If $D=0$, the rows are rationally dependent; the system is either inconsistent or reduces to one Diophantine equation. In larger systems, Smith normal form is the canonical gcd-and-divisibility extension, developed in the computational algebra volume.

<a id="section-95-7-proof-object-checklist"></a>
## 7. Proof-object checklist {#section-97-7-proof-object-checklist}

A complete answer records the gcd obstruction, one certified base point, kernel generators, a proof that every solution is captured, and any exact parameter bounds. A plot of lattice points is supplementary; the textual alternative is the base point, basis vectors, and integer interval.

<a id="section-99-exercises-with-complete-solutions"></a>
## 8. Development: the integer kernel includes signed and zero cases {#section-359-8-development-the-integer-kernel-includes-signed-and-ze}

For $ax+by=c$, the coefficient domain matters before any division is made. If $a=b=0$, the equation has every pair in $\\mathbb Z^2$ as a solution when $c=0$, and none otherwise. There is no one-dimensional kernel in that case. If $a=0$ but $b\\ne0$, require $b\\mid c$, set $y=c/b$ and let $x$ be arbitrary. The case $b=0$, $a\\ne0$, is analogous. These cases explain the not-both-zero premise in §1.

Now assume that premise and take $g=\\gcd(a,b)>0$. Bezout supplies integers $r,s$ with $ar+bs=g$, even when coefficients are negative. Introduce the integer matrices
$$M=\\begin{pmatrix}r&b/g\\\\s&-a/g\\end{pmatrix},
\\qquad
M^{-1}=\\begin{pmatrix}a/g&b/g\\\\s&-r\\end{pmatrix}.$$
Multiplication verifies the inverse, using $ar+bs=g$. In particular both matrices have integer entries, $\\det M=-1$, and $(a,b)M=(g,0)$. A matrix with an integer inverse changes integer coordinates bijectively; it is often called unimodular.

Write $(x,y)^\\mathsf T=M(u,t)^\\mathsf T$. The equation becomes $gu=c$. Thus $g\\mid c$ is necessary and sufficient, and, when it holds, $u=c/g$ while $t$ is an arbitrary integer. Expanding gives
$$x=r(c/g)+(b/g)t,\\qquad y=s(c/g)-(a/g)t.$$
This proves completeness as well as substitution: an arbitrary integer solution has integer coordinates under $M^{-1}$, and its first coordinate is forced. No step divided by $a$ or $b$, so one-zero and signed cases are included.

For example, $-6x+9y=3$ reduces to $-2x+3y=1$. The point $(1,1)$ is a solution, and the primitive direction is $(3,2)$. Every solution is $(1+3t,1+2t)$. Both direction coordinates are positive because the equation's coefficients have opposite signs. Imposing nonnegativity here leaves infinitely many solutions; it is not analogous to a positive-coefficient coin equation, which bounds both variables for a fixed nonnegative target.

A primitive direction is the shortest integer step along the line in the following algebraic sense. Since $\\gcd(a/g,b/g)=1$, the coordinates $(b/g,-a/g)$ have no common divisor greater than one. If another integer homogeneous solution lay at a fractional multiple of this direction, the Bezout coordinate argument forces that multiple to be an integer. A real parametrization alone does not establish this fact about the integer grid.

Changing a particular solution does not change the lattice. If $p'=p+d t_0$, then $p+d t=p'+d(t-t_0)$. The base point has moved and the parameter origin has shifted. A correct congruence or bound calculation must shift with it; numerical values of the parameter are not intrinsic labels for the solution points.

<a id="section-377-9-development-combine-boxes-and-congruences-in-paramete"></a>
## 9. Development: combine boxes and congruences in parameter space {#section-379-9-development-combine-boxes-and-congruences-in-paramete}

Let a one-parameter family have coordinate $x_i=p_i+d_it$. For finite integer bounds $L_i\\le x_i\\le U_i$, a positive $d_i$ gives
$$\\left\\lceil\\frac{L_i-p_i}{d_i}\\right\\rceil
 \\le t\\le
 \\left\\lfloor\\frac{U_i-p_i}{d_i}\\right\\rfloor.$$
For $d_i<0$, the inequalities reverse before integer rounding:
$$\\left\\lceil\\frac{U_i-p_i}{d_i}\\right\\rceil
 \\le t\\le
 \\left\\lfloor\\frac{L_i-p_i}{d_i}\\right\\rfloor.$$
For $d_i=0$, either $p_i$ lies within the bounds and there is no restriction on $t$, or the whole constrained family is empty. Dividing by a zero direction component would lose precisely this distinction.

Intersect all the parameter intervals. If the resulting finite integer endpoints are $L\\le U$, the count is $U-L+1$; if $L>U$, it is zero. With one-sided constraints an endpoint may remain unbounded, and the count can be infinite. Strict inequalities on integer coordinates can first be converted to inclusive integer bounds. This keeps the rounding rule separate from the sign of the coefficient.

For the signed example $(x,y)=(1+3t,1+2t)$, impose $-5\\le x\\le10$ and $0\\le y\\le7$. The first restriction gives $-2\\le t\\le3$, the second $0\\le t\\le3$. The four solutions are therefore $(1,1),(4,3),(7,5),(10,7)$. These bounds use exact rational ceilings and floors; an approximation near a negative integer boundary could include an extra point or discard a valid one.

Congruences also become conditions on the parameter. The requirement $p_i+d_it\\equiv h_i\\pmod m$, with $m\\ge1$, becomes $d_it\\equiv h_i-p_i\\pmod m$. Put $g_i=\\gcd(d_i,m)$. If $g_i\\nmid h_i-p_i$, no solution survives. Otherwise divide coefficient, right side and modulus by $g_i$. When the reduced modulus exceeds one, the reduced coefficient is a unit, so this determines one residue class for $t$. If the reduced modulus is one, every integer parameter survives; no inverse modulo one is needed.

Several surviving classes must be combined with the generalized CRT, not automatically with a product of moduli. The classes $t\\equiv u\\pmod M$ and $t\\equiv v\\pmod N$ are compatible exactly when $\\gcd(M,N)\\mid v-u$. If compatible, their intersection is one class modulo $\\operatorname{lcm}(M,N)$. Write $t=u+Mk$ and solve $Mk\\equiv v-u\\pmod N$ to derive both the criterion and the common class.

For a concrete continuation, retain $-6x+9y=3$ but use the larger box $0\\le x,y\\le100$ and require $x\\equiv1\\pmod4$, $y\\equiv3\\pmod5$. The family gives $t\\equiv0\\pmod4$ and $t\\equiv1\\pmod5$, hence $t=16+20u$. The box requires $0\\le t\\le33$, so only $u=0$ survives and the unique pair is $(49,33)$. Substitution gives $-294+297=3$, while its two residues are correct.

In general, after obtaining $t=t_*+Mu$ with $M>0$, a finite parameter interval $L\\le t\\le U$ becomes
$$\\left\\lceil\\frac{L-t_*}{M}\\right\\rceil
 \\le u\\le
 \\left\\lfloor\\frac{U-t_*}{M}\\right\\rfloor.$$
This is a complete counting certificate: original family, residue class, integer interval and final count. Testing many candidate coordinates is unnecessary once those transformations have been justified.

<a id="section-405-10-development-build-a-higher-variable-integer-basis"></a>
## 10. Development: build a higher-variable integer basis {#section-407-10-development-build-a-higher-variable-integer-basis}

For a single nonzero integer row $a=(a_1,\\ldots,a_n)$, repeated two-coordinate Bezout operations give an integer-invertible matrix $U$ with
$$aU=(g,0,\\ldots,0),\\qquad g=\\gcd(a_1,\\ldots,a_n)>0.$$
To construct it, first move a nonzero coefficient to the first position and, if necessary, negate that column to make it positive. This also handles the one-variable case. Combine that coefficient with the next one using the two-by-two matrix from §8, acting only on those two columns. The first coefficient becomes their positive gcd and the other becomes zero. Continue through the remaining coefficients. Embedded integer-invertible operations and permutations have integer-invertible products.

Consequently $x=Uy$ solves $ax=c$ exactly when $gy_1=c$. If $g\\mid c$, the first column of $U$, multiplied by $c/g$, is one particular solution, and its remaining $n-1$ columns form an integer basis of the kernel. They are independent because $U$ is invertible, and they span every integer kernel vector because $U^{-1}x$ is integral with first coordinate zero. This proves the rank statement in §4 without appealing to the full Smith normal form.

The difference from a rational basis is important. Multiplying one integer basis vector by three leaves the same real span but can remove two out of every three parameter classes. For the corrected cautionary example in §4, let $v=(-3,2,0)$ and $w=(-1,-1,1)$. The proposed incomplete second vector $(0,5,-3)$ equals $v-3w$. Thus
$$s v+t(v-3w)=(s+t)v-3t w.$$
Relative to the correct basis $(v,w)$, its second coordinate is a multiple of three. Conversely every such pair of coordinates occurs. The smaller lattice therefore has exactly three cosets in the full kernel, distinguished by that coordinate modulo three. It contains only solutions, but misses $w$ itself.

A certificate for a higher-variable parametrization can be shorter than a general reduction. For $6x+10y+15z=c$, observe modulo five that $x\\equiv c$, and modulo two that $z\\equiv c$. Write $x=c+5s$ and $z=-c-2t$. Substitution forces
$$y=c-3s+3t.$$
Hence all solutions are
$$(x,y,z)=c(1,1,-1)+s(5,-3,0)+t(0,3,-2).$$
Conversely the two congruences extract integer $s,t$ from every solution, so this is a full basis and affine family, not just a collection of points that passes substitution.

For this particular family the complete coordinate change can be written explicitly:
$$U=\\begin{pmatrix}1&5&0\\\\1&-3&3\\\\-1&0&-2\\end{pmatrix},
\\qquad U^{-1}=
\\begin{pmatrix}6&10&15\\\\-1&-2&-3\\\\-3&-5&-8\\end{pmatrix}.$$
Direct multiplication gives the identity matrix. The first row of $U^{-1}$ recovers the value $c=6x+10y+15z$; the other rows recover $s=-x-2y-3z$ and $t=-3x-5y-8z$. Thus the same certificate works for every right side, not merely the displayed point at $c=1$.

This illustrates why an inverse matrix is stronger than testing a few parameter values. Integer entries in $U$ prove soundness for every integer input. Integer entries in its inverse prove that every integer output point has integer parameters. A rational inverse with denominators would leave congruence restrictions on the recovered coordinates, exactly where an incomplete sublattice can hide.

For several free parameters, inequalities become simultaneous linear inequalities in a parameter lattice. They need not split into independent intervals. In the displayed family, imposing $y=c$ forces $t=s$ and reduces the problem to one parameter. Other constraints can leave a two-dimensional polygon of integer parameters. The coordinate map is exact in either case; counting its constrained points is a separate problem rather than a reason to replace integer coefficients by real ones.

The kernel is also saturated: if a nonzero integer $k$ and an integer vector $v$ satisfy $a(kv)=0$, then $k(av)=0$ in the integers and hence $av=0$. This simple cancellation explains why the full kernel contains primitive integer steps. A proposed proper finite-index sublattice, like the index-three cautionary family, need not have that property. Soundness of its equations and completeness of its integer coordinates are different obligations.

<a id="section-435-11-development-what-survives-beyond-the-two-generator-c"></a>
## 11. Development: what survives beyond the two-generator coin formula {#section-437-11-development-what-survives-beyond-the-two-generator-c}

The nonnegative-coefficient problem has additional hypotheses. Let the generators be positive integers with gcd one. If one is one, every nonnegative integer is represented. If their gcd exceeds one, infinitely many integers are excluded, so there is no largest excluded nonnegative integer over all residue classes. Signed-coefficient affine-lattice solutions do not remove either restriction on a nonnegative semigroup.

For the remaining Frobenius discussion, assume the positive generators have gcd one and all exceed one; a largest excluded nonnegative integer then exists by the argument below. There is an exact finite residue method for such a fixed list. Choose a generator $a\\ge2$ and let $S$ be the set of all nonnegative combinations. For each residue $r$ modulo $a$, let $w_r$ be the least element of $S$ with that residue. Such an element exists: the other generator residues generate the whole finite cyclic group because the total gcd is one, and negative coefficients can be replaced modulo $a$ by nonnegative ones. Well-ordering then gives a least value.

A nonnegative integer $N$ with residue $r$ belongs to $S$ exactly when $N\\ge w_r$. Necessity is minimality. For sufficiency, $N-w_r$ is a nonnegative multiple of the generator $a$. Thus the largest nonrepresented integer is
$$F=\\max_{0\\le r<a}w_r-a.$$
Each residue contributes its final missing member $w_r-a$, with negative values simply below the nonnegative range. The list $(w_r)$ is often called an Apéry set with respect to $a$.

The required minima can be found in a finite search whose bound has a proof. Regard adding a generator as moving between residues, with cost equal to that positive generator. A least-cost route to a residue cannot revisit a residue: removing the intervening positive-cost cycle would reach the same endpoint at lower cost. It therefore uses at most $a-1$ additions. If $M$ is the largest generator, each $w_r$ is at most $(a-1)M$. This is a finite algorithm derived from the generators, not a claim that all inputs admit a short product expression.

For two coprime generators $a,b>1$, the minimum in residue $jb\\bmod a$, with $0\\le j<a$, is exactly $jb$. Any representation in that residue has its $b$ coefficient congruent to $j$ modulo $a$, so a nonnegative coefficient is at least $j$. The largest residue minimum is $(a-1)b$, recovering $F=(a-1)b-a=ab-a-b$.

For three generators $4,7,9$, the minima in residues $0,1,2,3$ modulo four are $0,9,14,7$. The expressions are the empty sum, $9$, $7+7$ and $7$. No smaller value in the respective residue is a combination: below fourteen, the possibilities using a nine are nine and thirteen, and those without one use only fours and at most one seven. The maximum minimum is fourteen, giving $F=10$. Indeed eleven through fourteen are represented, and adding four carries their residue classes onward.

This clarifies the scope of §5's contrast. The two-generator closed product formula is special; it is not a theorem that a third generator prevents all exact formulas or algorithms. The semigroup and its Frobenius number are determined by the generators, and the residue-minimum construction computes them finitely. For more generators, the extra minima encode arithmetic information that the two-generator expression had already simplified away.

<a id="section-453-12-development-dependent-systems-need-consistency-and-d"></a>
## 12. Development: dependent systems need consistency and divisibility {#section-455-12-development-dependent-systems-need-consistency-and-d}

A zero determinant does not by itself decide solvability. It says that the two coefficient rows fail to be independent over the rationals. There are then two different questions: do their right sides respect that dependence, and does the remaining rational line contain any integer point? Confusing these tests can turn a perfectly consistent rational system into an incorrectly claimed integer solution family.

Consider $ax+by=e$ and $cx+dy=f$. If both coefficient rows vanish, require $e=f=0$. When this holds every integer pair is a solution; otherwise none is. If the first row vanishes but the second does not, require $e=0$ and apply the one-equation gcd test to the second row. These cases must precede any division by a selected coefficient.

Suppose now $(a,b)\\ne(0,0)$ and $D=ad-bc=0$. Compatibility of the right sides is equivalent to the two integer equalities
$$af=ce,\\qquad bf=de.$$
Necessity follows by multiplying the equations and subtracting, using $ad=bc$. For sufficiency, if $a\\ne0$, the second row is $(c/a)$ times the first; the first equality makes the second right side the same multiple. If $a=0$, then $b\\ne0$ and $D=0$ forces $c=0$. The second equality gives $f=(d/b)e$. Thus no solution is lost by reducing a compatible system to its first equation.

After compatibility, and only after it, require $\\gcd(a,b)\\mid e$. If that divisibility fails, the common rational line misses the integer grid. If it holds, the Bezout base point and primitive direction give every integer solution. The system can never have a unique integer solution in this dependent nonzero-row case: one solution brings infinitely many by nonzero integer steps along its kernel. Additional inequalities may of course leave just one constrained point.

For example, $4x-6y=10$ and $-6x+9y=-15$ have proportional coefficient rows and proportional right sides. Dividing the first equation by two gives $2x-3y=5$. A base point is $(4,1)$, so every solution is
$$(x,y)=(4+3t,1+2t),\\qquad t\\in\\mathbb Z.$$
Substitution into the second equation gives $-24-18t+9+18t=-15$. If its right side were changed to minus fourteen, the coefficient dependence would remain, but $4(-14)\\ne(-6)10$ would prove inconsistency before any search for integer coordinates.

For a different failure, $2x+4y=1$ and $4x+8y=2$ are compatible rational equations. Their shared line nevertheless has no integer point because two does not divide one. Multiplying an equation to make a second row has not removed its original gcd obstruction. Compatibility tests alone therefore do not certify a lattice.

When $D\\ne0$, there is a unique rational point, so both Cramer numerators must be divisible by $D$ for that point to be integral. A negative determinant causes no new case: divisibility by $D$ and by $|D|$ are equivalent. With a nonzero determinant there is no free parameter to round, and a nearby integer point is not an approximate solution to an exact equation.

These rank cases also explain the limit of a one-row reduction. For several equations, reducing each row separately may produce incompatible coordinate choices. One needs transformations that keep track of all equations and their right sides together. The later Smith-normal-form treatment supplies that general simultaneous invariant. Here the determinant and dependence calculations already give a complete two-by-two certificate, without claiming to have proved the general theorem.

A related diagnostic concerns congruences imposed on a valid family. For $(1+3t,1+2t)$, the condition $x\\equiv1\\pmod6$ gives $t\\equiv0\\pmod2$, while $y\\equiv3\\pmod4$ gives $t\\equiv1\\pmod2$. Each congruence separately has solutions, but their intersection is empty. Solving after division by the coefficient gcd and then applying generalized CRT exposes the contradiction immediately. Replacing the intersection by a product modulus would merely hide it.

<a id="section-477-exercises-optional-lattice-and-semigroup-extensions"></a>

## Summary

<a id="section-356-chapter-summary"></a>
A solvable linear Diophantine equation is an affine lattice: one Bezout point plus the integer kernel. Positivity and box constraints become exact integer parameter intervals. CRT is a lattice intersection, while multi-variable equations have higher-rank kernels. A correct parametrization proves both soundness and completeness.
<a id="section-357-8-development-the-integer-kernel-includes-signed-and-ze"></a>

## Exercises {#section-101-exercises-with-complete-solutions}

<a id="section-101-1-basic-family"></a>
### 1. Basic family {#section-103-1-basic-family}

Solve $12x+18y=30$.

**Hint 1.** Divide the coefficients and target by six.

**Hint 2.** Find one solution of the reduced equation and add the primitive kernel direction.

<details><summary>Full solution</summary>

**Solution.** Divide by $6$: $2x+3y=5$. One solution is $(1,1)$. All are $x=1+3t$, $y=1-2t$.

</details>

<a id="section-115-2-obstruction"></a>
### 2. Obstruction {#section-117-2-obstruction}

Why has $12x+18y=31$ no integer solution?

**Hint 1.** Every left-hand value is divisible by six.

**Hint 2.** The right-hand side is not.

<details><summary>Full solution</summary>

**Solution.** The gcd $6$ divides every left side but not $31$.

</details>

<a id="section-129-3-nonnegative-solutions"></a>
### 3. Nonnegative solutions {#section-131-3-nonnegative-solutions}

Find all nonnegative solutions to $3x+5y=24$.

**Hint 1.** Reduce the equation modulo three to constrain the second variable.

**Hint 2.** Use its upper bound from nonnegativity, then compute the first variable.

<details><summary>Full solution</summary>

**Solution.** Modulo $3$, $2y\\equiv 0$, so $y\\equiv 0 \\bmod 3$. Values $y=0,3$ give $x=8,3$; the next value exceeds $24/5$.

</details>

<a id="section-143-4-positive-solutions"></a>
### 4. Positive solutions {#section-145-4-positive-solutions}

Find positive solutions to $8x+14y=100$.

**Hint 1.** First divide the equation by two.

**Hint 2.** Use the parity condition on the second variable and impose strict positivity on both.

<details><summary>Full solution</summary>

**Solution.** Divide by $2$: $4x+7y=50$. Modulo $4$, $3y\\equiv 2$, so $y\\equiv 2 \\bmod 4$. Positive possibilities are $y=2,6$; they give $x=9,2$.

</details>

<a id="section-157-5-count-in-a-box"></a>
### 5. Count in a box {#section-159-5-count-in-a-box}

How many solutions of $5x+7y=1$ satisfy $-20\\le x,y\\le 20$?

**Hint 1.** Find one Bezout solution and its one-parameter family.

**Hint 2.** Translate the four box inequalities into one integer interval for the parameter.

<details><summary>Full solution</summary>

**Solution.** One solution is $(3,-2)$, so $x=3+7t$, $y=-2-5t$. Bounds give $-23/7\\le t\\le 17/7$ and $-22/5\\le t\\le 18/5$. Intersection contains integers $-3,-2,-1,0,1,2$, hence six.

</details>

<a id="section-171-6-kernel-direction"></a>
### 6. Kernel direction {#section-173-6-kernel-direction}

Prove $(b/g,-a/g)$ is primitive: its coordinates have gcd one.

**Hint 1.** Divide both coefficients by their gcd.

**Hint 2.** Any remaining common divisor would contradict the definition of that gcd.

<details><summary>Full solution</summary>

**Solution.** Dividing $a,b$ by their gcd leaves coprime integers, so $\\gcd(b/g,a/g)=1$.

</details>

<a id="section-185-7-congruence-projection"></a>
### 7. Congruence projection {#section-187-7-congruence-projection}

Solve $17x+43y=1$ by first solving a congruence.

**Hint 1.** Reduce modulo forty-three to determine the first variable.

**Hint 2.** Recover the second and then add the homogeneous direction.

<details><summary>Full solution</summary>

**Solution.** Modulo $43$, $17x\\equiv 1$. Extended Euclid gives inverse $38$, so $x=38+43t$; then $y=(1-17x)/43=-15-17t$.

</details>

<a id="section-199-8-crt-as-lattice"></a>
### 8. CRT as lattice {#section-201-8-crt-as-lattice}

Solve $x\\equiv 1 \\bmod 4$, $x\\equiv 4 \\bmod 9$.

**Hint 1.** Write the first class as one plus four times an integer.

**Hint 2.** Solve for that parameter modulo nine.

<details><summary>Full solution</summary>

**Solution.** Put $x=1+4u$; require $4u\\equiv 3 \\bmod 9$. Inverse of $4$ is $7$, so $u\\equiv 3 \\bmod 9$. Thus $x\\equiv 13 \\bmod 36$.

</details>

<a id="section-213-9-three-variables"></a>
### 9. Three variables {#section-215-9-three-variables}

Find one solution of $6x+10y+15z=1$.

**Hint 1.** A combination of six and ten gives a multiple of two.

**Hint 2.** Combine that even gcd with fifteen to obtain one.

<details><summary>Full solution</summary>

**Solution.** $\\gcd(6,10,15)=1$. Since $10-6=4$ and $15-2*6=3$, their difference gives $1=(10-6)-(15-12)=6+10-15$; hence $(1,1,-1)$.

</details>

<a id="section-227-10-homogeneous-basis-audit"></a>
### 10. Homogeneous basis audit {#section-229-10-homogeneous-basis-audit}

Verify the two vectors in the corrected basis for $2x+3y+5z=0$.

**Hint 1.** Substitute each proposed vector into the homogeneous equation.

**Hint 2.** Then use the chapter's congruence parametrisation to see whether the vectors span every integral solution.

<details><summary>Full solution</summary>

**Solution.** $2(-3)+3(2)+5(0)=0$; $2(-1)+3(-1)+5(1)=0$. The chapter's parity argument proves they span every integer solution.

</details>

<a id="section-241-11-frobenius-number"></a>
### 11. Frobenius number {#section-243-11-frobenius-number}

What is the largest integer not representable as $5x+7y$ with nonnegative $x,y$?

**Hint 1.** Use the two-generator Frobenius formula for coprime positive coin sizes.

**Hint 2.** The answer is the product minus the sum.

<details><summary>Full solution</summary>

**Solution.** Coprimality permits the formula $5*7-5-7=23$.

</details>

<a id="section-255-12-verify-the-boundary"></a>
### 12. Verify the boundary {#section-257-12-verify-the-boundary}

Show $23$ is not $5x+7y$ nonnegatively, while $24$ through $28$ are.

**Hint 1.** Bound the possible number of seven-coins in a representation of twenty-three.

**Hint 2.** Construct the next five consecutive amounts and then add five repeatedly.

<details><summary>Full solution</summary>

**Solution.** Modulo $5$, a representation of $23$ needs $2y\\equiv 3$, hence $y\\equiv 4$; then $7y\\ge 28$. The next values are $24=2*5+2*7$, $25=5*5$, $26=1*5+3*7$, $27=4*5+7$, $28=4*7$.

</details>

<a id="section-269-13-noncoprime-coins"></a>
### 13. Noncoprime coins {#section-271-13-noncoprime-coins}

Why are infinitely many integers not representable by $6x+10y$?

**Hint 1.** Every representable amount is even.

**Hint 2.** Every positive odd integer is therefore missing.

<details><summary>Full solution</summary>

**Solution.** Every representation is even, so every odd integer is excluded. The two-generator Frobenius formula requires gcd one.

</details>

<a id="section-283-14-determinant-test"></a>
### 14. Determinant test {#section-285-14-determinant-test}

Solve $2x+3y=7$, $5x+7y=17$.

**Hint 1.** Eliminate one variable by an integer combination.

**Hint 2.** Substitute the recovered integer back into both equations.

<details><summary>Full solution</summary>

**Solution.** The determinant is $14-15=-1$. Cramer's formulas give $x=(49-51)/(-1)=2$, $y=(34-35)/(-1)=1$.

</details>

<a id="section-297-15-rational-but-not-integer"></a>
### 15. Rational but not integer {#section-299-15-rational-but-not-integer}

Show $2x+4y=1$, $x-y=0$ has no integer solution.

**Hint 1.** The second equation makes the two variables equal.

**Hint 2.** The first then requires six times an integer to equal one.

<details><summary>Full solution</summary>

**Solution.** The second equation gives $x=y$; the first becomes $6x=1$, whose rational solution $1/6$ is not integral.

</details>

<a id="section-311-16-a-dependent-system"></a>
### 16. A dependent system {#section-313-16-a-dependent-system}

Classify $2x+4y=6$, $x+2y=3$.

**Hint 1.** The first equation is twice the second.

**Hint 2.** There is one independent equation and a full integer parameter family.

<details><summary>Full solution</summary>

**Solution.** The equations are identical after scaling. All solutions satisfy $x+2y=3$, hence $(x,y)=(3-2t,t)$.

</details>

<a id="section-325-17-parameter-bound-correction"></a>
### 17. Parameter-bound correction {#section-327-17-parameter-bound-correction}

For $x=14+5t$, $y=-7-3t$, prove no pair is nonnegative.

**Hint 1.** The first coordinate requires the parameter to be at least minus two.

**Hint 2.** The second requires it to be at most minus three.

<details><summary>Full solution</summary>

**Solution.** $x\\ge 0$ requires $t\\ge \\left\\lceil -14/5 \\right\\rceil=-2$; $y\\ge 0$ requires $t\\le \\left\\lfloor -7/3 \\right\\rfloor=-3$. No integer satisfies both.

</details>

<a id="section-339-18-completeness-standard"></a>
### 18. Completeness standard {#section-341-18-completeness-standard}

Why is substituting a proposed parameter family not enough?

**Hint 1.** Substitution proves that produced values are solutions.

**Hint 2.** Completeness also requires showing that an arbitrary solution can be recovered by some parameter.

<details><summary>Full solution</summary>

**Solution.** Substitution proves every listed point is a solution but not that every solution is listed. Completeness needs a divisibility argument showing the difference from a base solution is an integer combination of the kernel generators.

</details>


<a id="section-354-chapter-summary"></a>

<a id="section-479-exercises-optional-lattice-and-semigroup-extensions"></a>
### 19. NTP-09-E19. Constraints on a complete higher-variable family {#section-483-ntp-09-e19-constraints-on-a-complete-higher-variable-fa}

Find all integer solutions of $6x+10y+15z=1$ satisfying $y=1$, $x\\ge0$, $-5\\le z\\le5$ and $x\\equiv1\\pmod{10}$. Give a complete parameter argument, not just a list that satisfies the equation.

**Hint 1.** Set the fixed y value first and reduce the remaining equation modulo three.

**Hint 2.** Intersect the resulting one-parameter family with the interval, positivity and final congruence.

<a id="section-489-ntp-09-e20-a-three-generator-residue-certificate"></a>
### 20. NTP-09-E20. A three-generator residue certificate {#section-491-ntp-09-e20-a-three-generator-residue-certificate}

For nonnegative combinations of $5,7,9$, find the least represented values in every residue modulo five. Prove they are least, deduce the largest nonrepresented nonnegative integer, and explain why adding the generator nine changes the two-generator answer for five and seven.

**Hint 1.** Compute the least representable value in each residue modulo five.

**Hint 2.** After each least value, adding five gives every larger value in that residue.

<a id="section-497-solutions-optional-lattice-and-semigroup-extensions"></a>

## Solutions: optional lattice and semigroup extensions {#section-499-solutions-optional-lattice-and-semigroup-extensions}

<a id="section-499-ntp-09-e19-constraints-on-a-complete-higher-variable-fa"></a>
### NTP-09-E19. Constraints on a complete higher-variable family — solution {#section-501-ntp-09-e19-constraints-on-a-complete-higher-variable-fa}

<details><summary>Full solution</summary>

Use $(x,y,z)=(1+5s,1-3s+3t,-1-2t)$, whose completeness was proved in §10. The condition $y=1$ forces $t=s$. Nonnegativity of $x$ gives $s\\ge0$, while $-5\\le-1-2s\\le5$ gives $-3\\le s\\le2$. Hence $s=0,1,2$ before the congruence. The condition $1+5s\\equiv1\\pmod{10}$ forces $s$ even. Thus $s=0,2$, giving $(1,1,-1)$ and $(11,1,-5)$. Both satisfy the original equation, and every constrained solution came from the full parameter family.

</details>

<a id="section-507-ntp-09-e20-a-three-generator-residue-certificate-soluti"></a>
### NTP-09-E20. A three-generator residue certificate — solution {#section-509-ntp-09-e20-a-three-generator-residue-certificate-soluti}

<details><summary>Full solution</summary>

For residues $0,1,2,3,4$, take minima $0,16,7,18,9$. They are represented by the empty sum, $7+9$, $7$, $9+9$ and $9$. To check minimality of sixteen in residue one, the smaller nonnegative candidates are one, six and eleven, none a combination. For eighteen in residue three, the candidates are three, eight and thirteen, also impossible: below fourteen a combination uses at most one nine and at most one seven, and the possible remaining amounts are multiples of five. The minima seven and nine are immediate from the smaller positive generators. The largest minimum is eighteen, so the Frobenius number is thirteen. The old two-generator value $5\\cdot7-5-7=23$ no longer applies because nine supplies new residue representatives; in particular twenty-three is now $2\\cdot7+9$.

</details>

<a id="section-515-references-integer-lattice-and-semigroup-scope"></a>

## Sources: integer-lattice and semigroup scope {#section-517-references-integer-lattice-and-semigroup-scope}

The arguments above use the division, Bezout and CRT results developed earlier in this book. The integer-invertible reduction proves the one-row lattice statement locally; no general Smith-normal-form theorem is hidden inside it. The residue-minimum construction and its finite bound are proved here under positive-generator and gcd-one hypotheses. No impossibility theorem about all three-generator expressions is imported from the informal comparison in §5.
`;export{e as default};