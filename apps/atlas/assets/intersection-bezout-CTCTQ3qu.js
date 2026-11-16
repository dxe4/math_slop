var e=`---
parent_id: book-algebraic-geometry
chapter_id: intersection-bezout
title: "Intersection and Bézout"
level: graduate
status: draft
license: CC BY-SA 4.0
---

# Intersection and Bézout

Two plane curves may meet at fewer distinct points than the product of their degrees. The missing count is local algebraic length, including tangency and points at infinity. We define that length and prove the projective plane Bézout theorem from a two-equation graded resolution, identifying exactly why its eventual Hilbert function equals the sum of local intersection lengths.

The field $k$ is algebraically closed of arbitrary characteristic. Let $F,G\\in S=k[X,Y,Z]$ be homogeneous of positive degrees $m,n$ with no common irreducible factor. Their equation divisors may carry repeated factors individually; if one wants reduced curves, choose their squarefree equations. Intersection multiplicity depends on the equations with those multiplicities, not just on their ordinary point sets. Read Chapters 3 and 5, together with Commutative Algebra on [finite lengths](../commutative-algebra/artinian-dvr-dedekind.md) and [graded Hilbert functions](../commutative-algebra/hilbert-polynomials.md). The proof below gives its required graded calculation directly.

## 1. The intersection is finite under the correct hypothesis

In an affine projective chart, dehomogenize $F,G$ to $f,g\\in k[x,y]$. They have no common nonconstant factor unless one is a unit, in which case the local intersection is empty. Indeed, homogenizing a common affine factor would give a common homogeneous factor of $F,G$ after removing possible powers of the chart coordinate. That homogenized factor is not the chart coordinate itself, so would divide both original forms, contradiction.

If the ideal $(f,g)$ is proper, any prime minimal over it has height at most two by the height bound of Chapter 5. It cannot have height zero, since at least one defining polynomial is nonzero. It cannot have height one: a height-one prime containing $f$ contains an irreducible factor $h$ of $f$; the prime ideal $(h)$ has height one by the principal ideal theorem, so it equals that prime. Then $h$ divides $g$ too, contradiction. Every minimal prime therefore has height two, and its affine quotient has dimension zero by the height formula.

A zero-dimensional affine algebraic set has finitely many points: its finitely many irreducible components have coordinate domains of dimension zero, hence are fields finite over $k$ and equal to $k$. Thus each chart contains finitely many intersection points. The three standard charts cover the projective plane, proving the full intersection finite. This argument establishes finiteness before a finite sum of multiplicities is written.

If the forms share a component, this proof fails at the common-factor step and the intersection contains infinitely many points of that component. No finite product-of-degrees sum is asserted in that case. In particular two copies of the same line do not satisfy the theorem's hypothesis, even though each has degree one.

## 2. Local intersection is a length

At an intersection point $P$, choose an affine chart and write its local plane ring as $R=k[x,y]_{\\mathfrak m_P}$. Let $f,g$ be the dehomogenized equations. Define

$$i_P(F,G)=\\operatorname{length}_R R/(f,g).$$

The quotient has dimension zero by the isolated-intersection argument, is Noetherian, and is therefore Artinian with finite length. Its only residue field is $k$, so this length also equals its $k$-dimension. It is a positive integer because a point of intersection has both equations in its maximal ideal, making the quotient nonzero. At a point not on both equation divisors, use the same quotient formula with length zero, since one generator is then a unit. This convention permits the factor-additivity formula below without adding undefined terms.

Changing projective chart multiplies each local equation by a unit given by the appropriate chart-coordinate ratio to its degree. The local rings are identified by the regular chart transition, so their quotient ideals and lengths agree. Scaling a defining form by a nonzero scalar also changes it by a unit. These facts prove the definition is independent of those choices. Replacing $F$ by a positive power is not a unit change and can alter the answer.

The intersection is transverse exactly when the two linear parts span $\\mathfrak m_P/\\mathfrak m_P^2$. Nakayama then gives $(f,g)=\\mathfrak m_P$ and the quotient is $k$, so its length is one. Conversely a length-one local quotient with residue field $k$ is that field, forcing the ideal to be the maximal ideal and its two linear parts to span. In the plane this is independence of the two gradient rows. Thus transverse smooth branches have multiplicity one, while coincident tangents or a singular branch cannot be decided by a count of distinct points.

## 3. The exact two-equation graded calculation

There is an exact graded sequence

$$0\\longrightarrow S(-m-n)
\\xrightarrow{H\\mapsto(-GH,FH)}S(-m)\\oplus S(-n)
\\xrightarrow{(U,V)\\mapsto FU+GV}S
\\longrightarrow A\\longrightarrow0,$$

where $A=S/(F,G)$ and the shift aligns total degrees. Injectivity at the first step follows because $S$ is a domain and the forms are nonzero. If $FU+GV=0$, coprimality makes $F$ divide $V$ in the polynomial UFD. Write $V=FH$; then domain cancellation gives $U=-GH$. This proves exactness in the middle, including its full kernel. The last two positions are the definition of the quotient.

The degree-$d$ part of $S$ has a basis of degree-$d$ monomials, of size $\\binom{d+2}{2}$ for $d\\ge0$ and zero for negative degree. Taking dimensions in the exact sequence gives, for all sufficiently large $d$,

$$\\dim_k A_d=
\\binom{d+2}{2}-\\binom{d-m+2}{2}
-\\binom{d-n+2}{2}+\\binom{d-m-n+2}{2}=mn.$$

The equality follows by expanding the four quadratic polynomials; their quadratic and linear terms cancel and the remaining mixed term is $mn$. This is a finite graded dimension identity, not a convergence statement for a power series. To turn it into geometric intersection counting, we still have to connect the stable graded dimension with the local lengths. That step is proved next.

## 4. Move all intersection points into one affine chart

Choose a linear form $L$ nonzero at every intersection point. Such a form exists: each of finitely many points forbids one proper linear hyperplane in the vector space of linear forms. A finite union of proper linear hyperplanes cannot fill that space over an infinite field, since the product of their nonzero linear equations is a nonzero polynomial and cannot vanish on every coordinate tuple. After a linear coordinate change write $L=Z$. All intersection points then lie in the chart $Z\\ne0$.

Let $B=(A_Z)_0$, the degree-zero part after inverting $Z$. It is the affine intersection algebra $k[x,y]/(f,g)$ in this chart. Its radical has only finitely many maximal ideals, those of the intersection points. The quotient is Noetherian of dimension zero and has residue fields $k$, so it is finite-dimensional. It decomposes as the product of its local Artinian factors. Consequently

$$\\dim_kB=\\sum_P i_P(F,G).$$

The affine quotient here need not be reduced. Keeping it, rather than replacing it by its radical, is exactly what retains the intersection lengths. Its support lists the points, and its finite-dimensional local pieces supply the multiplicities.

## 5. Identify the stable graded dimension with that affine algebra

We prove that $\\dim A_d=\\dim B$ for all sufficiently large $d$. The map $A_d\\to B$ sends a homogeneous class $a$ to $a/Z^d$. Its image $W_d$ is contained in $W_{d+1}$ because multiplication by $Z$ leaves that fraction unchanged. Every element of $B$ has a degree-zero representative with a homogeneous numerator and a power of $Z$ as denominator, so belongs to some $W_d$. Since $B$ is finite-dimensional, finitely many such representatives for a basis show $W_d=B$ for all sufficiently large $d$.

It remains to control the kernel. Let $T$ be the graded submodule of $A$ killed by some power of $Z$. It is finitely generated because $A$ is Noetherian, so a single exponent $r$ kills all of it. The ideal $(F,G,Z^r)$ annihilates $T$. It has no projective zero: an intersection point never has $Z=0$ by our chosen chart. The projective empty-set criterion therefore puts some power of $(X,Y,Z)$ inside that ideal. This power kills $T$.

A finite graded module killed by a power of the irrelevant ideal has zero graded components in all sufficiently high degrees. To see it, choose finite homogeneous generators. Beyond the largest generator degree plus that power, every polynomial coefficient has high enough degree to lie in the killing ideal. Thus $T_d=0$ eventually. The kernel of $A_d\\to B$ is exactly $T_d$, because a class becomes zero after localization precisely when a power of $Z$ kills it. The maps are therefore eventually both injective and surjective, proving the required identification.

Combining Sections 3–5 gives the theorem with every finiteness and multiplicity step supplied:

**Plane Bézout theorem.** For homogeneous forms of degrees $m,n>0$ with no common component,

$$\\boxed{\\sum_{P\\in V_+(F,G)}i_P(F,G)=mn.}$$

In particular the intersection is nonempty, because every multiplicity is positive and the right side is positive. There are at most $mn$ distinct intersection points, with equality exactly when every local length is one. The conclusion counts all projective points, including those omitted by an originally chosen affine chart.

## 6. Worked example: a tangent line contributes two

Take the parabola $y=x^2$ and the line $y=0$ in the affine plane. Their projective equations are $YZ-X^2$ and $Y$, of degrees two and one. The only projective intersection is the affine origin. Its local quotient is

$$k[x,y]_{(x,y)}/(y-x^2,y)\\cong k[x]_{(x)}/(x^2).$$

It has basis one and $x$, hence length two. The two gradients at the origin are dependent, so this is not transverse, consistent with the length-one criterion. The calculation works in characteristic two as well: the derivative in $y$ of the parabola is one, so the curve is still smooth, while the line remains tangent.

The point count is one, but the length sum is two, exactly the degree product. Replacing the quotient by its radical would leave only $k$ and destroy the count. The nilpotent in the local intersection algebra records tangency even though each of the two curves separately is reduced and smooth.

## 7. Worked example: all four intersections are at infinity

The affine parabolas $y-x^2=0$ and $y-x^2-1=0$ have no common point. Their projective equations are

$$F=YZ-X^2,\\qquad G=YZ-X^2-Z^2.$$

At an intersection their difference gives $Z^2=0$, so set-theoretically $Z=0$ and then $X=0$. The only point is $P=[0:1:0]$. In the chart $Y=1$, with $u=X/Y,v=Z/Y$, the quotient equations are $v-u^2$ and $v-u^2-v^2$. Eliminating $v$ gives $k[u]_{(u)}/(u^4)$, of length four.

Thus Bézout gives four exactly, although the affine intersection is empty. The calculation has not divided by two or used distinct roots, so holds in every characteristic. It is the complete local algebra at the boundary point, not the visual shape of two displaced graphs, that determines the projective count.

## 8. Worked example: characteristic can merge simple points

Intersect the conic $XY-Z^2=0$ with the line $X-Y=0$. The points all lie in the chart $Z\\ne0$, because $Z=0$ would force both other coordinates zero after imposing the line. The affine quotient is $k[x]/(x^2-1)$.

In characteristic different from two, the two roots are distinct and each local quotient has length one. In characteristic two the polynomial is $(x-1)^2$, so there is one point of length two. The degree product remains two. This example isolates why distinct-point conclusions need separability or transversality hypotheses even when the total intersection-length theorem does not require characteristic zero.

## 9. Additivity for equation factors

Suppose $F=F_1F_2$ and neither factor has a common component with $G$. In a local plane ring at an intersection, coprimality makes multiplication by $f_1$ injective modulo $g$: if $g$ divides $f_1h$, it divides $h$ in the localized polynomial UFD. There is an exact sequence

$$0\\longrightarrow R/(f_2,g)
\\xrightarrow{\\cdot f_1}R/(f_1f_2,g)
\\longrightarrow R/(f_1,g)\\longrightarrow0.$$

The kernel of the right quotient is the image of the displayed multiplication, and its injectivity follows by the same cancellation modulo $g$. All modules have finite length, so

$$i_P(F_1F_2,G)=i_P(F_1,G)+i_P(F_2,G).$$

Repeated factors therefore contribute repeated local length. This justifies treating an equation as an effective plane divisor with multiplicity, and agrees with the degree product globally. It also shows why the no-common-component hypothesis is required separately for each factor when finite local lengths are used.

For a transverse example, two distinct lines meet in one projective point and their independent affine linear parts generate its maximal ideal, giving length one. If the lines coincide, the quotient is not Artinian and the finite additivity argument does not apply. The obstruction is a common component, not merely a special numerical value in the formula.

## 10. Two consequences of the proved count

A nonsingular reduced projective plane curve is irreducible. To prove it, let its squarefree homogeneous equation factor nontrivially as a product of coprime positive-degree forms. The factors can be taken homogeneous: in a graded polynomial domain, the differences between highest and lowest degrees of factors add, so a homogeneous product forces each difference to be zero. Bézout makes the two factor curves meet. At any common point the derivative of their product vanishes, since each term contains one of the two zero factor values. The tangent dimension there is two, while the local curve dimension is one, so the point is singular, contradiction.

The local dimension used in that argument can be read directly from plane prime chains. Each reduced irreducible factor defines a height-one prime, and a closed plane point has height two. In the quotient by the equation, a chain from a component to that point has length one and no longer chain can occur. Thus the argument did not assume irreducibility in order to prove it. The reduced equation hypothesis ensures the equation is the actual vanishing ideal locally; a repeated defining factor could make its gradient vanish without changing the reduced point set.

There is also an exact incidence bound. If an irreducible plane curve of degree m and a form of degree n have more than mn distinct common points, they must share a component, because otherwise every point contributes at least one to the proved count. Irreducibility then forces the curve's equation to divide the second form. For instance two irreducible conics through five distinct common points have proportional equations: a shared degree-two irreducible factor exhausts each degree-two equation. This proves a uniqueness statement, without claiming existence of a conic through arbitrary prescribed data. Such applications turn a numerical bound into an ideal-divisibility conclusion under explicitly stated irreducibility assumptions.

## Exercises

### AG07-01. Establish finiteness first

Why does no common component imply that the affine intersection quotient has dimension zero in each chart?

**Hint 1.** Minimal containing primes have height at most two.

**Hint 2.** A height-one prime in the polynomial UFD would give a common irreducible factor.

<details><summary>Full solution</summary>

A proper two-generated ideal has minimal primes of height at most two. Height zero is impossible because a nonzero equation is present. A height-one prime containing one equation contains a prime irreducible factor and must equal its principal prime, forcing that factor to divide the other equation. Coprimality excludes this. All minimal primes have height two, so the affine height formula makes their quotient dimensions zero and the intersection finite.

</details>

### AG07-02. Local chart independence

Explain why changing projective chart preserves the local intersection ideal and length.

**Hint 1.** Dehomogenized equations differ by powers of a chart-coordinate ratio.

**Hint 2.** At the chosen point that ratio is a unit.

<details><summary>Full solution</summary>

On the overlap the degree-$m$ equation gains the unit factor given by the chart ratio to power $m$, and the other equation similarly gains a degree-$n$ unit. Multiplying ideal generators by units leaves their ideal unchanged under the local-ring isomorphism. Quotient rings and lengths are therefore identified. Raising an equation to a power is not such a unit multiplication and is not covered by this invariance.

</details>

### AG07-03. Verify the resolution kernel

Prove every relation $FU+GV=0$ has the form $(U,V)=(-GH,FH)$ under coprimality.

**Hint 1.** The equation makes $F$ divide $GV$.

**Hint 2.** Use unique factorization and then domain cancellation.

<details><summary>Full solution</summary>

No irreducible factor of $F$ divides $G$, so each factor with its full multiplicity must divide $V$. Hence $V=FH$. Substitution gives $F(U+GH)=0$, and the polynomial domain forces $U=-GH$. Conversely every such pair is a relation. This proves the exact middle term and the graded degree shift, rather than assuming a resolution merely because two equations are written.

</details>

### AG07-04. Compute the stable dimension

Expand the four binomial expressions for $m=2,n=3$ and determine the eventual degree-$d$ dimension.

**Hint 1.** Use the exact sequence with shifts two, three and five.

**Hint 2.** The quadratic and linear terms cancel.

<details><summary>Full solution</summary>

For $d$ at least five, the expression is $\\binom{d+2}{2}-\\binom d2-\\binom{d-1}{2}+\\binom{d-3}{2}$. Expanding each quadratic leaves six. Thus the eventual Hilbert function is six, agreeing with the degree product. Connecting it to a length sum still requires the chosen affine chart and torsion argument; the arithmetic expansion alone is not a proof of that geometric identification.

</details>

### AG07-05. A transverse pair

Calculate the local intersection of the lines $x=0$ and $y=0$ at the affine origin.

**Hint 1.** The quotient ideal is the full maximal ideal.

**Hint 2.** Its residue field is the one-dimensional simple quotient.

<details><summary>Full solution</summary>

The local quotient is $k[x,y]_{(x,y)}/(x,y)=k$, of length one. The two linear parts are independent, in agreement with transversality. Projectively the lines meet only at that point, so the local count already equals the global product of degrees one. There is no shared component and no omitted point at infinity.

</details>

### AG07-06. A tangent pair

Compute the local intersection of $y-x^2$ and $y$ at the origin, retaining its nilpotent class.

**Hint 1.** Eliminate $y$.

**Hint 2.** The remaining relation is the square of $x$.

<details><summary>Full solution</summary>

The quotient is $k[x]_{(x)}/(x^2)$. The classes of one and $x$ form a basis, and $x$ is nonzero square-zero. Its length is two. Taking the radical would incorrectly replace this algebra by $k$ and erase tangency. The statement holds in every characteristic because the elimination and basis argument use no inverse of two.

</details>

### AG07-07. A boundary intersection

For the two displaced parabolas of Section 7, prove the unique projective point has intersection length four.

**Hint 1.** Their difference forces the homogenizing coordinate to vanish set-theoretically.

**Hint 2.** In the chart of the remaining nonzero coordinate, eliminate $v$ and keep the fourth-power relation.

<details><summary>Full solution</summary>

The only point is $[0:1:0]$. The local equations are $v-u^2$ and $v-u^2-v^2$. Substitution gives $u^4=0$, so the quotient has basis $1,u,u^2,u^3$ and length four. The affine graphs do not meet, but this point supplies the entire degree product. Its multiplicity comes from the local quotient rather than four distinct projective points.

</details>

### AG07-08. A characteristic comparison

Determine the point counts and lengths of the conic-line intersection in Section 8 in characteristic two and away from it.

**Hint 1.** Use $k[x]/(x^2-1)$.

**Hint 2.** Factor the polynomial under the two characteristic assumptions.

<details><summary>Full solution</summary>

Away from characteristic two it factors as two distinct linear factors and decomposes into two residue fields, each of length one. In characteristic two it is the square of one linear factor, giving one local algebra of length two. The total is two in both cases, while the distinct-point count changes. This is compatible with the characteristic-free theorem because the theorem counts length.

</details>

### AG07-09. Why the common-factor case is excluded

Take both equations to be the same projective line. Identify the failed finite-length condition.

**Hint 1.** The intersection contains the full line.

**Hint 2.** At a point the quotient by the two equations is still a curve local ring.

<details><summary>Full solution</summary>

Both generators define the same principal ideal. Its local quotient has dimension one and is not Artinian, so it has no finite intersection length of the kind defined here. The graded kernel calculation also changes because coprimality fails. A product-of-degrees value one is therefore outside the stated theorem, not a contradiction to an asserted finite sum.

</details>

### AG07-10. Torsion in high degrees

Prove a finitely generated graded module killed by a power of the irrelevant ideal has zero sufficiently high graded parts.

**Hint 1.** Choose finitely many homogeneous generators and their largest degree.

**Hint 2.** Every sufficiently high coefficient polynomial lies in the killing ideal.

<details><summary>Full solution</summary>

If the killing power is $N$ and all generators have degree at most $M$, a homogeneous element of degree at least $M+N$ is a sum of generator multiples with coefficients of degree at least $N$. Each such coefficient belongs to the irrelevant ideal's $N$th power and annihilates the generator. Hence that degree and all higher parts vanish. This is the finite-generation step needed for the eventual injectivity in Section 5.

</details>

### AG07-11. Factor additivity

Justify the injective map in the local additivity sequence for $f_1f_2$ against $g$.

**Hint 1.** If $f_1h$ lies in $(f_1f_2,g)$, rearrange the equality.

**Hint 2.** Coprimality lets you cancel $f_1$ modulo the ideal generated by $g$.

<details><summary>Full solution</summary>

Write $f_1h=f_1f_2a+gb$. Then $g$ divides $f_1(h-f_2a)$. In the localized polynomial UFD, coprimality forces $g$ to divide $h-f_2a$. Thus $h$ is zero modulo $(f_2,g)$, proving injectivity. Exactness at the other positions follows from the natural quotient, and additivity of finite module lengths gives the intersection formula.

</details>

### AG07-12. An affine upper bound with a remainder

For coprime affine equations of total degrees $m,n$ whose projective closures share no component, state what Bézout says about the affine intersection alone.

**Hint 1.** Separate the length sum in the chosen affine chart from the sum on its boundary.

**Hint 2.** Every boundary contribution is nonnegative.

<details><summary>Full solution</summary>

The affine local-length sum is at most $mn$, with difference exactly the sum of intersection lengths at the projective boundary. Equality holds when there is no boundary intersection. Distinct affine point count is at most that affine length sum and can be smaller under tangency or inseparability. The displaced-parabola example has affine sum zero and boundary sum four, so an unconditional affine equality would be false.

</details>

## Closing summary

The coprimality hypothesis makes the intersection finite and gives an exact graded two-equation resolution. A chosen affine chart, finite Artinian decomposition and high-degree torsion argument identify its stable Hilbert function with the sum of local lengths, proving plane Bézout. Transversality, tangency, boundary points and characteristic changes are distinguished by explicit local quotients. No argument has replaced those quotient lengths by a bare count of points.
`;export{e as default};