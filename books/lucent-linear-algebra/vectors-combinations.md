# 1. Vectors, combinations, and the geometry of possibility

**Prerequisites:** real-number arithmetic, coordinates, and solving two equations. **Time:** two study sessions plus exercises. **After this chapter:** you should be able to construct linear combinations, decide what a small collection spans, and justify independence algebraically.

## What information does a vector hold?

A vector in Rⁿ is an ordered list of n real numbers. Order and dimension matter: (2,5) and (5,2) describe different vectors, and neither equals (2,5,0) in R³. A vector might record a displacement, the amounts of three ingredients, or the measurements from a thousand sensors. Geometry makes the operations visible, but the operations also apply when drawing an arrow is impossible.

For u=(u₁,…,uₙ) and v=(v₁,…,vₙ), define u+v=(u₁+v₁,…,uₙ+vₙ) and cu=(cu₁,…,cuₙ). The scalar c is a real number. The zero vector has all coordinates zero. Addition combines corresponding measurements; scalar multiplication rescales them together. Adding a position in metres to a velocity in metres per second is meaningless physically even when both have two coordinates: a mathematical model must specify what its entries mean.

In a diagram, draw an arrow from the origin to (2,1). Moving that arrow elsewhere without changing its direction or length gives the same displacement. To add arrows, put the tail of the second at the head of the first. Coordinates justify the picture: travelling u and then v ends at u+v. This explains why the parallelogram rule works rather than simply asking you to memorise it.

## Linear combinations are controlled construction

A linear combination of v₁,…,vₖ is c₁v₁+⋯+cₖvₖ, where the coefficients cᵢ are arbitrary real numbers. Negative coefficients reverse direction. Zero coefficients switch contributions off. Unless a problem says otherwise, coefficients need not be positive or sum to one.

**Worked example: two actuators.** Suppose one control produces u=(2,1), and another produces v=(−1,2). To obtain b=(3,4), solve 2a−b₀=3 and a+2b₀=4. Substituting b₀=2a−3 gives 5a=10, so a=2 and b₀=1. Thus (3,4)=2u+v. We used b₀ for a coefficient to distinguish it from the target vector b. A quick coordinate check, (4,2)+(−1,2)=(3,4), is a better safeguard than trusting a plausible picture.

### Laboratory: make a target by combining controls

**Predict.** Before changing anything, locate 2u+v and −u+v. Which coefficient should change if you want to move parallel to u?

```mathviz
scene "Combine two independent directions";
domain -7 7;
range -7 7;
coordinates equal;
param a = 1 from -2 to 2;
param b = 1 from -2 to 2;
vector u = (2,1) color blue;
vector v = (-1,2) color teal;
vector result = (2*a-b,a+2*b) color rose;
segment translated_v from (2*a,a) to (2*a-b,a+2*b) color amber;
point target = (3,4) color amber;
```

**Manipulate.** Reach the amber target. Hold b fixed and move a, then reverse their roles. To model a different actuator, edit u's coefficients in the vector, the result, and both endpoints of `translated_v`; all four expressions must describe the same construction.

**Explain.** Write the two equations corresponding to the target. Explain why moving one coefficient traces a line, even though moving both can cover a plane. The amber segment represents b times v translated to the end of a times u; translating changes its location, not its displacement.

## Span asks which targets are possible

The span of v₁,…,vₖ is the set of all their linear combinations. It is a set of vectors, not a particular arrow or a particular choice of coefficients. The span of a nonzero vector in R² is the whole line through the origin in its direction. The span of the zero vector is just {0}.

Every span contains zero and is closed under addition and scalar multiplication. Here is the argument for two generators. If p=au+bv and q=cu+dv, then p+q=(a+c)u+(b+d)v, which is another combination. Also tp=(ta)u+(tb)v. These properties will later define a subspace. A line such as y=2x+1 is not a span: it does not even contain the origin.

**Worked example: a plane in three dimensions.** Let u=(1,0,1), v=(0,1,1). Their combinations are (a,b,a+b). Consequently every combination satisfies z=x+y. Conversely, any vector (x,y,z) satisfying z=x+y equals xu+yv. Both directions matter: together they prove that the span is exactly the plane z=x+y. The target (2,−1,1) is reachable; (2,−1,4) is not.

## Independence asks whether controls are redundant

Vectors v₁,…,vₖ are linearly independent if c₁v₁+⋯+cₖvₖ=0 implies c₁=⋯=cₖ=0. Otherwise they are dependent. This definition tests a homogeneous equation; it does not ask whether each vector is nonzero or whether the arrows look different.

For u=(2,1), v=(−1,2), the equation au+bv=0 gives 2a−b=0 and a+2b=0. Substitution gives 5a=0, so both coefficients vanish: these vectors are independent. In contrast, (1,2) and (3,6) are dependent because 3(1,2)−(3,6)=0.

Why does this definition capture redundancy? If a nontrivial relation has cⱼ≠0, rearrange it to express vⱼ as a combination of the other vectors. Removing that generator changes no reachable target. Conversely, if a generator is a combination of the others, moving all terms to one side gives a nontrivial relation.

### Laboratory: watch two directions become one

**Predict.** For u=(1,1) and v=(1,1+h), which h makes the vectors dependent? Can their span ever miss a target when h≠0?

```mathviz
scene "A plane of possibilities collapses to a line";
domain -5 5;
range -5 5;
coordinates equal;
param h = 1 from -2 to 2;
param a = 1 from -2 to 2;
param b = 1 from -2 to 2;
vector u = (1,1) color blue;
vector v = (1,1+h) color teal;
vector combination = (a+b,a+(1+h)*b) color rose;
point target = (0,1) color amber;
```

**Manipulate.** Try to reach the target at h=1, h=0.5, and h=0. Set h=0.1 and explain why the bounded sliders become a limitation. You may edit their ranges to test your answer.

**Explain.** The equations a+b=0 and a+(1+h)b=1 imply hb=1. For h≠0 the target is reachable with b=1/h and a=−1/h. At h=0 it is impossible. A finite slider range never proves that a vector lies outside the mathematical span. Near dependence, large controls may be needed even though an exact solution exists.

## Unique representation and higher dimensions

If generators are independent, a vector in their span has exactly one representation. Suppose ∑aᵢvᵢ=∑bᵢvᵢ. Subtracting gives ∑(aᵢ−bᵢ)vᵢ=0, so independence forces every aᵢ=bᵢ. Dependence therefore concerns both wasted directions and nonunique descriptions.

In R³, the standard vectors e₁=(1,0,0), e₂=(0,1,0), e₃=(0,0,1) span the entire space, since (x,y,z)=xe₁+ye₂+ze₃. They are independent because a zero combination says each coordinate is zero. A set that is both independent and spanning is called a **basis**. We will develop bases systematically later.

**A misconception to confront.** Three pairwise nonparallel vectors in R² need not be independent. The vectors (1,0), (0,1), and (1,1) have different directions, yet the third equals the sum of the first two. Independence is a property of the whole collection. In contrast, three vectors in R³ can be independent. A flat sketch cannot settle the question; coordinates can.

## Exercises

1. **Foundation.** For u=(1,−2,3), v=(0,4,−1), calculate 2u−3v and explain which space contains the answer.
2. **Foundation.** Express (4,−1) as a combination of (1,1) and (1,−1).
3. **Core.** Describe span{(2,−1,3)} as equations on (x,y,z). Decide whether (−4,2,−6) and (2,−1,4) belong.
4. **Core.** Prove that (1,0,1) and (0,1,1) are independent. Express (3,−2,1) in their span.
5. **Core.** For u=(1,1), v=(1,1+h), find every representation of (2,2) when h=0 and when h≠0.
6. **Core.** Give three nonzero dependent vectors in R³ that are pairwise nonparallel. Verify the relation.
7. **Stretch.** Prove that adding a vector already in a collection's span does not enlarge that span.
8. **Stretch.** Suppose u and v are independent. For which real t are u+tv and tu+v independent? Justify all exceptional cases.
9. **Core.** Let u=(1,0,1), v=(0,1,1), and w=(1,1,2). Find every coefficient triple (a,b,c) with au+bv+cw=(−1,4,3). Decide whether (−1,4,2) belongs to the same span.
10. **Stretch.** Suppose v₁,…,vₖ are independent and w=∑dᵢvᵢ. Prove that every relation among v₁,…,vₖ,w is a scalar multiple of (−d₁,…,−dₖ,1).

<details>
<summary>Hints — open after a first attempt</summary>

1. Work coordinate by coordinate. 2. Call the coefficients a,b and compare coordinates. 3. Write (x,y,z)=t(2,−1,3) and eliminate t. 4. Start with a zero combination. 5. Subtract the two coordinate equations. 6. Put two independent vectors in a coordinate plane and add them. 7. Replace each occurrence of the new vector by its old representation. 8. Expand a(u+tv)+b(tu+v) and use independence of u,v.

9. **Hint 1:** use w=u+v. **Hint 2:** set c=t and compare the first two coordinates before checking the third.
10. **Hint 1:** substitute the given expression for w into an arbitrary zero combination. **Hint 2:** independence determines each old coefficient from the coefficient of w.

</details>

<details>
<summary>Worked solutions</summary>

1. 2u=(2,−4,6) and 3v=(0,12,−3), hence 2u−3v=(2,−16,9) in R³. Each operation preserves the three coordinate positions.
2. We need a+b=4 and a−b=−1. Adding gives 2a=3, so a=3/2 and b=5/2. Substitution gives (4,−1).
3. Since y=−t, the equations are x=−2y and z=−3y. Conversely these equations give (x,y,z)=(−y)(2,−1,3), proving sufficiency. The first target has t=−2 and belongs; the second would require t=1 but has the wrong third coordinate.
4. A zero combination is (a,b,a+b)=(0,0,0); the first two coordinates force a=b=0. For the target take a=3,b=−2, whose third coordinate is 1. Independence makes this representation unique.
5. The equations are a+b=2 and a+(1+h)b=2, hence hb=0. If h≠0, b=0,a=2. If h=0, every pair a=2−s,b=s, with s any real number, works.
6. Take u=(1,0,0), v=(0,1,0), w=(1,1,0). No vector is a scalar multiple of another, but u+v−w=0 is nontrivial. Thus pairwise checks miss a relation involving three vectors.
7. Write w=∑dᵢvᵢ. Any enlarged combination ∑aᵢvᵢ+bw equals ∑(aᵢ+bdᵢ)vᵢ, so it lies in the old span. Every old combination is an enlarged one with b=0. The two sets therefore coincide.
8. A zero combination gives (a+tb)u+(ta+b)v=0, so a+tb=0 and ta+b=0. Substitute a=−tb to obtain (1−t²)b=0. If t≠±1, then a=b=0. At t=1 the two proposed vectors coincide; at t=−1 they are negatives. Both exceptional cases are dependent.

9. The output is (a+c,b+c,a+b+2c). Setting c=t gives a=−1−t and b=4−t; the third coordinate is then 3 for every t. These triples all work and the first two equations force this form, so the list is complete. Every vector in the span satisfies z=x+y. Since 2≠−1+4, the second target is outside the span.
10. Write ∑aᵢvᵢ+cw=0. Substitution gives ∑(aᵢ+cdᵢ)vᵢ=0, so independence yields aᵢ=−cdᵢ for every i. Thus the relation vector is c(−d₁,…,−dₖ,1). Conversely every such multiple gives zero by the defining expression for w, proving both directions.

</details>

**Exit check.** Explain in your own words the difference between existence of coefficients, uniqueness of coefficients, and the appearance of arrows. The next chapter turns these questions into a systematic method: solving linear systems.

## Definitions and results in a reusable form

**Definition 1.1 (Finite span).** For a finite ordered list v₁,…,vₖ in Rⁿ, its span consists of the vectors ∑cᵢvᵢ with real coefficients. For the empty list the only combination is the zero vector, so its span is {0}. A list and its span are different objects: the list records generators, while the span records all possible outputs.

This distinction prevents a common language error. The vector (2,0) is not “the span” of (1,0); it is one element of that span. Similarly, two lists can differ in length and direction yet generate exactly the same set. The lists ((1,0),(0,1)) and ((1,1),(1,−1)) both generate R². Their coefficients for a particular target will usually differ. A model should therefore specify whether a question concerns the generators, their coefficients, or the set of attainable targets.

**Result 1.2 (A span is the smallest closed set containing its generators).** The span S of a finite list contains the generators and zero, is closed under addition and real scalar multiplication, and is contained in every subspace containing the generators.

*Proof.* Set one coefficient equal to one and all the others to zero to recover a generator; set all coefficients to zero to recover zero. For p=∑aᵢvᵢ and q=∑bᵢvᵢ, the identities p+q=∑(aᵢ+bᵢ)vᵢ and tp=∑(taᵢ)vᵢ prove closure. If W contains the generators and is closed under the two operations, it contains each scalar multiple cᵢvᵢ and then their finite sum. Hence S⊆W. The empty-list case follows because every subspace contains zero. ∎

The final assertion is useful when generators have physical interpretations. If each available control preserves a linear constraint, every combination preserves it. Conversely, proving that all vectors satisfying the constraint can be made from the controls proves that there are no further hidden restrictions. The plane example above used precisely these two directions. Checking several targets supplies evidence about those targets, whereas a formula with arbitrary coordinates supplies the universal argument.

**Result 1.3 (Redundancy and uniqueness).** A finite list is dependent if and only if one of its vectors belongs to the span of the remaining vectors. An independent list gives unique coefficients to every vector in its span. A dependent list gives infinitely many coefficient lists to every vector in its span.

*Proof.* For dependence, choose a nonzero relation ∑dᵢvᵢ=0 and an index j with dⱼ≠0. Dividing and rearranging gives vⱼ=−∑ᵢ≠ⱼ(dᵢ/dⱼ)vᵢ. Conversely such an expression gives a zero relation with coefficient one on vⱼ. For uniqueness, subtract two coefficient lists for the same vector and apply independence. Finally, if c represents a target and d is a nonzero relation, c+td represents the same target for every real t. Distinct values of t give distinct coefficient lists because at least one dⱼ is nonzero. ∎

Dependence does not say that a target is impossible. It says the same target can have several descriptions once it is possible. A collection may be dependent and span the entire output space; it may also be independent and span only a small part of that space. These are separate questions, and their answers control existence and uniqueness separately.

## Worked example 3: three controls and an explicit family

Suppose the controls in R³ are u=(1,0,1), v=(0,1,1), and w=(1,1,2). Determine every coefficient triple producing b=(2,3,5), then decide whether b′=(2,3,6) is possible.

Begin with the structural relation w=u+v. An arbitrary output is

au+b₀v+cw=(a+c,b₀+c,a+b₀+2c).

The first two coordinates of the target force a=2−c and b₀=3−c. Substituting these expressions into the third gives 5, independently of c. Thus every coefficient triple is (2−t,3−t,t), with t any real number. Taking t=0 uses only the first two controls; taking t=2 switches the first control off; negative t reverses the third control while increasing the other contributions.

This list is exhaustive because any representation must satisfy the first two coordinate equations. It is also valid because direct substitution produces (2,3,5) for every t. Both checks are necessary. Merely displaying the single expression 2u+3v would establish existence but leave the question “every representation” unanswered.

Every attainable output satisfies its third coordinate equal to the sum of the first two. Therefore b′ is impossible: 6≠2+3. Adding the redundant control w introduced freedom in the descriptions but introduced no new attainable vectors. The nonzero coefficient displacement (−1,−1,1) is the relation −u−v+w=0. Moving a coefficient triple in that direction leaves the output fixed.

## Exact claims and bounded experiments

A diagram displays a finite region and a slider displays a bounded coefficient interval. The span definition imposes neither bound. For instance, if u=(1,0) and v=(1,0.001), the target (0,1) equals −1000u+1000v. A picture with coefficients between −2 and 2 will never reach it, even though the two controls are independent. This is a limitation of the chosen experiment, not an exceptional rule in linear algebra.

There is also a difference between exact and measured coordinates. The vectors (1,1) and (1,1.000001) are exactly independent when those numbers are exact. If they represent measurements with uncertainty larger than their difference, deciding the independence of the underlying physical directions requires an error model. The algebraic statement remains precise; the interpretation of the data may not be.

Before solving a combination problem, record the ambient space, the allowed coefficient field, and any extra restrictions on the coefficients. Nonnegative combinations describe a different set from span. Coefficients summing to one describe affine combinations. Requiring both conditions gives convex combinations. These constructions are useful, but none may silently replace the unrestricted real combinations used here. For the vectors (1,0) and (0,1), their span is the whole plane, while their convex combinations form only the line segment joining them.

## Summary

Linear combinations turn a list of controls into attainable vectors. Span answers which targets exist; independence answers whether their coefficients are unique. Redundant generators preserve the attainable set while creating coefficient freedom. Coordinate arguments must prove both membership and completeness, and experiments with bounded sliders cannot decide an unbounded span. The next chapter organizes those coordinate arguments into elimination for linear systems.
