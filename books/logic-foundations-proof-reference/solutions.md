
# Exercise and Project Solutions

The current twelve main chapters each provide ten stable exercise anchors with two hints and a complete solution beside the prompt. Those inline solutions are the full companion to the graduate route. The earlier solutions below remain intact for readers using the original collection, its old printed numbering and retained specialist readings; they are not a replacement for the expanded chapter solutions. No independent exercise review is claimed.

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## Reference desk A --- levels of language

1. **Identify free and bound occurrences in $\forall x \, (R(x, f(y)) \to \exists y \, R(f(y), x))$.**

   The term-occurrences of $x$ are bound by $\forall x$. The first term-occurrence of $y$ is free and the one in the consequent is bound by $\exists y$. The symbol written beside $\exists$ is a binder, not another variable term. Thus $y$ has one free and one bound term-occurrence, plus one binding occurrence.

2. **Capture-avoiding substitution of $f(y)$ for free $x$ in $\exists y \, R(x, y)$.**

   The term $f(y)$ contains $y$, which would be captured by $\exists y$. Alpha-rename to $\exists z \, R(x, z)$, then substitute to obtain $\exists z \, R(f(y), z)$.

3. **Construct $\mathcal{M}$ with domain $\{0,1,2\}$ and unary $P$ so that $\exists x \, P(x) \land \exists x \, \neg P(x)$ holds but $\exists x \, (P(x) \land \neg P(x))$ fails.**

   Let $P^{\mathcal{M}} = \{0,1\}$. Then $0 \in P^{\mathcal{M}}$ and $2 \notin P^{\mathcal{M}}$, giving the first two conjuncts. No element is both in and not in $P^{\mathcal{M}}$, so the third formula is false.

4. **Why does universal generalization require that $x$ not be free in any premise?**

   If $P(x)$ with $x$ free were a premise, it asserts $P$ holds for a particular (though unspecified) element. Generalizing to $\forall x \, P(x)$ would claim it holds for all elements, which is stronger and unwarranted. The restriction ensures $x$ was introduced as genuinely arbitrary.

5. **State in the metalanguage: "There is no formula true in every structure." Is this true?**

   The statement is false: any tautology such as $\forall x \, (P(x) \to P(x))$ is true in every structure. The genuinely true statement in this neighborhood is that no single sentence is true in exactly the finite structures: if $\varphi$ had arbitrarily large finite models, compactness (adjoin constants forced to be pairwise distinct) would give an infinite model of $\varphi$.

---

## Model Theory

1. **Show that the theory of dense linear orders without endpoints has models of every infinite cardinality.**

   Add $\kappa$ constants required pairwise distinct. Compactness gives a model of size at least $\kappa$. In the expanded language of size $\kappa$, downward Löwenheim--Skolem gives an elementary submodel containing every named element and having size at most $\kappa$. It therefore has size exactly $\kappa$.

2. **Show that a complete theory with an infinite model has no finite models.**

   If $\mathcal{M} \models T$ is infinite, then for each $n$ the sentence $\exists x_{1} \dots \exists x_{n} \bigwedge_{i < j} x_{i} \neq x_{j}$ is true in $\mathcal{M}$. Since $T$ is complete, each such sentence is in $T$. Hence every model of $T$ satisfies all of them and is infinite.

3. **Use compactness to prove that $(\mathbb N,0,S)$ has a nonstandard elementary companion.**

   Add one constant $c$ and, to the complete theory of $(\mathbb N,0,S)$, axioms $c\neq\bar n$ for every standard numeral. Every finite subset has a standard expansion. Compactness gives a model where $c$ differs from every standard numeral, so its reduct is nonstandard. This proves existence; it is not an explicit presentation of the model's full domain and operations.

4. **Prove that the class of finite groups is not axiomatizable.**

   Suppose $T$ axiomatized finite groups. Let $T' = T \cup \{\exists x_{1} \dots \exists x_{n} \bigwedge_{i < j} x_{i} \neq x_{j} : n \in \mathbb{N}\}$. Every finite subset of $T'$ has a model (a large enough finite group). By compactness, $T'$ has a model, which would be an infinite group satisfying $T$, contradiction.

5. **State soundness and its contrapositive; use them to show $T \vdash \varphi \to \psi$ and $T \vdash \varphi$ imply $T \models \psi$.**

   Soundness: $T \vdash \varphi \Rightarrow T \models \varphi$. Given the two derivations, for any $\mathcal{M} \models T$ we have $\mathcal{M} \models \varphi \to \psi$ and $\mathcal{M} \models \varphi$. The truth definition for $\to$ forces $\mathcal{M} \models \psi$. Hence $T \models \psi$.

---

## Set-Theoretic Topology

1. **Show that a finite topological space is compact.**

   Let $\{U_{i}\}_{i \in I}$ be an open cover. For each $x \in X$, choose $i_{x}$ with $x \in U_{i_{x}}$. The set $\{U_{i_{x}} : x \in X\}$ is finite and covers $X$.

2. **Prove that $\text{St}(\mathcal{P}(\{0,1\}))$ is a discrete two-point space.**

   The algebra has four elements. An ultrafilter contains $\{0,1\}$ and exactly one of $\{0\}, \{1\}$. There are two ultrafilters: $U_{0} = \{\{0\}, \{0,1\}\}$ and $U_{1} = \{\{1\}, \{0,1\}\}$. The basic open sets $\widehat{\{0\}}$ and $\widehat{\{1\}}$ are singletons, so the topology is discrete.

3. **Show $\{0,1\}^{\mathbb{N}}$ is compact.**

   If a cover had no finite subcover, form the tree of finite binary strings whose cylinders still lack a finite subcover. From each node choose its $0$-child when that child remains in the tree, otherwise its $1$-child. The resulting path lies in some cover member containing a cylinder around it, contradicting the definition of the tree. This special proof works in ZF and identifies the relevant algebra as the clopen-cylinder algebra, not the countable-cofinite algebra.

4. **Show that the closure of a connected set is connected.**

   Let $A$ be connected and suppose $\overline{A} = U \cup V$ with $U, V$ disjoint nonempty open in $\overline{A}$. Then $A = (A \cap U) \cup (A \cap V)$. Since $A$ is connected, one intersection is empty; say $A \cap U = \emptyset$. Then $A \subseteq V$, so $\overline{A} \subseteq \overline{V} = V$, contradicting $U \neq \emptyset$.

5. **Why is the Sorgenfrey line not second countable?**

   If $\mathcal B$ were enumerated, choose the first $B_r\in\mathcal B$ with $r\in B_r\subseteq[r,r+1)$. Then $r$ is the least element of $B_r$, so distinct reals give distinct basis elements. This injects $\mathbb R$ into a countable family, a contradiction.

---

## Forcing

1. **Show that if $p \Vdash \varphi$ and $q \leq p$, then $q \Vdash \varphi$.**

   Induct simultaneously on name rank for membership/equality and then on formula complexity. Density below $p$ restricts to density below $q\leq p$; every extension of $q$ is an extension of $p$. These observations handle the atomic, witness-density, negation, and conjunction clauses.

2. **Prove that if $p \Vdash \neg\neg\varphi$, then $p \Vdash \varphi$.**

   If $p\Vdash\neg\neg\varphi$, no $q\leq p$ forces $\neg\varphi$. The negation clause therefore gives, below every such $q$, an $r$ forcing $\varphi$. The forcing conditions for $\varphi$ are dense below $p$, and the density lemma gives $p\Vdash\varphi$.

3. **Show that $\text{Fn}(\omega, 2)$ has the countable chain condition.**

   $\mathrm{Fn}(\omega,2)$ itself is countable: code a condition by its increasing finite domain and finite binary value list. Hence every antichain is countable. In uncountable finite-support Cohen forcing, the compatibility condition is agreement on the intersection of the two domains.

4. **Explain why $M[G]$ has the same ordinals as $M$.**

   Every name is a set in $M$, so the rank of $\tau_{G}$ is bounded by the rank of $\tau$. Hence no new ordinals are added. Conversely, every ordinal in $M$ is represented by a canonical name.

5. **What does $\mathrm{Coll}(\omega,\omega_1^M)$ do, and what continuum value follows here?**

   Dense coordinate and range requirements make the generic union a surjection $\omega\twoheadrightarrow\omega_1^M$, so the ground model's $\omega_1$ becomes countable and the extension contains a real coding the enumeration. These facts alone do not determine the exact continuum; that needs the complete forcing definition and cardinal-arithmetic analysis.

---

## Large Cardinals

1. **Show that $\aleph_{\omega}$ is not inaccessible.**

   $\aleph_{\omega} = \bigcup_{n < \omega} \aleph_{n}$ is a countable union of smaller cardinals, so $\text{cf}(\aleph_{\omega}) = \omega < \aleph_{\omega}$. Hence $\aleph_{\omega}$ is not regular, so not inaccessible.

2. **Prove that if $\kappa$ is inaccessible, then $|V_{\kappa}| = \kappa$.**

   By transfinite induction on $\alpha < \kappa$, $|V_{\alpha}| < \kappa$. Successor stages use the strong limit property; limit stages use regularity. Hence $|V_{\kappa}| = \sup_{\alpha < \kappa} |V_{\alpha}| \leq \kappa$, and $\kappa \subseteq V_{\kappa}$ gives equality.

3. **What supply of inaccessibles follows below a measurable cardinal?**

   A measurable $\kappa$ is Mahlo, so inaccessible cardinals are unbounded below $\kappa$; a standard proof uses a normal measure derived from the ultrapower. This is a set bounded by $\kappa$, not a proper class, and iteration below $\kappa$ cannot produce cardinals above it.

4. **Why can ZFC not prove "there exists an inaccessible cardinal"?**

   If ZFC proved this, then $V_{\kappa} \models \text{ZFC}$ for inaccessible $\kappa$ would give ZFC $\vdash \text{Con}(\text{ZFC})$, contradicting Goedel's second incompleteness theorem.

5. **Show that strong compactness implies the compactness theorem for $L_{\kappa\kappa}$.**

   Put $I=\mathcal P_\kappa(T)$ and choose $M_s\models s$ for every $s\in I$. The sets $X_a=\{s:a\subseteq s\}$ generate a $\kappa$-complete fine filter; extend it to a $\kappa$-complete ultrafilter $U$. Since $X_{\{\varphi\}}\in U$ for each $\varphi\in T$, the $L_{\kappa\kappa}$ form of Łoś's theorem gives $\prod_sM_s/U\models T$. Its infinitary induction uses $\kappa$-completeness.

---

## Descriptive Set Theory

1. **Show that every closed subset of a Polish space is both $F_\sigma$ and $G_\delta$.**

   A closed $F$ is an $F_\sigma$ by repeating it. If $F\neq\emptyset$, then $F=\bigcap_{n\geq1}\{x:d(x,F)<1/n\}$; for $F=\emptyset$, use empty open sets. Conversely, an open $U$ is the union of the closed sets $\{x:d(x,X\setminus U)\geq1/n\}$, with $U=X$ handled separately.

2. **Prove that the continuous image of an analytic set is analytic.**

   Let $A$ be analytic, so $A = f(B)$ for Borel $B$ and continuous $f$. Let $g$ be continuous. Then $g(A) = (g \circ f)(B)$. Since $g \circ f$ is continuous and $B$ is Borel, $g(A)$ is analytic.

3. **Show that $2^{\omega}$ is a perfect subset of itself.**

   $2^{\omega}$ is closed. It has no isolated points: for any finite sequence $s$, the basic open set $[s]$ contains both $s \hat{\ } 0 \hat{\ } \overline{0}$ and $s \hat{\ } 1 \hat{\ } \overline{0}$, which are distinct. Hence $2^{\omega}$ is perfect.

4. **State the proof boundary for AD implying Lebesgue measurability.**

   The theorem uses games coding measure approximations and converts strategies into measurable envelopes. A Banach--Mazur slogan concerns category and is not a proof of measurability. This book cites the full regularity theorem rather than claiming to reconstruct it.

5. **Use $V=L$ to refute $\boldsymbol\Sigma^1_2$ Lebesgue measurability.**

   The $\Delta^1_2$ well-order of the reals in $L$ selects a least representative from each rational-translation class. The resulting Vitali selector remains $\Delta^1_2$, hence $\boldsymbol\Sigma^1_2$, and is nonmeasurable by the translation-invariance argument. The former cardinality argument was invalid under CH, where a perfect set also has size $\omega_1$.

---

## Reverse Mathematics

1. **Show that $\mathsf{RCA}_{0}$ produces the graph of a computable function whose totality it proves.**

   A certified computation predicate $C(n,m,s)$ gives the $\Sigma^0_1$ graph $\exists s\,C(n,m,s)$. Internal totality and uniqueness make this equivalent to $\forall k\,\forall s\,(C(n,k,s)\to k=m)$, a $\Pi^0_1$ condition. Thus $\Delta^0_1$ comprehension produces the graph. External totality without a proof in the base does not justify the equivalence.

2. **Prove that $\mathsf{WKL}_{0}$ implies a separating set for any pair of disjoint $\Sigma^{0}_{1}$ sets.**

   With stage approximations $A_s,B_s$, put $\sigma\in2^n$ in $T$ when every $i<n$ discovered by stage $n$ is assigned $1$ if in $A_n$ and $0$ if in $B_n$. This membership test is bounded and decidable. Disjointness makes $T$ infinite; any path eventually respects every discovery and therefore separates $A$ from $B$.

3. **Show that $\mathsf{ACA}_{0}$ is equivalent to Bolzano--Weierstrass over $\mathsf{RCA}_{0}$.**

   In $\mathsf{ACA}_{0}$, arithmetical comprehension determines which rational subintervals contain infinitely many terms of a coded bounded sequence. Repeatedly choose an infinitely occupied half and a later term in it; the resulting nested intervals and indices define a convergent subsequence. Conversely, for an injection $f$ let $q_n=\sum_{i<n}4^{-(f(i)+1)}$. A convergent subsequence has a limit $x$ whose base-$4$ digit in position $k+1$ is $1$ exactly when $k$ lies in the range of $f$. Successive rational approximations recover each digit because the tail beyond it is at most $\frac13 4^{-(k+1)}$, while a present digit contributes $4^{-(k+1)}$. Thus Bolzano--Weierstrass produces the range set and hence arithmetical comprehension.

4. **State the completeness formulation equivalent to $\mathsf{WKL}_{0}$.**

   Over $\mathsf{RCA}_0$, the assertion that every countable coded syntactically consistent theory in a countable coded language has a countable coded model is equivalent to $\mathsf{WKL}_0$. The model is read from a path through the tree of finite Henkin decisions. Other coding and weak-completeness formulations can be weaker.

5. **Explain why order-type statements need codes in second-order arithmetic.**

   The language has numbers and sets of numbers, not arbitrary von Neumann ordinals. Countable orders are coded by sets; a legitimate comparison says that any two coded well-orders are comparable by an isomorphism with an initial segment. $\mathsf{ATR}_0$ supports the required transfinite recursions. “A unique ordinal” is not a formula until translated into such coding.

---

## Modal Logic

1. **Show $\vdash_{K} \Box(\varphi \land \psi) \leftrightarrow (\Box \varphi \land \Box \psi)$.**

   Necessitate only the propositional theorem schemas $(\varphi\land\psi)\to\varphi$, $(\varphi\land\psi)\to\psi$, and $\varphi\to(\psi\to\varphi\land\psi)$, then use K and modus ponens. Necessitation is never applied to a temporary assumption.

2. **Construct a Kripke model where $\Box p \to p$ fails.**

   Let $W = \{w, v\}$, $R = \{(w, v)\}$, $V(p) = \{v\}$. Then $wRv$ and $\mathcal{M}, v \models p$, so $\mathcal{M}, w \models \Box p$. But $w \notin V(p)$, so $\mathcal{M}, w \not\models p$. Hence $\mathcal{M}, w \not\models \Box p \to p$.

3. **Prove S4 is sound and complete for reflexive, transitive frames.**

   Soundness: reflexivity validates T, transitivity validates 4. Completeness: the canonical model for S4 has reflexive, transitive $R$. Reflexivity follows from T; transitivity follows from 4 by the standard argument.

4. **Show S5 is complete for equivalence relations.**

   The canonical model for S5 is reflexive (T), transitive (S4), and Euclidean (S5). A reflexive Euclidean relation is symmetric, hence an equivalence relation.

5. **Define a frame where $\Box p \to \Box \Box p$ holds but $\Box p \to p$ fails.**

   Let $W = \{w, v\}$, $R = \{(w, v), (v, v)\}$. Then $R$ is transitive but not reflexive ($\neg wRw$). Let $V(p) = \{v\}$. Then $\mathcal{M}, w \models \Box p$ but $\mathcal{M}, w \not\models p$, so T fails while 4 holds.

---

## Temporal Logic

1. **Express "$p$ holds at every even position" using a clock proposition $e$.**

   Use $e\land\mathsf G(\mathsf Xe\leftrightarrow\neg e)\land\mathsf G(e\to p)$. The clock alternates from an even initial position; $p$ is required only where $e$ holds. Forcing $p$ itself to be two-periodic would improperly constrain odd positions.

2. **Show that $\mathsf{AG}\mathsf{EF} p$ is not expressible in LTL.**

   Let A have states $a,p$ and edges $a\to a,p$ and $p\to p$. Let B have states $b,g,d,p$ and edges $b\to g,d,p$, $g\to g,p$, $d\to d$, and $p\to p$. Label only $p$ with proposition $p$. From $a$ and $b$ the trace sets coincide: $\neg p^\omega$ and every finite positive block of $\neg p$ followed by $p^\omega$. Thus all universally interpreted LTL formulas agree, but $\mathsf{AG}\mathsf{EF}p$ fails only at $b$, because $d$ cannot reach $p$.

3. **Write a CTL formula: "Whenever $p$ holds, $q$ holds at the next state on some path."**

   $\mathsf{AG}(p \to \mathsf{EX} q)$.

4. **Prove $\mathsf{E}[\top \, \mathsf{U} \, \varphi]$ is equivalent to $\mathsf{EF} \varphi$.**

   $\mathsf{E}[\top \, \mathsf{U} \, \varphi]$ means there exists a path where eventually $\varphi$ holds, with no restriction before (since $\top$ always holds). This is exactly $\mathsf{EF} \varphi$.

5. **Explain why LTL model checking is harder than CTL model checking.**

   In combined complexity, CTL uses polynomial-time state fixpoints, while LTL uses an on-the-fly search of an implicit exponential Büchi tableau and is PSPACE-complete. For a fixed LTL formula, model checking is still polynomial in the system size.

---

## Linear Logic

1. **Prove $A \vdash A$ in linear logic.**

   This is the identity axiom, valid for all formulas.

2. **Show $(A \otimes B) \multimap C$ is equivalent to $A \multimap (B \multimap C)$.**

   Both express that given one $A$ and one $B$, one can produce one $C$. The proof uses associativity of tensor and the definition of linear implication.

3. **Translate $(A\land B)\to C$ under the stated call-by-name translation of the atom--conjunction--implication fragment.**

   It is $!(A^*\mathbin{\&}B^*)\multimap C^*$. A translated intuitionistic context also marks each reusable hypothesis with $!$; the translation cannot switch connectives case by case without saying so.

4. **Compare $!p\vdash p\otimes p$ and $p\vdash p\otimes p$ for an atom $p$.**

   Contract $!p$, derelict both copies, and introduce tensor. In a cut-free proof from one unmarked atom, tensor introduction must split that occurrence, leaving one premise without a matching atom. The claim is restricted to an arbitrary atom: $!B$ and units provide counterexamples to the blanket statement for every formula $A$.

5. **Draw a proof net for $\vdash A^{\perp} \mathbin{\mathrm{par}} A$.**

   The proof net has two atomic formulas $A^{\perp}$ and $A$ linked by an axiom edge. The par node combines them into $A^{\perp} \mathbin{\mathrm{par}} A$.

---

## Homotopy Type Theory

1. **Show function extensionality follows from univalence.**

   Univalence implies weak function extensionality (dependent products of contractible types are contractible), and weak function extensionality implies that $(f=g)\to(f\sim g)$ is an equivalence. Apply its inverse to $H$. These are HoTT Book §4.9, Theorems 4.9.4--4.9.5; an arbitrary homotopy does not directly define the former self-equivalence.

2. **Prove the type of paths in a contractible type is contractible.**

   With center $c$ and contraction $h:\prod_x(c=x)$, use $h(x)^{-1}\cdot h(y)$ as the center of $x=y$. Path induction shows every $p:x=y$ equals it, so the path type is contractible.

3. **Construct the suspension $\Sigma A$ as a HIT.**

   $\Sigma A$ has two points $\text{N}, \text{S}$ and for each $a: A$, a path $\text{merid}(a): \text{N} = \text{S}$.

4. **Show $\Sigma S^{0} \simeq S^{1}$.**

   The suspension has two poles and two meridians. Choosing one meridian to identify the poles turns the other into one generating loop. HIT induction constructs maps both ways, and the computation rules give inverse homotopies. Hence $\Sigma S^0\simeq S^1$, a homotopy equivalence rather than literal constructor identification.

5. **Explain why univalence implies isomorphic groups are equal.**

   Univalence turns the carrier equivalence into a path; function extensionality and the homomorphism equations identify transported operations, and proof irrelevance handles proposition-valued laws. This structure identity argument needs operation preservation, not carrier univalence alone.

---

## Chapter 12: Computability and Turing Machines

1. **Show that the set of Turing machines accepting at least one string is recognizable.**

   Simulate $M$ on all strings in parallel (dovetailing). If $M$ accepts any string, this simulation eventually discovers it.

2. **Prove the set of Turing machines accepting all strings is not recognizable.**

   Map $\langle M,w\rangle$ to a machine $N$ that accepts input $x$ exactly when $M(w)$ has not halted within $|x|$ steps. Then $N$ accepts every string iff $M(w)$ never halts. A recognizer for $\mathrm{ALL}_{TM}$ would recognize $\overline{\mathrm{HALT}}$, impossible.

3. **Show that if $L$ and $\overline{L}$ are both recognizable, then $L$ is decidable.**

   Run recognizers for $L$ and $\overline{L}$ in parallel. Exactly one will eventually accept, deciding membership.

4. **Explain why "$M$ halts on input 0" is not a counterexample to Rice's theorem.**

   The property is behavioral, but it is not invariant under $L(M)$: two machines can both fail to accept $0$, one by halting in a reject state and one by looping. Rice's theorem here concerns extensional properties of the recognized language, so it does not apply.

5. **Reduce HALT to $\mathrm{NONEMPTY}_{TM}$.**

   Output a machine $N_{M,w}$ that ignores its own input, simulates $M(w)$, and accepts exactly if that simulation halts. Its language is $\Sigma^*$ when $M(w)$ halts and empty otherwise. This computable code transformation is the required mapping reduction.

---

## Chapter 13: Incompleteness and Arithmetization

1. **Explain why $G_{T}$ is true in $\mathbb{N}$ (assuming $T$ is sound).**

   $G_{T}$ asserts its own unprovability in $T$. If $T$ is sound and $T \not\vdash G_{T}$, then $G_{T}$ is true.

2. **Does consistency of $T$ imply consistency of $T+\mathrm{Con}(T)$?**

   No. Assuming PA is consistent, $T=\mathrm{PA}+\neg\mathrm{Con}(\mathrm{PA})$ is consistent, but $T$ proves $\mathrm{Con}(T)\to\mathrm{Con}(\mathrm{PA})$ and also $\neg\mathrm{Con}(\mathrm{PA})$; hence adding $\mathrm{Con}(T)$ makes it inconsistent. Soundness of $T$ in $\mathbb N$ is a sufficient condition, since then $\mathbb N\models T+\mathrm{Con}(T)$.

3. **State the difference between Goedel's original sentence and Rosser's sentence.**

   Goedel's sentence $G_{T}$ asserts its own unprovability; its proof requires $\omega$-consistency. Rosser's sentence $R_{T}$ asserts that any proof of $R_{T}$ is preceded by a proof of $\neg R_{T}$; Rosser's proof requires only consistency.

4. **Why does Presburger arithmetic escape incompleteness?**

   External Gödel coding does not require multiplication in the object language. Presburger arithmetic has a decision procedure via quantifier elimination in the standard definitional expansion by the order relation and congruence predicates for each fixed divisor. It does not interpret the self-referential arithmetic required by the incompleteness hypotheses; in particular it is not an extension of $Q$ of the required strength.

5. **Formalize the diagonal lemma.**

   Let $d$ be the metatheoretic diagonal-substitution function and represent it by an arithmetic formula $D(x,y)$. Define $\theta(x)\equiv\exists y(D(x,y)\land\psi(y))$ and $\varphi=\theta(\ulcorner\theta\urcorner)$. Representability identifies the unique output with $\ulcorner\varphi\urcorner$ inside $T$, proving the fixed-point equivalence. One may not simply write $d$ as though it were already a term of the language.

---

## Chapter 14: Sequent Calculus and Proof Theory

1. **Show cut elimination implies the subformula property.**

   The strict statement holds propositionally by tracing each rule upward from the endsequent. First-order quantifier rules introduce instances $A(t)$, so there the analytic property says every formula is a substitution instance of an endsequent subformula.

2. **State PA's precise $\varepsilon_0$ limitation.**

   Fix Gentzen's notation system and a uniform induction/well-foundedness principle strong enough to formalize termination of every PA proof reduction. PA proves that principle implies $\mathrm{Con}(\mathrm{PA})$, so consistent PA cannot prove it. PA still proves each fixed induction instance at each fixed notation below $\varepsilon_0$.

3. **Explain the Curry-Howard correspondence for implication.**

   Implication introduction corresponds to lambda abstraction; elimination corresponds to function application. A proof of $A \to B$ is a function from proofs of $A$ to proofs of $B$. Normalization corresponds to beta reduction.

4. **Show the cut rule is admissible in first-order logic.**

   Admissibility means any sequent provable with cut is provable without cut. This is exactly Gentzen's cut elimination theorem.

5. **Compute the Cantor normal form of $\omega^{\omega} + \omega^{3} \cdot 2 + 5$.**

   The Cantor normal form is already given: $\omega^{\omega} + \omega^{3} \cdot 2 + \omega^{0} \cdot 5$. Exponents decrease: $\omega > 3 > 0$, and coefficients are nonzero natural numbers.

---

## Chapter 15: Intuitionistic and Constructive Logic

1. **Show $\neg(\varphi \land \psi)$ is not equivalent to $\neg\varphi \lor \neg\psi$ in intuitionistic logic.**

   Use a root with two incomparable terminal extensions, one forcing only $\varphi$ and the other only $\psi$. No node forces their conjunction, so the root forces its negation; each branch prevents one negated disjunct at the root. Thus the disjunction is not forced.

2. **Extract a realizer for $\forall x \, (P(x) \to P(x))$ in HA.**

   Let $i$ index the identity on evidence. A realizer for the outer universal quantifier is a constant-index program $e$ with $\{e\}(x)=i$ for every $x$. The identity index by itself realizes only the inner implication at a fixed $x$.

3. **Explain the correct route to nonprovability of Markov's principle in HA.**

   Markov's principle does not decide whether its double-negated premise holds and therefore does not solve HALT. Nonprovability is shown by a Kripke or topological model of HA in which the principle fails; other realizability models validate it. The model separation, not an undecidability slogan, supplies the proof.

4. **Explain why the law of excluded middle fails in the BHK interpretation.**

   In a two-node Kripke frame, let an atom $\varphi$ become true only at the extension. The root forces neither $\varphi$ nor $\neg\varphi$, so it does not force their disjunction. Current ignorance about Goldbach would not establish logical nonderivability.

5. **Show the fan theorem implies $[0,1]$ is compact constructively.**

   Present the cover by enumerable rational intervals with evidence that every binary name is covered after a finite prefix. Those prefixes form a bar. When the chosen fan theorem's decidability hypothesis holds, a uniform depth leaves finitely many witnessing prefixes and hence a finite subcover. Other presentations require separately matched fan principles.

---

## Chapter 16: The Continuum Problem and Independence

1. **Explain why PFA implies $2^{\aleph_{0}} = \aleph_{2}$.**

   PFA implies $\mathrm{MA}_{\omega_1}$ and hence $2^{\aleph_0}\geq\aleph_2$. The upper bound is a separate deep consequence of PFA, not a consequence of that lower bound or of $\mathfrak b=\aleph_2$. This survey cites the theorem rather than reconstructing its proper-forcing proof.

2. **Show that $0^{\#}$ implies $\aleph_{1}^{V}$ is inaccessible in $L$.**

   $0^\#$ yields a proper class of Silver indiscernibles and strong failure of covering; a standard consequence is that every uncountable $V$-cardinal, including $\aleph_1^V$, is inaccessible in $L$. The indiscernibles are not all countable in $V$.

3. **Construct a topos not equivalent to $\mathbf{Set}$.**

   For discrete $X=\{0,1\}$, $\mathrm{Sh}(X)\simeq\mathbf{Set}\times\mathbf{Set}$. Its terminal object has four subobjects, while the terminal set has two, so the categories cannot be equivalent. A nonpoint space alone is insufficient: a nonempty indiscrete space has sheaf topos equivalent to $\mathbf{Set}$.

4. **State the inner model hypothesis and explain what further evidence would be needed to establish an independence claim over ZFC.**

   In the standard parameter-free countable-model form: if $\varphi$ holds in an inner model of an outer model of the universe, it already holds in an inner model of the universe. The outer-model quantifier is essential. Conflict with a stronger axiom does not prove independence from ZFC; separate consistency arguments are required.

5. **Discuss the significance of the consistency of a Reinhardt cardinal with ZF.**

   The question tests how universe embeddings interact with choice. Kunen's theorem rules out the usual embedding under ZFC, while choiceless frameworks require different methods. Reinhardt cardinals should not be called the strongest known axiom across a partially ordered choiceless landscape.
