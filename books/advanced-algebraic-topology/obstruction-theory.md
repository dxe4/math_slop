
# Obstruction Theory

## Obstruction theory

Given a fibration $p:E \to B$ with fiber $F$ and a map $f:X \to B$, when does $f$ lift to $\tilde{f}:X \to E$? Obstruction theory answers this inductively over skeleta.

Assume $X$ is a CW complex and a lift is defined on the $(n-1)$-skeleton $X^{(n-1)}$. For each $n$-cell, its attaching sphere determines an extension obstruction in $\pi_{n-1}(F)$. As the cell moves around $X$, these groups form a local coefficient system $\boldsymbol\pi_{n-1}(F)$ pulled back along $f$ from the monodromy action over the base. This system is constant when that pulled-back action is trivial, for example when $X$ is simply connected. A simply connected fiber alone does not force the base monodromy action on its higher homotopy groups to be trivial.

**Theorem 5.1 (primary obstruction, stated scope).** Let $p:E\to B$ be a fibration with $(n-2)$-connected fiber $F$, let $X$ be a CW complex, and take $n\ge3$. Given a lift of $f:X\to B$ through the $(n-1)$-skeleton, the cellwise obstructions form a cocycle with class

$$[c^n]\in H^n(X;\boldsymbol\pi_{n-1}(F)).$$

Its vanishing is equivalent to extension over the $n$-skeleton after an allowed modification on the previous skeleton. When monodromy is trivial this becomes ordinary cohomology with constant coefficients $\pi_{n-1}(F)$. Degrees $1$ and $2$ require separate component and possibly nonabelian pointed-set formulations.

When $F$ is a $K(G,n-1)$ with $G$ abelian and $n\ge3$, the primary obstruction is the only one. For a discrete possibly nonabelian group $G$, principal $G$-bundles are classified by a nonabelian $H^1$ pointed set; this is an ordinary cohomology group only in an abelian coefficient setting.

## What the primary obstruction really measures

**L5 scope.** Use the [relative lifting argument](fibrations-long-exact-sequence.md), [sphere degree calculations](homotopy-groups-spheres.md), cellular cochains and CW attaching maps. Let $X$ be a connected CW complex and assume the image of $f$ lies in the base component with the stated nonempty fiber. Disconnected sources are treated component by component. Take $n\ge3$ and an $(n-2)$-connected fiber. We explicitly import the higher Hurewicz theorem identifying $\pi_{n-1}(F)$ with $H_{n-1}(F;\mathbb Z)$ in this first possible nonzero degree. It is used in the cocycle argument, not claimed as a consequence of cellular homology alone.

Pull the fibration back along $f$. A lift is exactly a section of that pullback, so all following constructions can be made over $X$. Over a closed characteristic disk the pulled-back fibration is fiber-homotopy trivial. To see the ingredient, transport points along radial paths from the disk center using the homotopy lifting property with the whole disk as parameter. Reverse radial paths define inverse fiber maps. Forward–reverse path concatenations contract relative endpoints, and the parameterized horn lifting argument gives homotopies of the composites to the identities, over each basepoint. This is fiber-homotopy triviality, which is enough for extension obstructions; it need not be a local product homeomorphism.

Choose an orientation for each $n$-cell and a transport path identifying its fiber group with the coefficient stalk. The partial section on its attaching sphere then gives a class in $\pi_{n-1}(F)$. It vanishes exactly when that section extends over the disk. For a product this is precisely the definition of nullhomotopy of a sphere map. A fiber-homotopy trivialization reduces the general case to it. The trivialization may initially match the prescribed boundary only up to a fiber homotopy; place that homotopy in a boundary collar and use relative lifting to make the match exact. Thus the criterion is for a genuine extension, not only an unrelated section homotopy class.

Changing a transport path acts on this group by monodromy. These groups are therefore not independent unlabeled copies of an abelian group. Their path identifications form the pulled-back local coefficient system. When the fiber is simply connected but its higher homotopy group has nontrivial monodromy, that twisting remains. Connectivity removes low-dimensional fiber obstructions; it does not remove transport around base loops.

## The cocycle and its dependence on the partial section

The cellwise classes form an $n$-cochain with those local coefficients. Its coboundary is zero. Here is the geometric content of that assertion. Pull everything back to the boundary of an $(n+1)$-cell. In a cellular approximation of its attaching map, the incidences with the open $n$-cells can be represented by finitely many small oriented disks, with their signed multiplicities equal to the cellular incidence degrees. This local-degree description is the standard cellular comparison input from the degree construction. Away from their centers the partial section extends radially from the lower skeleton, since a punctured characteristic disk retracts to its boundary.

Remove small balls around those centers. Trivialize the fiber homotopically over the ambient $(n+1)$-disk as above. On the remaining punctured boundary sphere, the lifted section gives a map into the model fiber. Its oriented boundary spheres represent exactly the transported obstruction classes, with their cellular incidence signs. Their sum is zero in homology because they are the boundary of that punctured manifold. The imported first-nonzero-degree Hurewicz isomorphism converts that relation to the same zero sum in $\pi_{n-1}(F)$. This is exactly the cellular coboundary formula. The transport factors account for paths to each incidence; forgetting them would prove the wrong constant-coefficient equation.

To understand changes, keep the section fixed on the $(n-2)$-skeleton and compare two choices on each oriented $(n-1)$-cell. Glue their two disks with opposite boundary orientations. The resulting sphere defines a difference class in $\pi_{n-1}(F)$, so the choices differ by an $(n-1)$-cochain $a$. On an $n$-cell boundary, inserting those sphere differences along its faces adds their transported incidence sum. The same oriented gluing shows
$$c'^{\,n}-c^n=\delta a.$$
This equation uses a consistent choice of which section is subtracted; reversing that convention changes both signs, not the vanishing criterion. Every cochain $a$ can be realized by such modifications: insert a representing sphere into a small interior disk of each $(n-1)$-cell, keeping its boundary fixed, and use fiber-homotopy triviality and the collar adjustment. The lower-dimensional connectivity assures the required earlier choices and homotopies have no additional obstruction.

It follows that the cohomology class is the invariant of the allowed partial lifting problem. If it vanishes, choose $a$ with $\delta a=-c^n$, realize that change and obtain a new partial section with every $n$-cell obstruction zero. Extend across all those cells. Conversely a partial section that extends has zero cellwise cochain, so any allowed predecessor has the same zero class. For infinitely many cells, continuity follows from the CW weak topology after the compatible cellwise extensions; the cocycle calculation for any single attaching sphere uses only finitely many cells. This proves the stated primary criterion and its actual modification clause.

The clause is important. Vanishing of the class need not mean the originally chosen partial section itself extends without changing its previous-skeleton data. Vanishing of the actual cochain does give that stronger conclusion. A cochain represents choices; its cohomology class quotients the allowed changes. Confusing those levels turns an existence theorem up to modification into an unjustified relative extension theorem.

## When the process stops and when it does not

After an extension over the $n$-skeleton, later cells may carry obstructions in higher fiber homotopy groups. A zero primary class alone does not remove them. For a fiber $K(G,n-1)$ with abelian $G$, all those higher groups vanish; after the primary stage every later extension is therefore unobstructed. The assertion concerns the Eilenberg–MacLane fiber, not any space with merely the same first nonzero homotopy group.

At low dimensions a disconnected fiber first requires component choices, and degree-two extension may involve a nonabelian fundamental group. The displayed abelian cochain argument assumes $n\ge3$ and cannot simply be reused for those cases. Circle-bundle Euler obstructions do have a separate abelian description, but that needs its own hypotheses. Similarly a principal discrete-group bundle is described by a nonabelian first-cohomology pointed set rather than the abelian primary group written here.

## Worked example 2: a single three-cell

Take the product fibration over a three-disk with fiber $S^2$. A boundary section is a map from its two-sphere boundary into the fiber. If its degree is $m$, the sphere chapter proves its homotopy class is precisely that integer. The section extends exactly when $m=0$. The degree-one boundary section cannot extend, whereas a degree-zero one does extend by its nullhomotopy.

There is no monodromy over the disk and no higher cell to hide another obstruction. This is a direct model of the obstruction value before quotienting by previous-skeleton modifications. It also explains why merely choosing a nonempty fiber or a locally trivial bundle does not extend arbitrary prescribed boundary data. A product has a global constant section, but that section need not equal the boundary section one was asked to extend.

## Worked example 3: an oriented clutching bundle with a computed obstruction

For $n\ge3$, glue two trivial oriented rank-$n$ bundles over the hemispheres of $S^n$ by the map
$$g(v)=R_vR_e,\qquad R_v(w)=w-2(w\cdot v)v,\qquad v\in S^{n-1},$$
where $e$ is a fixed unit coordinate vector. Each reflection has determinant minus one, so their product is in $SO(n)$. A unit section fixed at $e$ in one trivialization has boundary value $g(v)e=2(v\cdot e)v-e$ in the other. Its degree is the sole obstruction to filling that hemisphere. Any section on the first hemisphere is homotopic to a constant fiber value there, since the hemisphere is contractible; the resulting boundary class is therefore the same obstruction, not merely a restriction on one arbitrary constant choice.

The regular target value $e$ has exactly two preimages, $v=e$ and $v=-e$. The derivative on tangent vectors at the first is twice the identity, giving local degree positive one. At the second it is minus twice the identity on the common tangent hyperplane. Comparing its outward-normal orientation with the target orientation supplies one additional minus sign, so the second local degree is $(-1)^n$. Thus the total degree is $1+(-1)^n$. This uses the regular-value degree formula established in the degree prerequisite.

For even $n$ the degree is two and a nowhere-zero section is impossible. For odd $n$ it is zero; the same-dimensional sphere classification makes the boundary map nullhomotopic, so a section exists. There are no further cells in this hemispherical extension problem. Existence of one unit section does not assert that the whole bundle is trivial. Identifying this particular clutching convention with a tangent bundle is unnecessary for the calculation; the explicit bundle and its boundary map already prove the claimed obstruction behavior.

## Worked example 4: a simply connected fiber with sign monodromy

Let the two-sphere fiber travel once around a circle with reflection $(x,y,z)\mapsto(-x,y,z)$ as its return map. This mapping-torus bundle has simply connected fiber, but transport acts by minus one on its second homotopy group, since reflection has degree minus one. Pull it back to $X=S^1\times S^2$. The primary coefficient system in degree three is the integers with that sign action around the circle.

The product CW structure has one cell in each degree zero through three. Its twisted cochain differentials are multiplication by minus two from degree zero to one and from degree two to three, and zero between degrees one and two: the circle differential is the return action minus the identity, while the two-sphere has zero cellular differential. Hence the potential third obstruction group is $\mathbb Z/2$.

Nevertheless this bundle has a section: the fiber point $(0,1,0)$ is fixed by reflection and gives a constant return-compatible section, also after pullback. Its actual obstruction class is zero. This example separates a nonzero possible obstruction group from a nonzero obstruction class, while showing concretely why simple connectivity of the fiber does not justify constant coefficients.

## Retained characteristic-class preview

The full current development is [Characteristic Classes](characteristic-classes.md). This preview and its four original exercise identities remain available here.

A **characteristic class** assigns to each vector bundle $E \to X$ a cohomology class $c(E) \in H^*(X;R)$, naturally in $X$: for $f:Y \to X$, $c(f^*E)=f^*c(E)$. By the Yoneda lemma, characteristic classes correspond to cohomology classes of the classifying space $BG$.

**Stiefel--Whitney classes** $w_i(E) \in H^i(X;\mathbb{F}_2)$ give necessary obstructions to systems of independent sections. For a rank-$r$ bundle with $k$ everywhere independent sections, $w_i(E)=0$ for $i>r-k$; the converse need not follow from these classes alone. They satisfy $w_0=1$, $w_i(E)=0$ for $i>r$, and the Whitney sum formula $w(E \oplus F)=w(E) \smile w(F)$.

**Chern classes** $c_i(E) \in H^{2i}(X;\mathbb{Z})$ are defined for complex vector bundles. They satisfy analogous properties and generate the integral cohomology of $BU(n)$.

**Euler class** $e(E) \in H^n(X;\mathbb{Z})$ for an oriented rank-$n$ bundle measures the obstruction to a nowhere-vanishing section. For $n$ odd, $2e(E)=0$.

## Common errors

**Error: applying characteristic classes to unoriented bundles.** Chern classes require complex bundles; Stiefel--Whitney classes work for any real bundle but use $\mathbb{F}_2$ coefficients. The Euler class requires orientability.

**Error: forgetting the Whitney sum formula.** The total Stiefel--Whitney class $w(E)=1+w_1+w_2+\cdots$ is multiplicative under direct sum: $w(E \oplus F)=w(E) \smile w(F)$. The individual classes satisfy more complicated formulas.

**Error: assuming vanishing characteristic classes imply triviality.** A bundle can have all relevant characteristic classes zero and still be nontrivial. The real tangent bundle $TS^5$ is nontrivial but all its positive Stiefel--Whitney classes vanish; because $S^5$ is odd-dimensional it does have a nowhere-zero tangent field. Chern classes are not defined for a real bundle unless one first forms a complex bundle such as its complexification.

## Worked example: $w(TS^n)$

The tangent bundle $TS^n$ of the $n$-sphere has Stiefel--Whitney classes $w_i(TS^n)=0$ for all $i>0$. This follows from the Whitney sum formula applied to $TS^n \oplus \nu \cong \varepsilon^{n+1}$, where $\nu$ is the normal bundle (trivial for $S^n \subseteq \mathbb{R}^{n+1}$) and $\varepsilon^{n+1}$ is the trivial bundle. Thus $w(TS^n) \smile w(\nu)=w(\varepsilon^{n+1})=1$, and since $w(\nu)=1$, we get $w(TS^n)=1$.

Among positive-dimensional spheres, $TS^n$ is trivial only for $n=1,3,7$. This parallelizability classification is a quoted deep input, not a deduction from the preceding characteristic-class calculation. The Stiefel--Whitney classes do not detect the distinction.

## Practice exercises

### Exercise 14.1

For $n\ge1$, compute the total Stiefel--Whitney class of the tautological line bundle $\gamma^1$ over $\mathbb{RP}^n$.

<details><summary>Hint 1</summary>

A real line bundle has only its first possible positive class.

</details>

<details><summary>Hint 2</summary>

The tautological line reverses orientation around the generator loop.

</details>

<details><summary>Full solution</summary>

**Solution.** The tautological bundle has $w(\gamma^1)=1+x$ where $x \in H^1(\mathbb{RP}^n;\mathbb{F}_2)$ is the generator. This follows from the fact that $w_1$ is the obstruction to orientability, and $\gamma^1$ is non-orientable. $\square$

</details>

### Exercise 14.2

For $n\ge1$, prove that $\mathbb{RP}^n$ is orientable if and only if $n$ is odd.

<details><summary>Hint 1</summary>

Use the displayed stable tangent-bundle isomorphism.

</details>

<details><summary>Hint 2</summary>

Only the coefficient of the degree-one generator decides orientability.

</details>

<details><summary>Full solution</summary>

**Solution.** A manifold is orientable if and only if $w_1(TM)=0$. For $\mathbb{RP}^n$, the tangent bundle satisfies $T\mathbb{RP}^n \oplus \varepsilon^1 \cong (n+1)\gamma^1$. Thus $w(T\mathbb{RP}^n)=(1+x)^{n+1}$. The coefficient of $x$ is $n+1 \pmod{2}$, so $w_1=0$ if and only if $n+1$ is even, i.e., $n$ is odd. $\square$

</details>

### Exercise 14.3

Show that the Chern classes of a complex line bundle $L$ satisfy $c_1(L_1 \otimes L_2)=c_1(L_1)+c_1(L_2)$.

<details><summary>Hint 1</summary>

Tensor product adds the universal first class for complex lines.

</details>

<details><summary>Hint 2</summary>

This is a statement about the line-bundle class, not a direct sum formula.

</details>

<details><summary>Full solution</summary>

**Solution.** The classifying space for line bundles is $\mathbb{CP}^\infty=BU(1)$. Tensor product of line bundles corresponds to addition of classifying maps, and $c_1$ is the generator of $H^2(\mathbb{CP}^\infty;\mathbb{Z})$. Thus $c_1(L_1 \otimes L_2)=c_1(L_1)+c_1(L_2)$. $\square$

</details>

### Exercise 14.4

Use the Euler class to prove that $S^{2n}$ has no nowhere-vanishing vector field.

<details><summary>Hint 1</summary>

A nonzero tangent section would split off a trivial line.

</details>

<details><summary>Hint 2</summary>

The Euler pairing on an even-dimensional sphere is two.

</details>

<details><summary>Full solution</summary>

**Solution.** For $n\ge1$, a nowhere-vanishing tangent field would give a splitting $TS^{2n}\cong\varepsilon^1\oplus\xi$, forcing its Euler class to vanish. Let $u\in H^{2n}(S^{2n};\mathbb Z)$ be the cohomological orientation generator. The Euler characteristic formula says

$$\langle e(TS^{2n}),[S^{2n}]\rangle=\chi(S^{2n})=2,$$

so $e(TS^{2n})=2u\ne0$, a contradiction. $\square$

</details>

### Exercise 14.5

For a product fibration over a three-disk with fiber $S^2$, determine whether a boundary section of degree minus two extends.

<details><summary>Hint 1</summary>

An extension is a nullhomotopy of the boundary fiber map.

</details>

<details><summary>Hint 2</summary>

Degree classifies based self-maps of the two-sphere.

</details>

<details><summary>Full solution</summary>

It does not extend, since its nonzero degree represents a nonzero element of $\pi_2(S^2)$. A global constant section of the product does exist, but it has different boundary data. The extension question is relative to the prescribed boundary, so existence of some unrelated section is insufficient. A degree-zero boundary map would extend by its nullhomotopy.

</details>

### Exercise 14.6

Explain why a zero obstruction class can permit extension after modification without proving extension of the originally chosen partial section.

<details><summary>Hint 1</summary>

Distinguish a cochain from its cohomology class.

</details>

<details><summary>Hint 2</summary>

The change on previous cells adds a coboundary.

</details>

<details><summary>Full solution</summary>

A zero class means the current cochain is a coboundary, not necessarily the zero cochain. Realizing an appropriate previous-skeleton difference cochain changes it by the opposite coboundary and makes every actual cell obstruction vanish. Those changes may alter the given section. Without allowing them, one needs the actual cochain to vanish cellwise. Thus the two existence statements have different relative data and cannot be interchanged.

</details>

### Exercise 14.7

For the explicit reflection-product clutching bundle, compute the primary degree in ranks four and five and state exactly what follows.

<details><summary>Hint 1</summary>

Use the two regular preimages and their local signs.

</details>

<details><summary>Hint 2</summary>

The formula is one plus the parity sign of the rank.

</details>

<details><summary>Full solution</summary>

Rank four gives degree two, so no unit section and hence no nowhere-zero section exists. Rank five gives degree zero, so the boundary map is nullhomotopic and a unit section extends across the other hemisphere. That establishes one independent section, not a full frame or bundle triviality. The computation applies to the stated clutching bundle; identifying it with another familiar bundle would require a separate bundle isomorphism.

</details>

### Exercise 14.8

Why can a simply connected fiber still have a twisted primary coefficient system? Use the mapping-torus example.

<details><summary>Hint 1</summary>

Monodromy acts on a higher homotopy group, not on the fundamental group of the fiber alone.

</details>

<details><summary>Hint 2</summary>

A reflection of the two-sphere has degree minus one.

</details>

<details><summary>Full solution</summary>

The fiber two-sphere has trivial fundamental group but second homotopy group the integers. Traveling around the base circle applies the reflecting return map, inducing multiplication by minus one on that group. The coefficient transport is therefore the sign system. Simple connectivity of the fiber does not trivialize that base-loop action. Constant coefficients require the action itself to be trivial or a separate condition, such as simple connectivity of the relevant base source.

</details>

### Exercise 14.9

The possible obstruction group is $\mathbb Z/2$, but an explicit global section has been constructed. What is the obstruction class, and why is there no contradiction?

<details><summary>Hint 1</summary>

Restrict the actual section to the skeleton.

</details>

<details><summary>Hint 2</summary>

A group can contain zero as well as nonzero possibilities.

</details>

<details><summary>Full solution</summary>

The class is zero because the restricted section already extends over every cell by the given global section. The nonzero group describes possible classes for lifting problems with that coefficient system, not a compulsory value for this particular bundle and map. Determining the group and determining the actual class are separate calculations. The fixed-point section in the mapping-torus example proves which value occurs.

</details>

### Exercise 14.10

Why is the primary obstruction the only possible nonzero stage for a $K(G,n-1)$ fiber under the stated abelian hypotheses?

<details><summary>Hint 1</summary>

List the fiber homotopy groups used by successive cell dimensions.

</details>

<details><summary>Hint 2</summary>

Every later stage uses a higher fiber group.

</details>

<details><summary>Full solution</summary>

The first possible group is $\pi_{n-1}(F)=G$, producing the degree-$n$ obstruction. For every later cell dimension $m>n$, the obstruction lies in $\pi_{m-1}(F)$, which vanishes for an Eilenberg–MacLane fiber. Earlier groups vanish by its connectivity. Hence after the primary class is killed, all later cell extensions exist. A general fiber with the same first group may have nonzero higher groups and does not enjoy this conclusion.

</details>

## Looking forward

The following characteristic-class reading gives the canonical continuation of the retained preview. The local-system chapter then develops the transport data used by the primary cochain, while bordism studies a different geometric equivalence. No vanishing primary class is treated as evidence that all later obstructions vanish.
