
# Categorical Logic

In **Topos Theory**, we saw that every Grothendieck topos carries an internal intuitionistic logic. This chapter introduces the syntax--semantics dictionary and states the soundness, completeness, and classification results needed for orientation. Their full metatheoretic proofs are substantial imported results; the chapter develops representative semantic calculations rather than reproducing those proofs.

The payoff is a dictionary between logic and geometry: a theory determines a classifying topos, and a topos carries an internal theory. This dictionary grew from several strands of categorical logic rather than a single-source priority claim. Mac Lane and Moerdijk, *Sheaves in Geometry and Logic*, Prologue, pp. 1--8, gives secondary historical context and explicitly stops short of a complete original-source history.

## 8.1 Categorical semantics of propositional logic

A **propositional theory** is specified by atomic propositions $P, Q, R, \dots$ and axioms $P_{1} \wedge \cdots \wedge P_{n} \vdash Q$. A **model** assigns a truth value in $\{0,1\}$ to each atom, satisfying all axioms.

Categorically, for this **conjunction-only fragment**, form the **syntactic entailment poset**: objects are formal conjunctions of atoms modulo mutual derivability, and arrows are provable entailments. The empty conjunction $\top$ is terminal, and conjunction is the binary product (meet). A truth-value model is a functor to $\{0<1\}$ preserving the terminal object and finite products, equivalently $F(\top)=1$ and $F(A\wedge B)=\min(F(A),F(B))$; an arbitrary monotone functor need not do so. A finite-product-preserving functor from this poset to $\mathbf{Set}$ instead represents these propositions by subterminal sets. These statements concern only the declared fragment, not the stronger first-order structures described below.

**Definition 8.1.** A **Heyting algebra** is a lattice with finite meets and joins and an implication operation $\Rightarrow$ satisfying

$$a \wedge b \leq c \quad \Longleftrightarrow \quad a \leq b \Rightarrow c.$$

We now switch to **full intuitionistic propositional syntax**, with its usual connectives including implication, rather than only the conjunction fragment above. Every Heyting algebra interprets this syntax. Formulas modulo mutual derivability form the Lindenbaum Heyting algebra: with no nonlogical axioms it is free on the propositional generators; a theory's nonlogical axioms give the corresponding presented quotient. It is not an unqualified free algebra for an arbitrary theory. The exercises below use this full intuitionistic syntax.

**Example 8.2.** The open sets of any topological space form a Heyting algebra, with $\wedge = \cap$, $\vee = \cup$, and $U \Rightarrow V = \operatorname{int}((X \setminus U) \cup V)$. This is why intuitionistic logic is the natural logic of spaces.

## 8.2 First-order logic in categories

To interpret first-order logic, we need more structure. A **regular category** is a category with finite limits and coequalizers of kernel pairs in which every morphism factors as a regular epimorphism followed by a monomorphism, with regular epimorphisms stable under pullback. In a regular category, one can interpret existential quantification and equality.

A **coherent category** is a regular category with finite unions of subobjects that are stable under pullback. Coherent logic adds disjunction and falsity.

A **Heyting category** is a coherent category in which pullback along any morphism has a right adjoint (universal quantification). Heyting categories interpret full first-order intuitionistic logic.

**Definition 8.3.** A **geometric category** is a coherent category with arbitrary unions of subobjects stable under pullback. Geometric logic adds infinite disjunctions.

## 8.3 The internal language of a topos

Let $\mathcal{E}$ be a Grothendieck topos. Its internal language is **higher-order intuitionistic logic**. Types are objects of $\mathcal{E}$. A closed term of type $X$ is a morphism $1 \to X$; a term of type $X$ in context $\Gamma$ is a morphism $\Gamma\to X$. Predicates on $X$ are subobjects of $X$, equivalently morphisms $X \to \Omega$.

**Theorem 8.4 (Kripke--Joyal semantics; imported).** Choose a site presentation $\mathcal E\simeq\operatorname{Sh}(\mathcal C,J)$. The Kripke--Joyal clauses define when an object $U$ of the site forces a formula at a section. A formula $\varphi(x)$ with $x:X$ is valid in $\mathcal E$ if and only if every local interpretation forces it; equivalently, for every object $U$ of $\mathcal E$ and every generalized element $a:U\to X$, the interpreting subobject $[\![\varphi(a)]\!]\hookrightarrow U$ is maximal.

*Imported boundary.* Mac Lane and Moerdijk, Chapter VI, Section 6, Theorem 1, pp. 304--310, gives the Kripke--Joyal clauses, and Chapter VI, Section 7, Theorem 1, pp. 315--317, gives their site form. The clauses are defined inductively; atomic formulas use factorization through the interpreting subobject, while disjunction and existential quantification may require passage to a cover. The complete induction is imported rather than supplied by this paragraph. $\square$

## 8.4 Geometric theories and classifying topoi

A **geometric theory** $\mathbb{T}$ is a theory in geometric logic: its axioms have the form

$$\forall x \, (\varphi(x) \vdash \psi(x))$$

where $\varphi$ and $\psi$ are geometric formulas (built from atomic formulas, finite conjunction, arbitrary disjunction, existential quantification, and equality).

**Theorem 8.5 (imported classification theorem).** Every geometric theory $\mathbb{T}$ has a **classifying topos** $\mathcal{B}(\mathbb{T})$ such that for every Grothendieck topos $\mathcal{E}$, there is an equivalence of categories

$$\operatorname{Geom}(\mathcal{E}, \mathcal{B}(\mathbb{T})) \simeq \mathbb{T}\text{-}\mathbf{Mod}(\mathcal{E})$$

between geometric morphisms $\mathcal{E} \to \mathcal{B}(\mathbb{T})$ and models of $\mathbb{T}$ in $\mathcal{E}$.

*Proof sketch.* The classifying topos is built as sheaves on the syntactic site of $\mathbb{T}$, where the topology is generated by the axioms viewed as covering families. The universal property follows from the definition of sheaves and the fact that geometric morphisms preserve finite limits and arbitrary colimits. $\square$

Mac Lane and Moerdijk, Chapter X, Section 6, Theorem 1, pp. 559--566, is the exact imported source for this existence and universal-property theorem. The preceding paragraph is only a construction outline.

**Example 8.6.** The theory of one object is classified by $[\mathbf{FinSet},\mathbf{Set}]$, equivalently presheaves on $\mathbf{FinSet}^{\mathrm{op}}$: a geometric morphism into this topos selects an object. The theory of rings is classified by the appropriate presheaf topos built from finitely presented rings, with variance fixed by the syntactic category. The theory of local rings is classified by its Zariski syntactic site.

## 8.5 Type theory and categories

Martin-Lof type theory is the formal system underlying many proof assistants. Its categorical semantics lives in **locally cartesian closed categories** (LCCCs). A category is locally cartesian closed if every slice category is cartesian closed, equivalently if pullback along any morphism has a right adjoint.

**Theorem 8.7 (semantic orientation).** In the standard comprehension-category presentation, locally cartesian closed structure supports extensional dependent type theory with $\Sigma$-types and $\Pi$-types. Jacobs, *Categorical Logic and Type Theory*, Chapter 10, Sections 4--5, is the imported route for display maps, comprehension categories, and closed comprehension categories. Finite-sum semantics and inductive types require further hypotheses: finite colimits for the former, and structures such as a natural-numbers object and suitable initial algebras or $W$-types for the latter. Those two boundary statements are orientation here rather than claims of an exact theorem verified from the cited sections.

*Explanation.* Contexts are objects, types in context are display maps, terms are sections, and substitution is pullback. $\Sigma$-types correspond to composition of display maps, $\Pi$-types to right adjoints of pullback, and extensional identity types to diagonal maps. A category such as $\mathbf{FinSet}$ has the listed finite categorical structure but no natural-numbers object, showing why inductive types need a separate hypothesis.

A **topos** is a special kind of LCCC: it has a subobject classifier, which interprets a type of propositions. This makes topoi the natural categorical semantics of higher-order type theory.

## 8.6 Common errors

- **Confusing classical and intuitionistic logic.** Negation introduction is intuitionistically valid: deriving a contradiction from an assumption proves its negation. What fails in general is the classical step from $\neg\neg P$ to $P$, along with unrestricted excluded middle.
- **Ignoring the difference between syntax and semantics.** A theory is a syntactic object; its models are semantic. The classifying topos is a bridge, but one must not confuse the theory with its topos.
- **Assuming all categories interpret all logics.** Regular categories interpret regular logic; coherent categories interpret coherent logic; Heyting categories interpret first-order logic; topoi interpret higher-order logic. The hierarchy matters.
- **Forgetting that geometric logic is preserved by inverse images.** Only geometric formulas are preserved by geometric morphisms. Universal quantification and implication are not geometric in general.

## 8.7 Exercises

### Exercise 8.1

Show that the Lindenbaum algebra of a propositional theory is a Heyting algebra.

**Solution.** Formulas modulo provable equivalence form a lattice with meet $\wedge$ and join $\vee$. Define $[\varphi] \Rightarrow [\psi] = [\varphi \to \psi]$. The adjunction $[\chi] \wedge [\varphi] \leq [\psi] \Longleftrightarrow [\chi] \leq [\varphi \to \psi]$ holds because it is provable in intuitionistic logic. Hence the Lindenbaum algebra is Heyting. $\square$

### Exercise 8.2

Prove that the subobject classifier $\Omega$ in a topos is an internal Heyting algebra.

**Solution.** The operations $\wedge, \vee, \Rightarrow$ on subobjects are defined using the universal property of $\Omega$. The top element is $\mathrm{true}: 1 \to \Omega$ and the bottom is the characteristic map of $0 \hookrightarrow 1$. The Heyting algebra axioms hold because they hold for subobjects, which form a Heyting algebra. $\square$

### Exercise 8.3

Give a geometric presentation of a decidable object using an explicit apartness relation.

**Solution.** Add a binary relation symbol $D(x,y)$ and the geometric sequents

$$\top\ \vdash_{x,y}\ x=y\ \vee\ D(x,y),\qquad
x=y\wedge D(x,y)\ \vdash_{x,y}\ \bot.$$

In every model, $D$ is a complement of the diagonal, so equality is decidable. Conversely, a complemented diagonal interprets $D$. The axioms use only finite conjunction, disjunction, equality, and falsity, so they are geometric. Hence inverse-image functors preserve this explicitly presented decidable-object structure. Merely observing that the abbreviation $x\ne y$ uses negation would not prove that no equivalent geometric presentation exists. $\square$

### Exercise 8.4

Let $\mathcal{E}$ be a topos and $X \in \mathcal{E}$. Show that the slice topos $\mathcal{E}/X$ is locally cartesian closed.

**Solution.** $\mathcal{E}/X$ is a topos, and every topos is locally cartesian closed because slice categories of a topos are topoi, and topoi are cartesian closed. Explicitly, the exponential in $\mathcal{E}/X$ is constructed using the dependent product $\Pi_{f}$ in $\mathcal{E}$. $\square$

### Exercise 8.5

Prove that a geometric morphism $f: \mathcal{F} \to \mathcal{E}$ preserves the interpretation of geometric formulas.

**Solution.** Geometric formulas are built from finite limits, arbitrary colimits, and existential quantification. The inverse image $f^{*}$ preserves finite limits and all colimits by definition of a geometric morphism. Existential quantification is interpreted as the left adjoint to pullback (image factorization), which $f^{*}$ also preserves because it preserves colimits and finite limits. Hence $f^{*}$ commutes with the interpretation of any geometric formula. $\square$

## 8.8 Looking forward

Categorical logic provides the syntax for reasoning inside categories. In **Monoidal Categories**, we will see how linear logic---a resource-sensitive logic---is the internal logic of monoidal categories. In **Enriched Categories**, enrichment over a monoidal category will allow us to do logic with truth values in an arbitrary quantale.
