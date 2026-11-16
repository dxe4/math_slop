
# Dimension and Smoothness

Dimension counts independent parameters, while a tangent space counts first-order directions. They agree at a nonsingular point and can differ at a singular point. We prove the affine height formula needed to compare them, derive the tangent-space Jacobian calculation, and identify the open nonsingular locus without assuming that the number of written equations is its codimension.

The ground field is algebraically closed unless a lemma explicitly allows any field. Read Commutative Algebra on [integral extensions](../commutative-algebra/integral-extensions.md), [Noether normalization and the principal ideal theorem](../commutative-algebra/dimension-theory.md), [Nakayama](../commutative-algebra/noetherian-hilbert-basis.md) and [localization](../commutative-algebra/localisation.md). That preparation proves affine dimension equals function-field transcendence degree, but deliberately does not assert the full height formula. We develop the additional chain argument here. Polynomial rings are integrally closed because they are UFDs, as prepared in the algebra and integrality chapters.

## 1. Dimension and the missing local comparison

For an irreducible affine variety $X$, define its dimension as $\dim k[X]$. The prepared affine dimension theorem identifies this with $\operatorname{trdeg}_k k(X)$. A nonempty affine open has the same field by Chapter 4 and therefore the same dimension. This defines dimension independently of affine chart for our quasiprojective varieties. Birational varieties have equal dimension by their function-field isomorphism.

At a point $a$ of an affine variety with coordinate domain $A$, its local ring is $A_{\mathfrak m_a}$. The prepared prime-localization correspondence gives its dimension as the height of $\mathfrak m_a$. Equality with the global dimension requires a theorem about chains ending at that particular maximal ideal. Going up alone does not provide such a chain with a prescribed endpoint. The next two sections supply the missing argument rather than subtracting dimensions without a proof.

## 2. Going down over a normal domain

Let $R\subseteq B$ be integral domains with $B$ integral over the integrally closed domain $R$. We prove going down: if $\mathfrak p_1\subseteq\mathfrak p_2$ in $R$ and $\mathfrak q_2$ in $B$ contracts to $\mathfrak p_2$, a prime $\mathfrak q_1\subseteq\mathfrak q_2$ contracts to $\mathfrak p_1$.

First we need a coefficient lemma. For an element $b\in B$, its monic minimal polynomial over $K=\operatorname{Frac}(R)$ has coefficients in $R$. Indeed every root is integral over $R$, being a root of the monic equation for $b$ supplied by integrality. Its symmetric coefficients are integral and lie in $K$, hence lie in $R$ by normality. This includes repeated roots in inseparable cases.

If further $b\in\mathfrak p B$, all its nonleading coefficients lie in $\mathfrak p$. To prove it, use the integral closure $C$ of $R$ in an algebraic closure of $K$. Each root of the minimal polynomial is the image of $b$ under a $K$-embedding of the algebraic field extension containing it. Such an embedding extends to the fraction field of $B$: extend partial embeddings maximally, then adjoin a root if an algebraic element is missing. The resulting images of all elements of $B$ are integral and belong to $C$. Expressing $b$ as a finite sum of elements of $\mathfrak p$ times elements of $B$ shows every conjugate root lies in $\mathfrak p C$.

Each nonleading coefficient, a sum of products of those roots with multiplicities, belongs to $\mathfrak p C$. Lying over for the integral inclusion $R\subseteq C$ gives a prime over $\mathfrak p$, so $\mathfrak p C\cap R\subseteq\mathfrak p$; the reverse inclusion is immediate. Thus those coefficients belong to $\mathfrak p$, proving the lemma without assuming a separable or Galois extension.

Now suppose $a\in R\setminus\mathfrak p_1$ belongs to $\mathfrak p_1B_{\mathfrak q_2}$. Clearing finitely many denominators gives $as\in\mathfrak p_1B$ for some $s\notin\mathfrak q_2$. If the minimal polynomial of $s$ is

$$T^r+c_1T^{r-1}+\cdots+c_r,$$

the minimal polynomial of $as$ is obtained by replacing its coefficients with $ac_1,a^2c_2,\ldots,a^rc_r$. The degree stays the same because multiplication by the nonzero scalar $a\in K$ does not change the generated field. The coefficient lemma puts each $a^ic_i$ in $\mathfrak p_1$. Primality and $a\notin\mathfrak p_1$ imply $c_i\in\mathfrak p_1\subseteq\mathfrak q_2$. The equation for $s$ then forces $s^r\in\mathfrak q_2$, hence $s\in\mathfrak q_2$, contradiction.

We have proved $\mathfrak p_1B_{\mathfrak q_2}\cap R=\mathfrak p_1$. Quotient by this extended ideal and invert $R\setminus\mathfrak p_1$; the ring remains nonzero by that contraction equality. A maximal ideal in the localized quotient pulls back to a prime of $B_{\mathfrak q_2}$ containing $\mathfrak p_1$ and disjoint from its complement in $R$. Its contraction is exactly $\mathfrak p_1$. The corresponding prime of $B$ lies below $\mathfrak q_2$, as required. The uses of maximal ideals and extension of algebraic embeddings are the usual choice principles, not finiteness claims about constructing them.

## 3. The affine height formula

First let $A$ be an affine domain over any field, with transcendence degree $d$, and let $\mathfrak m$ be any maximal ideal. Noether normalization gives a finite integral inclusion $R=k[t_1,\ldots,t_d]\subseteq A$. The contraction of $\mathfrak m$ is maximal, by the integral field criterion. Every polynomial maximal ideal has height $d$, as proved in the preparation even over a nonalgebraically closed field. Since $R$ is normal, going down lifts a chain of length $d$ ending at that contraction to a chain ending at this specified $\mathfrak m$. Hence $\operatorname{ht}\mathfrak m\ge d$. The global dimension is $d$, giving equality.

For any prime $\mathfrak p$ of $A$, normalize $A/\mathfrak p$ over a polynomial subalgebra $k[\overline u_1,\ldots,\overline u_r]$. Lift the generators to $u_i\in A$. They are algebraically independent already in $A$, since a relation would descend to one in the quotient. Set $K=k(u_1,\ldots,u_r)$ and invert the nonzero polynomials in these elements. The localized algebra $A_K$ is an affine domain over $K$, and its quotient by $\mathfrak p_K$ is finite integral over the field $K$, hence a field. Thus $\mathfrak p_K$ is maximal.

The fraction field of $A_K$ has transcendence degree $d-r$ over $K$, by extending the independent parameters to a transcendence basis. The maximal-height result just proved, now over the possibly nonclosed field $K$, gives $\operatorname{ht}\mathfrak p_K=d-r$. Every prime below $\mathfrak p$ avoids the inverted set, so localization preserves all those chains and their height. Since $r=\dim A/\mathfrak p$, this proves

$$\boxed{\operatorname{ht}\mathfrak p+\dim(A/\mathfrak p)=\dim A.}$$

In particular every classical closed point on an irreducible affine variety has local dimension equal to the variety's dimension. For a closed irreducible subvariety, the height measures its codimension and the displayed formula justifies subtraction. This proof is for affine finite-type domains; it is not an assertion that every Noetherian ring satisfies the same dimension formula.

## 4. Dimension is at most the number of local generators

We first derive the relevant multi-equation height bound from the prepared principal ideal theorem and our new formula. In an affine domain, a prime minimal over an ideal generated by $r$ elements has height at most $r$. Induct on $r$, with the zero ideal starting at height zero. For a prime $\mathfrak q$ minimal over the first $r$ generators, choose a prime $\mathfrak p\subseteq\mathfrak q$ minimal over the first $r-1$. In the affine domain $A/\mathfrak p$, the prime $\mathfrak q/\mathfrak p$ is minimal over the last generator, so its height is at most one by the principal ideal theorem.

Apply the height formula to both affine domains to get

$$\operatorname{ht}_{A/\mathfrak p}(\mathfrak q/\mathfrak p)
=\operatorname{ht}_A\mathfrak q-\operatorname{ht}_A\mathfrak p.$$

The induction bound for $\mathfrak p$ then gives the desired height at most $r$. This equality of relative heights is exactly where a naive induction without a chain theorem would have had a gap.

Let $(A_{\mathfrak m},\mathfrak mA_{\mathfrak m})$ be the local ring at a classical point. Nakayama says that lifts of a basis of $\mathfrak m/\mathfrak m^2$ generate the maximal ideal locally. Write them with denominators outside $\mathfrak m$ and retain their numerators as $e$ generators, where $e=\dim_k\mathfrak m/\mathfrak m^2$. The maximal ideal is minimal over their ideal among primes contained in $\mathfrak m$; otherwise localization would leave a smaller prime containing the entire localized maximal ideal. Choosing a minimal prime under it therefore gives that maximal ideal itself. The height bound yields

$$\dim A_{\mathfrak m}\le e.$$

The number $e$ is the embedding dimension. A Noetherian local ring is regular when its dimension equals that minimum number of maximal-ideal generators. For our classical variety, a point is called nonsingular, or smooth in this classical sense, when its local ring is regular. The scheme-theoretic relative smoothness definition will be stated separately; its comparison over a perfect field is not being smuggled into the present definition.

## 5. Tangent spaces and the Jacobian calculation

For $X\subseteq\mathbb A^n$ and a point $a$, translate coordinates so $z_i=x_i-a_i$. In the ambient local ring, the classes of the $z_i$ form a basis modulo the square of the maximal ideal. Passing to $A=k[x]/I(X)$ gives

$$\mathfrak m_a/\mathfrak m_a^2
\cong (z_1,\ldots,z_n)\big/\bigl((z_1,\ldots,z_n)^2+I(X)\bigr).$$

The linear part of a polynomial $F$ vanishing at $a$ is $\sum_i(\partial F/\partial x_i)(a)z_i$. This is a finite monomial expansion modulo the square ideal, valid in every characteristic. If $I(X)=(F_1,\ldots,F_s)$, their linear parts span all the relations: the linear part of $\sum H_jF_j$ is $\sum H_j(a)dF_j(a)$ because each $F_j(a)=0$.

Define the tangent space as the dual of $\mathfrak m_a/\mathfrak m_a^2$. It is therefore the kernel of the Jacobian matrix with entries $(\partial F_j/\partial x_i)(a)$, and has dimension

$$\dim_k T_aX=n-\operatorname{rank}J(a).$$

The local generator bound proves this is at least $d=\dim X$ for an irreducible affine variety. Equality is exactly regularity by definition. Thus nonsingularity is equivalent to rank $n-d$, and the nonsingular locus is open: it is the union of the nonvanishing sets of the corresponding minors. Its complement is cut out by those minors together with the original equations. If $n=d$, the empty minor is one and all points satisfy the criterion. No chosen redundant equation can change the tangent space, because the calculation used the entire ideal's linear parts.

Equivalently, a tangent vector is a $k$-algebra map from $A$ to the dual numbers $k[\epsilon]/(\epsilon^2)$ reducing to evaluation at $a$. It sends each coordinate to $a_i+v_i\epsilon$. Substitution gives $F_j(a)+\epsilon\sum_i\partial_iF_j(a)v_i$, which vanishes exactly under the same linear equations. This is a first-order ring description, not a claim that every tangent vector comes from an actual algebraic curve through the point.

## 6. Worked examples: a smooth graph and a singular cusp

### Worked example 1: a graph in every characteristic

For the parabola $y-x^2=0$, the gradient is $(-2x,1)$ and always has rank one. The irreducible curve has dimension one, so every point is nonsingular, in characteristic two as well. Its isomorphism with the line is compatible with the local criterion; a chosen derivative vanishing is not singularity if another derivative remains nonzero.

### Worked example 2: the cusp origin

For the cusp $y^2-x^3=0$, the local dimension is one by the affine height formula. At the origin the gradient is zero, so the tangent space has dimension two and the point is singular. Away from the origin both coordinates are nonzero. In characteristic two the derivative in $x$ is nonzero; in characteristic three the derivative in $y$ is nonzero; in all other characteristics at least one is nonzero. Thus the origin is its only singular point in every characteristic. Its birational parametrization did not make the singular local ring regular.

## 7. Worked example: tangent space and tangent cone differ

Assume characteristic different from two and consider the irreducible nodal curve $y^2-x^2(x+1)=0$. Irreducibility follows by treating it as a monic quadratic in $y$: a root in $k(x)$ would require $x+1$ to be a square there, impossible because its valuation at $x=-1$ is one. Gauss's lemma gives polynomial irreducibility. At the origin both derivatives vanish, so again the tangent space is the full two-dimensional plane, while the curve dimension is one.

The lowest nonzero homogeneous part of the cusp equation is $y^2$, whereas for the node it is $y^2-x^2=(y-x)(y+x)$. These give different tangent-cone rings. For a principal plane equation $F$ at the origin, the associated graded local coordinate ring is $k[X,Y]/(F_{\min})$: the leading part of any multiple of $F$ is the product of its leading part and $F_{\min}$, since the ambient graded polynomial ring is a domain. Denominators that are units at the point change only a nonzero scalar in that leading part. This proves the asserted initial ideal rather than treating a Taylor picture as the ring calculation.

The cusp cone is therefore a doubled line, while the node cone has two distinct lines. Both tangent vector spaces are the entire plane, so first-order dimension alone does not distinguish their branch behavior. The cone retains higher graded information. In characteristic two the two nodal directions would coincide; that is why the hypothesis appears before this example's interpretation.

## 8. A field hypothesis that matters

Over an imperfect field of characteristic $p$, choose $a$ not a $p$th power. The ring $k[t]/(t^p-a)$ is a field. Indeed, in an algebraic closure the polynomial has just one root $\alpha$ with multiplicity $p$. A monic minimal polynomial of smaller degree $1\le m<p$ would have to be $(T-\alpha)^m$. Its coefficient of $T^{m-1}$ is $-m\alpha$, so $\alpha$ would belong to $k$ because $m$ is nonzero in the field. That would make $a$ a $p$th power, contradiction. Hence the degree-$p$ polynomial is irreducible. Its local ring is regular of dimension zero. After adjoining its root, the polynomial becomes $(t-\alpha)^p$, producing nonzero nilpotents in the base-changed algebra.

Thus regularity of a local ring over an arbitrary base field does not by itself supply geometric reducedness after field extension. Our algebraically closed ground field is perfect, but a relative smoothness theorem must still state its base hypothesis and definition. The elementary Jacobian calculation is valid in every characteristic; identifying it with every possible geometric meaning of smoothness without those contracts would be a different assertion.

## Exercises

### AG05-01. A prescribed maximal endpoint

Explain why going up alone does not prove that every maximal ideal of an affine domain has full height, and identify the role of going down.

**Hint 1.** A lifted increasing chain can finish at some prime above the endpoint.

**Hint 2.** Going down starts with the already specified prime above that endpoint.

<details><summary>Full solution</summary>

Going up extends a chosen lower prime but need not select the particular maximal ideal under investigation. Normalize the affine domain over a polynomial ring and start with that particular maximal ideal. Going down successively lifts each lower member of a length-$d$ polynomial maximal chain inside it. Contractions are distinct, so the lifted chain is strict and ends at the desired ideal. The global dimension gives the reverse bound.

</details>

### AG05-02. Use the height formula

For $A=k[x,y,z]$ and $\mathfrak p=(x,y)$, calculate height, quotient dimension and local dimension.

**Hint 1.** The quotient is $k[z]$.

**Hint 2.** The local dimension at a prime is its height.

<details><summary>Full solution</summary>

The quotient has dimension one and $A$ has dimension three, so the height formula gives height two. Localization at $\mathfrak p$ therefore has dimension two. Its residue field is $k(z)$, so this is not a classical closed point of affine three-space. At a closed coordinate point the maximal height would instead be three. The calculation separates the two kinds of point without changing the ambient dimension.

</details>

### AG05-03. Recover the relative height difference

Derive $\operatorname{ht}_{A/\mathfrak p}(\mathfrak q/\mathfrak p)=\operatorname{ht}_A\mathfrak q-\operatorname{ht}_A\mathfrak p$ for primes in an affine domain.

**Hint 1.** Apply the height formula in both $A$ and $A/\mathfrak p$.

**Hint 2.** Their final quotient by $\mathfrak q$ is the same domain.

<details><summary>Full solution</summary>

The quotient formula gives the left side as $\dim(A/\mathfrak p)-\dim(A/\mathfrak q)$. Replace each quotient dimension by $\dim A$ minus its prime's height. The ambient dimensions cancel, leaving the difference on the right. The proof depends on the affine height theorem; it is not a universal identity for arbitrary Noetherian rings.

</details>

### AG05-04. Redundant equations

For the line $y=0$, compare the Jacobian linear spans from generators $y$ and the redundant list $y,xy,y^2$.

**Hint 1.** Differentiate each generator at a point $(a,0)$.

**Hint 2.** The first row already supplies the entire linear relation.

<details><summary>Full solution</summary>

The rows are $(0,1)$, $(0,a)$ and $(0,0)$. Their span has rank one, exactly as for the generator $y$ alone. Hence the tangent dimension is one and every point is regular. The number of displayed equations is three, but only their independent linear parts matter. Replacing the generator by $y^2$ alone would change the ideal and introduce nonreduced algebra, so that is not a redundant presentation of the same coordinate ring.

</details>

### AG05-05. Compute a tangent vector

Describe the dual-number tangent maps to the parabola at $(a,a^2)$.

**Hint 1.** Send $x$ to $a+u\epsilon$ and $y$ to $a^2+v\epsilon$.

**Hint 2.** Expand the defining relation modulo $\epsilon^2$.

<details><summary>Full solution</summary>

The relation becomes $(v-2au)\epsilon=0$, so tangent maps correspond to pairs with $v=2au$. There is one free parameter, giving tangent dimension one in every characteristic. In characteristic two the condition is $v=0$ and still leaves $u$ free. Vanishing of the coefficient two changes the direction formula but does not make the tangent dimension jump.

</details>

### AG05-06. The cusp's singular point

Compute the tangent dimensions at the origin and at a nonzero point of the cusp, treating characteristics two and three explicitly.

**Hint 1.** Use gradient $(-3x^2,2y)$.

**Hint 2.** At a nonzero cusp point both coordinates are nonzero.

<details><summary>Full solution</summary>

At the origin the rank is zero, so tangent dimension is two, above local dimension one. Away from the origin, in characteristic two the first entry is nonzero, in characteristic three the second is nonzero, and in other characteristics both coefficients are nonzero with at least one nonzero entry. The rank is one, so tangent dimension is one. Thus exactly the origin is singular, with no characteristic case omitted.

</details>

### AG05-07. Open nonsingularity

Prove that the nonsingular locus of an irreducible affine variety is open using the Jacobian matrix.

**Hint 1.** The rank is at most the codimension by the proved local dimension bound.

**Hint 2.** Equality is witnessed by a nonzero minor of that size.

<details><summary>Full solution</summary>

For ambient dimension $n$ and variety dimension $d$, rank never exceeds $n-d$. Equality therefore holds exactly on the union of the principal nonvanishing sets of the $(n-d)$-minors. These are open, proving the claim. If the required size is zero, the empty determinant is one and the union is the whole set. This argument proves openness; it has not separately asserted a general density theorem without its further proof.

</details>

### AG05-08. A graph in higher dimension

Show $z=x^2+y^3$ in affine three-space is nonsingular and has dimension two.

**Hint 1.** Eliminate $z$ from the coordinate ring.

**Hint 2.** The derivative in $z$ is one.

<details><summary>Full solution</summary>

The coordinate ring is $k[x,y]$, giving dimension two by the affine theorem. Its single gradient has third entry one, hence rank one at every point in any characteristic. The tangent dimension is $3-1=2$, equal to local dimension at every closed point. This proves nonsingularity without counting the other derivative entries or imposing an unnecessary characteristic restriction.

</details>

### AG05-09. Two tangent cones

Calculate the tangent-cone rings of the cusp and node at the origin under the stated nodal characteristic assumption.

**Hint 1.** Keep the lowest nonzero homogeneous part of each principal equation.

**Hint 2.** The ambient associated graded ring is a polynomial domain.

<details><summary>Full solution</summary>

The rings are $k[X,Y]/(Y^2)$ and $k[X,Y]/(Y^2-X^2)$ respectively. The first has a nonzero nilpotent class of $Y$. In characteristic different from two, the second is the reduced union of the distinct lines $Y=X,Y=-X$. The principal-ideal leading-term argument proves these are the actual associated graded quotients. Both vector tangent spaces are two-dimensional, so their distinction is finer than the tangent dimension alone.

</details>

### AG05-10. Local generators bound dimension

Explain where Nakayama and the multi-equation height bound enter the inequality between local and tangent dimension.

**Hint 1.** Lift a basis of the maximal ideal modulo its square.

**Hint 2.** Their numerators generate the localized maximal ideal and make it minimal over that many equations.

<details><summary>Full solution</summary>

Nakayama turns the lifted basis into a generating set of size equal to embedding dimension. Clearing unit denominators gives the same localized ideal from numerator equations in the affine domain. A smaller prime contained in the maximal ideal and containing those equations would remain after localization, contradicting that they generate the full maximal ideal. Thus that maximal ideal is minimal over those equations. The height bound makes its height, hence local dimension, at most their number.

</details>

### AG05-11. Birational dimension

Prove that the blowup charted in Chapter 4 and the affine plane have the same dimension, although their fibers over the origin differ.

**Hint 1.** Their function fields are both $k(x,y)$.

**Hint 2.** Nonempty affine opens compute dimension through transcendence degree.

<details><summary>Full solution</summary>

The first blowup chart has coordinates $x,t$ and field $k(x,t)$, identified with $k(x,y)$ through $y=xt$ on a dense open. Its transcendence degree is two, so the irreducible blowup has dimension two, as does the plane. The exceptional fiber is a projective line, but birational dimension concerns the whole variety's function field. Fiber size or exceptional dimension does not alter that invariant.

</details>

### AG05-12. A nonperfect base change

Explain why $k[t]/(t^p-a)$ becomes nonreduced after adjoining a root when $a$ is not a $p$th power in a field of characteristic $p$.

**Hint 1.** In the larger field, the polynomial is a $p$th power of a linear factor.

**Hint 2.** The class of that linear factor is nonzero but its $p$th power vanishes.

<details><summary>Full solution</summary>

Writing $a=\alpha^p$ in the extension field gives the quotient by $(t-\alpha)^p$. The class of $t-\alpha$ is nonzero because a degree-one polynomial is not in that higher-power ideal, and its $p$th power is zero. Thus a field, whose local ring was regular, has acquired nilpotents after scalar extension. This identifies a genuine ground-field boundary for geometric regularity comparisons, without treating the classical definition over an algebraically closed field as a statement over every base.

</details>

## Closing summary

Going down over a normal domain supplies prescribed chain endpoints, yielding the affine height formula and a justified local generator bound. The cotangent quotient and dual-number calculation produce the Jacobian tangent formula, with equality detecting classical nonsingularity and minors proving its locus open. The examples separate dimension, embedding dimension, tangent cone and behavior under field extension. No general relative smoothness or generic-density theorem is asserted without its own later contract.
