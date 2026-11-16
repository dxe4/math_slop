
# Operads

A category organizes unary operations and their composition. An operad organizes operations with any finite number of ordered inputs and permits substitution of one operation into each input slot. Associative multiplication, commutative multiplication, Lie brackets and operations on spaces can be described this way, but their axioms differ. The operad records arity, permutations and substitution laws before an algebra is chosen. We begin with set-valued operads so every construction can be checked on elements, then identify the enriched hypotheses needed for chain complexes and spaces.

Read [Monoidal Categories](monoidal-categories.md) for tensor products, [Bicategories](bicategories.md) for coherence of composite operations, and [Introduction to Category Theory, Monads](../introduction-to-category-theory/monads-algebras.md) for algebra structures. The general free-operad construction uses finite rooted trees. We prove its universal property in the nonsymmetric set case; topological little-disks and homotopical rectification theorems remain named imports with their hypotheses.

## Arity and substitution

**Definition 5.1 (Nonsymmetric operad).** A nonsymmetric operad O in Set consists of sets O(n) for every nonnegative integer n, a unit element 1 in O(1), and substitution maps taking an outer operation p in O(k) and inner operations q_i in O(n_i) to an element p(q_1,...,q_k) in O(n_1+...+n_k). Substitution is associative: replacing the inputs of each q_i by further operations before or after substituting the q_i into p gives the same final element. Inserting the unary unit in every slot leaves p fixed, and substituting any p into the unit returns p.

The nullary set O(0) contains constants. It may be empty, and allowing it changes what algebras of the operad must provide. The unit is unary, not a nullary constant. For an operad describing unital associative algebras, one must specify an arity-zero operation whose image becomes the multiplicative unit; the operad's unary identity operation only ensures that the identity function acts as identity.

The arity equation is a useful type check. If p has three inputs and its inner operations have arities two, zero and four, the composite has six inputs. A proposed formula producing seven has probably counted the outer vertex as an extra input. Trees visualize the rule: leaves are external inputs, internal vertices are operations, and substitution replaces a leaf-position by a subtree.

**Proposition 5.2 (Substitution at one slot).** Full substitution is determined by partial compositions p composed in slot i with q, together with the compatibility equations for nested and disjoint slots.

*Proof.* Given p and q_1,...,q_k, insert q_1 through q_k successively, keeping track of the shifted slot number after each insertion. The disjoint-slot compatibility makes the result independent of the order in which different slots are filled. The nested-slot compatibility equates insertion inside q_i before or after q_i is inserted into p. Conversely, full associativity specialized to all but one or two inserted units yields those partial-composition equations. Thus the two presentations encode the same substitution data. ∎

## Symmetric actions

**Definition 5.3 (Symmetric operad).** A symmetric operad additionally has a right action of the permutation group on n letters on O(n) for each n. Substitution is equivariant: permuting outer slots and permuting the inputs inside each q_i produces the same operation as permuting the final list of all inputs by the corresponding block permutation. This is an equation, not an assertion that every operation is invariant under permutations.

For example, a binary operation m may have a distinct permuted operation m acted on by the transposition. In the associative operad, these encode the two orders of inputs. In the commutative operad they coincide. An algebra of a symmetric operad must respect these actions when evaluating operations on tuples. If the ambient monoidal category has a symmetry, its crossing maps implement the input permutations on tensor powers.

**Worked example 5.4 (Endomorphism operad).** Let X be a set. Define End_X(n) as the set of functions X to the n power to X; when n=0, this is the set of chosen elements of X. Substitution is ordinary function composition with blocks of inputs. If p takes k inputs and q_i takes n_i, partition an input tuple into consecutive blocks, evaluate each q_i on its block, then feed the k results to p. Associativity follows because evaluating a three-level expression in either nesting order applies the same functions to the same leaves. The unary identity function is the operad unit, and permutations act by reordering input coordinates. A symmetric operad algebra on X is equivalently an operad morphism from O to End_X: it assigns concrete operations respecting every substitution and permutation law.

## Associative and commutative algebra examples

**Worked example 5.5 (Associativity without commutativity).** In the nonsymmetric associative operad, there is one formal n-ary operation for each positive n, representing an ordered product of n inputs. Substitution concatenates ordered lists. An algebra gives maps X to the n power to X whose binary member is an associative multiplication; the higher maps are its iterated products. In the unital version, include one nullary operation e, and the substitution equations force e to be a two-sided identity. These facts can be proved by reducing every planar multiplication tree to the ordered list of its leaves using associativity, then inserting the nullary vertex for the unit equation.

For symmetric associative algebras, the arity-n set must remember permutations of ordered inputs; it cannot be a singleton when noncommutative multiplication is allowed. One convenient symmetric associative operad has O(n) the permutation group on n letters, with block substitution. An algebra evaluates a permutation by multiplying inputs in that order. If the same singleton set were used with trivial permutation action at every arity, equivariance would force the binary multiplication to be commutative. This distinction prevents the common mistake of treating nonsymmetric and symmetric associative operads as identical.

**Worked example 5.6 (Commutative operad).** Let Com(n) be a singleton for every n including zero, with the unique substitutions and permutation actions. In sets, an algebra has a binary multiplication m, a nullary element e, and all its iterated operations. Because the transposition fixes the unique binary operad element, equivariance gives m(x,y)=m(y,x). Substitution gives associativity, and the nullary relations make e a unit. Conversely every commutative monoid defines a unique Com-algebra by evaluating the sole n-ary operation as the product of its inputs, with the empty product e. Thus the algebra definition recovers exactly commutative monoids.

In modules, the analogous operads use tensor powers and linear maps. The symmetric group action on the tensor power uses the ambient braiding. For graded modules, the braiding carries Koszul signs, so a “commutative” graded multiplication satisfies graded commutativity, not naive equality after swapping homogeneous elements. The base monoidal category changes the concrete algebra law even when the abstract operad symbol stays Com.

## Free nonsymmetric operads from rooted trees

Let E(n) be a set of generating operation symbols of arity n. Build finite planar rooted trees whose vertices of arity n are labeled by elements of E(n); include a special one-edge tree as the unary identity. The external leaves are ordered from left to right. A nullary vertex is a tree with no incoming leaves and one outgoing edge. Two trees are equal only when their rooted planar shapes and labels agree, apart from the prescribed identity-edge convention.

**Theorem 5.7 (Free operad).** Grafting trees into ordered leaves makes these labeled trees a nonsymmetric operad F(E). For any nonsymmetric operad O and arity-preserving maps E(n) to O(n), there is a unique operad morphism F(E) to O extending those maps.

*Proof.* Grafting the roots of trees q_i into the leaves of a tree p produces a finite planar rooted tree with the sum of their leaf counts. Grafting in two stages and in one combined stage produces the same labeled incidence tree, so substitution is associative. The one-edge tree changes no tree when grafted into or around it, giving the unit. To extend a map of generators, evaluate a labeled tree from its bottom vertices upward: at each vertex apply O's substitution to the already evaluated incoming subtrees. Induction on the number of vertices shows this evaluation respects grafting, by O's associativity, and respects the unit. Any operad morphism extending the generators must give the same value on a tree by that induction, so the extension is unique. ∎

The theorem is deliberately nonsymmetric and set-valued. For a symmetric free operad one must attach permutation actions and quotient by their equivariance relations. In chain complexes, coproducts, tensor products and signs enter, and a homotopical “free” construction may need cofibrancy assumptions for derived claims. None of that follows merely from drawing trees.

## Algebras and a substitution monad

For a nonsymmetric set operad O, define T_O(X) as the disjoint union over n of O(n) times X to the n power. Elements are formal operations decorated by n input elements. The operad unit gives a map X to T_O(X) by x to (1,x). Substitution flattens an element of T_O(T_O(X)) by substituting the inner operations into the outer one and concatenating their X-input lists.

**Theorem 5.8.** The unit and flattening make T_O a monad on Set, and its Eilenberg–Moore algebras are exactly O-algebras.

*Proof.* Naturality follows because a set map changes only the X labels at leaves. The two monad unit equations say that substituting the unary operad unit outside an operation or into each of its slots changes nothing, precisely the operad unit laws. Monad associativity compares two flattenings of a three-level formal tree, and operad substitution associativity makes their results equal. A T_O-algebra map T_O(X) to X assigns an evaluation map O(n) times X to the n power to X for every n. The algebra unit and associativity equations are exactly the operad action's unit and substitution equations. Conversely those equations assemble into a T_O-algebra. The constructions are inverse on objects and maps. ∎

In a symmetric operad, the monad formula must quotient each O(n) times X to the n power by the matching symmetric-group action. Without that quotient, the construction remembers an ordered representative and does not enforce equivariance. For example, Com would then give words or lists rather than unordered finite multisets. The difference is concrete even for a two-element set.

## Little disks and the import boundary

The little n-disks operad has spaces of disjoint affine embeddings of finitely many small disks into one unit disk, with substitution by rescaling and insertion. Its algebraic substitution law can be checked geometrically: nested rescaling of affine embeddings is associative. The claim that its algebras model n-fold loop spaces, under suitable connectedness and model-category hypotheses, is the recognition principle and is an imported theorem, not proved by this elementary geometric check. Likewise, a general rectification theorem comparing homotopy-coherent operad algebras with strict algebras requires admissibility and cofibrancy hypotheses. We will use only the construction-level idea later unless those hypotheses are stated.

Operads are also distinct from ordinary categories with many objects and from PROPs that permit several outputs. A one-colored operad has one output for every operation. A colored operad permits types on inputs and output, while retaining one output. A PROP can encode operations with multiple outputs. These extensions serve different problems; changing notation does not identify their universal properties.

## From free magma to associative multiplication

Take one binary generator m and no imposed equations. The free nonsymmetric operad has two distinct arity-three trees: one evaluates as m(m(x_1,x_2),x_3), the other as m(x_1,m(x_2,x_3)). A free-operad algebra need not identify them. To obtain the associative operad, impose the relation between these two trees and all its consequences under further substitution. Every planar binary tree with the same ordered leaves then becomes equivalent: repeatedly rotate a left-nested internal edge toward the right until a right comb remains. Each rotation is an instance of the associativity relation inside a larger tree. The resulting operation depends only on the ordered list of leaves, not its bracketing.

This quotient does not identify a tree whose leaves occur in a different order. That would impose commutativity, a separate law. If a nullary unit generator is added, impose the two relations that remove it from the left or right input of m. Rewriting by those relations erases unit vertices and reduces a nonempty tree to an ordered product. The construction makes the distinction between a free operation theory and a theory with equations explicit: an operad can be presented by generators and relations, but the quotient must close each relation under every possible substitution context.

This presentation also reveals what the universal property says about an algebra. An interpretation of the free generator m in End_X is simply a binary function on X; the free operad sends each planar tree to the iterated function specified by that tree. The interpretation descends through the associative quotient exactly when the two arity-three trees have equal values for every triple of elements. That equality is the associative law. If a nullary generator e is present, its interpretation is a chosen element of X, and descent through the two unit relations is exactly the pair of equations m(e,x)=x and m(x,e)=x. Thus generators describe the raw operations, while quotient relations describe the equations an algebra must satisfy. This is a direct use of the free operad's universal property, rather than a separate definition of associative algebras.

## Exercises

### Exercise 5.1 {#operads-ex-arity}

If p has arity four and inner operations have arities two, zero, one and three, find the composite arity.
<details><summary>Hint 1</summary>The outer inputs are replaced, not retained as extra leaves.</details>
<details><summary>Hint 2</summary>Add the four inner arities.</details>
<details><summary>Solution</summary>The external leaves come from the inner operations, so the arity is two plus zero plus one plus three, equal to six. The outer vertex contributes no additional input after its slots are filled.</details>

### Exercise 5.2 {#operads-ex-nullary}

Explain why the operad unary unit does not by itself give an algebra a chosen element.
<details><summary>Hint 1</summary>A unary operation acts on an existing element.</details>
<details><summary>Hint 2</summary>A constant has no input and belongs to arity zero.</details>
<details><summary>Solution</summary>The unary unit evaluates as the identity map X to X and therefore requires an input x. A chosen element of X is a map from the one-point set to X, corresponding to an arity-zero operation. An operad with O(0) empty can have a unary identity without prescribing any constant.</details>

### Exercise 5.3 {#operads-ex-endomorphism}

Verify associativity of substitution in the endomorphism operad of a set.
<details><summary>Hint 1</summary>Partition a final input tuple according to the leaves of a three-level tree.</details>
<details><summary>Hint 2</summary>Evaluate bottom functions, then middle functions, then the root.</details>
<details><summary>Solution</summary>Both substitution bracketings apply each bottom function to the same block of final inputs, feed those results into the same middle functions, and feed their outputs to the same root function. Function composition is associative, so both yield the same output on every input tuple. Hence the operations are equal.</details>

### Exercise 5.4 {#operads-ex-associative}

Show why a symmetric operad with one fixed binary element forces its binary algebra operation to commute.
<details><summary>Hint 1</summary>Apply the transposition to the binary element.</details>
<details><summary>Hint 2</summary>Use equivariance of the algebra action on swapped inputs.</details>
<details><summary>Solution</summary>The transposition fixes the sole binary operad element. Equivariance therefore says evaluating that element at (x,y) equals evaluating it at (y,x). Thus the binary operation is commutative. A symmetric operad for general associative multiplication must retain distinct permuted operations.</details>

### Exercise 5.5 {#operads-ex-commutative}

Recover the unit law of a Com-algebra from an arity-zero operation.
<details><summary>Hint 1</summary>Let e be the value of the unique nullary operation.</details>
<details><summary>Hint 2</summary>Substitute that operation into either slot of the unique binary operation.</details>
<details><summary>Solution</summary>Substitution into one slot produces the unique unary operation, which is the operad identity. Evaluating the relation gives m(e,x)=x and m(x,e)=x. Thus the nullary value e is a two-sided multiplicative unit.</details>

### Exercise 5.6 {#operads-ex-free-tree}

Describe the free-operad tree for a binary generator m substituted into the first slot of another m.
<details><summary>Hint 1</summary>The root is labeled m and has two incoming edges.</details>
<details><summary>Hint 2</summary>Replace its first leaf by a binary m vertex.</details>
<details><summary>Solution</summary>The tree has a root m, whose left input comes from a second m with two leaves, and whose right input is one leaf. It has three ordered external leaves. In an algebra it evaluates to m(m(x_1,x_2),x_3), which need not equal the other bracketing before associativity relations are imposed.</details>

### Exercise 5.7 {#operads-ex-free-universal}

Why is an operad morphism from the free nonsymmetric operad fixed by its values on generators?
<details><summary>Hint 1</summary>Every nonidentity tree has a labeled root and smaller input subtrees.</details>
<details><summary>Hint 2</summary>Induct on the number of vertices and use preservation of substitution.</details>
<details><summary>Solution</summary>By induction the morphism values on each input subtree are fixed. Preservation of substitution then forces the value on the whole tree to be the substituted value of its root label and subtree values. The one-edge tree must map to the unit. Thus no independent choices remain after generator images are fixed.</details>

### Exercise 5.8 {#operads-ex-monad-unit}

Write the monad unit for T_O on an element x and interpret one unit equation.
<details><summary>Hint 1</summary>Use the distinguished unary operad element.</details>
<details><summary>Hint 2</summary>Flatten a formal operation whose sole outer operation is the unary unit.</details>
<details><summary>Solution</summary>The unit maps x to the formal pair (1,x). Flattening an outer unary unit applied to a formal inner operation p substitutes p into 1, which equals p by the operad unit law. Thus flattening after the unit at T_O(X) is identity, one of the monad unit equations.</details>

### Exercise 5.9 {#operads-ex-symmetric-quotient}

Explain why the symmetric Com monad uses coinvariants of permutation actions.
<details><summary>Hint 1</summary>The sole n-ary Com operation is fixed by every permutation.</details>
<details><summary>Hint 2</summary>Its evaluation must be independent of input order.</details>
<details><summary>Solution</summary>The symmetric action identifies an n-tuple with each permutation of that tuple. Taking the quotient of Com(n) times X to the n power by the symmetric group produces an unordered finite multiset of n inputs. Without the quotient, distinct input orders remain different formal elements and the monad would not encode commutativity.</details>

### Exercise 5.10 {#operads-ex-colored}

Distinguish a two-colored operad operation from a morphism in an ordinary two-object category.
<details><summary>Hint 1</summary>An operad operation may have several typed inputs.</details>
<details><summary>Hint 2</summary>An ordinary category arrow has exactly one source object and one target object.</details>
<details><summary>Solution</summary>A two-colored operad operation can take, for example, two inputs of the first color and one of the second, with one specified output color. An ordinary category arrow has one source and one target and cannot record such a three-input operation as a primitive arrow without additional product objects and structure. The operad substitution law composes typed trees of operations.</details>

## Sources

Original exposition and exercises. The finite-tree and monad constructions are proved here. The operadic benchmark is Markl, Shnider and Stasheff, *Operads in Algebra, Topology and Physics*. The little-disks recognition principle and general homotopical rectification are named imports, not claims established by the set-valued tree argument.

## Summary

An operad records operations by arity and composes them by substitution. A unary unit is distinct from a nullary constant. Symmetric actions govern permutations and distinguish associative from commutative algebra. Rooted labeled trees construct the free nonsymmetric operad, and operad algebras are algebras of an explicit substitution monad. Topological recognition and rectification require separate deep theorems. The next chapter turns to local data and the categorical gluing conditions of sheaf theory.
